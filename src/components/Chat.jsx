import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';


const Chat = () => {
    const {targetUserId} = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector(store => store.user);
    const [targetUserInfo, setTargetUserInfo] = useState(null);


    // console.log(user);
    const userId = user?._id;

    const roomId = [userId, targetUserId].sort().join("_");
    // console.log(targetUserId);

    const fetchChatMessages = async () => {
        const chat =  await axios.get(BASE_URL + "/chat/" + targetUserId, {
            withCredentials: true,
        });

        console.log(chat.data.messages);

        const chatMessages = chat?.data?.messages.map(msg => {
            const {senderId, text} = msg;
            return { 
                firstName: senderId?.firstName,
                lastName: senderId?.lastName,
                text,
            }
        });
        setMessages(chatMessages);
    }
    const fetchTargetUserInfo = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/user/${targetUserId}`, {
            withCredentials: true,
        });
            setTargetUserInfo(res.data);
        } catch (err) {
            console.error("Error fetching target user info:", err);
        }
};

    useEffect(() => {
        if (targetUserId) {
            fetchTargetUserInfo();
        }
    }, [targetUserId]);


    useEffect(()=> {

        if(!userId) { return; }

        fetchChatMessages();

        const socket = createSocketConnection();
        // this is like API call
        // join is the url basically the event you want to trigger
        // and the data you want to pass
        // As soon as the page loaded, the socket connection is made and joinchat event is emitted
        socket.emit("joinChat", {
            firstName: user.firstName,
            userId, 
            targetUserId
        });
        // step: 2 . b received msg from backend successfully
        socket.on("messageReceived", ({firstName, lastName, text, timeStamp}) => {
            console.log(firstName + " : " + text);
            // set message with other info to the object
            setMessages((messages) => [...messages, {firstName, lastName, text, timeStamp}]);
        });


        // whenever the component unmounts disconnet the socket
        return () => {
            socket.disconnect();
        };
    }, [userId, targetUserId]);


    // useEffect(() => {
    //     if (messages.length <= 20) return;

    //     const trimMessages = async () => {
    //         try {
    //         console.log("roomId is okay", roomId);
    //         await axios.post(`${BASE_URL}/chattrim/${roomId}`);
    //         // Optional: Update local state to match (if needed)
    //         // setMessages(prev => prev.slice(-20));
    //         } catch (error) {
    //         console.error("Trimming failed:", error);
    //         }
    //     };

    //     trimMessages();
    // }, [messages, roomId]);


    // step: 1
    // connection create krke msg backend pr bheja
    const sendMessage = ()=> {

        if(!newMessage.trim()){
            setNewMessage("");
            return;
        };

        const socket = createSocketConnection();
        socket.emit("sendMessage", {
            firstName: user.firstName,
            lastName: user.lastName,
            userId,
            targetUserId,
            text: newMessage,
        });

        setNewMessage("");
    };
    
    const clearChat = async () => {
        // pop up a warning page with that all the messages will be also deleted from receiver's side
        // delete or cancel
        // remove popup page
        // clear all chats from DB
        const confirmed = window.confirm("Are you sure you want to delete all messages? This will also delete them for the receiver.");

        if (!confirmed) return;

        try {
            // Call your backend API to clear chat for both users
            await fetch(`${BASE_URL}/delete-chat/${targetUserId}`, {
              method: 'DELETE',
              credentials: 'include',
            });

            // Clear local chat
            setMessages([]);
        } catch (err) {
            console.error("Error clearing chat:", err);
            alert("Failed to delete chat. Try again later.");
        }
    }



  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[70vh] flex flex-col">
        <div className='flex justify-between border-b border-gray-600'>
            <h1 className="p-5">{targetUserInfo? targetUserInfo.firstName + " " + targetUserInfo.lastName : "Chat"}</h1>
            <button onClick={clearChat} className="flex items-center gap-2 p-2 hover:bg-red-700 rounded cursor-pointer">
                <img src="../../delete.png" alt="Delete" className="w-13 h-5 px-4" />
            </button>
        </div>
        
      
      <div className="flex-1 overflow-scroll p-5">
        {messages.map((msg, index) => {
          return (
            <div
              key={index}
              className={
                "chat " +
                (user.firstName === msg.firstName ? "chat-end" : "chat-start")
              }
            >
              <div className="chat-header">
                {`${msg.firstName}  ${msg.lastName}`}   {/* string interpolation `${}` */ }
                <time className="text-xs opacity-50"> {msg.timeStamp}</time>
              </div>
              <div className="chat-bubble">{msg.text}</div>
              {/* <div className="chat-footer opacity-50">Seen</div> */}
            </div>
          );
        })}
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-500 text-white rounded p-2"
        ></input>
        <button onClick={sendMessage} className="btn btn-secondary">
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat;
import axios from "axios";
import { useDispatch } from "react-redux";
import { addFeed, removeUserFromFeed } from "../utils/feedSlice";
import { BASE_URL } from "../utils/constants";


const UserCard = ({ user }) => {

  const dispatch = useDispatch();
  
  if(!user) return;
  // console.log(user);
  const {_id, firstName, lastName, photoUrl, age, gender, about } = user;
  
  

  const handleSenRequest = async (status, userId) => {
    try {
      const res = await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {}, {withCredentials: true});
      console.log(res);
      dispatch(removeUserFromFeed(userId));

    } catch (err) {
        console.error("Error in sending request", err);      
    }
  }

  return (

    user && (<div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img
          src={user.photoUrl}
          alt="Simran" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{age + " " + gender}</p>} 
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button 
            className="btn btn-primary"
            onClick={() => handleSenRequest("ignored", _id)}>
            Ignore
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleSenRequest("interested", _id)}>
            Interested
          </button>
        </div>
      </div>
    </div>)
  );
}

export default UserCard;
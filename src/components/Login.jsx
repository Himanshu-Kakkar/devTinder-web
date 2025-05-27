import {useState} from 'react'
import  axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [emailId, setEmailId] = useState("h@k.com");
    const [password, setPassword] = useState("Him@2201");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async ()=> {

        try {
            const res = await axios.post( BASE_URL + "/login", {
                emailId,
                password,
                },{withCredentials: true} // to set credentials; user info sent when login
            ); // 
            // console.log(res.data);
            dispatch(addUser(res.data));
            return navigate("/");
        } catch (err) {
            console.error(err);
        }
    }

  return (
    <div className="flex justify-center my-10">
        <div className="card bg-base-300 shadow-xl w-96">
            <div className="card-body">
                <h2 className="card-title justify-center">Login</h2>
                <div>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className='label-text'>Email ID</span>
                        </div>
                        <input
                            type="text"
                            value={emailId}
                            className="input input-boardered w-full max-w-xs"
                            placeholder="Type here"
                            onChange={(e)=> setEmailId(e.target.value)}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs my-2">
                        <div className="label">
                            <span className='label-text'>Password</span>
                        </div>
                        <input
                            type="password"
                            value={password}
                            className="input input-boardered w-full max-w-xs"
                            placeholder="Type here"
                            onChange={(p)=> setPassword(p.target.value)}
                        />
                    </label>
                </div>
                <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
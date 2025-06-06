import {useState} from 'react'
import  axios from 'axios'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [isLoginForm, setIsLoginForm] = useState(true);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState();

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
            setError(err?.response?.data || "Something went Wrong");
            console.error(err);
        }
    }

    const handleSignup = async () => {
        try {
            const res = await axios.post(BASE_URL + "/signup",
                {
                    firstName,
                    lastName,
                    emailId,
                    password,
                },
                {withCredentials:true});

                dispatch(addUser(res.data.data));
                return navigate("/profile");
                 
        } catch (err) {
            // console.error("Error in signup", err);
            setError(err?.response?.data || "Something went Wrong");
        }
    }

  return (
    <div className="flex justify-center my-10">
        <div className="card bg-base-300 shadow-xl w-96">
            <div className="card-body">
                <h2 className="card-title justify-center">{isLoginForm? "Login" : "SignUp"}</h2>
                <div>
                    { !isLoginForm && <> 
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className='label-text'>First Name</span>
                            </div>
                            <input
                                type="text"
                                value={firstName}
                                className="input input-boardered w-full max-w-xs"
                                placeholder="Type here"
                                onChange={(e)=> setFirstName(e.target.value)}
                            />
                        </label>
                        <label className="form-control w-full max-w-xs my-2">
                            <div className="label">
                                <span className='label-text'>Last Name</span>
                            </div>
                            <input
                                type="text"
                                value={lastName}
                                className="input input-boardered w-full max-w-xs"
                                placeholder="Type here"
                                onChange={(e)=> setLastName(e.target.value)}
                            />
                        </label> 
                    </>}
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
                <p className='text-red-500 flex justify-center'>{error}</p>
                <div className="card-actions justify-center m-2">
                <button className="btn btn-primary" onClick={isLoginForm? handleLogin : handleSignup}>
                    {isLoginForm ? "Login" : "Sign Up"}
                </button>
                </div>
                <p className='m-auto cursor-pointer' onClick={() => setIsLoginForm((value) => !value)}>
                    { isLoginForm
                    ? "New User? Signup Here"
                    : "Existing User? Login Here" }
                </p>
            </div>
        </div>
    </div>
  )
}

export default Login
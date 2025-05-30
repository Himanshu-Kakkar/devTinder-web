import React from 'react'
import { useState } from 'react';
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const EditProfile = ( {user} ) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age || "");
    const [gender, setGender] = useState(user.gender || "");
    const [about, setAbout] = useState(user.about);
    const [error, setError] = useState();
    const [showToast, setShowToast] = useState(false);


    const dispatch = useDispatch();


    const saveProfile = async() => {
        // clear existing errors before saving the profile
        setError("");

        try {
            const res = await axios.patch(BASE_URL + "/profile/edit", {
                firstName,
                lastName,
                photoUrl,
                age,
                gender,
                about,
            }, {withCredentials: true}
            );
            dispatch(addUser(res?.data?.data));
            setShowToast(true);
            setTimeout(() => {
                setShowToast(false);
            },3000);

        } catch (err) {
            setError(err.response.data);
            
        }
    }
    return (
        <>
        <div className='flex justify-center my-10'>
                <div className="flex justify-center my-10 mx-10">
                <div className="card bg-base-300 shadow-xl w-96">
                    <div className="card-body">
                        <h2 className="card-title justify-center">Edit Profile</h2>
                        <div>
                            {/* First Name */}
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
                            {/* Last Name */}
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
                            {/* photo url */}
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className='label-text'>profile Photo</span>
                                </div>
                                <input
                                    type="text"
                                    value={photoUrl}
                                    className="input input-boardered w-full max-w-xs"
                                    placeholder="Type here"
                                    onChange={(e)=> setPhotoUrl (e.target.value)}
                                />
                            </label>
                            {/* age */}
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className='label-text'>Age</span>
                                </div>
                                <input
                                    type="text"
                                    value={age}
                                    className="input input-boardered w-full max-w-xs"
                                    placeholder="Type here"
                                    onChange={(e)=> setAge(e.target.value)}
                                />
                            </label>
                            {/* gender */}
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className='label-text'>Gender</span>
                                </div>
                                <input
                                    type="text"
                                    value={gender}
                                    className="input input-boardered w-full max-w-xs"
                                    placeholder="Type here"
                                    onChange={(e)=> setGender(e.target.value)}
                                />
                            </label>
                            {/* About */}
                            <label className="form-control w-full max-w-xs my-2">
                                <div className="label">
                                    <span className='label-text'>About</span>
                                </div>
                                <input
                                    type="text"
                                    value={about}
                                    className="input input-boardered w-full max-w-xs"
                                    placeholder="Type here"
                                    onChange={(e)=> setAbout(e.target.value)}
                                />
                            </label>
                            
                        </div>
                        <p className='text-red-500 flex justify-center'>{error}</p>
                        <div className="card-actions justify-center m-2">
                        <button className="btn btn-primary" onClick={saveProfile} >Save Profile</button>
                        </div>
                    </div>
                </div>
            </div>
            <UserCard user = {{firstName, lastName, photoUrl, age, gender, about }}/>
        </div>
        {showToast && (
            <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Saved successfully.</span>
                </div>
            </div>
            )
        }
        </>
    )
}

export default EditProfile
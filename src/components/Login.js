import { useState } from "react";
import Header from "./Header";
import { useForm } from "react-hook-form";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constant";
const Login = () => {
  const [isSignIsForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    console.log("---------datga-------",data);
    const message = checkValidate(data?.email, data?.password);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIsForm) {
      createUserWithEmailAndPassword(auth, data?.email, data?.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: data?.fullName,
            photoURL: USER_AVATAR,
          }).then(() => {
              //console.log("--------aditya-----",auth);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              console.log("----aditya-----",uid,email,displayName,photoURL);
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
             
            })
            

          
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
              setErrorMessage(errorMessage)
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, data?.email, data?.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log("-----user-------",user)
          // const { uid, email, displayName } = user;
          // dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
          // ...
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignIsForm);
    reset();
  };
  const onError = (e) => {
    console.log("Error", e);
  };
  return (
    <div>
   <Header/>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg"
          alt="Background"
        />
      </div>
      <form
        onSubmit={handleSubmit(handleSubmitForm, onError)}
        className="bg-black opacity-90 absolute mx-auto right-0 left-0 w-3/12 p-12  my-36 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIsForm ? `Sign In` : `Sign Up `}
        </h1>
        {!isSignIsForm && (
          <input
            type="text"
            id="fullName"
            {...register("fullName")}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 "
          />
        )}
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Email Address"
          className={`p-4 my-4 w-full bg-gray-700 }`}
        />

        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="Password"
          className={`p-4 my-4 w-full bg-gray-700 }`}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="submit" className="p-4 my-6 bg-red-700 w-full rounded-lg">
          Submit
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIsForm
            ? "New to Netflix ? Sign Up Now "
            : "Already Register? Sign In Now"}{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

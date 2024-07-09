import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data=useSelector(store=>store.user)
//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName } = user;
//         dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        
//         navigate("/browse");
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });
//   }, []);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      }).catch((error) => {
        navigate("/error")
        // An error happened.
      });
      
  }
  return (
    <div className="absolute px-8 py-4 w-full bg-gradient-to-b from-black z-20 flex justify-between">
      <img
        style={{ height: "4.5rem", width: "11.25rem" }}
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
     {data !==null && <div className="flex p-2">
        <img
          class="profile-icon"
          className="w-12 h-12"
          src={data?.photoURL}
          alt=""
        ></img>
        <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
      </div>
}
    </div>
  );
}

export default Header;

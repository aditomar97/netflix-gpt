import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { API_HEADERS, clientId, HEADER_LOGO } from "../utils/constant";


function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data=useSelector(store=>store.user)
  console.log("---data--------",data);
  useEffect(() => {
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component is unmount
    return ()=> unsubscribe()
  }, []);
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
    <>
    {data?.data===null?<div className="absolute px-8 py-4 w-full bg-gradient-to-b from-black z-20 ">
      <img
        style={{ height: "4.5rem", width: "11.25rem" }}
        src={HEADER_LOGO}
        alt="Logo"
      />
      </div>:
      <div className="fixed top-0 px-8 py-4 w-full bg-gradient-to-b from-black z-20 flex justify-between overflow-hidden">
      <img
        style={{ height: "4.5rem", width: "11.25rem" }}
        src={HEADER_LOGO}
        alt="Logo"
      />
     <div className="flex p-2">
        <img
          class="profile-icon"
          className="w-12 h-12"
           src={data?.data?.photoURL}
        //src="https://lh3.googleusercontent.com/a/ACg8ocKKa6TuVibODMckqYfePvlT-0md7bdFH4Ug1t-CZKe6TQRtM6ic=s96-c"
          alt=""
        ></img>
        <button className="font-bold text-white" onClick={handleSignOut}>Sign Out</button>
      </div>
      </div>
      }
    </>
    
   

   
  );
}

export default Header;

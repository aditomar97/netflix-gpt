import { createBrowserRouter ,RouterProvider} from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react"
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { addUser, removeUser } from "../utils/userSlice";
import {useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
function Body() {
    const dispatch=useDispatch()
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName,photoURL } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
            
              } else {
            dispatch(removeUser());
           
          }
        });
      }, []);
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])

    return (
        <RouterProvider router={appRouter}/>
          
    )
}

export default Body

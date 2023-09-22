import React, { useEffect,useState, useContext } from "react";
// import axios from "axios";
import auth from "../utils/auth";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

// token =""

const Dashboard = () => {

    const [zuku,setZuku] = useState("")
    const [name,setName] = useState("")
    const {token,setToken} = useContext(AuthContext);

    console.log(token)

    const navigate = useNavigate();


    useEffect(()=>{
        console.log("token is there 1", token)
         
                console.log("token is there 2", token)
                // axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                    auth.get("/zuku", {
                    headers:{
                        "Authorization" : `Bearer ${token!=""?token: localStorage.getItem("token")}`
                    }
                })
                .then(res=>{
                     console.log(res.data.data.message, res.data.data.user.name)
                   setZuku(res.data.data.message)
                   setName(res.data.data.user.name)
                   
                  
                }   
                )
                .catch(err=>{
                    console.log(err)
                }
                )
         
    },[token])

    function logout(){
          // api call for logout => delete token from db
        //   axios.delete("https://instagram-express-app.vercel.app/api/auth/logout", {
            auth.delete("/logout", {
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then(
            () => {
                setZuku("")
                setName("")
                setToken("")
                // remove token from local storage
                localStorage.removeItem("token")
                alert("You are successfully logged out")
                navigate("/login")
            }
          )
            .catch(err=>{
                console.log(err)
            })

          
    }


    return(
        <div>
            <h1>Dashboard</h1>
            {
                name && <h3 style={{textAlign: "center"}}>{name}</h3>
            }
            {
                zuku && <p>Mark Zuckerberg says: {zuku}</p>
            }
            {name && <button onClick={logout}>Logout</button>}
        </div>
    )
     
     
}

export default Dashboard;
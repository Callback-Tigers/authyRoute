import React, { useEffect,useState } from "react";
import axios from "axios";

// token =""

const Dashboard = ({token, setToken}) => {

    const [zuku,setZuku] = useState("")
    const [name,setName] = useState("")

    console.log(token)


    useEffect(()=>{
        console.log("token is there 1", token)
         if(token){
                console.log("token is there 2", token)
                axios.get("https://instagram-express-app.vercel.app/api/auth/zuku", {
                    headers:{
                        "Authorization" : `Bearer ${token}`
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
         }
    },[token])

    function logout(){
          // api call for logout => delete token from db
          axios.delete("https://instagram-express-app.vercel.app/api/auth/logout", {
            headers:{
                "Authorization" : `Bearer ${token}`
            }
          })
          .then(
            () => {
                setZuku("")
                setName("")
                setToken("")
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
            {token && <button onClick={logout}>Logout</button>}
        </div>
    )
     
     
}

export default Dashboard;
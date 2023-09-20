import axios from "axios";


const auth = axios.create({
    baseURL: "https://instagram-express-app.vercel.app/api/auth",
    // headers:{} ,
    // params:{}
})

export default auth;



// axios.post("xyz.com/happy",{
//     headers: {
//         a:10,
//         b:20,
//         c:30
//     }
// })

// axios.put("xyz.com/sad",{
//     headers: {
//         a:10,
//         b:20,
//         d:50
//     }
// })

// const hello = axios.create({
//     baseURL: "xyz.com/",
//     headers:{
//         a:10,
//         b:20
//     }
// })

// hello.post("/happy",{
//     headers:{
//         c:30
//     }
// })
// hello.put("/sad",{
//     headers:{
//         d:50
//     }
// })
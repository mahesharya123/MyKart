import { Fragment,useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import { Loader } from "../UI/loader"
import { SignupwithEmail_pass ,loginWithEmailAndPassword} from "../../actions/auth"


import './login.css'
import { useDispatch } from "react-redux"
export const AuthIndex =()=>{
    const [loader, setLoader] = useState(false)
    const [details,setDetails] = useState({
        email:"",
        password:""
    });

    const navigate = useNavigate()

    const {type} = useParams()
   

    const dispatch = useDispatch()

    const handleinput =(e)=>{
      setDetails({
        ...details,
        [e.target.name]:e.target.value
      })

    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(type==='signup'){
            setLoader(true);
           dispatch( SignupwithEmail_pass(details, data=>{
            if(data.error){
              console.log(data.error)
              alert("some error may be occured")
            }
            else{
              console.log("Successfully Signed up");

              navigate("/", { replace: true });
            }


            
           }))
        }
        else if (type === "login") {
            setLoader(true)
            dispatch(loginWithEmailAndPassword(details, data => {
                if(data.error) {
                    console.log(data.response)
                    alert(data?.response?.data?.error?.message || "Some error occurred")
                }
                else {
                    console.log("Successfully Logged in!")
                    navigate("/", { replace: true });
                }
                setLoader(false)
            }))
        }
    }
  
    return (
      
 
        <Fragment>
        <div className="auth-container">
            <div className="auth-container-box">
                <div className="tab-selector">
                    <NavLink exact to={"/login"}><h3>Login</h3></NavLink>
                    <NavLink exact to={"/signup"}><h3>Signup</h3></NavLink>
                </div>
                <form autoComplete={"off"}  onSubmit={handleSubmit}>
                    <div className="input-wrap">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Enter Email" 
                           value={details.email}
                           onChange={handleinput}
                            
                        />
                    </div>
                    <div className="input-wrap">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter Password" 
                            value={details.password}
                            onChange={handleinput}
                            
                         
                        />
                    </div>
                    <div className="button-wrap">
                        <button className="login-btn">
                            {type === "login" ? "Login" : "Signup"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        { loader && <Loader/> }
    </Fragment>
    )
}
import React from "react";
import './LoginRegistor.css';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const LoginReginster = () =>{
    return(
        <div className="wrapper"> 
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="Input-box">
                    <input type="text" placeholder="Username" required/>
                    
                    
                    <FaUser className="icon" />

                </div>
                <div className="Input-box">
                    <input type="password" placeholder="Password" required/>
                   
                    <RiLockPasswordFill className="icon"/>

                </div>
                
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>Remember me</label>
                    <a href="#">  Forgot password?</a>
                </div>
                
                

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Dont have an account? <a href="#">Registred</a></p>
                </div>

            </form>
        </div>

        <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="Input-box">
                    <input type="text" placeholder="Username" required/>
                    
                    
                    <FaUser className="icon" />

                </div>
                <div className="Input-box">
                    <input type="email" placeholder="Email" required/>
                    
                    
                    <MdEmail  className="icon"/>

                </div>
                <div className="Input-box">
                    <input type="password" placeholder="Password" required/>
                   
                    <RiLockPasswordFill className="icon"/>

                </div>
                
                <div className="remember-forgot">
                    <label> <input type="checkbox"/>I agree to the terms</label>
                    
                    
                </div>
                
                

                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Already have account? <a href="#">Login</a></p>
                </div>
                

            </form>
        </div>
        </div>
    );
};

export default LoginReginster
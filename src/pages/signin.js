import React from "react"
import { Link } from "gatsby"
import index from "../pages/index"

import Layout from "../components/layout"

import "../CSS/signin.css"

const SigninPage = () => (
    <Layout>
        <div className="button-box-header">
            <div className="button-box signinbox">
                <Link className="signin-btn button-box active disable-link" to="/signin">SIGN IN</Link>
            </div>
            <div className="button-box registerbox">
                <Link className="register-btn button-box" to="/register">REGISTER</Link>
            </div>
        </div>
        <div className="signin-wrapper">
            <div className="form-container">
                <div className="form-heading">
                    <h1>SIGN IN</h1>
                </div>
                <div className="form-body">
                    <label className="form-label">Username</label>
                    <input type="text" className="username-box input-box" placeholder="Enter Username"></input>
                    <label className="username-error form-label"></label>
                    <label className="form-label pw-label">Password</label>
                    <input type="password" className="password-box input-box" placeholder="Enter Password"></input>
                    <label className="password-error form-label"></label>
                    <button type="submit" className="signin-button">SIGN IN</button>
                </div>
                <div className="form-footer">
                    <p>Don't Have an Account? <Link to="/register">Register Here</Link></p>
                </div>
            </div>
        </div>
    </Layout>
)

export default SigninPage;

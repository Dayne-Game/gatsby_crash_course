import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import "../CSS/contact.css"

const ContactPage = () => (
    <Layout>
        <div className="wrapper">
            <form
                name="news-post"
                method="post"
                data-netlify="true"
            >
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Your Role: <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                    </select></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>
    </Layout>
)

export default ContactPage
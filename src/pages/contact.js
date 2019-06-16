import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"

import "../CSS/contact.css"

const ContactPage = () => (
    <Layout>
        <div className="wrapper">
            <form name="contact" method="post" data-netlify="true" data-netlify="true" data-netlify-honeypot="bot-field">
                <input name="name-field" placeholder="Your Name" type="text"></input>
                <button>Send</button>
            </form>
        </div>
    </Layout>
)

export default ContactPage
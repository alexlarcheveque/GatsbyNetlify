import React from "react"
import { Link } from "gatsby";
import Header from "../components/header"


// markup
const ContactPage = () => {
    return (
        <main>
            <title> Contact Us </title>
            <Link to="/">Home</Link>
            <Header headerText={"Contact Us"}/>
            <p> Contact Us Please! </p>
        </main>
    )
}

export default ContactPage;
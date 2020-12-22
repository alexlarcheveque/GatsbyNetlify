import React from "react"
import { Link } from "gatsby";
import Header from "../components/header"
import Layout from "../components/layout";

// markup
export default function ContactPage() {
    return (
        <Layout>
            <title> Contact Us </title>
            <Link to="/">Home</Link>
            <Header headerText={"Contact Us"}/>
            <p> Contact Us Please! </p>
        </Layout>
    )
}
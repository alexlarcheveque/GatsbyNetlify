import * as React from "react"
import Header from "../components/header";
import logo from "../images/icon.png"
import Layout from "../components/layout";

// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
    marginTop: 0,
    marginBottom: 64,
    maxWidth: 320,
}
const headingAccentStyles = {
    color: "#663399",
}
const paragraphStyles = {
    marginBottom: 48,
}
const codeStyles = {
    color: "#8A6534",
    padding: 4,
    backgroundColor: "#FFF4DB",
    fontSize: "1.25rem",
    borderRadius: 4,
}
const listStyles = {
    marginBottom: 96,
    paddingLeft: 0,
}
const listItemStyles = {
    fontWeight: "300",
    fontSize: "24px",
    maxWidth: "560px",
}

const linkStyle = {
    color: "#8954A8",
    fontWeight: "bold",
    fontSize: "16px",
    verticalAlign: "5%",
}

const docLinkStyle = {
    ...linkStyle,
    listStyleType: "none",
    marginBottom: 24,
}

const descriptionStyle = {
    color: "#232129",
    fontSize: "14px",
}

const docLink = {
    text: "Documentation",
    url: "https://www.gatsbyjs.com/docs/",
    color: "#8954A8",
}

// markup
export default function AboutPage() {
    return (
        <Layout>
            <title> About </title>
            <Header headerText={"About Gatsby"}/>
            <img src={logo} alt={"Gatsby Logo"}/>
            <p> Wow, forgot how powerful React is! </p>
        </Layout>
    )
}
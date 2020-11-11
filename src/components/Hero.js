import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: {eq: "logo1.png"}) {
      childImageSharp {
        fixed(width: 800, height: 550) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: {
      childImageSharp: { fixed },
    },
  } = useStaticQuery(query);
  
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info"></article>
        <div>
          <div className="underline"></div>
          <h1>I'm Mingkun Shi</h1>
          <h4>New Full-Stack Software Developer</h4>
          <Link to='/contact' className="btn">
            contact me
          </Link>
          <SocialLinks />
        </div>
      <Image fixed={fixed} className="logo" />
    </div>
  </header>
}

export default Hero

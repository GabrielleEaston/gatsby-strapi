import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Blog = ({id, title, image, date, category, slug, desc}) => {
  return <Link to={`/blogs/${slug}`} key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid}
        className="blog-card"
      />
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="blog-footer">
        <p>{category}</p>
      </div>
    </article>
  </Link>
}

Blog.propTypes = {}

export default Blog

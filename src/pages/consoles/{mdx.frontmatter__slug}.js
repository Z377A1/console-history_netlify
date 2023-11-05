import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const Console = ({ data, children }) => {
  const heroImage = getImage(data.mdx.frontmatter.hero_image)

  // const released = data.mdx.frontmatter.date ; // add released or will release logic

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Released on {data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={heroImage}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link} target="_blank" rel="noreferrer">
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
      <div>
        <p>Gallery</p>
        {/* IMPLEMENT GALLERY LATER, BROKE THE SYSTEM WHEN I TRIED */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "D MMMM, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default Console
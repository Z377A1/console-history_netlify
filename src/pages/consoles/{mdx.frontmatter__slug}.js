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
      {data.mdx.frontmatter.additional_images && data.mdx.frontmatter.additional_images.length > 0 && (
        <div>
          <p>Gallery</p>
          {data.mdx.frontmatter.additional_images.map((image, index) => (
            <ul>
              {image.image != null ? (
                <div>
                  <li key={index}>
                    <p>{image.alt}</p>
                    <GatsbyImage
                      image={getImage(image.image)}
                      alt={image.alt}
                    />
                    <p>
                      Photo Credit:{" "}
                      <a href={image.credit_link} target="_blank" rel="noreferrer">
                        {image.credit_text}
                      </a>
                    </p>
                  </li>
                </div>
              ) : (
                <div>
                  <p>There is nothing here.</p>
                </div>
              )}
            </ul>
          ))}
        </div>
      )}
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
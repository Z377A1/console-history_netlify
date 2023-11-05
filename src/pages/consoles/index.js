import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  containerBox,
  tileLink,
  bottomUpStart,
} from '../../components/layout.module.css'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ConsoleTimeline = ({ data }) => {
  return (
    <Layout pageTitle="Timeline (Xbx/Ps)">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/consoles/${node.frontmatter.slug}`} className={tileLink}>
              <div className={containerBox}>
                <h2>
                  {node.frontmatter.title}
                </h2>
                <p>Released: {node.frontmatter.date}</p>
                <GatsbyImage
                  image={getImage(node.frontmatter.hero_image)}
                  alt={node.frontmatter.hero_image_alt}
                />
              </div>
            </Link>
          </article>
        ))
      }
      <p className={bottomUpStart}>
        Starts from the 32-bit era, the fifth generation. Includes home video consoles only (See <a href="https://en.wikipedia.org/wiki/Home_video_game_console_generations" target="_blank">here</a>.)
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="Console Timeline" />

export default ConsoleTimeline
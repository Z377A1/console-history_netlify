import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import '../components/layout.module.css'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="WHERE TO GO?">
      <p>Made this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Nintendo Gameboy Console with Tetris game catridge on the side"
        src="../images/gameboy.jpg"
      />
      <p>
        Photo Credit:{" "}
        <a href="https://unsplash.com/photos/white-nintendo-game-boy-lUbIun4IL38">
          Nik
        </a>
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
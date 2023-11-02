import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    centeredFooter,
} from './layout.module.css'
import Seo from './seo'

const Layout = ({ pageTitle, children }) => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={container}>
            <Seo header="" />
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/consoles" className={navLinkText}>
                            Consoles &#40;Xbx/Ps&#41;
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
            <footer className={`footer ${centeredFooter}`}>
                <p>This is the footer content. Loads console pages on netlify but not on local for some reason.</p>
                <p>&copy; The History of Consoles {currentYear}</p>
            </footer>
        </div>
    )
}

export default Layout
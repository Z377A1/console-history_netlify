import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    centeredFooter,
    siteTitle,
    footerContent,
} from './layout.module.css'
import Seo from './seo'

const Layout = ({ pageTitle, children }) => {
    const yearOfCreation = 2023;
    const currentYear = new Date().getFullYear();

    return (
        <div className={container}>
            <Link to="/" className={siteTitle}>
                <Seo header="" />
            </Link>
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
                <div className={footerContent}>
                    <p>This is the footer content. Used to load console pages on netlify but not on local for some reason. All grand now.</p>
                </div>
                <p>&copy; {yearOfCreation} - {currentYear} The History of Consoles</p>
            </footer>
        </div>
    )
}

export default Layout
import { useRef, useEffect } from "react"
import { Link } from "react-router-dom";
import PAGES from "../pages"
import { useNav, useNavUpdate, useNavClick, usePage } from "../navContext"

const Nav = () => {
    const isNavOpen = useNav()
    const navClick = useNavClick()
    const navUpdate = useNavUpdate()
    const page = usePage()

    const refs = {}
    refs[PAGES.HOME] = useRef(null)
    refs[PAGES.DESTINATION] = useRef(null)
    refs[PAGES.CREW] = useRef(null)
    refs[PAGES.TECHNOLOGY] = useRef(null)

    useEffect(() => {
        for ( let key in refs ) {
            refs[key].current.removeAttribute("aria-current")

            if ( page === key ) {
                refs[key].current.setAttribute("aria-current", "page")
            }
        }
    })

    return (
        <nav className={ `nav ${ isNavOpen ? "open" : "" }` }>
            <button type="button" className="nav__btn" onClick={ () => navUpdate(!isNavOpen) }>
                <span className={ `hamburger ${ isNavOpen ? "open" : "" }` }></span>
            </button>
            <ul className={ `nav__list ${ isNavOpen ? "open" : "" }` }>
                <li className="nav__list__item">
                    <Link to="/" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.HOME )} ref={ refs[PAGES.HOME] }>
                        <span className="num" aria-hidden>00</span>Home
                    </Link>
                </li>
                <li className="nav__list__item">
                    <Link to="/destination" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.DESTINATION)} ref={ refs[PAGES.DESTINATION] }>
                        <span className="num" aria-hidden>01</span>Destination
                    </Link>
                </li>
                <li className="nav__list__item">
                    <Link to="/crew" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.CREW)} ref={ refs[PAGES.CREW] }>
                        <span className="num" aria-hidden>02</span>Crew
                    </Link>
                </li>
                <li className="nav__list__item">
                    <Link to="/technology" className="nav__list__item__link" onClick={(e) => navClick(e, PAGES.TECHNOLOGY)} ref={ refs[PAGES.TECHNOLOGY] }>
                        <span className="num"aria-hidden>03</span>Technology
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
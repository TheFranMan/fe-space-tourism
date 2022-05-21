import Nav from "./Nav";
import { Link } from "react-router-dom";
import PAGES from "../pages"
import Logo from "../assets/images/shared/logo.svg"
import { useNavClick, useHomeRef } from "../navContext"


const Header = () => {
    let navClick = useNavClick()
    const homeRef = useHomeRef()

    return (
        <header className="header">
            <Link to="/" className="header__logo" ref={ homeRef } onClick={ (e) => navClick(e, PAGES.HOME) }>
                <img src={ Logo } alt="Space tourism logo" />
            </Link>
            <Nav />
        </header>
    )
}

export default Header;
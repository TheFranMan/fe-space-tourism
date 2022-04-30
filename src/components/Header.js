import Nav from "./Nav";
import { Link } from "react-router-dom";
import PAGES from "../pages"
import Logo from "../assets/images/shared/logo.svg"


const Header = ({isNavOpen, updateIsNavOpen, handleNavClick}) => {
    return (
        <header className="header">
            <Link to="/" className="header__logo" onClick={ (e) => handleNavClick(e, PAGES.HOME) }>
                <img src={ Logo } alt="Space tourism logo" />
            </Link>
            <Nav isNavOpen={ isNavOpen}  updateIsNavOpen={ updateIsNavOpen } handleNavClick={ handleNavClick }/>
        </header>
    )
}

export default Header;
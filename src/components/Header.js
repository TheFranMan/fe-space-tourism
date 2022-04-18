import Nav from "./Nav";
import { Link } from "react-router-dom";
import PAGES from "../pages"
import Logo from "../assets/images/shared/logo.svg"


const Header = ({updatePage}) => {
    return (
        <header className="header">
            <Link to="/" className="header__logo" onClick={ () =>  updatePage(PAGES.HOME) }>
                <img src={ Logo } alt="Space tourism logo" />
            </Link>
            <Nav updatePage={ updatePage }/>
        </header>
    )
}

export default Header;
import { Link } from "react-router-dom";
import PAGES from "../pages"
import { useNavClick } from "../navContext"

const Home = ({handleNavClick}) => {
    const navClick = useNavClick()

    return(
        <section className="home" aria-labelledby="home-title">
            <p className="home__text-top">So, you want to travel to</p>
            <h2 id="home-title" className="home__title">Space</h2>
            <p className="home__body">Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>

            <Link to="/destination" className="home__explore" onClick={(e) => navClick(e, PAGES.DESTINATION)}>Explore</Link>
        </section>
    )
}

export default Home
import { useRef } from "react"
import Moon from "../assets/images/destination/image-moon.webp"
import Mars from "../assets/images/destination/image-mars.webp"
import Europa from "../assets/images/destination/image-europa.webp"
import Titan from "../assets/images/destination/image-titan.webp"
import { tabClickHandler, tabPressHandler } from "../tabs"

const Destination = () => {
    let refs = {
        "moon": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "mars": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "europa": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "titan": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
    }

    return (
        <section className="destinations details" aria-labelledby="destintion-title">
            <h2 className="details__title" id="destintion-title" tabIndex="-1"><span>01</span>Pick your destination</h2>

            <div className="destinations__tabs">
                <div className="destinations__tabs__list" role="tabslist" aria-label="destinations">
                    <button id="moon" type="button" role="tab" aria-selected="true" aria-controls="moon-tab" tabIndex="0" ref={ refs.moon.tab } onKeyDown={ (e) => tabPressHandler(e, "moon", refs) } onClick={ () => tabClickHandler("moon", refs) }>Moon</button>
                    <button id="mars" type="button" role="tab" aria-selected="false" aria-controls="mars-tab" tabIndex="-1" ref={ refs.mars.tab } onKeyDown={ (e) => tabPressHandler(e, "mars", refs) } onClick={ () => tabClickHandler("mars", refs) }>Mars</button>
                    <button id="europa" type="button" role="tab" aria-selected="false" aria-controls="europa-tab" tabIndex="-1" ref={ refs.europa.tab } onKeyDown={ (e) => tabPressHandler(e, "europa", refs) } onClick={ () => tabClickHandler("europa", refs) }>Europa</button>
                    <button id="titan" type="button" role="tab" aria-selected="false" aria-controls="titan-tab" tabIndex="-1" ref={ refs.titan.tab } onKeyDown={ (e) => tabPressHandler(e, "titan", refs) } onClick={ () => tabClickHandler("titan", refs) }>Titan</button>
                </div>

                <div className="destinations__tabs__panel lala" role="tabpanel" id="moon-tab" aria-labelledby="moon" tabIndex="0" ref={ refs.moon.panel }>
                    <img className="panel__img" src={ Moon } alt="" />
                    <h3 className="panel__title">Moon</h3>
                    <p className="panel__body">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>

                    <div className="stats">
                        <div className="stats__item">
                            <h4 className="stats__item__heading">Avg. Distance</h4>
                            <p className="stats__item__body">384,400 km</p>
                        </div>
                        <div className="stats__item">
                            <h4 className="stats__item__heading">Est. Travel Time</h4>
                            <p className="stats__item__body">3 days</p>
                        </div>
                    </div>
                </div>

                <div className="destinations__tabs__panel lala" role="tabpanel" id="mars-tab" aria-labelledby="mars" tabIndex="0" hidden={ true } ref={ refs.mars.panel }>
                    <img className="panel__img" src={ Mars } alt="" />
                    <h3 className="panel__title">Mars</h3>
                    <p className="panel__body">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                    </p>

                    <div className="stats">
                        <div className="stats__item">
                            <h4 className="stats__item__heading">Avg. Distance</h4>
                            <p className="stats__item__body">225 Mil. KM</p>
                        </div>
                        <div className="stats__item">
                            <h4 className="stats__item__heading">Est. Travel Time</h4>
                            <p className="stats__item__body">9 Months</p>
                        </div>
                    </div>
                </div>

                <div className="destinations__tabs__panel" role="tabpanel" id="europa-tab" aria-labelledby="europa" tabIndex="0" hidden={ true } ref={ refs.europa.panel }>
                    <img className="panel__img" src={ Europa } alt="" />
                    <h3 className="panel__title">Europa</h3>
                    <p className="panel__body">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </p>

                    <div className="stats">
                        <div className="stats__item">
                            <h4 className="stats__item__heading">Avg. Distance</h4>
                            <p className="stats__item__body">628 mil. km</p>
                        </div>
                        <div className="stats__item">
                            <h4 className="stats__item__heading">Est. Travel Time</h4>
                            <p className="stats__item__body">3 years</p>
                        </div>
                    </div>
                </div>

                <div className="destinations__tabs__panel" role="tabpanel" id="titan-tab" aria-labelledby="titan" tabIndex="0" hidden={ true } ref={ refs.titan.panel }>
                    <img className="panel__img" src={ Titan } alt="" />
                    <h3 className="panel__title">Titan</h3>
                    <p className="panel__body">
                        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </p>

                    <div className="stats">
                        <div className="stats__item">
                            <h4 className="stats__item__heading"><abbr title="Average">Avg</abbr>. Distance</h4>
                            <p className="stats__item__body">1.6 bil. km</p>
                        </div>
                        <div className="stats__item">
                            <h4 className="stats__item__heading"><abbr title="Estimate">Est</abbr>. Travel Time</h4>
                            <p className="stats__item__body">7 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination
import { useRef } from "react"
import Moon from "../assets/images/destination/image-moon.webp"
import Mars from "../assets/images/destination/image-mars.webp"
import Europa from "../assets/images/destination/image-europa.webp"
import Titan from "../assets/images/destination/image-titan.webp"

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

    const tabClickHandler = (tab) => {
        for (let ref in refs) {
            if ( ref === tab ) {
                refs[ref].tab.current.setAttribute("aria-selected", true)
                refs[ref].panel.current.removeAttribute("hidden")
                continue
            }

            refs[ref].tab.current.setAttribute("aria-selected", false)
            refs[ref].panel.current.setAttribute("hidden", true)
        }
    }

    // Todo: remove display none from the panels and replace it with a z-index

    return (
        <section className="destinations" aria-labelledby="destintion-title">
            <h2 className="destinations__title" id="destintion-title" tabIndex="-1"><span>01</span>Pick your destination</h2>

            <div className="destinations__tabs">
                <div className="destinations__tabs__list" role="tabslist" aria-label="destinations">
                    <button id="moon" type="button" role="tab" aria-selected="true" aria-controls="moon-tab" ref={ refs.moon.tab } onClick={ () => tabClickHandler("moon") }>Moon</button>
                    <button id="mars" type="button" role="tab" aria-selected="false" aria-controls="mars-tab" ref={ refs.mars.tab } onClick={ () => tabClickHandler("mars") }>Mars</button>
                    <button id="europa" type="button" role="tab" aria-selected="false" aria-controls="europa-tab" ref={ refs.europa.tab } onClick={ () => tabClickHandler("europa") }>Europa</button>
                    <button id="titan" type="button" role="tab" aria-selected="false" aria-controls="titan-tab" ref={ refs.titan.tab } onClick={ () => tabClickHandler("titan") }>Titan</button>
                </div>

                <div className="destinations__tabs__panel lala" role="tabpanel" id="moon-tab" aria-labelledby="moon" ref={ refs.moon.panel }>
                    <img className="panel__img" src={ Moon } alt="" />
                    <h3 className="panel__title">Moon</h3>
                    <p className="panel__body">
                        See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                    </p>

                    <div className="stats">
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Avg. Distance</h4>
                            <p className="stats_item__body">384,400 km</p>
                        </div>
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Est. Travel Time</h4>
                            <p className="stats_item__body">3 days</p>
                        </div>
                    </div>
                </div>

                <div className="destinations__tabs__panel lala" role="tabpanel" id="mars-tab" aria-labelledby="mars" hidden={ true } ref={ refs.mars.panel }>
                    <img className="panel__img" src={ Mars } alt="" />
                    <h3 className="panel__title">Mars</h3>
                    <p className="panel__body">
                        Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
                    </p>

                    <div className="stats">
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Avg. Distance</h4>
                            <p className="stats_item__body">225 Mil. KM</p>
                        </div>
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Est. Travel Time</h4>
                            <p className="stats_item__body">9 Months</p>
                        </div>
                    </div>
                </div>

                <div className="destinations__tabs__panel" role="tabpanel" id="europa-tab" aria-labelledby="europa" hidden={ true } ref={ refs.europa.panel }>
                    <img className="panel__img" src={ Europa } alt="" />
                    <h3 className="panel__body">Europa</h3>
                    <p className="destinations__body">
                        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                    </p>

                    <div className="stats">
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Avg. Distance</h4>
                            <p className="stats_item__body">628 mil. km</p>
                        </div>
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Est. Travel Time</h4>
                            <p className="stats_item__body">3 years</p>
                        </div>
                    </div>
                </div>

                <div className="destinations__tabs__panel" role="tabpanel" id="titan-tab" aria-labelledby="titan" hidden={ true } ref={ refs.titan.panel }>
                    <img className="panel__img" src={ Titan } alt="" />
                    <h3 className="panel__title">Titan</h3>
                    <p className="panel__body">
                        The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                    </p>

                    <div className="stats">
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Avg. Distance</h4>
                            <p className="stats_item__body">1.6 bil. km</p>
                        </div>
                        <div className="stats_item">
                            <h4 className="stats_item__heading">Est. Travel Time</h4>
                            <p className="stats_item__body">7 years</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination
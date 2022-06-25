import { useRef } from "react"
import Commander from "../assets/images/crew/image-douglas-hurley.webp"
import Engineer from "../assets/images/crew/image-anousheh-ansari.webp"
import Specialist from "../assets/images/crew/image-mark-shuttleworth.webp"
import Pilot from "../assets/images/crew/image-victor-glover.webp"
import { tabClickHandler, tabPressHandler } from "../tabs"

const Crew = () => {
    let refs = {
        "commander": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "specialist": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "pilot": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "engineer": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
    }

    return (
        <section className="crew details" aria-labelledby="crew-title">
            <h2 className="details__title" id="crew-title" tabIndex="-1"><span>02</span>Meet your crew</h2>

            <div className="crew__tabs">
                <div className="crew__tabs__list" role="tabslist" aria-label="crew">
                    <button
                        id="commander"
                        type="button"
                        role="tab"
                        aria-selected="true"
                        aria-controls="commander-tab"
                        ref={ refs.commander.tab }
                        tabIndex="0"
                        onKeyDown={ (e) => tabPressHandler(e, "commander", refs) }
                        onClick={ () => tabClickHandler("commander", refs) }
                    ></button>
                    <button
                        id="specialist"
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="specialist-tab"
                        ref={ refs.specialist.tab }
                        tabIndex="-1"
                        onKeyDown={ (e) => tabPressHandler(e, "specialist", refs) }
                        onClick={ () => tabClickHandler("specialist", refs) }
                    ></button>
                    <button
                        id="pilot"
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="pilot-tab"
                        ref={ refs.pilot.tab }
                        tabIndex="-1"
                        onKeyDown={ (e) => tabPressHandler(e, "pilot", refs) }
                        onClick={ () => tabClickHandler("pilot", refs) }
                    ></button>
                    <button
                        id="engineer"
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="engineer-tab"
                        ref={ refs.engineer.tab }
                        tabIndex="-1"
                        onKeyDown={ (e) => tabPressHandler(e, "engineer", refs) }
                        onClick={ () => tabClickHandler("engineer", refs)}
                    ></button>
                </div>

                <div
                    className="crew__tabs__panel lala"
                    role="tabpanel"
                    id="commander-tab"
                    tabIndex="0"
                    aria-labelledby="commander"
                    ref={ refs.commander.panel }
                >
                    <img className="panel__img" src={ Commander } alt="" />
                    <p className="panel__title">Commander</p>
                    <h3 className="panel__name">Douglas Hurley</h3>
                    <p className="panel__body">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </p>
                </div>

                <div
                    className="crew__tabs__panel"
                    role="tabpanel"
                    id="specialist-tab"
                    tabIndex="0"
                    aria-labelledby="specialist"
                    hidden={ true }
                    ref={ refs.specialist.panel }
                >
                    <img className="panel__img" src={ Specialist } alt="" />
                    <p className="panel__title">Specialist</p>
                    <h3 className="panel__name">MARK SHUTTLEWORTH</h3>
                    <p className="panel__body">
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
                    </p>
                </div>

                <div
                    className="crew__tabs__panel"
                    role="tabpanel"
                    id="pilot-tab"
                    tabIndex="0"
                    aria-labelledby="pilot"
                    hidden={ true }
                    ref={ refs.pilot.panel }
                >
                    <img className="panel__img" src={ Pilot } alt="" />
                    <p className="panel__title">Pilot</p>
                    <h3 className="panel__name">Victor Glover</h3>
                    <p className="panel__body">
                        Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
                    </p>
                </div>

                <div
                    className="crew__tabs__panel"
                    role="tabpanel"
                    id="engineer-tab"
                    tabIndex="0"
                    aria-labelledby="engineer"
                    hidden={ true }
                    ref={ refs.engineer.panel }
                >
                    <img className="panel__img" src={ Engineer } alt="" />
                    <p className="panel__title">Flight Engineer</p>
                    <h3 className="panel__name">Anousheh Ansari</h3>
                    <p className="panel__body">
                        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Crew
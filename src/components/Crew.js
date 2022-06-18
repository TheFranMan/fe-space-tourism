import { useRef } from "react"
import Commander from "../assets/images/crew/image-douglas-hurley.webp"
import Engineer from "../assets/images/crew/image-anousheh-ansari.webp"
import Specialist from "../assets/images/crew/image-mark-shuttleworth.webp"
import Pilot from "../assets/images/crew/image-victor-glover.webp"

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
        <section className="crew details" aria-labelledby="crew-title">
            <h2 className="details__title" id="crew-title" tabIndex="-1"><span>02</span>Meet your crew</h2>

            <div className="crew__tabs">
                <div className="crew__tabs__list" role="tabslist" aria-label="crew">
                    <button id="commander" type="button" role="tab" aria-selected="true" aria-controls="commander-tab" ref={ refs.commander.tab } onClick={ () => tabClickHandler("commander") }></button>
                    <button id="specialist" type="button" role="tab" aria-selected="false" aria-controls="specialist-tab" ref={ refs.specialist.tab } onClick={ () => tabClickHandler("specialist") }></button>
                    <button id="pilot" type="button" role="tab" aria-selected="false" aria-controls="pilot-tab" ref={ refs.pilot.tab } onClick={ () => tabClickHandler("pilot") }></button>
                    <button id="engineer" type="button" role="tab" aria-selected="false" aria-controls="engineer-tab" ref={ refs.engineer.tab } onClick={ () => tabClickHandler("engineer") }></button>
                </div>

                <div className="crew__tabs__panel lala" role="tabpanel" id="commander-tab" aria-labelledby="commander" ref={ refs.commander.panel }>
                    <img className="panel__img" src={ Commander } alt="" />
                    <h3 className="panel__title">Commander</h3>
                    <h3 className="panel__name">Douglas Hurley</h3>
                    <p className="panel__body">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
                    </p>
                </div>

                <div className="crew__tabs__panel" role="tabpanel" id="specialist-tab" aria-labelledby="specialist" hidden={ true } ref={ refs.specialist.panel }>
                    <img className="panel__img" src={ Specialist } alt="" />
                    <h3 className="panel__title">Specialist</h3>
                    <h3 className="panel__name">MARK SHUTTLEWORTH</h3>
                    <p className="panel__body">
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
                    </p>
                </div>

                <div className="crew__tabs__panel" role="tabpanel" id="pilot-tab" aria-labelledby="pilot" hidden={ true } ref={ refs.pilot.panel }>
                    <img className="panel__img" src={ Pilot } alt="" />
                    <h3 className="panel__title">Pilot</h3>
                    <h3 className="panel__name">Victor Glover</h3>
                    <p className="panel__body">
                        Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
                    </p>
                </div>

                <div className="crew__tabs__panel" role="tabpanel" id="engineer-tab" aria-labelledby="engineer" hidden={ true } ref={ refs.engineer.panel }>
                    <img className="panel__img" src={ Engineer } alt="" />
                    <h3 className="panel__title">Flight Engineer</h3>
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
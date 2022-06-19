import { useRef } from "react"
import Vehicle from "../assets/images/technology/image-launch-vehicle-landscape.jpg"
import Spaceport from "../assets/images/technology/image-spaceport-landscape.jpg"
import Capsule from "../assets/images/technology/image-space-capsule-landscape.jpg"

const Technology = () => {
    let refs = {
        "vehicle": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "spaceport": {
            "tab": useRef(null),
            "panel": useRef(null),
        },
        "capsule": {
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
        <section className="technology details" aria-labelledby="technology-title">
            <h2 className="details__title" id="technology-title" tabIndex="-1"><span>03</span>Space launch 101</h2>

            <div className="technology__tabs">
                <div className="technology__tabs__list" role="tabslist" aria-label="technology">
                    <button id="vehicle" type="button" role="tab" aria-selected="true" aria-controls="vehicle-tab" ref={ refs.vehicle.tab } onClick={ () => tabClickHandler("vehicle") }>1</button>
                    <button id="spaceport" type="button" role="tab" aria-selected="false" aria-controls="spaceport-tab" ref={ refs.spaceport.tab } onClick={ () => tabClickHandler("spaceport") }>2</button>
                    <button id="capsule" type="button" role="tab" aria-selected="false" aria-controls="capsule-tab" ref={ refs.capsule.tab } onClick={ () => tabClickHandler("capsule") }>3</button>
                </div>

                <div className="technology__tabs__panel lala" role="tabpanel" id="vehicle-tab" aria-labelledby="vehicle" ref={ refs.vehicle.panel }>
                    <img className="panel__img" src={ Vehicle } alt="" />
                    <p className="panel__terminology">THE TERMINOLOGY…</p>
                    <h3 className="panel__name">LAUNCH VEHICLE</h3>
                    <p className="panel__body">
                        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                    </p>
                </div>

                <div className="technology__tabs__panel" role="tabpanel" id="spaceport-tab" aria-labelledby="spaceport" hidden={ true } ref={ refs.spaceport.panel }>
                    <img className="panel__img" src={ Spaceport } alt="" />
                    <p className="panel__terminology">THE TERMINOLOGY…</p>
                    <h3 className="panel__name">SPACEPORT</h3>
                    <p className="panel__body">
                        A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
                    </p>
                </div>

                <div className="technology__tabs__panel" role="tabpanel" id="capsule-tab" aria-labelledby="capsule" hidden={ true } ref={ refs.capsule.panel }>
                    <img className="panel__img" src={ Capsule } alt="" />
                    <p className="panel__terminology">THE TERMINOLOGY…</p>
                    <h3 className="panel__name">SPACE CAPSULE</h3>
                    <p className="panel__body">
                        A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Technology
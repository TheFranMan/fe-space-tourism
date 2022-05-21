import Moon from "../assets/images/destination/image-moon.webp"
import Mars from "../assets/images/destination/image-mars.webp"
import Europa from "../assets/images/destination/image-europa.webp"
import Titan from "../assets/images/destination/image-titan.webp"

const Destination = () => {
    return (
        <section className="destinations" aria-labelledby="destintion-title">
            <h2 className="destinations__title" id="destintion-title" tabIndex="-1"><span>01</span>Pick your destination</h2>

            <div className="destinations__tabs">
                <div role="tabslist" aria-label="destinations">
                    <button id="moon" type="button" role="tab" aria-selected="true" aria-controls="moon-tab">Moon</button>
                    <button id="mars" type="button" role="tab" aria-selected="false" aria-controls="mars-tab">Mars</button>
                    <button id="europa" type="button" role="tab" aria-selected="false" aria-controls="europa-tab">Europa</button>
                    <button id="titan" type="button" role="tab" aria-selected="false" aria-controls="titan-tab">Titan</button>
                </div>

                <div role="tabpanel" id="moon-tab" aria-labelledby="moon">
                    <img className="destinations__img" src={ Moon } alt="" />
                    <h3 className="destinations__title">Moon</h3>
                    <p className="destinations__body">
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

                <div role="tabpanel" id="mars-tab" aria-labelledby="mars">
                    <img className="destinations__img" src={ Mars } alt="" />
                    <h3 className="destinations__title">Mars</h3>
                    <p className="destinations__body">
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

                <div role="tabpanel" id="europa-tab" aria-labelledby="europa">
                    <img className="destinations__img" src={ Europa } alt="" />
                    <h3 className="destinations__title">Europa</h3>
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

                <div role="tabpanel" id="titan-tab" aria-labelledby="titan">
                    <img className="destinations__img" src={ Titan } alt="" />
                    <h3 className="destinations__title">Titan</h3>
                    <p className="destinations__body">
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
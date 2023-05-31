// Components
import SmallCard from "../components/SmallCard";
import BigCard from "../components/BigCard";
import Guides from "../assets/objects/Guides";
import Events from "../assets/objects/Events";
// image
import Scout from "../assets/images/scout.png"
import { useState } from "react";

import { v4 } from 'uuid'

const Home = () => {
  
  const [guides] = useState(Guides);
  const [events] = useState(Events);
  return (
    <>
      <section className="section_home_events">
        <div className="section_title">
          <h2>Upcoming Events</h2>
        </div>

        <div className="card_wrap">

          {events.map((event) => { 
            return (
              <BigCard key={v4()} img={event.img} title={event.title} btn={event.btn}/>
            )
          })}
        </div>
      </section>

      <section className="section_home_guides">
        <div className="section_title">
          <h2>Guides</h2>
        </div>

<div className="card_wrap">

  {guides.map((guide) => {
    return (
      <a key={v4()} href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" target="blank">
    <SmallCard  name={guide.name} icon={guide.icon} />
    </a>
    );
  })}
        </div>
      </section>

      <section className="section_home_location">
        <div className="section_title">
          <h2>Where to Find Us?</h2>
        </div>

        <div className="section_home_location_content">
          <div className="section_home_location_img"></div>
          <div className="section_home_location_info">
            <div className="info">
              <p>
                Obanshire HQ is located near Loch Lomond, just a 1 hour drive
                from Glasgow city center. Get directions here.
              </p>
              <a href="https://www.google.com/maps/@56.1559721,-4.7587515,11z" target="blank">
                <button>Get Directions</button>
                </a>
            </div>
            <div className="img">
                <img src={Scout} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

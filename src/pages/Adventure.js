import "./adventure.css";
import { Helmet } from "react-helmet-async";
// Components
import Navigationbar from "../components/Navigationbar/Navigationbar";
import Landing from "../components/Landing/Landing";
import Footer from "../components/Footer/Footer";
// Images
import mountains from "../imgs/adventure-mountains.png";
import historical_place from "../imgs/adventure-historical_place.png";
import beaches from "../imgs/destination-beaches.png";
import water_ctivities from "../imgs/adventure-water_ctivities.png";
import towns from "../imgs/adventure-towns.png";

const Adventure = () => {
  return (
    <>
      <Helmet>
        <title>Adventures</title>
      </Helmet>
      <Navigationbar/>
      <Landing landingTitle="Adventure"/>
      <div className="adventures pt-5">
        <div className="container">
          <div className="main-btn mb-5 text-center">DESTINATIONS FOR YOUR ADVENTURE</div>
          <div className="all-adventures d-flex flex-column">

            {/* Mountains */}
            <div className="adventure-card d-flex justify-content-between align-items-start">
              <img src={mountains} alt="" />
              <div className="adventure-desc pe-0 ps-0 ps-lg-5 pt-0 pt-lg-2">
                <h2>Mountains</h2>
                <p>
                  Here are a bunch of reasons why people would very much like to
                  go to the mountains. Traveling, staying, and visiting
                  Mountains are prettier and very much more enjoyable than then
                  other places. It is fewer inhabitants with better
                  environmental preservation. In mountains, we can see the
                  prettier plants, quitter and colder, better possibilities
                  finding fresh/clean water snow lakes, and glaciers. Tourists
                  found unmatched beauty in mountain areas. From the picturesque
                  scenery to the winding roads, everything about the mountains
                  will captivate the tourists. One of the most important things
                  is clean air that people won’t find anywhere and untouched by
                  all the pollution that plagues major cities. Many people like
                  mountaineering, from hiking to paragliding, and the mountains
                  offer a range of adventures. Mountain trekking is a famous
                  part of many travelers for trying to push themselves to reach
                  a specific goal. The sense of achievement someone gets on
                  reaching the top after an arduous trek is the best boost for
                  self-confidence. It’s truly one of the most amazing
                  experiences to see the mountain beauty through a hike. In
                  mountain areas, people find some peace.
                </p>
              </div>
            </div>

            {/* Historical Place */}
            <div className="adventure-card d-flex justify-content-between align-items-start">
              <img src={historical_place} alt="" />
              <div className="adventure-desc pe-0 ps-0 ps-lg-5 pt-0 pt-lg-2">
                <h2>Historical Place</h2>
                <p>
                  The study of the whole series of past events connected with a
                  particular person or thing is denoted by the word 'history'.
                  Historical places tell us all the unseen events of the past.
                  Historical places are always bringing a great experience for
                  learning new things. It is helpful to improve educational
                  skills such a visit is very helpful for all. Historical visit
                  also helps your children to explore new things. They see those
                  things practically that they read about in their textbooks.
                  That’s why many people like to visit historical places with
                  their families. It’s called an educational trip when you
                  choose historical places to visit. Historical visit not only
                  improve our knowledge, but it also gives us a new story and a
                  new lesson for life. You can know how people are living in
                  their lifestyle and what used to survive. What kind of thing
                  did they do for their establishment? Through this, you can
                  know all the details and can have a practical experience by
                  seeing those things that are available in historical places
                  and museums. There are so many historical places in this world
                  and every place has its history and importance. Some
                  historical places are very interactive in nature which helps
                  us to see directly those things which we read about in our
                  school days. This is not only beneficial for all, but it is
                  also helpful and a great opportunity for everyone to learn new
                  things because there is no age limit for learning.
                </p>
              </div>
            </div>

            {/* Beaches */}
            <div className="adventure-card d-flex justify-content-between align-items-start">
              <img src={beaches} alt="" />
              <div className="adventure-desc pe-0 ps-0 ps-lg-5 pt-0 pt-lg-2">
                <h2>Beaches</h2>
                <p>
                  Want to make your Holidays awesome? A beach holiday in
                  particular has its healing powers and a special way of
                  renewing our perspectives. Contemplating by the water feeds
                  the soul. The expansive view of the ocean water, often
                  referred to as "blue space" by psychologists, actually calms
                  our minds. it gives you the gift of total relaxation. A true
                  sense of relaxation brings us all back to our lives with a
                  renewed sense of purpose and a decluttered mind. We earn our
                  days off and work hard all year long so travel should be a
                  sacred experience. An oceanic climate, the salty-sweet smell,
                  cool breeze, and sunlight that a beach holiday can fulfill.
                </p>
              </div>
            </div>

            {/* Water Activities */}
            <div className="adventure-card d-flex justify-content-between align-items-start">
              <img src={water_ctivities} alt="" />
              <div className="adventure-desc pe-0 ps-0 ps-lg-5 pt-0 pt-lg-2">
                <h2>Water Activities</h2>
                <p>
                  This Water has given us sustenance for billions of years.
                  Water sports include a variety of things such as fishing,
                  swimming, skiing, kneeboarding, wakeboarding, Boating, and
                  tubing. Water activities or water sports are very popular not
                  only because of the adrenaline rush, even getting tanned and
                  toned, but also because of several health benefits. In most
                  cases, water sports are done outdoors where you get to breathe
                  in the fresh air and be one with nature. It lifts your spirit
                  up, sets you in a good mood, and keeps you refreshingly
                  energized. Water activities are very much interesting. It
                  helps you stay healthy and energized which improves immunity
                  against chronic diseases. Water sports or even just simply
                  floating on water can give a great fresh feeling.
                </p>
              </div>
            </div>

            {/* Towns */}
            <div className="adventure-card d-flex justify-content-between align-items-start">
              <img src={towns} alt="" />
              <div className="adventure-desc pe-0 ps-0 ps-lg-5 pt-0 pt-lg-2">
                <h2>Towns</h2>
                <p>
                  Traveling to new places is one of the most beautiful
                  experiences you can ever come across. There are huge numbers
                  of famous and non-famous towns in our world. In so many towns
                  you can see the culture of that area. Meeting people who know
                  nothing about you and you know nothing about them can be very
                  interesting. It allows you to discuss 3 new viewpoints and
                  ideas. It can be another importance of town that there is the
                  favorite reason to visit for all foodies out there. Authentic
                  Chinese, Italian, Afghani, Mexican, and an infinite number of
                  other cuisines are best offered at places where they
                  originated. If you want to make your own life an adventure
                  like Captain Jack Sparrow, then you must travel to areas that
                  are either never explored by you before or are less explored
                  in general and can be very adventurous. Town visits can give
                  you an energizing boost to start things with a fresh mind and
                  soul. The town is a good combination that carries the village
                  culture with the facilities like a city.
                </p>
              </div>
            </div>
            
          </div>
          
          <div className="main-btn more mt-5 mb-5">VIEW MORE DISTENATIONS</div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Adventure;

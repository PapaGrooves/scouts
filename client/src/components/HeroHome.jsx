import Logo from "../assets/images/logo.png";

const HeroHome = () => {
  return (
    <>
      <div className="home_hero">
        <div className="home_hero_text">
          <div className="home_hero_text_top">
            <h1>Obanshire Cub Scouts</h1>
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="home_hero_text_bottom">
            <p>
              Through various activities Cubs can learn an assortment of skills
              and earn badges for achieving proficiency. The Cubs range from 8
              to 10.5 years old.
            </p>
          </div>
        </div>

        <div className="home_hero_card">
          <div className="back">
            <div className="front">
              <h2>Become a helper</h2>
              <p>
                Here at Obanshire we can always use the extra help . If you want 
                to join us in our adventures and help the Cubs earn
                their badges, sign up here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;

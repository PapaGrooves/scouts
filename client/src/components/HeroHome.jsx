import Logo from "../assets/images/logo.png";

const HeroHome = () => {
  return (
    <>
      <div className="home_hero">
        <div className="home_hero_text">
          <div className="home_hero_text_top">
            <h1>Oabnshire Cub Scouts</h1>
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
                    
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default HeroHome;

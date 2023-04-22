import ".././styles.css";
import "../css/index.css";
import "../js/main";
import devico from "../res/images/development-icon.jpg";

const Serv = () => {
  return (
    <div className="content">
      <div align="center" class="maintitle">
        <h2>Our Services</h2>
      </div>
      <div align="center" class="service">
        <div class="appdev">
          <div class="servicesec">
            <img src={devico} alt="" width="50px" height="50px" />
            <div class="servicetit">Android App Developing</div>
            <div class="introserv">
              <p>
                We Are Developing Your Applications And Also Publish In Google
                Play. Join Us To Get 100% Safe Service From Us.
              </p>
            </div>
          </div>
        </div>
        <div class="webdev">
          <div class="servicesec">
            <img src={devico} alt="" width="50px" height="50px" />
            <div class="servicetit">Web site Developing</div>
            <div class="introserv">
              Contact Us To Get Your Website Completed In An Attractive WAy (It
              Is Also Possible To Use Someone From Our Company To Control Your
              Website). Join Us To Get 100% Safe Service From Us.
            </div>
          </div>
        </div>
        <div class="logodeign">
          <div class="servicesec">
            <img src={devico} alt="" width="50px" height="50px" />
            <div class="servicetit">Logo Designing</div>
            <div class="introserv">
              Join Us To Create Your Desired Logo, Banner Attractively.Join Us
              To Get 100% Safe Service From Us.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;

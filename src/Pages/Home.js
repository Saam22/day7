import React from "react";
import "./Home.css";
import profileimg from "../assets/img/profileimg.jpg";
import Pdf from "../assets/pdf/poojagarva.pdf";
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="Saad Mohamed"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
                  href="https://www.linkedin.com/in/saad-mohamed-369226217/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
                  href="https://github.com/Saam22"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>


              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1>Saad Mohamed</h1>
              <h2>Front End Developer</h2>
              <br />
              <div className="row">

                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Contact Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

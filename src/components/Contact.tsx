import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          {/* Contact Information */}
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:krishna.mw.dev@gmail.com"
                data-cursor="disable"
              >
                krishna.mw.dev@gmail.com
              </a>
            </p>

            <h4>Phone</h4>
            <p>
              <a href="tel:+919258377602" data-cursor="disable">
                +91 92583 77602
              </a>
            </p>

            <h4>Location</h4>
            <p>Dehradun, Uttarakhand, India</p>

            <h4>Resume</h4>
            <p>
              <a
                href="/resume/Krishna_Maheshwari_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                data-cursor="disable"
              >
                Download Resume <MdArrowOutward />
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="contact-box">
            <h4>Social</h4>

            <a
              href="https://github.com/krishna-mw-dev"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>

            <a
              href="https://www.linkedin.com/in/krishna-maheshwari-4755903a1/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>

            <a
              href="https://leetcode.com/u/krishna-mw-dev/"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>

            <a
              href="https://www.instagram.com/krishnxkothari?igsh=ZG1lZnh3M3drZnVz"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>

          {/* Footer Credit */}
          <div className="contact-box">
            <h2>
              Designed and Developed <br />
              by <span>Krishna Maheshwari</span>
            </h2>
            <h5>
              <MdCopyright /> {currentYear}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
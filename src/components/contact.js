import { useRef, useState, useContext } from "react";
import "../styles/contact.css";
import phone from "../images/phone.png";
import envelope from "../images/envelope.png";
import map from "../images/map.png";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_chlxcam",
        "template_vv712rh",
        formRef.current,
        "user_ZSIztCNyoIjdqnlJH7CEE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss Your Project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="" className="i-icon" />
              +90 542 888 1497
            </div>
            <div className="c-info-item">
              <img src={envelope} alt="" className="i-icon" />
              pembemistikoglu992@gmail.com
            </div>
            <div className="c-info-item">
              <img src={map} alt="" className="i-icon" />
              Lefkosa-Gonyeli
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subjects"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />

            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done &&
              "Thank you for your mesasge, I will get back to you shortly :) "}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

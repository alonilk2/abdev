import "../App.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { GiPositionMarker } from "react-icons/gi";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import useWindowSize from "../Hooks/useWindowSize";

function ContactWaysRow() {
  return (
    <div className="bubble-row">
      <a href="tel:0587897938" className="col bubble-col">
        <div className="contact-bubble hover-animate-bubble">
          <AiFillPhone />
        </div>
        058-789-7938
      </a>
      <a className="col bubble-col">
        <div className="contact-bubble hover-animate-bubble">
          <GiPositionMarker />
        </div>
        Nof Hagalil, Israel
      </a>
      <a href="mailto:alonilk2@gmail.com" className="col bubble-col">
        <div className="contact-bubble hover-animate-bubble">
          <AiFillMail />
        </div>
        alonilk2@gmail.com
      </a>
    </div>
  );
}

function Map(size) {
  return (
    <div className="div" style={{ padding: size.width <= 768 ? "4%" : 0 }}>
      {size.width > 768 ? (
        <img
          src={
            "https://maps.googleapis.com/maps/api/staticmap?markers=color:purple%7Clabel:A%7CNof%20Hagalil,%20Israel&zoom=8&size=450x400&scale=2&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=edd7e6c59663c968"
          }
          alt="Map"
        />
      ) : (
        <img
          src={
            "https://maps.googleapis.com/maps/api/staticmap?markers=color:purple%7Clabel:A%7CNof%20Hagalil,%20Israel&zoom=9&size=550x600&scale=1&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=edd7e6c59663c968"
          }
          style={{ width: "100%" }}
          alt="Map"
        />
      )}
    </div>
  );
}

export default function Contact(props) {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState(false);
  const size = useWindowSize();
  const handleSubmit = () => {
    setLoading(true);
    window.emailjs
      .send("service_rh4fcch", "template_w3ffrb8", {
        fullname: fullName,
        email: email,
        subject: subject,
        content: content,
      })
      .then(
        function (response) {
          setSuccess(true);
          setLoading(false);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          setSuccess(false);
          setLoading(false);
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <section
        className={props.className}
        style={{ zIndex: props.state ? 4 : 0 }}
      >
        <div
          className="content-body-project"
          style={{ justifyContent: "center", margin: "0" }}
        >
          <div className="contact-container">
            <div className="contact-col">
              {success && (
                <div className="success">
                  Your message has been sent successfully. Thank you!
                </div>
              )}
              <h1
                className="content-title-project delay-1 hover-animate"
                style={{ position: "unset", height: "unset" }}
              >
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t </span> <span> m</span>
                <span>e</span>
              </h1>
              {ContactWaysRow()}

              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  id="filled-basic"
                  label="Full Name"
                  variant="filled"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFullName(e.target.value);
                  }}
                />
                <TextField
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <TextField
                id="filled-basic"
                label="Subject"
                variant="filled"
                onChange={(e) => setSubject(e.target.value)}
              />
              <TextField
                id="filled-multiline-static"
                label="Message"
                multiline
                rows={4}
                variant="filled"
                onChange={(e) => setContent(e.target.value)}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                }}
              >
                <div style={{ margin: "2% 2% 0% 0%" }}>
                  {loading && <CircularProgress />}
                </div>
                <button
                  className="contact-submit-btn button"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
            {Map(size)}
          </div>
        </div>
      </section>
    </>
  );
}

import {
  AiFillPhone,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaPinterestSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contacts = () => {
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <section className="contactPage">
      <div className="contactPageWrapper setWidth">
        <div className="contact py-block-2">
          <h2>Contact Us</h2>
          <p>
            We're thrilled that you want to get in touch with us at Moviedise.
            Whether you have questions, feedback, or simply want to connect with
            fellow movie enthusiasts, we're here and eager to hear from you.
            Feel free to reach us.
          </p>
        </div>
        <div className="py-block-2">
          <h2>Feedback and Suggestions:</h2>
          <p>
            Your opinion matters to us! If you have suggestions for improving
            our platform, features you'd like to see, or any other input, please
            don't hesitate to share. We're constantly striving to enhance your
            experience and value your insights. Thank you for considering
            reaching out to [Your Movie Website Name]. We're dedicated to
            providing a seamless and enjoyable experience for all movie
            enthusiasts, and your engagement is essential in achieving that
            goal. Let's continue celebrating the magic of cinema together!
          </p>
        </div>
        <div className="contactDetail">
          <div className="contactForm py-block-2">
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(`FullName: ${fullName}`);
                console.log(`Email: ${mail}`);
                console.log(`Message: ${msg}`);
                setFullName("");
                setMail("");
                setMsg("");
              }}
            >
              <h2>Feedback Form</h2>
              <label htmlFor="fullName">FullName:</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                id="fullName"
                type="text"
                name="fullName"
                placeholder="Full Name..."
              />
              <label htmlFor="email">Email:</label>
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                id="email"
                type="text"
                name="email"
                placeholder="eg: dummy@gmail.com"
              />
              <label htmlFor="message">Message:</label>
              <textarea
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                id="message"
                name="message"
                placeholder="Enter your message or query..."
              />
              <input
                className="submitBtn"
                type="submit"
                value="Submit"
                onSubmit={(e) => e.preventDefault()}
              />
            </form>
          </div>
          <div className="socialContacts py-block-2">
            <div>
              <AiFillPhone size={60} color="#004953" />
              <h2>PHONE</h2>
              <h3>+91******2187</h3>
            </div>
            <div>
              <MdEmail size={60} color="#004953" />
              <h2>EMAIL</h2>
              <h3>dummyJack12@gmail.com</h3>
            </div>
            <div className="social-icons">
              <Link to="https://www.facebook.com/">
                <AiFillFacebook size={40} color="#004953" />
              </Link>
              <Link to="https://twitter.com/i/flow/login">
                <AiFillTwitterSquare size={40} color="#004953" />
              </Link>
              <Link to="https://in.linkedin.com/">
                <AiFillLinkedin size={40} color="#004953" />
              </Link>
              <Link to="https://in.pinterest.com/">
                <FaPinterestSquare size={40} color="#004953" />
              </Link>
              <Link to="https://www.instagram.com/">
                <FaInstagramSquare size={40} color="#004953" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

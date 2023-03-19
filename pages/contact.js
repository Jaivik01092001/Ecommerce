import React from "react";
import styles from '../styles/contact.module.css'
import { useAuth0 } from "@auth0/auth0-react";


const Contact = () => {
  const {isAuthenticated, user } = useAuth0();

  return (
    <>
      <h2 className={styles.common}>Contact page</h2>

      <iframe className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58634.510310235055!2d72.2674661701679!3d23.29191357873635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c18078321e28f%3A0xdca9292f4989571c!2sKadi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1677678224921!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className={styles.container}>
        <div className={styles.contactform}>
          <form
            action="https://formspree.io/f/mpzerdgq"
            method="POST"
            className={styles.contactinputs}
          >
            <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name : ""}
              required
              autoComplete="off"
              className={styles.textarea}
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              value={isAuthenticated ? user.email : ""}
              required
              className={styles.textarea}
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              className={styles.textarea}
            ></textarea>

            <input
              type="submit"
              value="send"
              style={{ borderRadius: "0.5rem" }}
              className={styles.submit}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

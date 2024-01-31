import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contactForm}>
        <div className={styles.topBtn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL"
          icon={<IoIosMail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.formControl}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.cotactImage}>
        <img src="/images/contact.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;

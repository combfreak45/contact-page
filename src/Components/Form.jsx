import React, { useState } from 'react'
import Button from './Button'
import {RiMessage2Line} from 'react-icons/ri'
import { MdCall } from "react-icons/md";
import styles from './Form.module.css'
import pic from '/images/g.svg'
function Form() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [text,setText] = useState("");
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(text);
    setName("");
    setEmail("");
    setText("");
  }
  

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.btn_g}>
          <Button
            isOutline={false}
            icon={<RiMessage2Line />}
            text="VIA SUPPORT CHAT"
          />
          <Button isOutline={false} icon={<MdCall />} text="VIA CALL" />
        </div>
        <Button
          isOutline={true}
          icon={<RiMessage2Line />}
          text="VIA EMAIL FORM"
        />
        <div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_cont}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.form_cont}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.form_cont}>
              <label htmlFor="text" value={text}>
              </label>
              <textarea value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button text="Submit" />
            </div>
          </form>
        </div>
      </div>
      <div>
        <img src={pic} alt="" style={{ height: "25rem" }} />
      </div>
    </div>
  );
}

export default Form

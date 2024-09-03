import React, { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async(e)=>{
    e.preventDefault();
    await axios
    .post(
      "http://localhost:4000/api/v1/message/send", 
      {
        name,
        email,
        subject,
        message
      }, 
    {
    witCredentials: true, 
    headers:{"Content-Type": "application/json"},
    }
  )
  .then((res)=>{
    toast.success(res.data.message);
    setName("");
    setEmail("");
    setMessage("");
    setSubject("");
  }).catch(error=>{
    toast.error(error.response.data.message);
  });
};
  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Any where, Any City, 452001</p>
          </div>
          <div className="item">
            <h4>Call us</h4>
            <p>Call Us: +92-321-111111</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>rg@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
            width="520"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Indore%20Indore+(india)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://dissertationschreibenlassen.com/dissertation-medizin/'></a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=32e3b74e67013971e577657cb9ab30861e83fe56'></script>
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  />
                <input type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} 
                  />
              </div>
              <input type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)} 
                />
                
                <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                 />
                 <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
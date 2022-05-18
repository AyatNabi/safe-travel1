/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import './About.css';
import a1 from '../components/img/a1.jpeg'
import f1 from '../components/img/f1.jpeg'
import n1 from '../components/img/n1.jpeg'
import r1 from '../components/img/r1.jpeg'
import abo from '../components/img/abo.png'
import { useState } from "react";
import { send } from "emailjs-com";



const About =()=>{
    const [sender_name, set_sender_name]=useState('');
    const [sender_email, set_sender_email]=useState('');
    const [message, set_message]=useState('');
    const handleName = (e) =>{
        set_sender_name(e.target.value)
    }
    const handleEmail = (e) =>{
        set_sender_email(e.target.value)
    }
    const handlemessage =(e) =>{
        set_message(e.target.value)
    }
    const sendMail = (e) =>{
        e.preventDefault(); 
        send(
            'service_6nnejd4',
            'template_aspuppi',
            {sender_name, sender_email, message},
            '6TxgJdQs6XxyjiRfV'
        )
        .then((response) =>{
            console.log('Message sent successfully', response.status, response.text)

        })
        .catch((err) => {
            console.log('Failed', err)
        })
        set_sender_name ('');
        set_sender_email ('');
        set_message ('');
    }
return(
    <div className="First">
        <img className="abo" src={abo} alt="abo"></img>
<div >
<h1 className="hed">ABOUT US</h1>
 
    <div class="Vline">
    <p class="V">
    We are a group of colleagues greeting safe travel website dashboard that visualizes covid-19 data, provides worthy safe places depending on the user interests taking into consideration to start with countries with fewer Covid-19 cases and recommendations, which is meant to be a comprehensive guide to all epidemic information, as it targets travellers, embassies and airlines.
</p>
</div>
<br></br>
<br></br>
<br></br>
<h1 className="hed2">OUR TEAM</h1>
<div className="ay">
<img className="a1" src={a1} alt='a1'></img>

<h1>Ayat Nabil</h1>
<h3>Web developer</h3>
<br></br>
<a href="mailto:201520345@ajmanuni.ac.ae?cc=safetravelcoved@gmail.com=Mail from our Website&body=Dear W3docs Team">Send Email</a>

</div>
<div className="ft">
<img className="f1" src={f1} alt='f1'></img>
<h1> Fatima Taisir</h1>
<h3>CEO</h3>
<br></br>
<a href="mailto:201811486@ajmanuni.ac.ae?cc=safetravelcoved@gmail.com=Mail from our Website&body=Dear W3docs Team">Send Email</a>
</div>
<div className="no">
<img className="n1" src={n1} alt='n1'></img>
<h1> Noor Barri</h1>
<h3>Data Analyst</h3>
<br></br>
<a href="mailto: 201510830@ajmanuni.ac.ae?cc=safetravelcoved@gmail.com=Mail from our Website&body=Dear W3docs Team">Send Email</a>
</div>
<div className="rm">
<img  className="r1" src={r1} alt='r1'></img>
<h1> Reem Asaad</h1>
<h3>UI/UX Designer</h3>
<br></br>
<a href="mailto:201811507@ajmanuni.ac.ae?cc=safetravelcoved@gmail.com=Mail from our Website&body=Dear W3docs Team">Send Email</a>
</div>

</div>
<div className="formm">
    <h1 className="form">Contact Form</h1>
    <br></br>
    <br></br>
    <form className="row"  onSubmit={sendMail}>        
        <label className="lab2">Name</label>
        <input className="inp2" type='text' name="sender_name" value={ sender_name} onChange={handleName} required placeholder=" name"></input>
        <br></br>
        <br></br>
        <label className="lab2">Email</label>
        <input  className="inp2" type='email' name="sender_email" value={ sender_email}  onChange={handleEmail} required placeholder=" email"></input>
        <br></br>
        <br></br>
        <label className="lab3">Message </label>
        <textarea className="inp3" name="message" rows='6' value={ message}  onChange={handlemessage} required placeholder=" message"></textarea>
        <br></br>
        <br></br>
        <button className="inp4" type='submit'>Send</button>

        
            </form>
</div>
<div class="icon-bar">
  <a href="https://www.facebook.com/Safetravel-104083422305873" className="facebook"><i class="fa-brands fa-facebook-f"></i></a> 
  <a href="https://twitter.com/safetravel19/likes" className="twitter"><i class="fa-brands fa-twitter"></i></a> 
  <a href="https://www.youtube.com/channel/UCFOmIFr19gkfoZYXppGrsTg" className="youtube"><i class="fa-brands fa-youtube"></i></a> 
  <a href="https://www.instagram.com/travelsafecovid/" className="instagram"><i class="fa-brands fa-instagram"></i></a> 
</div>
</div>

)
};
export default About
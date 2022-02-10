import React, { useEffect, useState } from 'react';
import './Home.css';
import logo from './logo.png';
import slogan from './slogan.png';
export const Home = () => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    let email = localStorage.getItem('email');
    setEmail(email)
  }, [])

  return <div>
      <img src={logo} alt="my logo"/><br/>
      <div className='content3' >“A man who dares to waste one hour of time has not discovered the value of life.<br/><br/>—Charles Darwin”<br/> </div>
      <p className='content'><br/>
Smitha Jacob is currently working as an Assistant Professor in the Department of Computer Science & Engineering and is always interested in a challenge from my Academic career. Reach out to <a href="#" >smitha.jacob@gmail.com</a> to connect!<br/><br/> TEACHING IS MY PASSION and i enjoy my Profession in every moment of my life by God's grace.I Worked in IT Industry as Developer and finally reached the destination as FACULTY to serve my goal.
<br/><br/>
In the role, I identified a need for a new system for remote learning and be part of the implementation .I have experience working as part of a team and individually.I am good in building strong relationships with my students in order to deliver the best results.
<br/><br/>
My philosophy of education is that all children are unique and must have a stimulating educational environment where they can grow physically, mentally, emotionally, and socially. It is my desire to create this type of atmosphere where students can meet their full potential. I will provide a safe environment ,my<b>BLOG </b> where students are invited to read the articles shared for you and send your ideas ,feedbacks,comments and  take risks.
</p><br/><br/><br/>
<img src={slogan} alt="my slogan"/><br/><br/>
  </div>;
};

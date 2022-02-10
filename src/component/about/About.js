import React from 'react';
import me from './about.png';
import profile from './profile.png';
import ph from './smith1.png';
import './About.css';
export const About = () => {
  return <div>
      
      <img src={me} alt="my logo"/><br/>
      <div class="row1">
  <div class="column1"><img className='me' src={ph} alt="my logo"/></div>
  <div class="column1"> <p className='acontent'><br/>
      Hi there, I'm Smitha Jacob and I teach Computer Science and Information Technology . I have been teaching for over 16 years and have education experience in the field of Computer Science & Engineering.I know most students don't believe I have a life outside of the college, but I do. I have two daughters and leading a precious family life my god's grace. Coding is my Passion and i love Programming subjects.Preparing for the class is the best thing I love to do.Currently, I am little free due to COVID pandemic and i am utilizing my time by doing MERN STACK course from ICT Academy ,doing my online classes and making online assessments.

<br/><br/>
In the role, I identified the need for updating my learning and be part of grooming of Budding Engineers .I have experience working as part of a team and individually.I am good in building strong relationships with my freiends in NORKA Batch1, to deliver the best results.
<br/><br/>
 I will provide a safe environment ,my<b>BLOG </b> where students are invited to read the articles shared for you and send your ideas ,feedbacks,comments and  take risks.
</p></div>
</div>
   
<img className='acontent1'  src={profile} alt="my slogan"/>

  </div>;
};

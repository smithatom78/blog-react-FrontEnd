import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignUp.css';
import validation from './validation';


export const SignUp = () => {
    const navigate = useNavigate();

           
      //manage form values
      const [formValues,setFormvalues]=useState({username:"",email:"",password:""});
      //manage errors
      const [formErrors,setFormErrors]=useState({})
      //flag for successuful submit
      const [isSubmit, setIsSubmit] = useState(false);
      //maanage field change
      const handleChange=(event)=>{
       //   console.log(event.target);
          //destructuring
      const {name,value}=event.target;
      //spread syntax..the value typing is get appended

      setFormvalues({...formValues,[name]:value})
      console.log(formValues);
      }
      const handleSubmit=(event)=>
      {
        event.preventDefault();
        setFormErrors(validation(formValues));
        setIsSubmit(true);
      }      
      useEffect(()=>{
          if (Object.keys(formErrors).length===0 && isSubmit)
          {
              alert('validation successful')
              registerUser();
            }
          },[formErrors])

          async function registerUser() {
            const user = formValues.username;
            const email = formValues.email;
            const password = formValues.password;
               
            const response = await fetch(`http://localhost:5000/api/register`, {
                method: 'post',
                body: JSON.stringify({ user,email,password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log(response,"response");
            if (response)
            {
            alert('Successfullly Registerd to blog Application ');
           
        navigate("/login", { replace: true });
         
         
            }
            else
            {alert('error... '); 

            }
        
        }
  return <div className="main1">  	
 {
 /*

  {Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signupchk'>Signup Successful</div>) : (<pre className='pretext'>{JSON.stringify(formValues, undefined, 2)}</pre>)}*/}

{/*sign up*/}
      <div className="signup">
          <form onSubmit={handleSubmit}><br/><br/>
              <label className='heading1' aria-hidden="true">Sign up</label><br/><br/><br/>
              <label>UserName</label> &nbsp;&nbsp;
              <input type="text" name="username" placeholder="User name" required="" value={formValues.username} onChange={handleChange}/>
              <br/><br/>
                         <p className='error'>{formErrors.username}</p><label>Email Id</label> &nbsp;&nbsp; &nbsp;&nbsp;
              <input type="email" name="email" placeholder="Email" required="" value={formValues.email} onChange={handleChange}/>
              <p className='error'>{formErrors.email}</p> <br/>
              <label>Password</label> &nbsp;&nbsp;&nbsp;&nbsp; 
              <input type="password" name="password" placeholder="Password" required="" value={formValues.password} onChange={handleChange}/>
              <p className='error'>{formErrors.password}</p> <br/><br/>
              <button>Sign up</button>
          </form>
      </div>
{/*sign up*/}
     {/* <div className="login">
          <form>
              <label for="chk" aria-hidden="true">Login</label>
              <input type="email" name="email" placeholder="Email" required=""/>
              <input type="password" name="password" placeholder="Password" required=""/>
              <button>Login</button>
          </form>
</div>*/}
      <br/><br/><br/>
</div>
};

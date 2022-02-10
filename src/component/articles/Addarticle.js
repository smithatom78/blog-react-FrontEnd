import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const Addarticle = () => {
  const navigate = useNavigate();
    //storing articles
    const [articleValues, setarticleValues] = useState({ name:"",title:"",description:"",user:"admin",upvotes:0,username: "", comment: "" });
function handleChange(event)
        {
        console.log(event.target);
        const {name,value}=event.target;
        //spread syntax += action
        setarticleValues({...articleValues,[name]:value});
        
    //rsaevent.preventDefault();
        }
        async function addArticles() {
            const name = articleValues.name;
            const title = articleValues.title;
            const description = articleValues.description;
            const user = "admin";
           // const user = articleValues.user;
            const upvotes = 0;
            const username = articleValues.username;
            const text = articleValues.comment;
    
            const response = await fetch(`https://smith-blog.herokuapp.com/api/addart`, {
                method: 'post',
                body: JSON.stringify({ name,title,description,user,upvotes,username, text }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.json();
            console.log(body);
            alert('An Article is submitted Successfullly: ');
            navigate("/Article-list", { replace: true });
            //setarticleData(body);
          // setarticleValues(body);
         // setarticleData(body);
         
          //setarticleValues({username:"",comment:""});
        }
  return <div>        <br></br>
<div className='add-comment'><form>
                <h3>Add Articles</h3>
                
                <label>
                    Short Name of the Article:
                    <br></br>
                    <input type="text" name="name"  size={70} value={articleValues.name} onChange={handleChange}/>
                </label><br/><br></br>
                <label>
                    Title of the Article:
                    <br></br>
                    <input type="text" name="title"  size={70} value={articleValues.title} onChange={handleChange}/>
                </label><br/><br></br>
                <label>
                  Article Content:
                    <br></br>
                    <textarea rows="14" cols="65" name='description' value={articleValues.description} onChange={handleChange} ></textarea>
                </label>
                <br></br>
                <input type="hidden" name="user" value="admin"/>
                <input type="hidden" name="upvotes" value='0'/>
                <input type="hidden" name="username" value=""/>
                <input type="hidden" name="text" value=""/>
             

               
                <button onClick={addArticles}>Submit Article</button><br></br></form>
</div>
  </div>;
};

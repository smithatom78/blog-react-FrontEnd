import React, { useState } from 'react';

export const AddComments = (props) => {
    const {name,setarticleData}=props;
    //sttoring comments
const [commentValues, setCommentValues] = useState({ username: "", comment: "" });
function handleChange(event)
        {
        console.log(event.target);
        const {name,value}=event.target;
        //spread syntax += action
        setCommentValues({...commentValues,[name]:value});
        }
        async function fetchComments() {
            const username = commentValues.username;
            const text = commentValues.comment;
    
            const response = await fetch(`http://localhost:5000/api/article/${name}/comments`, {
                method: 'post',
                body: JSON.stringify({ username, text }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const body = await response.json();
            //setarticleData(body);
          //  setCommentValues(body);
          setarticleData(body);
          setCommentValues({username:"",comment:""});
        }

  return <div>

<div className='add-comment'>
                <h3>Add a Comment</h3>
                <label>
                    Name:
                    <br></br>
                    <input type="text" name="username" value={commentValues.username} onChange={handleChange}/>
                </label><br/><br></br>
                <label>
                    Comment:
                    <br></br>
                    <textarea rows="4" cols="35" name='comment' value={commentValues.comment} onChange={handleChange}></textarea>
                </label>
                <br></br>
                <button onClick={fetchComments}>Submit</button>
</div>
  </div>;
};

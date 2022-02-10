import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import articleContent from './SampleArticleDB';
import Error from '../error/Error';
import './Article.css';
export const UpArticle = () => {
    const { name } = useParams(); 
    const [articleData, setarticleData] = useState([]);
    const [uparticleData, setuparticleData] = useState({name:"",title:"",description:""});
               const article = articleData.name;
 //backend connection api fetch
 useEffect(() => {
     
    fetchAPI();
    
}, [name])

    //backend connection for api fetch
    async function fetchAPI()
    { 
            const response = await fetch(`https://smith-blog.herokuapp.com/api/article/${name}`);
            const body =  await response.json();
            console.log(body);
           setarticleData(body);

    }

    async function editArticles(){
                        const name = articleData.name;
                        const title = articleData.title;
                const description = articleData.description;
          
        const response = await fetch(`https://smith-blog.herokuapp.com/api/uparticle/${name}/`, {
            method: 'post',
         //   body: JSON.stringify({ name,title,description,user,upvotes,username, text }),
         body: JSON.stringify({ name,title,description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        //setarticleData(body);
      //  setCommentValues(body);
      setuparticleData(body);
     alert(" Article updated successfully");
    // const handleOnClick = () => history.push('/article-list');

}
function handleChange(event){
    console.log(event.target);
    const {name,value}=event.target;
    //spread syntax += action
    setarticleData({...articleData,[name]:value});
    }

     // Article Not Exist in DB
     if (!article) return <Error/>

  return <div>


<div>
<div className='add-comment'><form>
                <h3>Edit Articles</h3>
                
                <label>
                    Short Name of the Article:
                    <br></br>
                    <input type="text" name="name"  size={70} value={articleData.name} onChange={handleChange}/>
                </label><br/><br></br>
                <label>
                    Title of the Article:
                    <br></br>
                    <input type="text" name="title"  size={70} value={articleData.title} onChange={handleChange}/>
                </label><br/><br></br>
                <label>
                  Article Content:
                    <br></br>
                    <textarea rows="14" cols="65" name='description' value={articleData.description} onChange={handleChange} ></textarea>
                </label>
                <br></br>
                <input type="hidden" name="upvotes" value={articleData.upvotes}  onChange={handleChange}/>
                <input type="hidden" name="username" value={articleData.username}  onChange={handleChange}/>
                <input type="hidden" name="text" value={articleData.text}  onChange={handleChange}/>
                <input type="hidden" name="user" value={articleData.user}  onChange={handleChange}/>
                <button onClick={editArticles}>Edit Article</button><br></br></form>
</div>


                       </div>  
  </div>;
};

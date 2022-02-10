import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
//import articleContent from './SampleArticleDB';
import Error from '../error/Error';
import { Comments } from './Comments';
import { UpvoteSection } from './UpvoteSection';
import { AddComments } from './AddComments';
import './Article.css';
export const Article = () => {
    const [email, setEmail] = useState('')
    const [token, setToken] = useState('')
    useEffect(() => {
        let email = localStorage.getItem('email');
        setEmail(email)
        let token = localStorage.getItem('token');
        setToken(token)
    }, [])
    let role=false;
    let user="";
    if (email === "admin@test.com") {
        role=true;
        user = "admin"
    }
            const { name } = useParams(); 
            // Matching name parameter
             // const article = articleContent.find(i => i.name === name);
               //temp storage of Db data
               const [articleData, setarticleData] = useState({name:"",title:"",description:"", upvotes: 0, comments: [] });
               const article = articleData.name;
               //backend connection api fetch
                   useEffect(() => {
                       fetchAPI();
                   }, [name]);
   
                       //backend connection for api fetch
                       async function fetchAPI()
                       { 
                               const response = await fetch(`http://localhost:5000/api/article/${name}`);
                               const body =  await response.json();
                               console.log(body);
                               setarticleData(body);
   
                       }
            //for delete
            
                        // Article Not Exist in DB
                        if (!article) return <Error/>

                        return <div>
                               <div className='heading'><h1 >Articles LIST</h1></div>    
                                <h1 className='article'>{articleData.title}</h1>
                             
                                <UpvoteSection name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} /><br/>


                                <h1 className='articles1'>About {articleData.title}</h1>
                             
                                                <p className='content1'>{articleData.description}</p>
                                               
                                               <br/>{role && <Link   to={`../uparticle/${name}`}>
                                               <button >UPDATE ARTICLE</button></Link>}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                               {role && <Link className='article'  to={`../delarticle/${name}`}>
                                               <button >DELETE ARTICLE</button></Link>}<br/>&nbsp;&nbsp;<br/>&nbsp;&nbsp;
                                                
                                                <div class="row">
                                                    <div class="column"> <Comments comments={articleData.comments}/></div>
                                                    <div class="column"> <AddComments name={name} setarticleData={setarticleData}/></div>
                                                </div>

                                </div>;
};

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Article.css';
import articleContent from './SampleArticleDB';
import profile from './hello.png';
import { Articlenames } from './Articlenames';

function ArticleList(props) {
    
    const [articlelistData, setarticlelistData] = useState([]);
  //  const [articleList, setArticleList]=useState([]);
    //const [articleData, setarticleData] = useState({ name:"",username:""});
    //backend connection api fetch
        useEffect(() => {
            fetchAPI();
        }, []);

            //backend connection for api fetch
            async function fetchAPI()
            { 
                    const response = await fetch(`https://smith-blog.herokuapp.com/api/article-list/`);
                    const body =  await response.json();
                  //  console.log(body);
                    setarticlelistData(body);
                    console.log(articlelistData);
            }
         
    return (
        <div>
           
<div className='heading'><h1 >Articles LIST  </h1></div>    
<br/>               
<img className='content2'  src={profile} alt="my slogan"/> 
{articlelistData.map((i, key) => (
                <Link className='article' key={key} to={`/article/${i.name}`}>
                    <h3>{i.title}</h3>
                </Link> 
            ))}<br/><br/><br/>

        </div>
    );
}

export default ArticleList;
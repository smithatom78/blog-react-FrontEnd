import React, { useEffect} from 'react';
import { useParams} from 'react-router-dom';
export const DelArticles = () => {
    const { name } = useParams(); 
    useEffect(() => {
      DelArticles();
  }, [name]);

  async function DelArticles() {
      const response = await fetch(`http://localhost:5000/api/delarticle/${name}`, {
          method: 'delete'
      });
     //const body = await response.json();
     // setarticleData(body);
      console.log("deleted");
      console.log(response,"response");
      if (response)
      {
       alert('An Article is deleted Successfullly: ');
        window.location.href("/article-list");
      }
      else
      {alert('error... '); 

      }
              
  }
  return <div>
 <br/> <br/> <br/>
 <h1>DELETED THE ARTICLE <br/><br/>{name}</h1><br/> <br/> <br/>
 
 
     
  </div>;
};
   
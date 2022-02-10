import React from 'react';
import './Article.css';

export const UpvoteSection = (props) => {
    const { name, upvotes, setarticleData } = props;

    async function fetchUpVotes() {
        const response = await fetch(`http://localhost:5000/api/article/${name}/upvotes`, {
            method: 'post'
        });
        const body = await response.json();
        setarticleData(body);
    }

  return <div>
       <button className="like" onClick={fetchUpVotes}>👍</button> 
       <p>This article has {upvotes} upvotes</p>

  </div>;
};

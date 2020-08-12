import React from 'react';







function Post(props) {
    console.log("post props =", props);
    return (
        <article className="card">
            <h4>{props.post.title}</h4>
            <small>{props.post.author};</small>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum molestiae nihil quod fugiat quas eum labore quis accusamus tempora quae.</p>
        </article>
    );
}


export default Post;
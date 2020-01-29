import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import Helmet from "react-helmet";
import { render } from "react-dom";
import Typography from "typography";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

// class Blog extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts:['1','2'],
//     }
//   }

//   render() {
//     return (
//       <Layout>
//         <h1>{this.state.posts}</h1>
//       </Layout>
//     );
//   }
// }

const Blog = () => {
    const [posts, setPosts] = useState([]);
    //  Probably set this up to be an object including title, content etc
    let currentBlogPosts = ["first post", "second post"];
    
    const fetchBlogPosts = () => {
      let result = currentBlogPosts.map((post) => {
        return(
          <span>
            {post}
          </span>
        )
      });

      return result;  
    }
    useEffect(() => {
      // Update the document title using the browser API
      setPosts(fetchBlogPosts())
    });
    //  On load, get the latest blog posts
    return (
      <Layout>
        {posts}
      </Layout>
     
    )

}

export default Blog;

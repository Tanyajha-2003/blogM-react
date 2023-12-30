import React,{useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";
import Blog from "./Blog";
import  CreateBlog  from "./CreateBlog";
import preblog from "./info";
import Entry from "./Entry";
import Filtered from "./Filtered";
function App(){
    const [blogs, setBlogs] = useState([]);
    function addBlog(newBlog) {
        setBlogs((prevBlogs) => {
          return [...prevBlogs, newBlog];
        });
      }

  const [filteredPosts, setFilteredPosts] = useState([]);
  const handleTitleSearch = (query) => {
    const filtered = blogs.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

    return(
        <div>  
            <Header/>
            <Search onSearch={handleTitleSearch} />
            <Filtered preblog={preblog} />
            <CreateBlog onAdd={addBlog} />
            {blogs.map((blogs, index) => {
        return(
          <Blog
            imgURL={blogs.imgURL}
            key={index}
            id={index}
            title={blogs.title}
            content={blogs.content}  
            theme={blogs.theme}
            description={blogs.description}
          />
        );
      })}
      
      <dl className="dictionary">{preblog.map(Entry)}</dl>      
            <Footer />
        </div>   
    );
}

export default App;
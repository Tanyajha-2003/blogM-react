import React, { useState } from 'react';

function Filtered(props) {
  const [filteredBlog, setFilteredBlog] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState('');

  const preblog = props.preblog; 

  const filterBlog = (searchTerm) => {
    const filteredResult = preblog.find((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlog(filteredResult);
  };

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTitle(selectedValue);

    
    filterBlog(selectedValue);
  };

  return (
    <div className="blog">
      
      <div className="dropdown">
        <label htmlFor="title">Filter by Theme: </label>
        <select id="title" onChange={handleDropdownChange} value={selectedTitle}>
          <option value="">All Titles</option>
          <option value="Travel">Travel</option>
          <option value="Art">Art</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
          
        </select>
      </div>


      {filteredBlog && (
        <div>
          <div>{filteredBlog.imgURL}</div>
          <h1>{filteredBlog.title}</h1>
          <p>{filteredBlog.content}</p>
          <p>{filteredBlog.theme}</p>
          <p>{filteredBlog.description}</p>
        </div>
      )}
    </div>
  );
}

export default Filtered;
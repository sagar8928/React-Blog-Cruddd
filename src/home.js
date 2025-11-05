// import { useState, useEffect } from 'react';
import BlogList from './bloglist';
import useFtech from './usefetch';

const Home = () => {
  const {
    data: blogs,
    ispending,
    error,
  } = useFtech('http://localhost:8000/blogs');

  // const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      <h2>All Blogs </h2>
      {error && <div>{error}</div>}
      {ispending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} />}
      {/* <button onClick={() => setName('sagar')}>change name</button> */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;

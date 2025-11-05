import { Link } from 'react-router-dom';
import './bloglist.css';

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  // const handleDelete = props.handleDelete;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div className="body-snippet">
              {blog.body.length > 100
                ? blog.body.slice(0, 100) + '...'
                : blog.body}
            </div>
          </Link>
          {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;

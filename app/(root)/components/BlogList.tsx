import { blogList } from "@/mockdata";
import BlogItem from "./BlogItem";

const BlogList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
          {blogList.map((blog) => (
            <BlogItem
              title={blog.title}
              heading={blog.heading}
              creatorName={blog.creatorName}
            />
          ))}
          {/* Pager */}
          <ul className="pager">
            <li className="next">
              <a href="#">Older Posts →</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

"use client";
import { blogList } from "@/mockdata";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const CreateNewPostPage = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    creatorName: "",
  });
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!formData.title.length || !formData.creatorName.length) {
      setIsError(true);
      return;
    }
    blogList.push(formData);
    console.log(blogList);
    setIsError(false);
    router.push("/");
  };
  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="create-post">
      <h1>Create A New Post</h1>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="heading">Heading</label>
            <input
              type="text"
              id="heading"
              name="heading"
              className="form-control"
              placeholder="Heading"
              value={formData.heading}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Creator Name</label>
            <input
              id="creatorName"
              name="creatorName"
              type="text"
              className="form-control"
              placeholder="Creator Name"
              value={formData.creatorName}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-danger button">Cancel</button>
          <button type="submit" className="btn btn-success button">
            Submit
          </button>
        </form>
        {isError && (
          <p className="text-danger">
            Please input both title and creator name
          </p>
        )}
      </div>
    </div>
  );
};

export default CreateNewPostPage;

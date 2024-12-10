import React from "react";
import GalleryTemplate from "../templates/galleryview";
import postsData from "../dummy_data/blogposts.json";

// WritingPage component
const WritingPage = () => {
  // Define the header content
  const header = (
    <div className="writing-header">
      <h1>placeholder</h1>
      <p>These are all AI genereated to fill space (again, public sneaking in)</p>
    </div>
  );

  // Create Post Components from the posts data
  const postComponents = postsData.map((post, index) => (
    <div key={index} className="post-card">
      {/* Post Image */}
      <img src={post.image} alt={post.title} className="post-image" />

      {/* Post Content */}
      <div className="post-content">
        <h3 className="post-title">{post.title}</h3>
        <p className="post-date">{post.date}</p>
        <p className="post-author">By {post.author}</p>
        <p className="post-length">{post.length} words</p>
        <p className="post-excerpt">{post.excerpt}</p>
        <div className="post-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="post-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  ));

  return (
    <GalleryTemplate header={header} posts={postComponents} />
  );
};

export default WritingPage;
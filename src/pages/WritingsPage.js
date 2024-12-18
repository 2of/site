import React from "react";
import GalleryTemplate from "../templates/galleryview";
import postsData from "../dummy_data/blogposts.json";
import { ProjHeroCard } from "../components/ProjectCell";

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
  const postComponents2 = postsData.map((post, index) => (
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

  const postComponents = postsData.map((post, index) => (
    <ProjHeroCard project={post} key={index} />
  ));

  return <GalleryTemplate header_text={"Wordies"} header_desc={"Mostly AI Generated LARGE"} mini_header_desc={"Mostly AI Generated To fill space"} posts={postComponents} featured_index={0} colortheme={"blue"} />;
};

export default WritingPage;





// import React from "react";
// import projects from "../dummy_data/dummy_projects.json";
// import GalleryTemplate from "../templates/galleryview";
// import { ProjHeroCard } from "../components/ProjectCell";
// import { FeaturedItemGalleryView } from "../components/Featured_Gallery_view_Template";

// export const ProjPage = () => {
//   const header = (
//     <div className="pageHeader">
//       <span className="StandardpageHeader">Projects 🚀</span>
//       <p>
//         I'll add to this with time. As it currently stands, the best place to see my work is over at{" "}
//         <a href="https://github.com/2of" target="_blank" rel="noopener noreferrer">github.com/2of</a> 🔍. 
//       </p>
//       <p>
//         I've used gen AI 🤖 to fill out the descriptions, so they're not accurate (neither is the time taken ⏳).
//       </p>
//       <p>
//         But feel free to look around 👀, I'm still working on the TikTok-esque mobile view 📱.
//       </p>
//     </div>
//   );

//   const desc = (
//     <>
//      <p>
//         I'll add to this with time. As it currently stands, the best place to see my work is over at{" "}
//         <a href="https://github.com/2of" target="_blank" rel="noopener noreferrer">github.com/2of</a> 🔍. 
//       </p>
//       <p>
//         I've used gen AI 🤖 to fill out the descriptions, so they're not accurate (neither is the time taken ⏳).
//       </p>
//       <p>
//         But feel free to look around 👀, I'm still working on the TikTok-esque mobile view 📱.
//       </p>
//       </>
//   )

//   const FeaturedPost = <FeaturedItemGalleryView data = {projects[0]}/>

//   const postComponents = projects.map((post, index) => (
//     <ProjHeroCard project={post} key={index} />
//   ));

//   return <GalleryTemplate header_text={"Projects"} header_desc={desc} posts={postComponents} featured_post={FeaturedPost} featured_index={0} />;
// };



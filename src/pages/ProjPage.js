import React from "react";
import projects from "../dummy_data/dummy_projects.json";
import GalleryTemplate from "../templates/galleryview";
import { ProjHeroCard } from "../components/ProjectCell";
import { FeaturedItemGalleryView } from "../components/Featured_Gallery_view_Template";

export const ProjPage = () => {
  const header = (
    <div className="pageHeader">
      <span className="StandardpageHeader">Projects 🚀</span>
      <p>
        I'll add to this with time. As it currently stands, the best place to see my work is over at{" "}
        <a href="https://github.com/2of" target="_blank" rel="noopener noreferrer">github.com/2of</a> 🔍. 
      </p>
      <p>
        I've used gen AI 🤖 to fill out the descriptions, so they're not accurate (neither is the time taken ⏳).
      </p>
      <p>
        But feel free to look around 👀, I'm still working on the TikTok-esque mobile view 📱.
      </p>
    </div>
  );

  const desc = (
    <>
     <p>
        I'll add to this with time. As it currently stands, the best place to see my work is over at{" "}
        <a href="https://github.com/2of" target="_blank" rel="noopener noreferrer">github.com/2of</a> 🔍. 
      </p>
      <p>
        I've used gen AI 🤖 to fill out the descriptions, so they're not accurate (neither is the time taken ⏳).
      </p>
      <p>
        But feel free to look around 👀, I'm still working on the TikTok-esque mobile view 📱.
      </p>
      </>
  )

  const FeaturedPost = <FeaturedItemGalleryView data = {projects[0]}/>

  const postComponents = projects.map((post, index) => (
    <ProjHeroCard project={post} key={index} />
  ));

  return <GalleryTemplate header_text={"Projects"} header_desc={desc} mini_header_desc={"Links Coming Soon!"} posts={postComponents} featured_post={FeaturedPost} featured_index={0} />;
};

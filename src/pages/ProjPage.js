import React from "react";
import projects from "../dummy_data/dummy_projects.json";
import GalleryTemplate from "../templates/galleryview";
import { ProjHeroCard } from "../components/ProjectCell";

export const ProjPage = () => {
  const header = (
    <div className="writing-header">
      <h1>Projects 🚀</h1>
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

  const postComponents = projects.map((post, index) => (
    <ProjHeroCard project={post} key={index} />
  ));

  return <GalleryTemplate header={header} posts={postComponents} />;
};

import React from "react";
import { StillView } from "../templates/stillview"; // Assuming StillView is a template you use

export const AboutPage = () => { 
    return ( 
        <div className="StandardPageContainer">
            <h1>Hello there, I'm Noah</h1>
            <h2>This is the nitty gritty page</h2>


            <h2>this is aI generated placeholder text herein</h2>



            <p>Welcome to my personal website! I'm passionate about technology, AI, and machine learning. I'm currently working on exciting projects, including a city-scale GeoLocalization model, and have a particular interest in TensorFlow and other cutting-edge tools.</p>
            
            <h2>About Me</h2>
            <p>I'm a driven and enthusiastic AI and machine learning specialist with hands-on experience in building complex models and solving real-world problems. Currently, I'm pursuing a Master's in AI, and my capstone project involves using computer vision techniques like OCR, object detection, and scene analysis to predict geolocations from Google Street View images.</p>
            
            <h3>Skills and Technologies</h3>
            <ul>
                <li>Machine Learning & Deep Learning</li>
                <li>Python (with TensorFlow and Keras)</li>
                <li>AI Development (including natural language processing and computer vision)</li>
                <li>React, JavaScript, and Web Development</li>
                <li>SCSS for styling and frontend development</li>
                <li>Node.js and Backend Development</li>
                <li>Google Admin and Microsoft 365 Admin</li>
                <li>Windows Server and Networking (TCP/IP, DNS, DHCP)</li>
                <li>Cloud Infrastructure (AWS, GCP, Azure)</li>
                <li>Database management (MySQL, PostgreSQL, MongoDB)</li>
                <li>Virtualization (VMware, Hyper-V)</li>
                <li>Security and Compliance (VPN, MFA, firewalls, IAM)</li>
            </ul>

            <h3>IT Work Experience</h3>
            <p>In addition to my work in AI and machine learning, I’ve gained valuable experience working for a managed service provider, where I was responsible for supporting and maintaining a variety of IT services across multiple clients. My role involved working with Google Admin, Microsoft 365, Entra Tenant, Intune, and Windows Server. I became well-versed in managing user permissions, deploying devices, setting up networks, and securing cloud environments.</p>
            
            <p>My networking skills include configuring DNS, DHCP, VPNs, and managing firewalls. I have hands-on experience with both on-premise and cloud infrastructure, including cloud providers like AWS, GCP, and Azure. Additionally, I am familiar with security best practices, ensuring systems are properly configured, and complying with organizational policies.</p>
            
            <h3>Sales Experience</h3>
            <p>I also had a stint in sales, where I was responsible for understanding customer needs, negotiating contracts, and closing deals. This experience helped me develop strong communication skills, which I now use in collaborative work environments and when explaining complex technical concepts to non-technical stakeholders.</p>

            <h3>Projects</h3>
            <p>I'm continuously working on interesting projects. Here's a snapshot of a few:</p>
            <ul>
                <li>
                    <strong>Deep Learning GeoLocalization Model</strong>: Using pre-trained OCR, object detection, and scene analysis models to inform an attention-based model for geolocation prediction.
                </li>
                <li>
                    <strong>Responsive Portfolio Website</strong>: The very website you're browsing right now! Built with React, SCSS, and Node.js, it's designed to be responsive and robust across devices.
                </li>
                <li>
                    <strong>Semantic Chess Bot</strong>: A machine learning-based chess bot built using neural networks, trained on over 9 million games.
                </li>
                <li>
                    <strong>#1 Chrome Extension in NZ</strong>: A Chrome extension briefly became the #1 post on Reddit Aotearoa, solving a bug for a major New Zealand retailer.
                </li>
            </ul>

            <h3>Current Work</h3>
            <p>Right now, I'm deep into building a city-scale GeoLocalization model using TensorFlow, as well as creating tools that leverage machine learning in real-world applications.</p>

            <h3>Contact Me</h3>
            <p>Feel free to reach out to me at <a href="mailto:your.nhking4@gmail.com">your.nhking4@gmail.com</a> for any project inquiries or collaborations.</p>

            <StillView title={"ABOUT"} />
        </div>
    );
}
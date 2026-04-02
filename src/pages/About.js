import React from "react";
import myImage from "../assets/my_image.jpg";

function About() {
    return (
        <div className="about-container">

            {/* LEFT - IMAGE + LINKS */}
            <div className="about-image">
                <img src={myImage} alt="Atharva Mishra" />

                {/* LINKS BELOW IMAGE */}
                <div className="social-links">
                    <a
                        href="https://github.com/mishraatharva"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/atharva-mishra-222036216/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="about-content">
                <h2>About Me</h2>

                <p>
                    I am an <b>AI / Machine Learning Engineer</b> and{" "}
                    <b>Generative AI Developer</b> passionate about building intelligent
                    systems that solve real-world problems.
                </p>

                <p>
                    I specialize in <b>LLM-powered applications, AI agents, and end-to-end ML systems</b>.
                    My work includes building RAG systems, voice-enabled chatbots,
                    automated research agents, and deep learning models.
                </p>

                <p>
                    I have hands-on experience with tools like{" "}
                    <b>
                        Python, PyTorch, TensorFlow, Hugging Face, LangChain, LangGraph, and
                        LlamaIndex
                    </b>, along with vector databases such as FAISS, Pinecone, and ChromaDB.
                </p>

                <p>
                    Currently, I am focusing on <b>Cloud AI & MLOps</b> using AWS services
                    like SageMaker, EC2, Lambda, and Bedrock to build scalable AI systems.
                </p>

                {/* SKILLS */}
                <div className="skills">
                    <h3>Core Skills</h3>
                    <div className="skill-tags">
                        <span>Machine Learning</span>
                        <span>Deep Learning</span>
                        <span>NLP</span>
                        <span>Generative AI</span>
                        <span>Agentic AI</span>
                        <span>RAG</span>
                        <span>MCP</span>
                    </div>

                    <h3>Technologies</h3>
                    <div className="skill-tags">
                        <span>Python</span>
                        <span>PyTorch</span>
                        <span>TensorFlow</span>
                        <span>LangChain</span>
                        <span>LangGraph</span>
                        <span>scikit-learn</span>
                        <span>numpy</span>
                        <span>pandas</span>
                        <span>seaborn</span>
                        <span>matplotlib</span>
                        <span>LlamaIndex</span>
                        <span>Hugging Face</span>
                        <span>Transformers</span>
                    </div>

                    <h3>Cloud & Tools</h3>
                    <div className="skill-tags">
                        <span>AWS</span>
                        <span>SageMaker</span>
                        <span>FastAPI</span>
                        <span>Flask</span>
                        <span>Streamlit</span>
                        <span>GCP</span>
                        <span>Docker</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
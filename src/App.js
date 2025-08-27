import "./App.css";
import profilePic from "./assests/myProfile.jpg";
import resume from "./assests/Anushka_Chandurkar_Resume.pdf";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger/close icons

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">

      {/* Navbar */}
      <nav className="navbar">
      {/* Hamburger Button (visible on mobile) */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu Items */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
        <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <img
          src={profilePic}
          alt="Anushka Chandurkar"
          className="profile-img"
        />
        <h1>
          Hi, I'm <br />
          <span style={{ color: "rgba(129, 247, 247, 1)" }}>Anushka Chandurkar</span>
        </h1>
        <h2>
          Frontend Developer with 3 years of experience – turning ideas into interactive realities!
        </h2>
        <div className="buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="" className="btn" download={resume} >Download Resume </a>
        </div>
      </section>

      {/* About Section */}
      <section className="experience" id="experience">
        <h1>Professional Experience</h1>
        <div className="experience-list">
          <h3 style={{ color: "rgba(129, 247, 247, 1)" }}>Amdocs Technology – Frontend Developer</h3>
          <span><em>Aug 2022 – Present</em></span>
          <ul className="list-type">
            <li>
              Developed and delivered end-to-end features for a B2C web application using
              <strong> React.js, JavaScript (ES6+), Redux, and MUI</strong>, ensuring scalable and maintainable code.
            </li>
            <li>
              Integrated <strong>REST APIs</strong> and translated Figma designs into responsive UI across
              desktop, tablet, and mobile resolutions.
            </li>
            <li>
              Retrofitted existing codebase, reducing code size by <strong>70%</strong> and improving
              page load performance significantly.
            </li>
            <li>
              Resolved over <strong>150+ critical bugs</strong> to ensure application stability and
              seamless parallel development.
            </li>
            <li>
              Implemented reusable components with <strong>React Hooks</strong> to improve maintainability
              and user experience.
            </li>
            <li>
              Collaborated closely with backend and design teams to meet project deadlines and deliver
              high-quality, customer-focused solutions.
            </li>
          </ul>

          <h3 style={{ color: "rgba(129, 247, 247, 1)" }}>Cyberathon Technology - Intern</h3>
          <span><em>Jan 2022 – Jul 2022</em></span>
          <ul className="list-type">
            <li>Built a <strong> Basic Banking System </strong> using <strong> HTML, CSS, Bootstrap, and JavaScript.  </strong></li>
            <li>Enabled money transfers between limited users and <strong>maintained transaction history. </strong>
            </li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h1>Skills</h1>
        <small style={{ fontWeight: "bold" }}>Tech Stack</small>
        <div className="skill-list">
          {["HTML5", "CSS3", "React.js", "JavaScript (ES6+)", "Redux", "MUI"].map(
            (skill, i) => (
              <span key={i} className="skill">{skill}</span>
            )
          )}
        </div>
        <div className="additional-skills">
          <small style={{ fontWeight: "bold" }}>Some additonal skill set</small>
          <div className="skill-list">
            {["GIT", "Figma", "Postman", "Jenkins"].map(
              (skill, i) => (
                <span key={i} className="skill">{skill}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h1>Projects</h1>
        <div className="project-list">
          <div className="project">
            <h3>AI Chat Assistant</h3>
            <p>Built an AI-powered chatbot using React.js and OpenAI API.</p>
          </div>
          <div className="project">
            <h3>Banking System</h3>
            <p>Developed a mini banking system with transactions using JS.</p>
          </div>
          <div className="project">
            <h3>Finance Dashboard</h3>
            <p>Created a finance dashboard with expense tracking & charts.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h1>Let's Connect</h1>
        <p style={{ fontSize: "18px" }}>Open to conversations that spark creativity and impact.<br></br> Reach out anytime to discuss collaborations, innovative projects, or exploring new opportunities.</p>
        <div className="links">
          <h3>Email</h3>
          <a href="mailto:anushkac2301@gmail.com">anushkac2301@gmail.com</a>
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/anushka-chandurkar-a0a0901b5" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/anushka-chandurkar-a0a0901b5
          </a>
          <h3>Github</h3>
          <a href="https://github.com/anushkach01" target="_blank" rel="noopener noreferrer">
            github.com/anushkach01
          </a>
          <h3>Contact </h3>
          <a href="tel:+91 9763193283">+91 97631 93283</a>
        </div>
      </section>

      <section className="footer">
        <h4>© 2025 Anushka Chandurkar. All rights reserved.</h4>
        <p>Frontend Developer</p>
      </section>
    </div>
  );
}

export default App;
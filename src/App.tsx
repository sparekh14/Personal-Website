import { SetStateAction, useState } from 'react'
import './App.css'

// Navbar component
const Navbar = () => {
  // Navbar state
  const [activeLink, setActiveLink] = useState('');

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Education', href: '#education' },
    { title: 'Projects', href: '#projects' },
    { title: 'Activities', href: '#activities' },
    { title: 'Contact', href: '#contact' }
  ];

  const handleNavLinkClick = (href: SetStateAction<string>) => {
    setActiveLink(href);
  };

  return (
    <div className="navbar" id="home">
      <strong>
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={activeLink === link.href ? 'active' : ''}
            onClick={() => handleNavLinkClick(link.href)}
          >
            {link.title}
          </a>
        ))}
      </strong>
    </div>
  );
};

// About component
const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="titles">
                About Me
      </h1>
      <div className="personal-info left-panel">
          <ul>
              <li>
                  <strong>Name:</strong> Samarth Parekh
              </li>
              <li>
                  <strong>Age:</strong> 19 Years
              </li>
              <li>
                  <strong>School:</strong> University of Maryland
              </li>
              <li>
                  <strong>Major:</strong> Computer Science
              </li>
              <li>
                  <strong>Hometown:</strong> Edison, NJ
              </li>
          </ul>
      </div>

      <div className="personal-bio right-panel">
          <p className="bio-text">
              As a dedicated computer science enthusiast, I thrive on crafting elegant solutions to complex problems,
              leveraging my solid foundation in software development and passion for innovation. Beyond coding,
              I find inspiration in creative pursuits such as delving into thought-provoking novels, capturing the
              beauty of the world through photography, and immersing myself in the harmonies of classical music.
              Committed to contributing meaningfully to the tech community, I advocate for collaboration, mentor
              aspiring developers, participate in open-source projects, and champion diversity and inclusion in tech.
              Welcome to my digital corner, where I share my journey, projects, and insights with you.
          </p>

          <p className="bio-text">
              In my free time, I enjoy a variety of hobbies that enrich my life and provide balance to my passion for
              technology. I find solace in the pages of captivating scientific books, exploring the intricate worlds
              that our universe has to offer. Additionally, I cherish watching and playing sports, particularly soccer
              and cricket, which allow me to unwind and connect with friends.  These hobbies not only serve as
              creative outlets but also rejuvenate my mind and spirit, enabling me to approach challenges with
              renewed energy and enthusiasm.
          </p>
      </div>
    </div>
  );
};

// Education component
const Education = () => {
  const divStyle = {
    animationDelay: '0.1s',
    animationName: 'fadeInUp'
  };

  return (
    <div className="education" id="education">
      <h1 className="titles">
                Education
            </h1>

      <div className="education-info">
                <ul className="timeline">
                    <li>
                        <div className="wow fadeInUp timeline-content animated" data-wow-delay="0.1s">

                            <h4>University of Maryland</h4>
        
                            <em>
                                <span>Bachelors Degree</span>
                                <span> | </span>
                                <span>2023 - Present</span>
                            </em>
                            <p><b>Major:</b> Computer Science</p>
                            <p><b>Minor:</b> Mathematics</p>
                            <p>
                                <b>Relevant coursework:</b> Object Oriented Programming I & II, Discrete Structures,
                                Computer Systems, Linear Algebra, Applied Probability and Statistics,
                                Innovation & Research, Calculus I, II, & III, Organization of Programming Languages,
                                Algorithms
                            </p>
        
                        </div>
                    </li>
                    <li>
                        <div className="wow fadeInUp timeline-content animated" data-wow-delay="0.1s" style={divStyle}>

                            <h4>John P. Stevens High School</h4>
        
                            <em>
                                <span>High School Diploma</span>
                                <span> | </span>
                                <span>2019 - 2023</span>
                            </em>
                            <p>
                               <b>Awards & Extracurriculars: </b>
                               <p>
                                Physics Club (Co-President &amp Educator), National Honor Society (President), Coding Club
                                (ML-Educator)
                               </p>
                               <p>
                                Bilingual Certification (Spanish), AP Scholar with Distinction, National Merit Commended
                                Scholar
                               </p>
                            </p>
        
                        </div>
                    </li>
                </ul>
            </div>
    </div>
  );
};

// Projects component
const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="titles">
                Projects
            </h1>

            <ul className="project-list">
                <li>
                    <h3>Brain Boost | Mental Health Journaling App</h3>
                    <p>Built a journaling app to allow users to improve their mental health through daily journaling use as suggested by studies.</p>
                    <p>Technologies used: Swift, Firebase, SwiftUI</p>
                    <p>Awards: Won "Best Mental Health Hack" at HealthHacks hosted by UPenn</p>
                </li>
                <li>
                    <h3>Sam's Blog | User-Based Blogging Web App</h3>
                    <p>Implemented an MVC software design pattern to develop a web-based blogging application using the ASP.NET framework.</p>
                    <p>Technologies used: C#, ASP.NET, SQLite, JavaScript, HTML/CSS</p>
                </li>
                <li>
                    <h3>MyPA | Personal Voice Assistant</h3>
                    <p>Developed a mini personal voice assistant that engages with the user in an interactive manner, providing various functionalities.</p>
                    <p>Technologies used: Python</p>
                </li>
                <li>
                    <h3>I See You | Face Recognition Software</h3>
                    <p>Utilized the OpenCV to provide for a face-recognition software through the Haar Cascade algorithm.</p>
                    <p>Technologies used: Python, OpenCV</p>
                </li>
                <li>
                    <h3>SportsPros | Sports News Application</h3>
                    <p>Launched an app to the App Store to allow for community-wide engagement in the sports world.</p>
                    <p>Technologies used: Swift, Firebase, SwiftUI</p>
                </li>
                <li>
                    <h3>AutoBots | Task Automation Bots</h3>
                    <p>Employed Python's bs4 library to write automated scripts that track stock prices and products prices for personal use.</p>
                    <p>Technologies used: Python</p>
                </li>
            </ul>
    </div>
  );
};

// Interests component
const Interests = () => {
  return (
    <div className="interests" id="activities">
      <h1 className="titles">
                Hobbies and Interests
            </h1>

            <div className="interests-info">
                <ul className="interests-list">
                    <li><strong>Reading:</strong> Non-Fiction, Realistic Fiction, Autobiographies/Biographies</li>
                    <li><strong>Music:</strong> Pop, Country, Bollywood</li>
                    <li><strong>Sports:</strong> Soccer, Cricket, Football</li>
                    <li><strong>Outdoors:</strong> Biking, Hiking, Running</li>
                </ul>
            </div>
    </div>
  );
};

// Contact component
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="titles">
                Contact
            </h1>

            <div>
                <ul className="contact-info">
                    <li><a href="mailto:parekh.samarth@gmail.com"><strong>Email</strong></a></li>
                    <li><a href="https://www.linkedin.com/in/samarthparekh/"><strong>LinkedIn</strong></a></li>
                    <li><a href="http://github.com/sparekh14"><strong>GitHub</strong></a></li>
                </ul>
            </div>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Interests />
      <Contact />
    </div>
  );
};

export default App;

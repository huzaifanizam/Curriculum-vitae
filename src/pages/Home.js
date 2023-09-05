import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Huzaifa
              <span class="text-primary">Nizam</span>
            </h1>
            <div class="subheading mb-5">
              Karachi, Pakiistan <a href="callto: 03102831100">0310-2831100</a>  ·
              <a href="mailto: nizamhuzaifa@email.com">nizamhuzaifa@email.com</a>
            </div>
            <p class="lead mb-5">
              Developer who haspassion for web and app technologies, always
              ready to learn new technologies and to work on them, my first
              priority is to give my best in terms of what i have and indulge
              you at every level.
            </p>
            <div class="social-icons">
              <a class="social-icon" href=" https://www.linkedin.com/in/huzaifa-nizam-741631264">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/huzaifanizam">
                <i class="fab fa-github">G</i>
              </a>
              <a class="social-icon" href="https://instagram.com/huzaifa_nizam?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D">
                <i class="fab fa-instagram">Tr</i>
              </a>
              <a class="social-icon" href="https://www.facebook.com/huzaifa.nizam.3?mibextid=ZbWKwL">
                <i class="fab fa-facebook-f">F</i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Senior Web Developer</h3>
                <div class="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation X is on the runway
                  heading towards a streamlined cloud solution. User generated
                  content in real-time will have multiple touchpoints for
                  offshoring.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">March 2013 - Present</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Web Developer</h3>
                <div class="subheading mb-3">Intelitec Solutions</div>
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">December 2011 - March 2013</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Junior Web Designer</h3>
                <div class="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Podcasting operational change management inside of workflows
                  to establish a framework. Taking seamless key performance
                  indicators offline to maximise the long tail. Keeping your eye
                  on the ball while performing a deep dive on the start-up
                  mentality to derive convergence on cross-platform integration.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">July 2010 - December 2011</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">Web Design Intern</h3>
                <div class="subheading mb-3">Shout! Media Productions</div>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualize customer
                  directed convergence without revolutionary ROI.
                </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">September 2008 - June 2010</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Virtual University of Pakistan</h3>
                <div class="subheading mb-3">Bachelor of Business</div>
                <div> Bachelors of Business Administration - BBA</div>
                {/* <p>GPA: 3.23</p> */}
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2023 - Present</span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">Govt.Comprehensive Higher Sec School For Boys</h3>
                <div class="subheading mb-3">Board of Intermediate Education Karachi</div>
                <div>HSC in Pre engineering</div>
                {/* <p>GPA: 3.23</p> */}
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">August 2021 - 2022</span>
              </div>
            </div>

            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">MUHAMMADI GRAMMER SCHOOL</h3>
                <div class="subheading mb-3">Board of Secondary Education Karachi</div>
                <div>HSC in Pre engineering</div>
                {/* <p>GPA: 3.56</p> */}
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary"> - September 2020</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">


              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              {/* <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li> */}
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              {/* <li class="list-inline-item">
                <i class="fab fa-sass"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-less"></i>
              </li> */}
              <li class="list-inline-item">
                <i class="fab fa-wordpress"></i>
              </li>
              {/* <li class="list-inline-item">
                <i class="fab fa-gulp"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-grunt"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-npm"></i>
              </li> */}
            </ul>


            <div class="subheading mb-3">Workflow</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Agile Development & Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
              Apart from being a web developer, I enjoy most of my time being
              outdoors. In the winter, I am an avid skier and novice ice
              climber. During the warmer months here in Colorado, I enjoy
              mountain biking, free climbing, and kayaking.
            </p>
            <p class="mb-0">
              When forced indoors, I follow a number of sci-fi and fantasy genre
              movies and television shows, I am an aspiring chef, and I spend a
              large amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
        <hr class="m-0" />
        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              {/* <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Google Analytics Certified Developer
              </li> */}
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                English Works Program - At U.S Embassy Islamabad and implemented by NED University - 2023
              </li>

              {/* <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - University of Colorado Boulder - Emerging Tech
                Competition 2009
              </li> */}

              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>              
                Apprrciation Award - SPEAK & SPELL Coaching Center - 2022
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                Place - MUHAMMADI GRAMMER SCHOOL - 2011
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                2<sup>nd</sup>
                Place - MUHAMMADI GRAMMER SCHOOL - 2010
              </li>



              {/* <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                3<sup>rd</sup>
                Place - James Buchanan High School - Hackathon 2005
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

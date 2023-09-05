import React from "react";
import Header from "../components/Header";

const Award = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
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

export default Award;

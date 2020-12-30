import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Internship at Index Exchange <span>2021-present</span></h2>
                        <p>I recently have joined Index Exchange as a Software Developer-Intern. Index Exchange is a global advertising marketplace where premium digital media companies sell their ad impressions with accountability and in real time.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate Teaching Assistant<span> 2020-2020</span></h2>
                        <p>During my tenure as a student at Dalhousie University, I got the opportunity to work as a Graduate Teaching Assistant for Advanced Topics in Software Development course which involved mentoring students to build a hockey simulation
game while following Clean Code principles, Design Patterns and other best practices.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Masters in Applied Computer Science<span> 2020-2021</span></h2>
                        <p>The Master's of Applied Computer Science program at Dalhousie exposed me to trending fields in Computer Science viz. Visual Analytics, Android Development, Advanced Topics in Cloud Computing, and similar other courses.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Software Consultant at Capiot<span> 2018-2019</span></h2>
                        <p>After six months of my service at Capiot, I was promoted to Associate Software Consultant. I acted as a Scrum Master and Team-Lead for a banking project.
My responsibilities while working in this project spanned from requirement gathering, conducting scrum meeting with Junior Consultants, designing, developing and deploying back-end web-application.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Junior Software Consultant at Capiot<span> 2017-2018</span></h2>
                        <p>As a Junior Software Consultant I had the opportunity to work at a travel project from scratch wherein I designed and developed an orchestration engine and an efficient ELK system for log visualizations.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Associate Software Developer at Accenture<span> 2016-2017</span></h2>
                        <p>After graduating as a Computer Engineer, I kickstarted my career as an Associate Developer at Accenture. At Accenture, I automated the manual tasks by creating efficient scripts and thereby helping clients grow their business.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelors in Computer Engineering<span> 2012-2016</span></h2>
                        <p>My journey in Computer Science started with Vivekenand Education Society's Institute of Technology where I acquired knowledge about different computer science domains like Web Development, Distributed Databases, Data Structures, Analysis of Algorithms, Computer Networks, Machine Learning, Artificial Intelligence and Data Warehousing. </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (<section className="colorlib-skills" data-section="skills">
    <div className="colorlib-narrow-content">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <span className="heading-meta">My Specialty</span>
          <h2 className="colorlib-heading animate-box">My Skills</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
          <p>As a Software Developer and A Computer Science Student, I have worked with a lot of different technologies. These technologies have ranged from Software Development to Machine Learning. Out of these my main focus has been on the backend and deployment side of things.</p>
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <div className="progress-wrap">
            <h3>Java</h3>
            <div className="progress">
              <div className="progress-bar color-1" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
          <div className="progress-wrap">
            <h3>Apache Camel</h3>
            <div className="progress">
              <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                <span>90%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <div className="progress-wrap">
            <h3>Docker</h3>
            <div className="progress">
              <div className="progress-bar color-3" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                <span>80%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
          <div className="progress-wrap">
            <h3>Spring Boot</h3>
            <div className="progress">
              <div className="progress-bar color-2" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                <span>80%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
          <div className="progress-wrap">
            <h3>Node.js</h3>
            <div className="progress">
              <div className="progress-bar color-5" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} style={{width: '70%'}}>
                <span>70%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
          <div className="progress-wrap">
            <h3>Python</h3>
            <div className="progress">
              <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '50%'}}>
                <span>50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
  }
}
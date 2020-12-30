import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return ( 
            <div>
            <section className="colorlib-about" data-section="about">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12">
									<div className="about-desc">
										<span className="heading-meta">About Me</span>
										<h2 className="colorlib-heading">Who Am I?</h2>
										<p>With over three years of Java Development experience in different business domains, I am eager to apply my skills to a new challenge. As an individual with a Problem-Solving mindset, I am eager to join an organization which offers opportunities for individual growth, recognizes unique contributions, provides a sense of purpose, and offers a fun and flexible work environment.</p>
										<p>As a Software Developer, my goal is to continually improve my programming skills in order to present better solutions to my employers and their clients. I enjoy uncovering new ideas and would use them to accelerate the transformation of core processes for my client's businesses.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
									<div className="services color-1">
										<span className="icon2"><i className="icon-code-outline"></i></span>
										<h3>Backend Development</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
									<div className="services color-2">
										<span className="icon2"><i className="icon-tag3"></i></span>
										<h3>Scrum Master</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
									<div className="services color-3">
										<span className="icon2"><i className="icon-data"></i></span>
										<h3>Database Design</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-4">
										<span className="icon2"><i className="icon-flow-switch"></i></span>
										<h3>Continuous Integration and Continuous Deployment</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-5">
										<span className="icon2"><i className="icon-cloud3"></i></span>
										<h3>Cloud Setup and Deployment</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-6">
										<span className="icon2"><i className="icon-point-of-interest"></i></span>
										<h3>Machine Learning </h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-1">
										<span className="icon2"><i className="icon-chart-pie"></i></span>
										<h3>Visual Analytics</h3>
									</div>
								</div>
								<div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
									<div className="services color-2">
										<span className="icon2"><i className="icon-html-five2"></i></span>
										<h3>Frontend Enthusiast</h3>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
									<div className="hire">
										<h2>I am always Open to learning new Technlogies!<br/><br/>
										Check Out my latest Project to analyze Traffic Accidents in UK using Machine Learning.</h2>
										<a href="http://129.173.67.228/80" target="_blank" rel="noopener noreferrer" className="btn-hire">Visit Dashboard</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
            </div>
        )
    }
}
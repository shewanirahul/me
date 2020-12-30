import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/movieBuddy.png)', border: '2px solid black'}}>
									<div className="desc">
										<div className="con" style={{backgroundImage: 'url(images/img-1.gif)', backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'}}>
											<h3><a href="https://git.cs.dal.ca/shewani/moviebuddy" target="_blank" rel="noopener noreferrer">Movie Buddy</a></h3>
											<span>Mobile Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/user-groups.jpg)', border: '2px solid black'}}>
									<div className="desc">
									<div className="con" style={{backgroundImage: 'url(images/GroupFormation.gif)', backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'}}>
											<h3><a href="https://git.cs.dal.ca/courses/2020-summer/csci5308/group23" style={{ color: 'Black'}} target="_blank" rel="noopener noreferrer">Group Formation Tool</a></h3>
											<span>Animation</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/ecommerce.png)', border: '2px solid black'}}>
									<div className="desc">
									<div className="con" style={{backgroundImage: 'url(images/Ecommerce3.gif)', backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'}}>
											<h3><a href="https://git.cs.dal.ca/prashantk/watches4you" target="_blank" rel="noopener noreferrer">Watches4You</a></h3>
											<span>E-Commerce Web Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/sentiment-analysis.jpg)', border: '2px solid black'}}>
									<div className="desc">
									<div className="con" style={{backgroundImage: 'url(images/twittercelebration.gif)', backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'}}>
										<h3><a href="https://github.com/meetachanchlani/SentimentSemanticAnalysis" target="_blank" rel="noopener noreferrer">Twitter Data Semantic and Sentiment Analysis</a></h3>
											<span>Python Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/trafficData.jpg)', border: '2px solid black'}}>
									<div className="desc">
									<div className="con" style={{backgroundImage: 'url(images/traffic-accident.gif)', backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'}}>
										<h3><a href="https://git.cs.dal.ca/shewani/uk-traffic-accidents-data-analysis" target="_blank" rel="noopener noreferrer">UK Traffic Accidents Data Analysis</a></h3>
											<span>Dash and Python Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/BMClogo.jpg)', border: '2px solid black'}}>
									<div className="desc">
									<div className="con" style={{backgroundImage: 'url(images/chores.gif)', backgroundPosition: 'center',
											backgroundSize: 'cover',
											backgroundRepeat: 'no-repeat'}}>
										<h3><a href="https://git.cs.dal.ca/pparmar/BookMyChore" target="_blank" rel="noopener noreferrer">BookMyChore</a></h3>
											<span>Mobile Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
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

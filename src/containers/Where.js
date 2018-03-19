import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

const propTypes = {};

class Where extends Component {
	render() {
		return (
			<div id="where" className="where">
				<div className="container">
					<div className="row">
						<div className="col-5 text-right">
							<h5>Where have I been?</h5>
							<h1>My history</h1>
							<p>A brief timeline of where I have been and what I have done.</p>
						</div>
						<div className="col-7 timeline">
							<Zoom>
								<div className="item white">
									<div className="row">
										<div className="col-6">
											<p><strong>Amsterdam, Netherlands</strong></p>
											<p>2017 - 2018</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Front-end Developer</strong></p>
										</div>
										<hr />
									</div>
									<p>I am currently working as a Web Developer for Woof Creative. My role in this position is mainly focused on front-end construction and updates of clients websites. However the job also includes a lot of back-end debugging and database work.</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item gray">
									<div className="row">
										<div className="col-6">
											<p><strong>Melbourne, Australia</strong></p>
											<p>2015 - 2017</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Web Developer</strong></p>
										</div>
										<hr />
									</div>
									<p>I am currently working as a Web Developer for Woof Creative. My role in this position is mainly focused on front-end construction and updates of clients websites. However the job also includes a lot of back-end debugging and database work.</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item gold">
									<div className="row">
										<div className="col-6">
											<p><strong>Melbourne, Australia</strong></p>
											<p>2014 - 2015</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Web Design & Development</strong></p>
										</div>
										<hr />
									</div>
									<p>
										Redesign of the website for a business management company. The original website was very out of date and restricted potential clients from accessing information on the business. I recreated the website into a responsive design that could be easily accessed on all platforms.
								</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item gray">
									<div className="row">
										<div className="col-6">
											<p><strong>Port Douglas, Australia</strong></p>
											<p>2014</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Web Design & Development</strong></p>
										</div>
										<hr />
									</div>
									<p>
										During my time living in Port Douglas, Australia I worked as a freelancer alongside a job working as a waitress/bartender. I found multiple web projects through networking and online freelancer websites. These projects enhanced my skills in communication as a lot of the clients were based overseas and could only be contacted through email/phone.
								</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item gold">
									<div className="row">
										<div className="col-6">
											<p><strong>North America/London/Scotland</strong></p>
											<p>2013 - 2014</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Web Design & Development</strong></p>
										</div>
										<hr />
									</div>
									<p>
										Throughout my travels I would pick up small freelance jobs while also working on the side in bars and restaurants. I started out only doing web design projects but found a love for coding, so during this time I also continued to enhance my skills in front-end development.
								</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item white">
									<div className="row">
										<div className="col-6">
											<p><strong>Christchurch, New Zealand</strong></p>
											<p>2012 - 2014</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Web Design & Development</strong></p>
										</div>
										<hr />
									</div>
									<p>
										During this time I picked up my first ever web design/development work for Louise Anderson Bridal Designs. The work involved a redesign of the clients bridal gown website. Working for Louise enhanced my communication skills as I learnt how to listen and be understanding of others opinions and ideas.
								</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item gray">
									<div className="row">
										<div className="col-6">
											<p><strong>Christchurch, New Zealand</strong></p>
											<p>2012</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Web Design Tutor</strong></p>
										</div>
										<hr />
									</div>
									<p>
										While I was studying at the polytechnic, I was chosen to create peer support classes in DreamWeaver and web design. I felt like my level of knowledge in DreamWeaver and HTML was high enough to teach to first year students, however it also encouraged me to keep learning myself so I could teach even more.
								</p>
								</div>
							</Zoom>
							<Zoom>
								<div className="item white">
									<div className="row">
										<div className="col-6">
											<p><strong>Christchurch, New Zealand</strong></p>
											<p>2010 - 2013</p>
										</div>
										<div className="col-6 text-right">
											<p><strong>Bachelor of Visual Communications</strong></p>
										</div>
										<hr />
									</div>
									<p>
										I studied for 3 years in Christchurch to complete a Bachelor of Visual Communications. A large focus of my degree was on Graphic Design, however in my final year I feel in love with the web and began coding. Since graduating I followed my passion for coding and have been self teaching myself ever since.
								</p>
								</div>
							</Zoom>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Where.propTypes = propTypes;

export default Where;
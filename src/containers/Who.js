import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

const propTypes = {};

class Who extends Component {
	render() {
		return (
			<div id="who" className="who">
				<div className="container">
					<div className="row">
						<div className="col-5"></div>
						<div className="col-7">
							<Fade><h5>Who am I?</h5></Fade>
							<Fade><h1>About Me</h1></Fade>
							<Fade>
								<p>Hello, welcome to my website!  <br />
									I'm Meghan, a developer/designer from <b>Christchurch, New Zealand</b>. <br /><br />
									I love to create things and development is my output. <br />
									For the past 5 years I have been working as a Front-end Developer. Working on a range of websites and web-based software.<br />
									I have created this site to showcase what I love to do and to let you get to know a bit about me!</p>
							</Fade>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

Who.propTypes = propTypes;

export default Who;
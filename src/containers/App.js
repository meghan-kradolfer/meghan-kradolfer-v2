import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';

import { select } from '../actions/global/select';
import Nav from "../components/Nav";
import Home from "../containers/Home";
import Who from "../containers/Who";
import What from "../containers/What";
import Work from "../containers/Work";

function mapStateToProps(state) {
	return {
		selected: state.selected
	};
}

const propTypes = {
	select: PropTypes.func,
	selected: PropTypes.string
};

class App extends Component {
	render() {
		return (
			<div>
				<Nav>
					<Link className="nav-item" to="home" spy={true} smooth={true} duration={1000}>
						Home
					</Link>
					<Link className="nav-item" to="who" spy={true} smooth={true} duration={1000}>
						Who I am
					</Link>
					<Link className="nav-item" to="what" spy={true} smooth={true} duration={1000}>
						What I offer
					</Link>
					<Link className="nav-item" to="work" spy={true} smooth={true} duration={1000}>
						What I've done
					</Link>
					<Link className="nav-item" to="what" spy={true} smooth={true} duration={1000}>
						Where I've been
					</Link>
					<Link className="nav-item" to="what" spy={true} smooth={true} duration={1000}>
						How to contact
					</Link>
				</Nav>
				<main>
					<Home />
					<Who />
					<What />
					<Work />
                </main>
			</div>
		);
	}
}

App.propTypes = propTypes;

export default connect(mapStateToProps, { select })(App);
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
import Where from "../containers/Where";
import How from "../containers/How";

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
						Who
					</Link>
					<Link className="nav-item" to="what" spy={true} smooth={true} duration={1000}>
						What
					</Link>
					<Link className="nav-item" to="work" spy={true} smooth={true} duration={1000}>
						Work
					</Link>
					<Link className="nav-item" to="where" spy={true} smooth={true} duration={1000}>
						Where
					</Link>
					<Link className="nav-item" to="how" spy={true} smooth={true} duration={1000}>
						How
					</Link>
				</Nav>
				<main>
					<Home />
					<Who />
					<What />
					<Work />
					<Where />
					<How />
				</main>
			</div>
		);
	}
}

App.propTypes = propTypes;

export default connect(mapStateToProps, { select })(App);
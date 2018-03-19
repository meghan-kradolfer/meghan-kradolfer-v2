import React from 'react';
import PropTypes from 'prop-types';
import Icon from "./Icon";

const propTypes = {
    children: PropTypes.any
};

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggle: false
        };
    }
    toggle() {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    render() {
        return (
            <section className="navigation">
                <div className="logo-nav">
                    <Icon icon="logo" className="logo" />
                </div>
                <div className={`menu-nav ${this.state.toggle ? 'open' : 'close'}`}>
                    {this.props.children}
                </div>
                <div className={`toggle ${this.state.toggle ? 'open' : 'close'}`} onClick={this.toggle}>
                    <Icon icon="menu" />
                </div>
            </section>
        )
    }
}

Nav.propTypes = propTypes;

export default Nav;
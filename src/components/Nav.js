import React from 'react';
import PropTypes from 'prop-types';
import Icon from "./Icon";
import ReactGA from 'react-ga';

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
        if(!this.state.toggle) {
            ReactGA.event({
                category: 'Button Links',
                action: 'Clicked',
                label: 'Navigation'
              });
        }
        this.setState({toggle: !this.state.toggle})
    }
    render() {
        return (
            <section className="navigation">
                <div className="logo-nav">
                    <Icon icon="logo" className="logo" />
                </div>
                <div className={`menu-nav ${this.state.toggle ? 'open' : 'close'}`} >
                    {React.Children.map(this.props.children, child => React.cloneElement(child, {onClick: this.toggle}))}
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
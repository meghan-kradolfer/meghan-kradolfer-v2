import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import Icon from "../components/Icon";

const propTypes = {};

class How extends Component {
    render() {
        return (
            <div id="how" className="how">
                <div className="container center">
                    <div className="row text-center">
                        <div className="col-12">
                            <h5>How to contact me?</h5>
                            <h1>Get in touch</h1>
                            <p>I am currently located in the Netherlands <br /> but wherever you are in the world feel free to drop me a line.</p>
                            <p>meghan.kradolfer@gmail.com</p>
                            <p>+31630694107</p>
                            <div className="social">
                                <Zoom>
                                    <a href="https://www.facebook.com/meghan.kradolfer" target="_blank" rel="noopener noreferrer">
                                        <Icon icon="facebook" />
                                        <span className="hide">facebook</span>
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a href="https://instagram.com/meghankradolfer/" target="_blank" rel="noopener noreferrer">
                                        <Icon icon="instagram" />
                                        <span className="hide">instagram</span>
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a href="https://www.linkedin.com/in/meghan-kradolfer" target="_blank" rel="noopener noreferrer">
                                        <Icon icon="linkedin" />
                                        <span className="hide">linkedin</span>
                                    </a>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

How.propTypes = propTypes;

export default How;
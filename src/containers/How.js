import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import ReactGA from 'react-ga';

import Icon from "../components/Icon";

const propTypes = {};

class How extends Component {
    onSocialLink(social) {
        ReactGA.event({
			category: 'Social Media Links',
			action: 'Clicked',
			label: social
		});
    }
    render() {
        return (
            <div id="how" className="how">
                <div className="container center">
                    <div className="row text-center">
                        <div className="col-12">
                            <h5>How to contact me?</h5>
                            <h1>Get in touch</h1>
                            <p>I am currently located in the Netherlands <br /> but wherever you are in the world feel free to drop me a line.</p>
                            <p><a href="mailto: &#109;&#101;&#103;&#104;&#097;&#110;&#046;&#107;&#114;&#097;&#100;&#111;&#108;&#102;&#101;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?subject=Enquiry from website">&#109;&#101;&#103;&#104;&#097;&#110;&#046;&#107;&#114;&#097;&#100;&#111;&#108;&#102;&#101;&#114;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></p>
                            <p>+64220499306</p>
                            <div className="social">
                                <Zoom>
                                    <a href="https://www.facebook.com/meghan.kradolfer" target="_blank" rel="noopener noreferrer" onClick={() => this.onSocialLink('facebook')}>
                                        <Icon icon="facebook" />
                                        <span className="hide">facebook</span>
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a href="https://instagram.com/meghankradolfer/" target="_blank" rel="noopener noreferrer" onClick={() => this.onSocialLink('instagram')}>
                                        <Icon icon="instagram" />
                                        <span className="hide">instagram</span>
                                    </a>
                                </Zoom>
                                <Zoom>
                                    <a href="https://www.linkedin.com/in/meghan-kradolfer" target="_blank" rel="noopener noreferrer" onClick={() => this.onSocialLink('linkedin')}>
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
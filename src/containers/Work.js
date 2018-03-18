import React, { Component } from 'react';

const propTypes = {};

class Work extends Component {
	render() {
		return (
			<div id="work" className="work">
               <div className="container">
				<div className="row text-center">
                    <div className="col-12">
                        <h5>What have I done?</h5>
                        <h1>My work</h1>
                        <p>A small collection of my most recent website work. <br />More examples available upon request.</p>
                    </div>
				</div>
                <div className="row">
					<div className="col-7">
                        <img src="./images/clients/abchomes.png" />
                    </div>
					<div className="col-5">
                        <div className="label">
                            <h4>ABC Homes</h4>
                            <p>Woof Creative | 2016</p>
                        </div>
                    </div>
				</div>
                <div className="row">
					<div className="col-5">
                        <div className="label text-right">
                            <h4>Heartridge Floors</h4>
                            <p>Woof Creative | 2016</p>
                        </div>
                    </div>
					<div className="col-7">
                        <img src="./images/clients/heartridge.png" />
                    </div>
				</div>
                <div className="row">
					<div className="col-7">
                        <img src="./images/clients/manager.png" />
                    </div>
					<div className="col-5">
                        <div className="label">
                            <h4>Simonds Homes Manager</h4>
                            <p>Woof Creative | 2016</p>
                        </div>
                    </div>
				</div>
                <div className="row">
					<div className="col-5">
                        <div className="label text-right">
                            <h4>Simonds Homes Masterpiece</h4>
                            <p>Woof Creative | 2016</p>
                        </div>
                    </div>
					<div className="col-7">
                        <img src="./images/clients/masterpiece.png" />
                    </div>
				</div>
                <div className="row">
					<div className="col-7">
                        <img src="./images/clients/simonds.png" />
                    </div>
					<div className="col-5">
                        <div className="label">
                            <h4>Simonds Homes</h4>
                            <p>Woof Creative | 2016</p>
                        </div>
                    </div>
				</div>
                <div className="row">
					<div className="col-5">
                        <div className="label text-right">
                            <h4>Springfox</h4>
                            <p>Woof Creative | 2016</p>
                        </div>
                    </div>
					<div className="col-7">
                        <img src="./images/clients/springfox.png" />
                    </div>
				</div>
               </div>
			</div>
		);
	}
}

Work.propTypes = propTypes;

export default Work;
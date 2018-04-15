/* eslint-disable arrow-body-style */
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import '../pages/App.css';

const FullDescription = (props) => {
    return (
        <Row style={{ marginRight: '0px', marginLeft: '0px' }}>
            <Col lg={2} md={1} sm={0} xs={0} />
            <Col lg={8} md={10} sm={12} xs={12}>
                <div className="Name">
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <FormattedMessage
                            id="title"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                        <img src={`${process.env.PUBLIC_URL}/hand.png`} height={50} width={50} alt=" " />
                        <div>
                            <DropDownMenu value={props.value} onChange={props.handleChange} openImmediately >
                                <MenuItem value="ar" primaryText="عربى" />
                                <MenuItem value="en" primaryText="English" />
                            </DropDownMenu>
                        </div>
                    </div>
                </div>
                <div className="Gif-image">
                    <img className="web-dev-image" src={`${process.env.PUBLIC_URL}/webdev.gif`} alt=" " />
                </div>
                <div className="whoIAmdiv">
                    <div style={{ textAlign: 'center' }}>
                        <img className="WAI-image" src={`${process.env.PUBLIC_URL}/wAI.gif`} alt=" " />
                    </div>
                    <div>
                        <FormattedMessage
                            id="whoIAm"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div>
                        <FormattedMessage
                            id="whoIAm1"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                </div>
                <div>
                    <div className="WIK">
                        <FormattedMessage
                            id="whatIK"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img className="react-redux-image" src={`${process.env.PUBLIC_URL}/redux.gif`} alt=" " />
                    </div>
                    <div className="whoIAmdiv">
                        <div>
                            React
                        </div>
                        <div>
                            Redux
                        </div>
                        <div>
                            HTML5
                        </div>
                        <div>
                            CSS3
                        </div>
                    </div>
                </div>
                <div>
                    <div className="WIK">
                        <FormattedMessage
                            id="workExperience"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img className="senvion-image" src={`${process.env.PUBLIC_URL}/logo_nuchange.png`} alt=" " />
                    </div>
                    <div className="whoIAmdiv">
                        <FormattedMessage
                            id="nuchange"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <img
                            className="senvion-image"
                            src={`${process.env.PUBLIC_URL}/Logo.Senvion.png`}
                            width="500"
                            height="auto"
                            alt=" "
                        />
                    </div>
                    <div className="whoIAmdiv">
                        <FormattedMessage
                            id="senvion"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                </div>
                <div>
                    <div className="WIK">
                        <FormattedMessage
                            id="project-detail"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="WIK">
                        <FormattedMessage
                            id="professional-project"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="whoIAmdiv">
                        <FormattedMessage
                            id="professional-nuchange"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="whoIAmdiv">
                        <FormattedMessage
                            id="professional-senvion"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="WIK">
                        <FormattedMessage
                            id="personal-project"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="whoIAmdiv">
                        <FormattedMessage
                            id="personal-project-1"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="whoIAmdiv">
                        <FormattedMessage
                            id="personal-project-2"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                </div>
                <div>
                    <div className="WIK">
                        <FormattedMessage
                            id="social-media"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <Row
                        style={{
                            marginTop: '4rem',
                        }}
                    >
                        <Col lg={1} md={1} sm={1} xs={1} />
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <a href="https://www.linkedin.com/in/pankaj-kumar-029b02106/">
                                <div>
                                    <img
                                        className="linkedIn-Image"
                                        src={`${process.env.PUBLIC_URL}/linked.gif`}
                                        alt=" "
                                    />
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <a href="https://github.com/pank0509/">
                                <div>
                                    <img className="gitHub-Image" src={`${process.env.PUBLIC_URL}/git.gif`} alt=" " />
                                </div>
                            </a>
                        </Col>
                        <Col lg={3} md={3} sm={3} xs={3}>
                            <a href="https://stackoverflow.com/users/6577948/pankaj-kumar">
                                <div>
                                    <img
                                        className="stackover-flow"
                                        src={`${process.env.PUBLIC_URL}/stackoverflow.png`}
                                        alt=" "
                                    />
                                </div>
                            </a>
                        </Col>
                        <Col lg={1} md={1} sm={1} xs={1} />
                    </Row>
                </div>
                <div>
                    <div className="WIK">
                        <FormattedMessage
                            id="contact-me"
                            defaultMessage="Cannot read any lang {what}"
                            description="Welcome header on app main page"
                            values={{ what: '...!!!' }}
                        />
                    </div>
                    <div className="whoIAmdiv">E-mail: pkjkumar05@gmail.com</div>
                    <div className="whoIAmdiv">mobile: 8123911206</div>
                </div>
            </Col>
        </Row>
    );
};

FullDescription.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
};
FullDescription.defaultProps = {
    value: '',
    handleChange: () => {},
};

export default FullDescription;

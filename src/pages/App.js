/* eslint-disable */
import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import { addLocaleData, IntlProvider } from 'react-intl';
import Col from 'react-bootstrap/lib/Col';
import locale_en from 'react-intl/locale-data/en';
import locale_ar from 'react-intl/locale-data/ar';
import { languages } from '../constants';
import './App.css';
import FullDescription from '../components/FullDescription';

addLocaleData([...locale_en, ...locale_ar]);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            intlResourcesLoaded: false,
            value: 'en',
        };
    }
    componentDidMount() {
        const languageKeys = Object.keys(languages);
        languageKeys.map((languageKey, index) => {
            fetch(`${process.env.PUBLIC_URL}/${languages[languageKey]}`, {
                credentials: 'same-origin',
            })
                .then(resp => resp.json())
                .then((json) => {
                    this.setState({
                        [languageKey]: json,
                        intlResourcesLoaded: index === languageKeys.length - 1,
                    });
                })
                .catch((error) => {
                    console.log(
                        `There has been a problem with your fetch operation:${error.message}`,
                    );
                });
        });
    }
    handleChange = (event, index, value) => this.setState({ value });
    render() {
        const messages = this.state;
        const language = this.state.value;
        if (this.state.intlResourcesLoaded) {
            return (
                <IntlProvider locale={language} messages={messages[language]}>
                    <FullDescription
                        value={this.state.value}
                        handleChange={this.handleChange}
                    />
                </IntlProvider>
            );
        }
        return null;
    }
}
export default App;

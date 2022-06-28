import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldBox from '../components/Helloworldbox.jsx';

export function renderHelloWorldBox() {
    return ReactDOM.render(<HelloWorldBox />, document.getElementById('reactHelloWorld'));
}
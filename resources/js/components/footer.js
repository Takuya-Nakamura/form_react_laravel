
import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-info">
                    <p className="company">会社情報など</p>
                </div>
                <div className="footer-logo">
                    <img src="./images/logo.png" alt="" />
                </div>
            </footer>
        );
    }
}    

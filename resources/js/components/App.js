import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main'
import Footer from './footer'
import KeyVisual from './key_visual'


export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
        console.log("componentDidMount")
    }

    render() {
        return (
            <div className="contents_wrapper" >
                <div className="key-visual__area">
                    <KeyVisual />
                </div>
                <Main />
                <Footer />
            </div>
        )
    }
}




if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

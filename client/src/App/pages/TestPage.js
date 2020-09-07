import React, { Component } from 'react';

class TestPage extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            test: null,
            requesting: true,
        };
    }

    // Fetch the list on first mount
    componentDidMount() {
        this.testBackend();
    }

    // Express backend returns test string
    testBackend = async () => {
        try {
            const res = await fetch('/api/ping');
            const test = await res.json();
            this.setState({ test });
        } catch (err) {
            console.error(err);
        } finally {
            this.setState({ requesting: false });
        }
    };

    render() {
        const { test, requesting } = this.state;

        return (
            <div className='App'>
                <h1>Is the API connected?</h1>
                {/* Check to see if any items are found*/}
                {test ? (
                    <h1>You betta believe it</h1>
                ) : (
                    !requesting && (
                        <div>
                            <h2>Awww shucks. Nope. Check the console =( </h2>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default TestPage;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className='App'>
                <h1>Project Home</h1>
                {/* Link to TestPage */}
                <Link to={'./test'}>
                    <button>Check API Connected</button>
                </Link>
            </div>
        );
    }
}
export default Home;

import React from 'react';
import Carousel from './components/Carousel.js';

function App({ images }) {
    return (
        <div className="app">
            <Carousel images={images} />
        </div>
    );
}

export default App;

import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Faq from './Components/Faq/Faq.jsx';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Faq />} />
        </Routes>
    )
}

export default App;
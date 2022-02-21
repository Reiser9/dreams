import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';

import Layout from './Components/Layout/Layout.jsx';

import Main from './pages/Main/Main.jsx';
import Faq from './pages/Faq/Faq.jsx';
import Partners from './pages/Partners/Partners.jsx';
import Vebinars from './pages/Vebinars/Vebinars.jsx';
import Adv from './pages/Adv/Adv.jsx';
import Payment from './pages/Payment/Payment.jsx';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path="faq" element={<Faq />} />
                <Route path="partners" element={<Partners />} />
                <Route path="vebinars" element={<Vebinars />} />
                <Route path="adv" element={<Adv />} />
                <Route path="payment" element={<Payment />} />
                <Route path="*" element={<Main />} />
            </Route>
        </Routes>
    )
}

export default App;
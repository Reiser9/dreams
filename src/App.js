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
import Register from './pages/Register/Register.jsx';
import Enter from './pages/Enter/Enter.jsx';
import Recovery from './pages/Recovery/Recovery.jsx';
import News from './pages/News/News.jsx';
import Owners from './pages/Owners/Owners.jsx';

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
                <Route path="register" element={<Register />} />
                <Route path="enter" element={<Enter />} />
                <Route path="recovery" element={<Recovery />} />
                <Route path="news" element={<News />} />
                <Route path="owners" element={<Owners />} />
                <Route path="*" element={<Main />} />
            </Route>
        </Routes>
    )
}

export default App;
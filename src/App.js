import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Layout from './Components/Layout/Layout.jsx';
import LayoutMain from './Components/Layout/LayoutMain.jsx';

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
import Smi from './pages/Smi/Smi.jsx';
import Report from './pages/Report/Report.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Mission from './pages/Mission/Mission.jsx';
import Career from './pages/Career/Career.jsx';
import Start from './pages/Start/Start.jsx';
import About from './pages/About/About.jsx';
import Marketing from './pages/Marketing/Marketing.jsx';

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
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
                <Route path="smi" element={<Smi />} />
                <Route path="report" element={<Report />} />
                <Route path="contact" element={<Contact />} />
                <Route path="mission" element={<Mission />} />
                <Route path="career" element={<Career />} />
                <Route path="start" element={<Start />} />
                <Route path="about" element={<About />} />
                <Route path="marketing" element={<Marketing />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
            <Route path="/" element={<LayoutMain />}>
                <Route index element={<Main />} />
            </Route>
        </Routes>
    )
}

export default App;
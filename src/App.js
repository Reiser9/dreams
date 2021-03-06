import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import './App.css';

import Layout from './Components/Layout/Layout.jsx';
import LayoutMain from './Components/Layout/LayoutMain.jsx';
import LayoutAdmin from './Components/Layout/LayoutAdmin.jsx';

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

import Admin from './pages/Admin/Admin.jsx';
import Presents from './pages/Presents/Presents.jsx';
import Draw from './pages/Draw/Draw.jsx';
import InputMoney from './pages/InputMoney/InputMoney.jsx';
import OutputMoney from './pages/OutputMoney/OutputMoney.jsx';
import Operation from './pages/Operation/Operation.jsx';
import Tickets from './pages/Tickets/Tickets.jsx';
import AdminNews from './pages/AdminNews/AdminNews.jsx';
import Struct from './pages/Struct/Struct.jsx';
import Notify from './pages/Notify/Notify.jsx';
import Balance from './pages/Balance/Balance.jsx';
import Transaction from './pages/Transaction/Transaction.jsx';
import Retransaction from './pages/Retransaction/Retransaction.jsx';
import Travel from './pages/Travel/Travel.jsx';
import Settings from './pages/Settings/Settings.jsx';

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
            <Route path="/admin/" element={<LayoutAdmin />}>
                <Route index element={<Admin />} />
                <Route path="presents" element={<Presents />} />
                <Route path="draw" element={<Draw />} />
                <Route path="inputmoney" element={<InputMoney />} />
                <Route path="outputmoney" element={<OutputMoney />} />
                <Route path="operation" element={<Operation />} />
                <Route path="tickets" element={<Tickets />} />
                <Route path="news" element={<AdminNews />} />
                <Route path="struct" element={<Struct />} />
                <Route path="notify" element={<Notify />} />
                <Route path="balance" element={<Balance />} />
                <Route path="transaction" element={<Transaction />} />
                <Route path="retransaction" element={<Retransaction />} />
                <Route path="travel" element={<Travel />} />
                <Route path="settings" element={<Settings />} />
            </Route>
        </Routes>
    )
}

export default App;
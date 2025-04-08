import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainBlack from './components/blackView/MainBlack';
import BlackLayout from './components/blackView/BlackLayout';
import SlotsMachines from './components/blackView/SlotsMachines';
import Roulette from './components/blackView/Roulette';
import Poker from './components/blackView/Poker';
import LiveCasino from './components/blackView/LiveCasino';
import Blackjack from './components/blackView/Blackjack';
import axios from 'axios';
import Loading from './components/Loading';
import PrivacyBlack from './components/blackView/PrivacyBlack';
import CookieBlack from './components/blackView/CookieBlack';
import TermsBlack from './components/blackView/TermsBlack';
import AppLayout from './components/AppLayout';
import Main from './components/Main';
import King from './components/King';
import Bigmax from './components/Bigmax';
import Fish from './components/Fish';


function loadCss(href) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}
function Routing() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const webSiteName = window.location.hostname;
    const searchParams = new URLSearchParams(window.location.search);
    const secretKey = searchParams.get('secretkey');
    const gclid = searchParams.get('gclid');
    const hostname = window.location.hostname.split('.')[0];
    const path = window.location.pathname;
    const firstSegment = path.split('/')[1];
    let result = hostname;
    if (firstSegment) {
      result = `${hostname}/${firstSegment}`;
    }

    axios.post(
      process.env.REACT_APP_API_URL,
      {
        webSiteName: result,
        secretKey,
        gclid
      },
      {
        headers: {
          'x-api-key': 'Wcekvsh1gw3zwQSN2jfWInv1NhPYVC'
        }
      }
    )
      .then(response => {
        setData(response.data);
        setLoading(false);
        if (response.data.status) {
          loadCss('./Black.css');
        }
        else {
          loadCss('./index.css');
        }
      })
      .catch(error => {
        console.error('Hata oluştu:', error);
        setLoading(false);
        loadCss('./index.css');
      });
  }, []);
  if (loading) {
    return <Loading />;
  }
  const path = window.location.pathname;
  const firstSegment = path.split('/')[1];
  return (
    <div>
      <Routes>
        {data && data.blackSide ? (
          <>
            <Route path="/:firstSegment/" element={<BlackLayout />}>
              <Route index element={<MainBlack data={data} />} />
              <Route path="/:firstSegment/slot-machines" element={<SlotsMachines data={data} />} />
              <Route path="/:firstSegment/roulette" element={<Roulette data={data} />} />
              <Route path="/:firstSegment/poker" element={<Poker data={data} />} />
              <Route path="/:firstSegment/live-casino" element={<LiveCasino data={data} />} />
              <Route path="/:firstSegment/blackjack" element={<Blackjack data={data} />} />
            </Route>
            <Route path="/:firstSegment/privacy-policy" element={<PrivacyBlack />} />
            <Route path="/:firstSegment/cookie-policy" element={<CookieBlack />} />
            <Route path="/:firstSegment/terms-and-conditions" element={<TermsBlack />} />


            <Route path="/" element={<BlackLayout />}>
              <Route index element={<MainBlack data={data} />} />
              <Route path="/slot-machines" element={<SlotsMachines data={data} />} />
              <Route path="/roulette" element={<Roulette data={data} />} />
              <Route path="/poker" element={<Poker data={data} />} />
              <Route path="/live-casino" element={<LiveCasino data={data} />} />
              <Route path="/blackjack" element={<Blackjack data={data} />} />
            </Route>
            <Route path="/privacy-policy" element={<PrivacyBlack />} />
            <Route path="/cookie-policy" element={<CookieBlack />} />
            <Route path="/terms-and-conditions" element={<TermsBlack />} />
          </>
        ) : (
          <>
         
          </>
        )}
      </Routes>
    </div>
  );
}

export default Routing;

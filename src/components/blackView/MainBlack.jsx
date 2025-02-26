import React, { useState, useEffect, useRef } from 'react';
import caFlg from './images/canada-logo.jpg';
import fiFlg from './images/fi-logo.jpg'; 
import nzFlg from './images/nz-logo.jpg'; 
import chFlg from './images/ch-logo.jpg';
import f1 from './images/f1.svg';
import f2 from './images/f2.svg';
import f3 from './images/f3.svg';
import f4 from './images/f4.svg';
import f5 from './images/f5.svg';
import f6 from './images/f6.svg';
import star from './images/star.png';
import top from './images/top.png';
import expert from './images/expert.png';
import trending from './images/trending.png';
import bs from './images/icons/bs.svg';

function MainBlack({ data }) {
  const [showMorePayments, setShowMorePayments] = useState(
    Array(data.brandResponseDtos.length).fill(false)
  );

  const [depositAmounts, setDepositAmounts] = useState([]);

  // Ref to track the clicked button and payments section
  const paymentRefs = useRef([]);

  const handleMorePaymentsClick = (index) => {
    const updatedShowMorePayments = [...showMorePayments];
    updatedShowMorePayments[index] = !updatedShowMorePayments[index];
    setShowMorePayments(updatedShowMorePayments);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const updatedShowMorePayments = [...showMorePayments];

      // Check each payment section and close if click happens outside
      paymentRefs.current.forEach((paymentRef, index) => {
        if (paymentRef && !paymentRef.contains(event.target)) {
          updatedShowMorePayments[index] = false;
        }
      });

      setShowMorePayments(updatedShowMorePayments);
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMorePayments]);

  const getRandomDeposit = () => {
    const depositValues = [10, 15, 20, 25];
    return depositValues[Math.floor(Math.random() * depositValues.length)];
  };

  // Initialize deposit amounts for each brand only on the first render
  useEffect(() => {
    const initialDepositAmounts = data.brandResponseDtos.map(() => getRandomDeposit());
    setDepositAmounts(initialDepositAmounts);
  }, [data.brandResponseDtos]);  
  const path = window.location.pathname; 
  const firstSegment = path.split('/')[1];

  return (
    <>
      <div style={{ paddingInline: '16px' }} className="banner pb-3 pt-3 pt-md-5">
        <div className="container">
          <div className="row" style={{ marginBottom: '12px' }}>
            <div className="col-md-9 d-flex align-items-center girissozler-wrap mb-2 mb-md-0 pb-2 pb-md-0">
              <div className=" girissozler pr-0 pr-md-5">
                <h1 className="mb-3">
                  Best Online Casinos in {firstSegment=='fi'? 'Finland':firstSegment=='nz'? 'New Zealand':firstSegment=='ch'? 'Switzerland':'Canada'} -{' '}
                  {new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })}
                <img className='title-flag' src={firstSegment=='fi'? fiFlg:firstSegment=='nz'? nzFlg:firstSegment=='ch'? chFlg:caFlg} alt="flag" />
                </h1>
                <p className="mb-3 d-none d-md-block">
                  <b>
                    A comprehensive overview of the top online casinos, featuring detailed reviews
                    from experts. The most reputable gaming platforms are highlighted, with
                    opportunities for substantial wins through real-money bets. The content focuses
                    on jackpot experiences and a diverse range of popular games.
                  </b>
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '150px',
                paddingInline: '15px',
                marginLeft: 'auto',
              }}
            >
              <p style={{ fontSize: '10px', fontWeight: 'bolder' }}>All sites are licensed in {firstSegment=='fi'? 'Finland':firstSegment=='nz'? 'New Zealand':firstSegment=='ch'? 'Switzerland':'Canada'} </p>
            <img src={firstSegment=='fi'? fiFlg:firstSegment=='nz'? nzFlg:firstSegment=='ch'? chFlg:caFlg} alt="flag" />
            </div>
          </div>
          <div className="sitelink_wrapper">
            <ul>
              <li>
                <img src={f1} alt="" />
                All sites are
              </li>
              <li>
                <img src={f2} alt="" />
               {firstSegment=='fi'? 'Finland':firstSegment=='nz'? 'New Zealand':firstSegment=='ch'? 'Switzerland':'Canada'} Licensed
              </li>
              <li>
                <img src={f3} alt="" />
                Secure &amp; Trusted
              </li>
              <li>
                <img src={f4} alt="" />
                Quick payouts
              </li>
              <li>
                <img src={f5} alt="" />
                Mobile friendly
              </li>
              <li>
                <img src={f6} alt="" />
                Independently reviewed
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className="data" id="data">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {data.brandResponseDtos.map((brand, index) => (
                <div id="game1" className="bideneftd bestcasino" key={brand.id}>
                  <div className="row g-0">
                    <div
                      style={{ padding: '6px 12px', display: 'flex', flexDirection: 'column', gap: '4px' }}
                      className="col-2 col-lg-1 logo centerize postback"
                    >
                      <div className="order-game">
                        <span>#{index + 1}</span>
                      </div>
                      <div className="score">
                        <span>{index<5? 5-(index*0.1):'4.5'}</span>
                      </div>
                      <div className="rating">
                        <span style={{ textTransform: 'uppercase', fontSize: '8px' }}>rate it</span>
                        <span className="count" style={{ fontSize: '7px' }}>1345</span>
                        <div className="stars">
                          <img className="small-star" src={star} alt="star" />
                          <img className="small-star" src={star} alt="star" />
                          <img className="small-star" src={star} alt="star" />
                          <img className="small-star" src={star} alt="star" />
                          <img className="small-star" src={star} alt="star" />
                        </div>
                      </div>
                    </div>

                    <a
                      style={{ borderLeft: '0.5px solid #e5e8f4' }}
                      href={brand.url}
                      target="_blank"
                      className="col-5 col-lg-2 logo centerize postback"
                      rel="noreferrer"
                      data-brandname="UptownPokies"
                    >
                      <img src={brand.logo} style={{ width: '240px', maxWidth: '100%' }} alt="brand logo" />
                      {(index === 0 || index === 1 || index === 2) && (
                        <img
                         
                          className="thropy-v"
                          src={index === 0 ? top : index === 1 ? expert : index === 2 ? trending : ''}
                          alt="Trophy"
                        />
                      )}
                    </a>

                    <a
                      target="_blank"
                      href={brand.url}
                      className="col-5 col-lg-2 info centerize postback"
                      rel="noreferrer"
                      data-brandname="UptownPokies"
                    >
                      <div style={{ height: '100%', width: '100%' }}>
                        <div className="heading-card welcome-card">
                          <span className="heading-text-card">welcome bonus</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textTransform: 'none',
                            height: 'calc(100% - 24px)',
                            paddingInline: '15px',
                          }}
                        >
                          <p style={{ height: 'fitContent', fontSize: '14px' }}>
                            {brand.desciription}
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      target="_blank"
                      href={brand.url}
                      className="col-12 col-lg-2 amenities centerize postback"
                      rel="noreferrer"
                      data-brandname="UptownPokies"
                    >
                      <div style={{ height: '100%', width: '100%' }}>
                        <div className="heading-card">
                          <span className="heading-text-card" style={{ top: '0' }}>
                            privilege
                          </span>
                        </div>
                        <div id="privilege" style={{ height: 'calc(100% - 24px)', display: 'flex', paddingInline: '10px' }}>
                          <p>
                            <span className="lnr lnr-checkmark-circle"></span>
                            {brand.option1}
                          </p>
                          <p>
                            <span className="lnr lnr-checkmark-circle"></span>
                            {brand.option2}
                          </p>
                          <p>
                            <span className="lnr lnr-checkmark-circle"></span>
                            {brand.option3}
                          </p>
                        </div>
                      </div>
                    </a>

                    

                    <div className="col-12 col-lg-2 info centerize postback" data-brandname="UptownPokies">
                      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
                        <div className="heading-card">
                          <span className="heading-text-card">Payment Methods</span>
                        </div>
                        <div className="payment my-2" ref={(el) => (paymentRefs.current[index] = el)}>
                          {brand.paymentTypes.slice(0, 6).map((p, idx) => (
                            <img src={p} alt={`Payment Method ${idx}`} key={idx} />
                          ))}

                          {brand.paymentTypes.length > 6 && (
                            <div
                              className="morePaymentsBtn"
                              data-payment-id={`listMorePayments-${index}`}
                              style={{
                                fontSize: '12px',
                                cursor: 'pointer',
                                width: 'max-content',
                                borderBottom: '1px dashed',
                                margin: 'auto',
                              }}
                              onClick={() => handleMorePaymentsClick(index)}
                            >
                              {brand.paymentTypes.length - 6} more ways to deposit
                            </div>
                          )}

                          <ul
                            id={`listMorePayments-${index}`}
                            className="morePayments"
                            style={{ display: showMorePayments[index] ? 'block' : 'none' }}
                          >
                            {brand.paymentTypes.slice(6).map((p, idx) => (
                              <img src={p} alt={`Payment Method ${idx + 6}`} key={idx + 6} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <a
                      style={{
                        borderLeft: '0.5px solid #e5e8f4',
                      }}
                      target="_blank"
                      href={brand.url}
                      className="col-12 col-lg-2 button centerize postback"
                      rel="noreferrer"
                      data-brandname="UptownPokies"
                    >
                       <div style={{ width: '100%' }}>
                        <div className="heading-card">
                          <span className="heading-text-card">VISIT CASINO</span>
                        </div>
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 'calc(100% - 24px)',
                          }}
                        >
                          <span style={{ display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }} className="mbtn">
                            GET BONUS <img src={bs} alt="" />
                          </span>
                          <span className="mbtn mbtn-hover">PLAY NOW</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainBlack;

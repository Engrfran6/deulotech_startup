'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';

export const LoadJsAndExitPopUp = () => {
  useEffect(() => {
    // Load external JavaScript files
    const script1 = document.createElement('script');
    script1.src = '../../groovy-assets/js/blazy.min.js';
    script1.type = 'text/javascript';
    script1.async = true;
    script1.onload = () => {
      // Initialize bLazy or other code if needed
      // var bLazy = new Blazy();
    };
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '../../assets/js-compress/8ecf2d20da3961e5b705cbc957a5ea29.js';
    script2.type = 'text/javascript';
    script2.async = true;
    document.head.appendChild(script2);
    // =====================================================

    console.log('Script Loading..');

    // function hideWidget() {
    //   console.log('Trying Hide Widget');
    //   if (typeof window.Tawk_API === 'object' && typeof window.Tawk_API.hideWidget == 'function') {
    //     window.Tawk_API.hideWidget();
    //   } else {
    //     setTimeout(hideWidget, 500);
    //   }
    // }

    // var Tawk_API = Tawk_API || {};
    // var Tawk_LoadStart = new Date();

    // (function () {
    //   var s1 = document.createElement('script');
    //   var s0 = document.getElementsByTagName('script')[0];
    //   s1.async = true;
    //   s1.onload = function () {
    //     console.log('Tawk API Loaded.');
    //     window.Tawk_API = window.Tawk_API || {};
    //     console.log('Tawk API Test ==> ', window.Tawk_API);

    //     // Hiding Widget on Calculator Steps
    //     if (window.location.pathname === '/site-calculator-step') {
    //       hideWidget();
    //     }

    //     window.Tawk_API.onPrechatSubmit = function (data) {
    //       var clientId = readCookie('clientId');
    //       console.log('On Pre Chat Submit ==> ', data);
    //       var o = data[0].answer,
    //         a = data[1].answer,
    //         i = '',
    //         n = data[2].answer,
    //         s = data[3].answer,
    //         page = 'Tawk Chat',
    //         r = '';
    //       // Your AJAX request logic here
    //       $.ajax({
    //         type: 'POST',
    //         url: baseUrl + '/site/project-inq',
    //         data: {
    //           name: o,
    //           email: a,
    //           budget: i,
    //           desc: s,
    //           skypeId: n,
    //           country: r,
    //           page: page,
    //           clientId: clientId,
    //         },
    //         dataType: 'json',
    //       });
    //     };
    //   };
    //   s1.src = 'https://embed.tawk.to/611b8ca9d6e7610a49b09316/1fd9pqtr7';
    //   s1.charset = 'UTF-8';
    //   s1.setAttribute('crossorigin', '*');
    //   s0.parentNode.insertBefore(s1, s0);
    // })();
  }, []);

  return (
    <>
      <Link href="/#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </Link>

      <div id="dy-popup-overlay" className="exitpopupMain OfferExit ssssss">
        <div id="dy-popup-1" className="dy-popup-container offer-bg-white">
          <div id="dy-popup-overlay" className="exitpopupMain OfferExit ssssss">
            <div id="dy-popup-1" className="dy-popup-container offer-bg-white">
              <div className="dy-popup-close" data-attr="exit" />
              <div className="bg-offers">
                <div className="snow-content">
                  <div className="img-exitVector">
                    <Image
                      className="exitOffers-img b-lazy b-loaded"
                      src="/frontend/web/groovy-assets/img/assets-img/exit_offer/Image-offer.png"
                      alt="offer-img"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="dy-popup-col">
                    <div className="bgExitPopup_planing">
                      <h3>Planning to develop your own app? If only you know how much it costs.</h3>
                      <p>
                        It's easy. Click on Start, answer a few simple questions, and find out how
                        much your app development will cost.
                      </p>
                      <div className="claim">
                        <Link
                          className="start-btn-exit justify-content-center align-self-center btn-claim"
                          href="app-cost-calculator%3Fab=1%3Futm_source=web-exit-popup&utm_medium=website&utm_campaign=app-cost-calcculator.html">
                          <span>Start</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

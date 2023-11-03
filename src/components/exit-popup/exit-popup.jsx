'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';

export const LoadJsAndExitPopUp = () => {
  useEffect(() => {
    // Load external JavaScript files
    const script1 = document.createElement('script');
    script1.src = '../../dws-assets/js/blazy.min.js';
    script1.type = 'text/javascript';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '../../assets/js-compress/8ecf2d20da3961e5b705cbc957a5ea29.js';
    script2.type = 'text/javascript';
    script2.async = true;
    document.head.appendChild(script2);
    // =====================================================

    console.log('Script Loading..');
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
                      src="/frontend/web/dws-assets/img/assets-img/exit_offer/Image-offer.png"
                      alt="offer-img"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className="dy-popup-col">
                    <div className="bgExitPopup_planing">
                      <h3>Planning to develop your own app? If only you know how much it costs.</h3>
                      <p>
                        It&apos;s easy. Click on Start, answer a few simple questions, and find out
                        how much your app development will cost.
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

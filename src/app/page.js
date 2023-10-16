import {Cards} from '@/components/cardsection/cards';
import {Contact} from '@/components/contacts/contact';
import {Header} from '@/components/header/header';
import {MilstoneAchieved} from '@/components/milestones/milstones';
import {OurEngagementModels} from '@/components/our-engagement-model/our-engagement-models';
import {Testimonies} from '@/components/testimonies/testimonies';
import {VideoPopup} from '@/components/video-popup/video-popup';
import {OurProcess} from '@/components/our-process/our-process';
import {OurExpertise} from '@/components/our-expertise/expertise';
// import {Awards} from '@/components/awards/awards';

export default function Home() {
  return (
    <div className="site-index">
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TQQFCFK"
          height="0"
          width="0"
          style="display:none;visibility:hidden"></iframe>
      </noscript>

      <div
        className="modal fade"
        id="videomodel"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                X
              </button>
              <div id="video-popup-overlay"></div>
              <div id="video-popup-close" className="fade" data-btn="right">
                &#10006;
              </div>
              <VideoPopup />
            </div>
          </div>
        </div>
      </div>

      <Header />
      {/* <Awards /> */}
      <OurExpertise />
      <Cards />
      <MilstoneAchieved />
      <OurProcess />
      <OurEngagementModels />
      <Testimonies />
      <Contact />
    </div>
  );
}

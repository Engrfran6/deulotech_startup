import {ContactForm} from '@/components/contactsForm/contactForm';
import {OurEngagementModels} from '@/components/our-engagement-model/our-engagement-models';
import {OurProcess} from '@/components/our-process/our-process';
import {ServiceCard} from './servicesCard';
import {serviceDatas} from '@/components/services-we-provide/service-data';
import {IndustriesWeWorkFor} from './industriesWeWorkFor';

export default function OurServices() {
  return (
    <>
      <div className="main-section">
        <div
          className="modal fade videoPlayerModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="mySmallModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="ParticipantsUserVideo"></div>
            </div>
          </div>
        </div>
        <main id="main">
          <section className="Padding-custom pt-90 pb-50" data-aos="fade-up">
            <div className="breadcrumbHero servicesHero">
              <div className="container-fluid container-xl pt-40 pb-40">
                <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
                  <h1>You Envision, We Deliver</h1>
                  <p className="heroSubText">
                    Deulotech is an evolving family of experienced, dedicated, determined, and
                    skilled resources who strives to see you and your product grow and achieve new
                    heights.
                  </p>
                </div>
              </div>
            </div>
            <div className="teamBtnDiv"> </div>
          </section>

          <ServiceCard services={serviceDatas} />

          <IndustriesWeWorkFor />

          <OurProcess />

          <OurEngagementModels />
        </main>
      </div>
      <ContactForm />
    </>
  );
}

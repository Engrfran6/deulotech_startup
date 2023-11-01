import {ContactAddress} from '@/components/contactsForm/contactAddress';
import {ContactInquiryCards} from '@/components/contactsForm/contactInquiryCards';
import {ProjectCareerInquiryForm} from '@/components/contactsForm/projectCareerInquiryForm';
import Image from 'next/image';

export default function ContactUs() {
  return (
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
        <section className="Padding-custom pt-90 pb-50 TitleHero hero-Btn" data-aos="fade-up">
          <div className="breadcrumbHero">
            <div className="container-fluid container-xl">
              <div className="row">
                <div className="col-xs-12 col-sm-7 col-lg-6 d-flex flex-column justify-content-center">
                  <h1 data-aos="fade-up">Need Deulotech's Help?</h1>
                  <p className="technicallySub">
                    Just fill out information about your project requirements or job requirements in
                    the form given below and our rep will get back to you in a blink of an eye
                    (metaphorically speaking).
                  </p>
                </div>
                <div
                  className="col-xs-12 col-sm-5 col-lg-6 hero-Image"
                  data-aos="zoom-out"
                  data-aos-delay={200}>
                  <div className="heroVectorImg technologyvector">
                    <div className="VectorImgborder">
                      <Image
                        src="/assets/img/assets-img/company/png/ContactUsPage.png"
                        alt="Need Deulotech's Help?"
                        title="Need Deulotech's Help?"
                        className="Image-fluid"
                        width={600}
                        height={500}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="Padding-custom aos-init aos-animate" data-aos="fade-up">
          <div className="container-fluid container-xl">
            <div
              className="section-title aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay={200}>
              <h3 className="">Thank You for Believing in Deulotech</h3>
              <p className="heroSubText">
                We highly respect your time and so, we are presenting simple forms with lesser but
                important fields to capture your thoughts. Your complete and transparent information
                will Help Us Help You Better.
              </p>
            </div>
            {/* form */}
            <ProjectCareerInquiryForm />
          </div>
        </section>
        {/* contact phone */}
        <ContactInquiryCards />
        {/* contact Address */}
        <ContactAddress />
      </main>
    </div>
  );
}

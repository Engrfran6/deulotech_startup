import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
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
      <section id="hero" className="hero d-flex align-items-center Gred-blue Heroskew">
        <div className="HeroskewBottom" />
        <div className="heroHome-slider swiper-container">
          <div className="align-items-center">
            <div className="container">
              <div className="row">
                <div className="hero-center col-xs-12 col-sm-12 col-lg-12 d-flex flex-column justify-content-center text-center">
                  <small>We Deliver</small>
                  <h1 data-aos="fade-up">
                    World-Class
                    <h1 className="digital-solution"> Digital Solutions</h1>
                    <br />
                    <span>On-Time In-Budget</span>
                  </h1>
                  <p className="Hero_Description" data-aos="fade-up" data-aos-delay={400}>
                    Being a top Mobile app and Web development company, we help Startups, Mid-Size,
                    and Enterprise businesses to get their digital products done the right way on
                    time, in budget.
                  </p>

                  <div data-aos="fade-up" data-aos-delay={600}>
                    <div className="text-center">
                      <Link
                        // style={{backgroundColor: 'orange'}}
                        href="request-quote"
                        className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center common-btn blue">
                        <span>Get a Quote in 24 Hours </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="callHero">
          <Link href="/#">
            <i className="icon-phone-call" /> Call
          </Link>
        </div>
      </section>
    </div>
  );
};

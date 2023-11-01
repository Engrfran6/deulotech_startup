import {ContactForm} from '@/components/contactsForm/contactForm';
import {OurEngagementModels} from '@/components/our-engagement-model/our-engagement-models';
import {OurProcess} from '@/components/our-process/our-process';
import {ServiceCard} from './serviceCard';

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

          <ServiceCard />

          <section className="Padding-custom" data-aos="fade-up">
            <div className="StackSection">
              <div className="container-fluid container-xl">
                <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
                  <h4>Industries We Have Worked With</h4>
                  <p className="subLine">
                    As an{' '}
                    <a
                      href="service/mobile-app-development.html"
                      title="mobile app development company">
                      <strong>award-winning mobile app development company</strong>
                    </a>
                    , We handcraft full-stack app development solutions to clients worldwide. We
                    deliver only the best mobile apps from various sectors like eCommerce, IT,
                    Sports, Healthcare, Fitness, Education, etc. We have a creative design team to
                    make your mobile app look more appealing to your end-users. We use advanced
                    technologies and follow modern trends to build a great mobile app that meets
                    your expectations. Deulotech web is recognized as a top-rated app development
                    company and a top{' '}
                    <a
                      href="service/software-development.html"
                      title="custom software development company">
                      <strong>custom software development company</strong>
                    </a>{' '}
                    on reputed platforms like Clutch, GoodFirms, DesignRush, and Business of Apps.
                  </p>
                </div>
                <div className="WorkedWith-slider">
                  <div className="WorkedWithSection">
                    <div className="TechnologyStack WorkedWith">
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-job-seeker tec-custom" />
                          </div>
                          <span>Job</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-game-development tec-custom" />
                          </div>
                          <span>Sports</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-Group-154 tec-custom" />
                          </div>
                          <span>IT</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-businessman tec-custom" />
                          </div>
                          <span>Business</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-natural-gas tec-custom" />
                          </div>
                          <span>Oil and Natural Gas</span>
                        </a>
                      </div>
                    </div>
                    <div className="TechnologyStack WorkedWith">
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-Page-1 tec-custom" />
                          </div>
                          <span>Education </span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-healthcare tec-custom" />
                          </div>
                          <span>Healthcare</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-Blood-Pressure tec-custom" />
                          </div>
                          <span>Fitness</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-shopping-bag tec-custom" />
                          </div>
                          <span>Shopping</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-shopping-cart tec-custom" />
                          </div>
                          <span>E-Commerce</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="WorkedWithSection">
                    <div className="TechnologyStack WorkedWith">
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-job-seeker tec-custom" />
                          </div>
                          <span>Job</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-game-development tec-custom" />
                          </div>
                          <span>Sports</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-Group-154 tec-custom" />
                          </div>
                          <span>IT</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-businessman tec-custom" />
                          </div>
                          <span>Business</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-natural-gas tec-custom" />
                          </div>
                          <span>Oil and Natural Gas</span>
                        </a>
                      </div>
                    </div>
                    <div className="TechnologyStack WorkedWith">
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-Page-1 tec-custom" />
                          </div>
                          <span>Education </span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-healthcare tec-custom" />
                          </div>
                          <span>Healthcare</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-Blood-Pressure tec-custom" />
                          </div>
                          <span>Fitness</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-shopping-bag tec-custom" />
                          </div>
                          <span>Shopping</span>
                        </a>
                      </div>
                      <div className="StackBox">
                        <a href="our-service.html#">
                          <div className="logoTec">
                            <i className="icon-shopping-cart tec-custom" />
                          </div>
                          <span>E-Commerce</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <OurProcess />

          <OurEngagementModels />
        </main>
      </div>

      <ContactForm />
    </>
  );
}

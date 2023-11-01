import Image from 'next/image';
import {serviceDetails} from './serviceDetails';
const services = serviceDetails;

export const ServiceCard = ({}) => {
  return (
    <>
      {services.map((service, index) => (
        <section className="Padding-custom servicesMaster pt-50" data-aos="fade-up" key={index}>
          <div className="container-fluid pt-80">
            {index % 2 === 0 ? (
              <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-6 order-1">
                  <div className="servicesPer data_more_less">
                    <div
                      className="servicesConRight data_more_less_inner"
                      data-height={290}
                      data-increase-by={100}>
                      <h2>{service.title2}</h2>
                      <p className="servicesSub-Text data_more_less_body">{service.descrition}</p>
                      <div className="show-more">Show More</div>
                    </div>
                    <div className="projectTecIcon projectTecIconSlider">
                      <div className="TecIconSlider">
                        <ul className="projectTecIconSlider-Main">
                          <li className="tec_data">
                            <a
                              href="service/react-native-app-development.html"
                              className="white invert"
                              alt="react-native-app-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-ReactJS tec-custom" />
                              </div>
                              <small>{}</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/ionic-app-development-company.html"
                              className="white invert"
                              alt="ionic-app-development-company">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Ionic_Logo tec-custom" />
                              </div>
                              <small>Ionic</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/flutter-app-development-company.html"
                              className="white invert"
                              alt="flutter-app-development-company">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-fluttere69eaaa3 tec-custom" />
                              </div>
                              <small>Flutter</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/android-app-development-company.html"
                              className="white invert"
                              alt="android-app-development-company">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-android-logo tec-custom" />
                              </div>
                              <small>Android</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/ios-app-development-company.html"
                              className="white invert"
                              alt="ios-app-development-company">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-IOS tec-custom" />
                              </div>
                              <small>iOS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/sails-js-framework-development.html"
                              className="white invert"
                              alt="sails-js-framework-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-sails-seeklogocom1 tec-custom" />
                              </div>
                              <small>Sails JS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/php-development.html"
                              className="white invert"
                              alt="php-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-php tec-custom" />
                              </div>
                              <small>PHP Web</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/yii2-framework-development.html"
                              className="white invert"
                              alt="yii2-framework-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-yii tec-custom" />
                              </div>
                              <small>Yii2</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/node-js-development.html"
                              className="white invert"
                              alt="node-js-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-node tec-custom" />
                              </div>
                              <small>Node JS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Laravel-1 tec-custom" />
                              </div>
                              <small>Laravel</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Javascript tec-custom" />
                              </div>
                              <small>JavaScript</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-MySQL tec-custom" />
                              </div>
                              <small>MySQL</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Mongodb tec-custom" />
                              </div>
                              <small>MongoDB</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Firebase tec-custom" />
                              </div>
                              <small>Firebase</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-ReactJS tec-custom" />
                              </div>
                              <small>MariaDB</small>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="project-explore mt-0">
                      <a
                        href="service/mobile-app-development.html"
                        className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 order-2">
                  <div className="servicesTec">
                    <Image
                      className="b-lazy b-loaded"
                      src={service.image}
                      alt="Our Custom Mobile App Development Services"
                      title="Our Custom Mobile App Development Services"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="row pt-120">
                <div className="col-xs-12 col-sm-12 col-md-6 order-1">
                  <div className="servicesTec">
                    <Image
                      className="b-lazy b-loaded"
                      src={service.image}
                      alt="Our Web App Development Services"
                      title="Our Web App Development Services"
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 order-2">
                  <div className="servicesPer servicesPerLeft data_more_less">
                    <div
                      className="servicesConRight data_more_less_inner"
                      data-height={290}
                      data-increase-by={100}>
                      <h2>{service.title2}</h2>
                      <p className="servicesSub-Text data_more_less_body">{service.descrition}</p>
                      <div className="show-more">Show More</div>
                    </div>
                    <div className="projectTecIcon projectTecIconSlider">
                      <div className="TecIconSlider">
                        <ul className="projectTecIconSlider-Main">
                          <li className="tec_data">
                            <a
                              href="service/react-js-development.html"
                              className="white invert"
                              alt="react-js-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-ReactJS tec-custom" />
                              </div>
                              <small>ReactJS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/next-js-framework-development.html"
                              className="white invert"
                              alt="next-js-framework-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-next-js tec-custom" />
                              </div>
                              <small>Next JS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-angularjs tec-custom" />
                              </div>
                              <small>AngularJS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-vuejs tec-custom" />
                              </div>
                              <small>VueJS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-html5 tec-custom" />
                              </div>
                              <small>HTML / CSS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/node-js-development.html"
                              className="white invert"
                              alt="node-js-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-node tec-custom" />
                              </div>
                              <small>Node JS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/sails-js-framework-development.html"
                              className="white invert"
                              alt="sails-js-framework-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-sails-seeklogocom1 tec-custom" />
                              </div>
                              <small>Sails JS</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/php-development.html"
                              className="white invert"
                              alt="php-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-php tec-custom" />
                              </div>
                              <small>PHP Web</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a
                              href="service/yii2-framework-development.html"
                              className="white invert"
                              alt="yii2-framework-development">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-yii tec-custom" />
                              </div>
                              <small>Yii2</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Laravel-1 tec-custom" />
                              </div>
                              <small>Laravel</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Javascript tec-custom" />
                              </div>
                              <small>JavaScript</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-MySQL tec-custom" />
                              </div>
                              <small>MySQL</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Mongodb tec-custom" />
                              </div>
                              <small>MongoDB</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Firebase tec-custom" />
                              </div>
                              <small>Firebase</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-ReactJS tec-custom" />
                              </div>
                              <small>MariaDB</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Laravel-1 tec-custom" />
                              </div>
                              <small>Laravel</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-wordpress tec-custom" />
                              </div>
                              <small>WordPress</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-cakephp tec-custom" />
                              </div>
                              <small>CakePHP</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-codeigniter tec-custom" />
                              </div>
                              <small>Codeigniter</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-magento tec-custom" />
                              </div>
                              <small>Magento</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Shopify tec-custom" />
                              </div>
                              <small>Shopify</small>
                            </a>
                          </li>
                          <li className="tec_data">
                            <a href="our-service.html#" className="white invert" alt="">
                              <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                <i className="icon-Woocommerce tec-custom" />
                              </div>
                              <small>Woocommerce</small>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="project-explore mt-0">
                      <a
                        href="service/web-development.html"
                        className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
                        Explore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
};

{
  /* <div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our MERN Stack Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We call ourselves as MERN Stack experts and using MERN stack, we have developed
          some of the most complex, challenging, and custom web applications with multiple
          features. We have great knowledge and experience in using technologies that fall
          under MERN stack which are MongoDB, ExpressJS, React.js, and Node.js. We cater to
          our clients' business-specific requirements using our best MERN stack resources
          and build them solutions that will upscale their businesses.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/next-js-framework-development.html"
                className="white invert"
                alt="next-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-next-js tec-custom" />
                </div>
                <small>Next JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ExpressJS tec-custom" />
                </div>
                <small>ExpressJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/mern-stack-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1624939546-3 MERN Stack Developer.png"
        alt="Our MERN Stack Development Services"
        title="Our MERN Stack Development Services"
      />
    </div>
  </div>
</div>


<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1625820667-4 SAAS Development.png"
        alt="Our SaaS Development Services"
        title="Our SaaS Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our SaaS Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          Deulotech has transformed startups and their cloud journeys by developing them
          highly scalable and secure solutions that can operate at high speed and
          efficiency. We have the ability to offer the best and fitting SAAS Development
          solutions including integrations and customizations as per the business-specific
          requirements. We have offered and developed several cost-effective SaaS-based
          solutions in our journey of more than 5 years for businesses from various
          industrial domains and helped them transform their activities to whole another
          level.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="projectTecIconSlider-Main">
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/next-js-framework-development.html"
                className="white invert"
                alt="next-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-next-js tec-custom" />
                </div>
                <small>Next JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-vuejs tec-custom" />
                </div>
                <small>VueJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-html5 tec-custom" />
                </div>
                <small>HTML / CSS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-python tec-custom" />
                </div>
                <small>Python</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/react-native-app-development.html"
                className="white invert"
                alt="react-native-app-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>React Native</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/ionic-app-development-company.html"
                className="white invert"
                alt="ionic-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Ionic_Logo tec-custom" />
                </div>
                <small>Ionic</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/flutter-app-development-company.html"
                className="white invert"
                alt="flutter-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-fluttere69eaaa3 tec-custom" />
                </div>
                <small>Flutter</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/android-app-development-company.html"
                className="white invert"
                alt="android-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-android-logo tec-custom" />
                </div>
                <small>Android</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/ios-app-development-company.html"
                className="white invert"
                alt="ios-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-IOS tec-custom" />
                </div>
                <small>iOS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-AWS tec-custom" />
                </div>
                <small>AWS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-google tec-custom" />
                </div>
                <small>Google</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/saas-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our MVP Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          On using us to develop your Minimum Viable Product (MVP), we make sure that you
          have all the right information, suggestions, alternate solutions for building a
          product that's accurately right for your customers and their needs. We start with
          analyzing ideas, make a plan, design a prototype, and then build a product that is
          scalable, easily customizable, and customer-centric. Our goal is to build a
          product with right amount of efforts and to achieve maximum validation and
          appreciation from the market. We also have a SEO, SMM, and marketing team that
          does wonders while launching products, post-lunch product and features marketing
          using the most effective and best-in-market approaches.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="projectTecIconSlider-Main">
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/next-js-framework-development.html"
                className="white invert"
                alt="next-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-next-js tec-custom" />
                </div>
                <small>Next JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-vuejs tec-custom" />
                </div>
                <small>VueJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-html5 tec-custom" />
                </div>
                <small>HTML / CSS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-python tec-custom" />
                </div>
                <small>Python</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/react-native-app-development.html"
                className="white invert"
                alt="react-native-app-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>React Native</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/ionic-app-development-company.html"
                className="white invert"
                alt="ionic-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Ionic_Logo tec-custom" />
                </div>
                <small>Ionic</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/flutter-app-development-company.html"
                className="white invert"
                alt="flutter-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-fluttere69eaaa3 tec-custom" />
                </div>
                <small>Flutter</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/android-app-development-company.html"
                className="white invert"
                alt="android-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-android-logo tec-custom" />
                </div>
                <small>Android</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/ios-app-development-company.html"
                className="white invert"
                alt="ios-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-IOS tec-custom" />
                </div>
                <small>iOS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/mvp-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1624939610-5 MVP Development.png"
        alt="Our MVP Development Services"
        title="Our MVP Development Services"
      />
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1625197795-11 Browser Extension Development.png"
        alt="Our Browser Extension Development Services"
        title="Our Browser Extension Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Browser Extension Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          With the help of the extensions, a new revolution has come up in the manner in
          which a browser connects with the users. They can be built using technologies that
          are often used in building websites or web applications like JavaScript, HTML,
          CSS, etc. The only difference in building Chrome extensions is that they are way
          quicker, secure, and better. At Deulotech, we have resources with good experience
          and expertise in developing custom Chrome extensions to help clients from all kind
          of industries, whether it is a start up or an enterprise, with different aspects
          of their day-to-day life. You are welcome at Deulotech to select, assess, and hire
          the best and experienced resource(s) to build you an elegant, user-frienldy, and
          efficient Chrome Extensions for you and your customers.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="projectTecIconSlider-Main">
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/next-js-framework-development.html"
                className="white invert"
                alt="next-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-next-js tec-custom" />
                </div>
                <small>Next JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-vuejs tec-custom" />
                </div>
                <small>VueJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-html5 tec-custom" />
                </div>
                <small>HTML / CSS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-python tec-custom" />
                </div>
                <small>Python</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/browser-extension-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Desktop Application Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We use Electron JS that allows us to create Desktop applications with GUIs using
          web technologies We use Electron js to develop cross platform applications which
          are compatible with Mac, Windows, and Linux platforms.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="projectTecIconSlider-Main">
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/next-js-framework-development.html"
                className="white invert"
                alt="next-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-next-js tec-custom" />
                </div>
                <small>Next JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-vuejs tec-custom" />
                </div>
                <small>VueJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-html5 tec-custom" />
                </div>
                <small>HTML / CSS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-python tec-custom" />
                </div>
                <small>Python</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/electron-js-development.html"
                className="white invert"
                alt="electron-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-electronjs-icon tec-custom" />
                </div>
                <small>Electron JS </small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-AWS tec-custom" />
                </div>
                <small>AWS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-google tec-custom" />
                </div>
                <small>Google</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/desktop-application-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1625464480-6 Desktop App Development.png"
        alt="Our Desktop Application Development Services"
        title="Our Desktop Application Development Services"
      />
    </div>
  </div>
</div>


<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1625465335-12 Bot Development.png"
        alt="Our Chatbot Development Services"
        title="Our Chatbot Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Chatbot Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We all have been interacting with bots in our daily life and we know how much it
          can be helpful in tasks from personal support to leads generation, sales, etc.
          Also, interacting with bots saves a lot of time and we can expect immediate
          feedback for our queries. By developing bots, we can proudly say that we are
          contributing in the revolution of streamlining interactions of businesses with
          customers. We deliver excellent bot development services that can be implemented
          by industries from various domains like information and technology, e-commerce,
          customer support, entertainment, or healthcare. We build bots that can manage
          crucial tasks, automate processes at low maintenance costs, and integrate with
          your existing tools &amp; systems seamlessly. We have developed several Telegram
          and Skype Bots using PHP / Node JS. Let us share our short experience about some
          of them for quick glance. - We have successfully developed a Telegram bot that is
          used for parsing jobs from a platform, filtering them, and sending very best jobs
          to the users via Telegram. - Another bot that we developed is about a Leave
          Management System for a company's internal use. There were so many requests from
          the employees to streamline and simplify the leave requesting process and
          ‘Voila!’, we developed a bot for them so that they can easily apply for leave
          through Telegram and Skype.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-python tec-custom" />
                </div>
                <small>Python</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-AWS tec-custom" />
                </div>
                <small>AWS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-google tec-custom" />
                </div>
                <small>Google</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/chat-bot-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Software Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          Developing custom software can be costly and time-consuming, but with the help of
          our team of experts, we can develop the custom and complex software from scratch
          in the minimum possible time. Furthermore, we use a Modern technology stack to
          reduce the development time and ensure the quality and security standards of the
          project. We have deep expertise in Custom Software Development, Automation
          Software Development, Management Software Development, Enterprise Software
          Development, Providing Offshore development services, Cross-Platform Software and
          Maintenance &amp; support services.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="projectTecIconSlider-Main">
            <li className="tec_data">
              <a
                href="service/next-js-framework-development.html"
                className="white invert"
                alt="next-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-next-js tec-custom" />
                </div>
                <small>Next JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-vuejs tec-custom" />
                </div>
                <small>VueJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-html5 tec-custom" />
                </div>
                <small>HTML / CSS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-wordpress tec-custom" />
                </div>
                <small>WordPress</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-cakephp tec-custom" />
                </div>
                <small>CakePHP</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-codeigniter tec-custom" />
                </div>
                <small>Codeigniter</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-magento tec-custom" />
                </div>
                <small>Magento</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Shopify tec-custom" />
                </div>
                <small>Shopify</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Woocommerce tec-custom" />
                </div>
                <small>Woocommerce</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/software-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1639473998-1624939574-6 Desktop App Development.png"
        alt="Our Software Development Services"
        title="Our Software Development Services"
      />
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1639480183-MEAN-Stack-Developement-Company.png"
        alt="MEAN Stack Development Services"
        title="MEAN Stack Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>MEAN Stack Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          Our MEAN Stack expertise let us develop and deliver high quality and complex MEAN
          stack solutions. We are proud to provide the most complex, challenging, and custom
          web applications solutions using MEAN Stack on-time and in-budget. We have great
          knowledge and experience using technologies that fall under the MEAN stack:
          MongoDB, ExpressJS, Angular.js, and Node.js. We cater to our clients'
          business-specific requirements using our best MEAN stack resources and build the
          solutions that will upscale their businesses.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ExpressJS tec-custom" />
                </div>
                <small>ExpressJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/mean-stack-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Cross Platform Mobile App Development</h2>
        <p className="servicesSub-Text data_more_less_body">
          Our experts have served B2B, B2E, B2C industries with high-end, latest
          technologies and different cross-platform mobile app development services to build
          robust, secure, and scalable mobile solutions and connected web platforms.{' '}
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="projectTecIconSlider-Main">
            <li className="tec_data">
              <a
                href="service/react-native-app-development.html"
                className="white invert"
                alt="react-native-app-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>React Native</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/ionic-app-development-company.html"
                className="white invert"
                alt="ionic-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Ionic_Logo tec-custom" />
                </div>
                <small>Ionic</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/flutter-app-development-company.html"
                className="white invert"
                alt="flutter-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-fluttere69eaaa3 tec-custom" />
                </div>
                <small>Flutter</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/android-app-development-company.html"
                className="white invert"
                alt="android-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-android-logo tec-custom" />
                </div>
                <small>Android</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/ios-app-development-company.html"
                className="white invert"
                alt="ios-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-IOS tec-custom" />
                </div>
                <small>iOS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/cross-platform-mobile-app-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1642678461-Cross-Platform-App-Development-Company.png"
        alt="Our Cross Platform Mobile App Development"
        title="Our Cross Platform Mobile App Development"
      />
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1642768134-1624939534-2 Web App Development.png"
        alt="Our Progressive Web App Development Services"
        title="Our Progressive Web App Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Progressive Web App Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We are leading in Progressive Web App Development Services, as we adapted PWA
          Development in the early stage. PWAs are useful for testing a minimum viable
          product because they allow for a rapid and often less expensive development scope.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a
                href="service/react-js-development.html"
                className="white invert"
                alt="react-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>ReactJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-angularjs tec-custom" />
                </div>
                <small>AngularJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-vuejs tec-custom" />
                </div>
                <small>VueJS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/progressive-web-app-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Android Mobile App Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We are specializes in Android app development for startups, small businesses to
          enterprises. Our Android app developers have more than six years of expertise in
          creating bespoke, stable, fully responsive, and futuristic mobile apps for many
          Android devices.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>Android</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/android-app-development-company.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1653031276-imgpsh_fullsize_anim.png"
        alt="Our Android Mobile App Development Services"
        title="Our Android Mobile App Development Services"
      />
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1653042620-imgpsh_fullsize_anim.png"
        alt="Our iOS Mobile App Development Services"
        title="Our iOS Mobile App Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our iOS Mobile App Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We are the ideal place for you to develop and publish your iOS app using
          cutting-edge technologies. As India's leading ios app development company, we
          provide feature-packed iOS apps for startups and businesses. Contact us
          immediately to discuss your business needs and receive some custom-made iOS app
          solutions.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a
                href="service/ios-app-development-company.html"
                className="white invert"
                alt="ios-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-IOS tec-custom" />
                </div>
                <small>iOS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/ios-app-development-company.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Flutter Mobile App Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          Deulotech web is the ideal choice to seek if you want to start your project with
          an industry-leading Flutter app development company. We work with our clients from
          the start to the conclusion. With our best-in-class flutter app development
          services, we provide scalable, faster-to-develop apps and a wonderful native
          experience.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a
                href="service/flutter-app-development-company.html"
                className="white invert"
                alt="flutter-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-fluttere69eaaa3 tec-custom" />
                </div>
                <small>Flutter</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/flutter-app-development-company.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1653045045-imgpsh_fullsize_anim (1).png"
        alt="Our Flutter Mobile App Development Services"
        title="Our Flutter Mobile App Development Services"
      />
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1653047907-imgpsh_fullsize_anim (2).png"
        alt="Our Ionic Mobile App Development Services"
        title="Our Ionic Mobile App Development Services"
      />
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesPer servicesPerLeft data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Ionic Mobile App Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          We are a Top Ionic App Development Company in the industry that will not settle
          for anything less than the best. With our Ionic App Development Services, We
          simplify it for end-users by creating mobile apps with platform-specific
          functionality, a native-like aesthetic, and high code reusability.
        </p>
        <div className="show-more">Show More</div>
      </div>


      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className="">
            <li className="tec_data">
              <a
                href="service/ionic-app-development-company.html"
                className="white invert"
                alt="ionic-app-development-company">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Ionic_Logo tec-custom" />
                </div>
                <small>Ionic</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/sails-js-framework-development.html"
                className="white invert"
                alt="sails-js-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-sails-seeklogocom1 tec-custom" />
                </div>
                <small>Sails JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/php-development.html"
                className="white invert"
                alt="php-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-php tec-custom" />
                </div>
                <small>PHP Web</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/yii2-framework-development.html"
                className="white invert"
                alt="yii2-framework-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-yii tec-custom" />
                </div>
                <small>Yii2</small>
              </a>
            </li>
            <li className="tec_data">
              <a
                href="service/node-js-development.html"
                className="white invert"
                alt="node-js-development">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-node tec-custom" />
                </div>
                <small>Node JS</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Laravel-1 tec-custom" />
                </div>
                <small>Laravel</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Javascript tec-custom" />
                </div>
                <small>JavaScript</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-MySQL tec-custom" />
                </div>
                <small>MySQL</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Mongodb tec-custom" />
                </div>
                <small>MongoDB</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-Firebase tec-custom" />
                </div>
                <small>Firebase</small>
              </a>
            </li>
            <li className="tec_data">
              <a href="our-service.html#" className="white invert" alt="">
                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                  <i className="icon-ReactJS tec-custom" />
                </div>
                <small>MariaDB</small>
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="project-explore mt-0">
        <a
          href="service/ionic-app-development-company.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
</div>



<div className="row pt-120">
  <div className="col-xs-12 col-sm-12 col-md-6 order-1">
    <div className="servicesPer data_more_less">
      <div
        className="servicesConRight data_more_less_inner"
        data-height={290}
        data-increase-by={100}>
        <h2>Our Mobile Dating App Development Services</h2>
        <p className="servicesSub-Text data_more_less_body">
          Create a dating app that delivers value and sets you apart from the rest with our
          mobile dating app development services. Our team of experts will help you build a
          platform that fosters meaningful connections and delivers results.
        </p>
        <div className="show-more">Show More</div>
      </div>
      <div className="projectTecIcon projectTecIconSlider">
        <div className="TecIconSlider">
          <ul className=""></ul>
        </div>
      </div>
      <div className="project-explore mt-0">
        <a
          href="service/dating-app-development.html"
          className="btn custom-btn hover1Btn hover1Btn_new common-btn blue mt-0">
          Explore
        </a>
      </div>
    </div>
  </div>
  <div className="col-xs-12 col-sm-12 col-md-6 order-2">
    <div className="servicesTec">
      <Image
        className="b-lazy b-loaded"
        src="uploads/Services/1680761866-dating-app-development.png"
        alt="Our Mobile Dating App Development Services"
        title="Our Mobile Dating App Development Services"
      />
    </div>
  </div>
</div> */
}

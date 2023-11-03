import Image from 'next/image';

export const ServiceCard = ({services}) => {
  return (
    <>
      {services?.map((service, index) => (
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
                      <p className="servicesSub-Text data_more_less_body">{service.description}</p>
                      <div className="show-more">Show More</div>
                    </div>
                    <div className="projectTecIcon projectTecIconSlider">
                      <div className="TecIconSlider">
                        <ul className="projectTecIconSlider-Main">
                          {service.techUsed?.map((tech, techIndex) => (
                            <li className="tec_data" key={techIndex}>
                              <a
                                href="service/ionic-app-development-company.html"
                                className="white invert"
                                alt="ionic-app-development-company">
                                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                  {tech.stackIcon}
                                </div>
                                <small>{tech.stackName}</small>
                              </a>
                            </li>
                          ))}
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
                      <p className="servicesSub-Text data_more_less_body">{service.description}</p>
                      <div className="show-more">Show More</div>
                    </div>
                    <div className="projectTecIcon projectTecIconSlider">
                      <div className="TecIconSlider">
                        <ul className="projectTecIconSlider-Main">
                          {service.techUsed?.map((tech, techIndex) => (
                            <li className="tec_data" key={techIndex}>
                              <a
                                href="service/react-js-development.html"
                                className="white invert"
                                alt="react-js-development">
                                <div className="tecIconRound" style={{border: '1px solid #61DBFB'}}>
                                  {tech.stackIcon}
                                </div>
                                <small>{tech.stackName}</small>
                              </a>
                            </li>
                          ))}
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

import Image from 'next/image';

export const ContactInquiryCards = () => {
  return (
    <section className="Padding-custom aos-init aos-animate" data-aos="fade-up">
      <div className="container-fluid container-xl">
        <div className="col-md-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="getBgadress">
                <div className="titleAdd">
                  <small>Reach Out to Us Directly</small>
                  <h2>For Project Enquiry</h2>
                </div>
                <div className="contactDetails">
                  <ul>
                    <li>
                      <a href="mailto: hello@groovyweb.co ">
                        <i className="icon-email tec-custom" />
                        <small style={{color: '#104CBA'}}> hello@deulowebsolutions.com </small>
                      </a>
                    </li>
                    <li>
                      <a
                        rel="nofollow"
                        target="_blank"
                        href="https://join.skype.com/invite/ucHLPmZYdPcH">
                        <i className="icon-skype tec-skype" />
                        <small>Reach Us on Skype</small>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+2347038689224">
                        <Image
                          width={100}
                          height={100}
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.groovyweb.co/assets/Image/assets-Image/contact-icon/india.svg"
                          alt="India"
                          title="India"
                          className="iconContact b-lazy"
                          loading="lazy"
                        />
                        <small>+234 703 868-9224</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="getBgadress rightSide">
                <div className="titleAdd">
                  <small>Reach Out to Us Directly</small>
                  <h2>For Career Enquiry</h2>
                </div>
                <div className="contactDetails">
                  <ul>
                    <li>
                      <a target="_blank" href="mailto:career@groovyweb.co">
                        <i className="icon-email tec-custom" />
                        <small style={{color: '#104CBA'}}>hr@deulowebsolutions.com</small>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="https://join.skype.com/invite/deulowebsolutions">
                        <i className="icon-skype tec-skype" />
                        <small>Reach Us on Skype</small>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" href="tel:2347038689224">
                        <Image
                          width={100}
                          height={100}
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.groovyweb.co/assets/Image/assets-Image/contact-icon/indiaw.svg"
                          alt="India"
                          title="India"
                          className="iconContact b-lazy"
                        />
                        <small>234 703 868-9224</small>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

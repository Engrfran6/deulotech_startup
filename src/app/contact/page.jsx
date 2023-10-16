export default function Contact() {
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
                  <h1 data-aos="fade-up">Need Groovy's Help?</h1>
                  <p className="technicallySub">
                    Just fill out information about your project requirements or job requirements in
                    the form given below and our rep will get back to you in a blink of an eye
                    (metaphorically speaking).
                  </p>
                </div>
                <div
                  className="col-xs-12 col-sm-5 col-lg-6 hero-img"
                  data-aos="zoom-out"
                  data-aos-delay={200}>
                  <div className="heroVectorImg technologyvector">
                    <div className="VectorImgborder">
                      <img
                        src="assets/img/assets-img/company/png/ContactUsPage.png"
                        alt="Need Groovy's Help?"
                        title="Need Groovy's Help?"
                        className="img-fluid"
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
              <h3 className="">Thank You for Believing in Groovy</h3>
              <p className="heroSubText">
                We highly respect your time and so, we are presenting simple forms with lesser but
                important fields to capture your thoughts. Your complete and transparent information
                will Help Us Help You Better.
              </p>
            </div>
            <div id="getQuotein24H" className="contactFormMain">
              <div className="bgWhiteData">
                <div className="col-lg-12 col-md-12">
                  <ul className="nav nav-pills mb-3 tabContact">
                    <li>
                      <i className="icon-briefing" />
                      <a className="nav-link active" data-toggle="pill" href="contact-us.html#tab1">
                        Project Enquiry
                      </a>
                    </li>
                    <li>
                      <i className="icon-boost" />
                      <a className="nav-link " data-toggle="pill" href="contact-us.html#tab2">
                        {' '}
                        Career Enquiry
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tabContactDetails">
                    <div className="tab-pane fade active show" id="tab1">
                      <div className="ProjectFormDiv">
                        <form method="post" className="php-contact-form">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Name</label>
                                  <input
                                    type="text"
                                    name="name"
                                    className="form-control effect-2 contact-name"
                                    placeholder=""
                                    required=""
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Email</label>
                                  <input
                                    type="email"
                                    className="form-control effect-2 contact-email"
                                    name="email"
                                    placeholder=""
                                    required=""
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-50 d-none">
                                <div className="group-input custom-contactPRL customWidthContact">
                                  <label htmlFor="">Country</label>
                                  <i className="bi bi-chevron-down" />
                                  <input
                                    type="text"
                                    className="form-control effect-2 contact-country"
                                    name="email"
                                    placeholder=""
                                    required=""
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Phone/Mobile</label>
                                  <input
                                    type="text"
                                    className="form-control effect-2 contact-id"
                                    name="id"
                                    placeholder="Your Contact Number"
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="budget">Budget</label>
                                  <i className="bi bi-chevron-down" />
                                  <select
                                    name="budget"
                                    id="budget"
                                    className="form-control effect-2">
                                    <option value="">Select Budget</option>
                                    <option value="$5K">$5K</option>
                                    <option value="$10K+">$10K+</option>
                                    <option value="$25K+">$25K+</option>
                                    <option value="$50K+">$50K+</option>
                                    <option value="$100K+">$100K+</option>
                                    <option value="Not Sure">Not Sure</option>
                                  </select>
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Project Description</label>
                                  <textarea
                                    className="form-control effect-2 contact-message"
                                    name="message"
                                    rows={4}
                                    placeholder=""
                                    required=""
                                    defaultValue={''}
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <div className="contact-form contact-Div text-center">
                                <button
                                  type="submit"
                                  className="contact-form-btn btn custom-btn common-btn blue">
                                  submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade " id="tab2">
                      <div className="CareerFormDiv">
                        <form
                          method="post"
                          className="php-career-form"
                          encType="multipart/form-data">
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Name</label>
                                  <input
                                    type="text"
                                    name="career_name"
                                    className="form-control effect-2 career_name"
                                    placeholder=""
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Email</label>
                                  <input
                                    type="email"
                                    className="form-control effect-2 career_email"
                                    name="email"
                                    placeholder=""
                                    required=""
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-50">
                                <div className="group-input custom-contactPRL customWidthContact">
                                  <label htmlFor="">Phone Number</label>
                                  <input
                                    type="number"
                                    className="form-control effect-2 career_number"
                                    name="number"
                                    placeholder=""
                                    required=""
                                    minLength={8}
                                    maxLength={15}
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Select Position Applied For</label>
                                  <i className="bi bi-chevron-down" />
                                  <select
                                    name="position"
                                    id="position"
                                    className="form-control effect-2">
                                    <option value="">Select Position</option>
                                    <option value="Sr. Frontend Engineer">
                                      Sr. Frontend Engineer
                                    </option>
                                    <option value="Jr. Backend Developer">
                                      Jr. Backend Developer
                                    </option>
                                    <option value="Sr. QA">Sr. QA</option>
                                    <option value="TL. Frontend Developer">
                                      TL. Frontend Developer
                                    </option>
                                    <option value="TL. Backend Developer">
                                      TL. Backend Developer
                                    </option>
                                  </select>
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-6 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Experience</label>
                                  <i className="bi bi-chevron-down" />
                                  <select
                                    name="experience"
                                    id="experience"
                                    className="form-control effect-2">
                                    <option value="">Select Year</option>
                                    <option value="frasher">Fresher</option>
                                    <option value="6 Months And above">6 Months And above</option>
                                    <option value="1 Year and above">1 Year and above</option>
                                    <option value="2 Year and above">2 Year and above</option>
                                    <option value="3 Year and above">3 Year and above</option>
                                    <option value="4 Year and above">4 Year and above</option>
                                    <option value="5 Year and above">5 Year and above</option>
                                    <option value="6 Year and above">6 Year and above</option>
                                    <option value="7 Year and above">7 Year and above</option>
                                    <option value="8 Year and above">8 Year and above</option>
                                  </select>
                                  <span className="focus-border" />
                                </div>
                              </div>
                              <div className="col-md-12 mb-50 uploadDiv">
                                <div className="form-group">
                                  <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                      <img
                                        src="assets/img/assets-img/contact-icon/upload-icon.svg"
                                        alt="upload-icon"
                                        title="upload-icon"
                                        className="iconContact"
                                      />
                                    </div>
                                    <input
                                      type="file"
                                      className="form-control careerFile_input"
                                      name="fileinput"
                                      placeholder="Upload your latest resume {pdf, doc, ppt upto 1mb}"
                                      aria-label="Upload File"
                                      aria-describedby="basic-addon1"
                                    />
                                    <div className="input-group-append" id="fileinput">
                                      <button
                                        className="browseBtn btn custom-btn common-btn blue browse"
                                        id="basic-addon2">
                                        Browse
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <label htmlFor="fileinput" className="error" />
                              </div>
                              <div className="col-md-12 mb-50">
                                <div className="group-input custom-contactPRL">
                                  <label htmlFor="">Tell Us About Yourself</label>
                                  <textarea
                                    className="form-control effect-2 career_message"
                                    name="message"
                                    rows={4}
                                    placeholder=""
                                    required=""
                                    defaultValue={''}
                                  />
                                  <span className="focus-border" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <div className="contact-Div text-center">
                                <button
                                  type="submit"
                                  className="btn custom-btn career-btn common-btn blue">
                                  submit
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                            <small style={{color: '#104CBA'}}> hello@groovyweb.co </small>
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
                          <a href="tel:+919409123477">
                            <img
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              data-src="https://www.groovyweb.co/assets/img/assets-img/contact-icon/india.svg"
                              alt="India"
                              title="India"
                              className="iconContact b-lazy"
                              loading="lazy"
                            />
                            <small>+91 940 912 3477</small>
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
                            <small style={{color: '#104CBA'}}>hr@groovyweb.co</small>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="https://join.skype.com/invite/ucHLPmZYdPcH">
                            <i className="icon-skype tec-skype" />
                            <small>Reach Us on Skype</small>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" href="tel:+917284933224">
                            <img
                              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                              data-src="https://www.groovyweb.co/assets/img/assets-img/contact-icon/india.svg"
                              alt="India"
                              title="India"
                              className="iconContact b-lazy"
                            />
                            <small>+91 9737100736</small>
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
        <section className="Padding-custom aos-init aos-animate pb-100" data-aos="fade-up">
          <div className="container-fluid container-xl">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="mapAdresDiv">
                  <div className="addresDetails">
                    <div className="AddFooter">
                      <div className="iconAdd">
                        <i className="icon-gate-of-india" />
                      </div>
                      <div className="addFoot">
                        <small>India</small>
                        <p className="footerMinTitle">Nadiad, GJ</p>
                      </div>
                    </div>
                    <div className="addressContact">
                      <p>517 - 521, CenterSquare,</p>
                      <p>Santram Road,</p>
                      <p>Nadiad - 387001</p>
                    </div>
                  </div>
                  <div className="mapDetails">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9880845627367!2d72.85968831491307!3d22.691487485121787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b071d2bd815%3A0x4e78efa8c31fc220!2sGroovy%20Web!5e0!3m2!1sen!2sin!4v1630061317237!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="mapAdresDiv">
                  <div className="addresDetails">
                    <div className="AddFooter">
                      <div className="iconAdd">
                        <i className="icon-gate-of-india" />
                      </div>
                      <div className="addFoot">
                        <small>India</small>
                        <p className="footerMinTitle">Ahmedabad, GJ</p>
                      </div>
                    </div>
                    <div className="addressContact">
                      <p>B-907, Devaurum Complex</p>
                      <p>100 Feet Rd, Prahlad Nagar,</p>
                      <p>Ahmedabad, Gujarat 380015</p>
                    </div>
                  </div>
                  <div className="mapDetails">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.52012734772092!2d72.51285523433752!3d23.01194508977617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf68e3af605%3A0x56164fdfaafc6b3c!2sPrahlad%20Nagar!5e0!3m2!1sen!2sin!4v1697110148265!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="mapAdresDiv">
                  <div className="addresDetails">
                    <div className="AddFooter">
                      <div className="iconAdd">
                        <img
                          src="assets/img/brandenburg-gate.png"
                          alt=""
                          loading="lazy"
                          style={{height: 50, width: 'auto', objectFit: 'cover'}}
                        />
                      </div>
                      <div className="addFoot">
                        <small>Germany</small>
                        <p className="footerMinTitle">Berlin</p>
                      </div>
                    </div>
                    <div className="addressContact">
                      <p>13A Levetzowstraße, Berlin,</p>
                      <p>10555, Germany</p>
                    </div>
                  </div>
                  <div className="mapDetails">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7480837036255!2d13.334152876957686!3d52.519897936236674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85108cb3b5f6b%3A0xe97bbbfa0d74f519!2sLevetzowstra%C3%9Fe%2013A%2C%2010555%20Berlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1695188927732!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="mapAdresDiv">
                  <div className="addresDetails">
                    <div className="AddFooter">
                      <div className="iconAdd aus-icon">
                        <i className="icon-Aus-building" />
                      </div>
                      <div className="addFoot">
                        <small>Australia</small>
                        <p className="footerMinTitle">NSW</p>
                      </div>
                    </div>
                    <div className="addressContact">
                      <p>Level 5, 4 Columbia CT,</p>
                      <p>Norwest NSW, 2153,</p>
                      <p>Australia</p>
                    </div>
                  </div>
                  <div className="mapDetails">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.2597789502424!2d153.38957691502225!3d-28.016534882664825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911b95ef900a2f%3A0xcd9334d338c55be5!2sGroovy%20Web!5e0!3m2!1sen!2sin!4v1630061384085!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{border: 0}}
                      allowFullScreen=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

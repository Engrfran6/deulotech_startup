export const ProjectCareerInquiryForm = () => {
  return (
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
                          <select name="budget" id="budget" className="form-control effect-2">
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
                <form method="post" className="php-career-form" encType="multipart/form-data">
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
                          <select name="position" id="position" className="form-control effect-2">
                            <option value="">Select Position</option>
                            <option value="Sr. Frontend Engineer">Sr. Frontend Engineer</option>
                            <option value="Jr. Backend Developer">Jr. Backend Developer</option>
                            <option value="Sr. QA">Sr. QA</option>
                            <option value="TL. Frontend Developer">TL. Frontend Developer</option>
                            <option value="TL. Backend Developer">TL. Backend Developer</option>
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
                        <button type="submit" className="btn custom-btn career-btn common-btn blue">
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
  );
};

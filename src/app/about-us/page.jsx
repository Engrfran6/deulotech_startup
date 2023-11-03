import Image from 'next/image';

export default function AboutUs() {
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
          <section className="Padding-custom pt-90 pb-50 TitleHero hero-Btn" data-aos="fade-up">
            <div className="breadcrumbHero">
              <div className="container-fluid container-xl">
                <div className="row">
                  <div className="col-xs-12 col-sm-7 col-lg-6 d-flex flex-column justify-content-center">
                    <h1 data-aos="fade-up">
                      Come to Deulotech When you think about Building your Digital Solutions
                    </h1>
                    <p className="technicallySub">
                      Our technically savvy team work in symmetry with our business-generating and
                      marketing team to build you a reliable, market-compatible, user-friendly, and
                      long-lasting solutions. We are here to serve at your pleasure with our best
                      and cost-effective services.
                    </p>
                  </div>
                  <div
                    className="col-xs-12 col-sm-5 col-lg-6 hero-img"
                    data-aos="zoom-out"
                    data-aos-delay={200}>
                    <div className="heroVectorImg technologyvector">
                      <div className="VectorImgborder">
                        <Image
                          width={100}
                          height={100}
                          src="/assets/img/assets-img/About.svg"
                          alt="Come to Deulotech When you think about Building your Digital Solutions"
                          title="Come to Deulotech When you think about Building your Digital Solutions"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom" data-aos="fade-up">
            <div className="StackSection">
              <div className="tecTab Detailswhoare">
                <div className="container-fluid container-xl">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="tabs">
                          <div className="tab-links-Details whoareBefore">
                            <section id="react" className="active">
                              <div
                                className="section-title"
                                data-aos="fade-up"
                                data-aos-delay={200}>
                                <h2>Who We Are </h2>
                              </div>
                              <div className="subTextCategory">
                                <p>
                                  <span>I</span>n December 2015, Deulotech Web emerged as a fully
                                  grown IT services firm under the encouraging leadership of our
                                  founders who paved the Way to Excellence and Progress for their
                                  team members to follow.
                                </p>
                                <p>
                                  <span>W</span>e think of ourselves as Creators and we create every
                                  products with utmost care, passion, and we see to it that they
                                  perform well. We are very passionate and curious to adapt to
                                  modern technologies that can make your products more enhanced.
                                </p>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="tabs">
                          <div className="tab-links-Details whoareafter">
                            <section id="react" className="active">
                              <div
                                className="section-title"
                                data-aos="fade-up"
                                data-aos-delay={200}>
                                <h2>What We Do</h2>
                              </div>
                              <div className="subTextCategory">
                                <p>
                                  <span>D</span>WS&apos;s designers and developers follow the
                                  streamlined development process to construct the bridge that
                                  literally connects your idea of building a digital solution to a
                                  working, reliable, user-friendly, and secure model for your
                                  business
                                </p>
                                <p>
                                  <span>A</span>ll we care about is to successfully deliver what we
                                  promised and within the time we promised. Just like that, we have
                                  served more than 250 happy and satisfied clients, and we have
                                  worked on more than 500 projects with the rate of retention
                                  growing every year.
                                </p>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom" data-aos="fade-up" data-aos-delay={200}>
            <div className="section-title">
              <small>Milestones We Achieved</small>
              <h3>All it took was Good Leadership and Team Efforts..!</h3>
            </div>
            <div className="container-fluid container-xl">
              <div className="BringDataMain technologyPart">
                <div className="bringBg">
                  <div className="rightBring">
                    <div className="box-blue" style={{borderRadius: '5px 0 0 5px'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">500</span>+
                        </p>
                        <span>Project Delivered</span>
                      </div>
                    </div>
                    <div className="box-blue" style={{backgroundColor: '#0D49B9'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">250</span>+
                        </p>
                        <span>Happy Clients &nbsp;&nbsp;</span>
                      </div>
                    </div>
                    <div className="box-blue" style={{backgroundColor: '#1050C8'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">99</span>%
                        </p>
                        <span>Client Satisfaction Rate</span>
                      </div>
                    </div>
                    <div className="box-blue box-res" style={{backgroundColor: '#1559D8'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">50</span>%
                        </p>
                        <span>Recurring Clients</span>
                      </div>
                    </div>
                    <div className="box-blue box-res" style={{backgroundColor: '#1E62E2'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">150</span>%
                        </p>
                        <span>Average Company Growth</span>
                      </div>
                    </div>
                    <div className="box-blue box-res1" style={{backgroundColor: '#266AEC'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">40</span>+
                        </p>
                        <span>5 Star Ratings on Clutch.co</span>
                      </div>
                    </div>
                    <div className="box-blue box-res1" style={{backgroundColor: '#3175F8'}}>
                      <div className="bringDetails">
                        <p className="counter-num">
                          <span className="counter">100</span>+
                        </p>
                        <span>In-House Talent</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">
              <h3>Principles we Believe in</h3>
            </div>
            <div
              className="EnhancingBg CoreValuesmain pt-20 pb-20"
              style={{backgroundColor: 'transparent'}}>
              <div className="container-fluid container-xl beforeTop pt-60">
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="service-box">
                        <div className="icon primary-color">
                          <i className="icon-b2b" />
                        </div>
                        <p className="service-box-title">Transparent Communication and Planning</p>
                        <p>
                          Lack in communication in the beginning brings probable inaccuracy
                          midstream which is something we avoid at any cost. So, sometime over
                          communication can be boring, but trust us, it&apos;s necessary for
                          streamlined, secure, and errorless development.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="service-box">
                        <div className="icon primary-color">
                          <i className="icon-teamwork" />
                        </div>
                        <p className="service-box-title">Passion to take up any challenge</p>
                        <p>
                          We are a team of very curious and challenge-loving resources. We take
                          &apos;Everything is possible&apos; very seriously and we never rest until
                          we come up with the required solutions. Our job is to satisfy your complex
                          requirements with our services and we never back down from our job.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                      <div className="service-box">
                        <div className="icon primary-color">
                          <i className="icon-support" />
                        </div>
                        <p className="service-box-title">
                          Undivided Attention and Care for every Projects
                        </p>
                        <p>
                          We don&apos;t judge our work based on industry type, client size, and
                          amount quoted. Our teams with dedicated team leaders are assigned with
                          projects based on the skill requirements and availability of the resources
                          using best-in-class project management tools
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom pt-50 pb-0" data-aos="fade-up">
            <div className="EnhancingBg pb-100">
              <div className="container-fluid container-xl">
                <div className="section-title pt-30" data-aos="fade-up">
                  <small>We Give our Efforts</small>
                  <h3 className="mb-20">
                    To reach to a place from where we can see our mission and vision come true
                  </h3>
                </div>
                <div className="tecTab Detailswhoare WeGive">
                  <div className="container-fluid container-xl">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="tabs">
                            <div className="tab-links-Details whoareBefore">
                              <section id="react" className="active">
                                <div
                                  className="section-title"
                                  data-aos="fade-up"
                                  data-aos-delay={200}>
                                  <h3>Our Vision </h3>
                                </div>
                                <div className="subTextCategory">
                                  <p>
                                    <span>W</span>e believe to reach at a place where our services
                                    will be highly regarded by businesses from various industrial
                                    domains for building their innovative busines solutions with our
                                    cutting-edge technological expertise, interactive designs,
                                    uncompromised quality.
                                  </p>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="tabs">
                            <div className="tab-links-Details whoareafter">
                              <section id="react" className="active">
                                <div
                                  className="section-title"
                                  data-aos="fade-up"
                                  data-aos-delay={200}>
                                  <h3>Our Mission</h3>
                                </div>
                                <div className="subTextCategory">
                                  <p>
                                    <span>W</span>e want to help businesses ranging from startups to
                                    enterprises, who reach out to us with their requirements, in
                                    achieving great lengths, expanding their reach, upscaling their
                                    products, and generate a large user-base with our outstanding
                                    and cost-effective services.
                                  </p>
                                </div>
                              </section>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up">
              <small>Our Leaders</small>
              <h4>Who Paved the Way to Excellence</h4>
            </div>
            <div className="container-fluid container-xl pt-40">
              <div className="col-md-12">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <div className="teamLeadbox">
                      <div className="teamLeadImg">
                        <Image
                          width={100}
                          height={100}
                          src="../../uploads/team/1667989641-Krunalbhai.png"
                          alt="Krunal Panchal"
                          title="Krunal Panchal"
                          className="profileImg"
                        />
                      </div>
                      <div className="profileDetails">
                        <p>Krunal Panchal</p>
                        <span>CEO &amp; Co-Founder</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <div className="teamLeadbox">
                      <div className="teamLeadImg">
                        <Image
                          width={100}
                          height={100}
                          src="../../uploads/team/1667989656-Sagarbhai.png"
                          alt="Sagar Patel"
                          title="Sagar Patel"
                          className="profileImg"
                        />
                      </div>
                      <div className="profileDetails">
                        <p>Sagar Patel</p>
                        <span>CTO &amp; Co-Founder</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <div className="teamLeadbox">
                      <div className="teamLeadImg">
                        <Image
                          width={100}
                          height={100}
                          src="../../uploads/team/1629690874-rahul.png"
                          alt="Rahul Motwani"
                          title="Rahul Motwani"
                          className="profileImg"
                        />
                      </div>
                      <div className="profileDetails">
                        <p>Rahul Motwani</p>
                        <span>Project Lead</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <div className="teamLeadbox">
                      <div className="teamLeadImg">
                        <Image
                          width={100}
                          height={100}
                          src="../../uploads/team/1629690897-naumna.png"
                          alt="Nauman Pathan"
                          title="Nauman Pathan"
                          className="profileImg"
                        />
                      </div>
                      <div className="profileDetails">
                        <p>Nauman Pathan</p>
                        <span>Project Lead</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                    <div className="teamLeadbox">
                      <div className="teamLeadImg">
                        <Image
                          width={100}
                          height={100}
                          src="../../uploads/team/1629690883-ashok.png"
                          alt="Ashok Sachdev"
                          title="Ashok Sachdev"
                          className="profileImg"
                        />
                      </div>
                      <div className="profileDetails">
                        <p>Ashok Sachdev</p>
                        <span>Project Lead</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="Padding-custom" data-aos="fade-up">
            <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
              <small>Client Testimonials</small>
              <h5>Good things our clients say about us</h5>
            </div>
            <div className="TestimonialsMainData">
              <div className="TestimonialsMain">
                <div className="container-fluid container-xl ">
                  <div className="clients-slider swiper-container">
                    <div className="swiper-slide">
                      <div className="slideTestimonials">
                        <div className="TestimonialsPic">
                          <div className="testpicClint">
                            <a>
                              <div className="imgDivclint">
                                <Image
                                  width={100}
                                  height={100}
                                  src="../../uploads/testimony/1687329065-Sam.png"
                                  alt="Client Testimonials"
                                  title="Client Testimonials"
                                  className="profileuser"
                                />
                              </div>
                              <div className="playIconClint"></div>
                            </a>
                          </div>
                          <div className="skewDiv">
                            <div className="element"></div>
                          </div>
                        </div>
                        <div className="leftDataclint">
                          <div className="quotationTop">
                            <i className="icon-quotation" />
                          </div>
                          <p className="clintFeeds">
                            Deulotech Web excels not only in technical skills but also in connecting
                            with clients on a personal level, making them feel like part of the
                            family. Their attention to detail, unwavering support, and passion for
                            their craft make them an indispensable development company. They
                            consistently deliver outstanding results, meeting targets on time and
                            maintaining high-quality standards. I highly recommend Deulotech Web.
                            Working with them has been a pleasure.
                          </p>
                          <div className="quotationbottom">
                            <i className="icon-quotation-bottom" />
                          </div>
                          <div className="clintnameDiv">
                            <p>Sam Chauhan</p>
                            <small>Founder</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="slideTestimonials">
                        <div className="TestimonialsPic">
                          <div className="testpicClint">
                            <a>
                              <div className="imgDivclint">
                                <Image
                                  width={100}
                                  height={100}
                                  src="../../uploads/testimony/1629288211-Abdulla_Hussain-min.jpeg"
                                  alt="Client Testimonials"
                                  title="Client Testimonials"
                                  className="profileuser"
                                />
                              </div>
                              <div className="playIconClint"></div>
                            </a>
                          </div>
                          <div className="skewDiv">
                            <div className="element"></div>
                          </div>
                        </div>
                        <div className="leftDataclint">
                          <div className="quotationTop">
                            <i className="icon-quotation" />
                          </div>
                          <p className="clintFeeds">
                            Working with Krunal and the team was a breeze! An extremely hardworking
                            and supportive team that you can rely on. More work lined up for the
                            team.
                          </p>
                          <div className="quotationbottom">
                            <i className="icon-quotation-bottom" />
                          </div>
                          <div className="clintnameDiv">
                            <p>Abdulla Hussain</p>
                            <small>Co-Founder, tallo</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="slideTestimonials">
                        <div className="TestimonialsPic">
                          <div className="testpicClint">
                            <a>
                              <div className="imgDivclint">
                                <Image
                                  width={100}
                                  height={100}
                                  src="../../uploads/testimony/1687169931-Mihir-Thaker.png"
                                  alt="Client Testimonials"
                                  title="Client Testimonials"
                                  className="profileuser"
                                />
                              </div>
                              <div className="playIconClint"></div>
                            </a>
                          </div>
                          <div className="skewDiv">
                            <div className="element"></div>
                          </div>
                        </div>
                        <div className="leftDataclint">
                          <div className="quotationTop">
                            <i className="icon-quotation" />
                          </div>
                          <p className="clintFeeds">
                            We were looking for a development partner who could understand our
                            comprehensive scope of work and bring our product from idealization to
                            realization. Deulotech Web reflected &apos;Trust and Confidence,&apos;
                            and the key reason I awarded this project to Deulotech Web were that
                            they promote local talents and give them opportunities to outgrow
                            themselves. Deulotech Web went above and beyond and constantly supported
                            changes to the initial scope of work. Deulotech Web is now our
                            development partner, and I highly recommend them for any custom
                            development requirements.
                          </p>
                          <div className="quotationbottom">
                            <i className="icon-quotation-bottom" />
                          </div>
                          <div className="clintnameDiv">
                            <p>Mihir Thakker</p>
                            <small>Co-Founder, SaaS Data Compliance Platform</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-explore ReadMore text-center">
                  <a href="client-testimonial.html" className="btn custom-btn common-btn blue">
                    read more testimonials
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <section className="Padding-custom">
        <div className="section-title">
          <small>Got an Idea?</small>
          <p className="Contact-Title">Let`s Chat and Get Started</p>
        </div>
        <div className="contactMainDiv">
          <div className="container">
            <div className="contactMain">
              <div className="row">
                <div className="col-md-12">
                  <div className="ContactFormMain">
                    {/* ================================== */}
                    <form method="post" className="php-email-form">
                      <div className="row gy-4">
                        <div className="col-md-6">
                          <div className="group-input">
                            <input
                              type="text"
                              name="name"
                              className="form-control effect-2 name contact-name-sty"
                              placeholder="Name"
                              required=""
                            />
                            <span className="focus-border" />
                          </div>
                          <div className="group-input">
                            <input
                              type="email"
                              className="form-control effect-2 email"
                              name="email"
                              placeholder="Email"
                              required=""
                            />
                            <span className="focus-border" />
                          </div>
                          <div className="group-input">
                            <input
                              type="text"
                              className="form-control effect-2 contact-id"
                              name="id"
                              placeholder="Phone/Mobile"
                            />
                            <span className="focus-border" />
                          </div>
                        </div>
                        <div className="col-md-6 d-none">
                          <div className="group-input">
                            <i className="bi bi-chevron-down" />
                            <input
                              type="text"
                              className="form-control effect-2 contact-country"
                              name="email"
                              placeholder="Country"
                              required=""
                            />
                            <span className="focus-border" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="group-input">
                            <i className="bi bi-chevron-down" />
                            <select name="budget" id="budget" className="form-control effect-2">
                              <option value="">Budget</option>
                              <option value="$5K">$5K</option>
                              <option value="$10K+">$10K+</option>
                              <option value="$25K+">$25K+</option>
                              <option value="$50K+">$50K+</option>
                              <option value="$100K+">$100K+</option>
                              <option value="Not Sure">Not Sure</option>
                            </select>
                            <span className="focus-border" />
                          </div>
                          <div className="group-input">
                            <textarea
                              className="form-control effect-2 desc"
                              name="message"
                              rows={4}
                              placeholder="Project Description"
                              required=""
                              defaultValue={''}
                            />
                            <span className="focus-border" />
                          </div>
                        </div>
                        <div className="col-md-12 text-left">
                          <div className="DiscoverMore contact-Div text-left">
                            <button
                              type="submit"
                              className="btn contcact-btn custom-btn common-btn blue">
                              submit
                            </button>
                          </div>
                        </div>
                        {/* ========================================= */}
                      </div>
                    </form>
                  </div>
                </div>
                <Image
                  width={100}
                  height={100}
                  className="ContactLineDark esterline"
                  src="/frontend/web/dws-assets/img/assets-img/easter/sectionLineDark.png"
                  alt="sectionLineDark"
                  title="sectionLineDark"
                />
                <Image
                  width={100}
                  height={100}
                  className="ContactLineDark"
                  src="/frontend/web/dws-assets/img/assets-img/easter/sectionLineblue.png"
                  alt="sectionLineDark"
                  title="sectionLineDark"
                />
                <div className="col-md-12">
                  <div className="rightContactImg">
                    <div className="contactTitle">
                      <p className="anyTimeTitle">Another way to connect</p>
                    </div>
                    <div className="contactShare">
                      <ul>
                        <li>
                          <a href="mailto: hello@groovyweb.co ">
                            <div className="InquiriesDiv">
                              <div className="mailIcon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-envelope-fill"
                                  viewBox="0 0 16 16">
                                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                              </div>
                              <div className="InquiriesDetails">
                                <label htmlFor="">Email</label>
                                <p> hello@groovyweb.co </p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            rel="nofollow"
                            target="_blank"
                            href="https://join.skype.com/invite/umRXv8q3hlAK">
                            <div className="InquiriesDiv">
                              <div className="mailIcon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-skype"
                                  viewBox="0 0 16 16">
                                  <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z" />
                                </svg>
                              </div>
                              <div className="InquiriesDetails">
                                <label htmlFor="">Skype</label>
                                <p>Hello.Deulotech</p>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="tel:+919409123477">
                            <div className="InquiriesDiv">
                              <div className="mailIcon">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={16}
                                  height={16}
                                  fill="currentColor"
                                  className="bi bi-phone-fill"
                                  viewBox="0 0 16 16">
                                  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
                                </svg>
                              </div>
                              <div className="InquiriesDetails">
                                <label htmlFor="">Mobile</label>
                                <p>+91 940 912 3477</p>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="contactSocial">
                      <ul>
                        <li>
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.facebook.com/groovyweb.co">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-facebook"
                              viewBox="0 0 16 16">
                              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.linkedin.com/company/groovyweb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-linkedin"
                              viewBox="0 0 16 16">
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a target="_blank" rel="nofollow" href="https://twitter.com/groovywebco">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-twitter"
                              viewBox="0 0 16 16">
                              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.instagram.com/groovyweb.co">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-instagram"
                              viewBox="0 0 16 16">
                              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="nofollow"
                            href="https://www.behance.net/groovyweb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              fill="currentColor"
                              className="bi bi-behance"
                              viewBox="0 0 16 16">
                              <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391.286.176.497.426.641.747.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922.281.426.461.957.461 1.563 0 .496-.105.922-.285 1.278a2.317 2.317 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.329 5.329 0 0 1-1.278.176L0 12.803V3h4.654zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a.981.981 0 0 0-.32-.355 1.84 1.84 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305v.005zm6.858-.035c.286.285.711.426 1.278.426.39 0 .746-.106 1.032-.286.285-.215.46-.426.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.135 4.135 0 0 1-1.527-.285 2.827 2.827 0 0 1-1.137-.782 2.851 2.851 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4.018 4.018 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396zm2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176-.215.105-.356.25-.496.39a.957.957 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978v-.957z" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

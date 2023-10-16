import Image from 'next/image';
import Link from 'next/link';

export const Testimonies = () => {
  return (
    <section className="Padding-custom" data-aos="fade-up">
      <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
        <small>Client Testimonials</small>
        <h5>Good things our clients say about us</h5>
      </div>
      <div className="TestimonialsMainData">
        <div className="TestimonialsMain">
          <div className="container-fluid container-xl ">
            <div className="clients-slider swiper-container">
              <div className="slick-slide">
                <div className="slideTestimonials">
                  <div className="TestimonialsPic">
                    <div className="testpicClint">
                      <Link href="">
                        <div className="imgDivclint">
                          <Image
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="https://www.groovyweb.co/uploads/testimony/1687329065-Sam.png"
                            alt="Client Testimonials"
                            title="Client Testimonials"
                            className="profileuser b-lazy"
                            width={310}
                            height={310}
                          />
                        </div>
                      </Link>
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
                      DeuLo~Tech Solutions excels not only in technical skills but also in
                      connecting with clients on a personal level, making them feel like part of the
                      family. Their attention to detail, unwavering support, and passion for their
                      craft make them an indispensable development company. They consistently
                      deliver outstanding results, meeting targets on time and maintaining
                      high-quality standards. I highly recommend DeuLo~Tech Solutions. Working with
                      them has been a pleasure.
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
              <div className="slick-slide">
                <div className="slideTestimonials">
                  <div className="TestimonialsPic">
                    <div className="testpicClint">
                      <Link href="">
                        <div className="imgDivclint">
                          <Image
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="https://www.groovyweb.co/uploads/testimony/1629288211-Abdulla_Hussain-min.jpeg"
                            alt="Client Testimonials"
                            title="Client Testimonials"
                            className="profileuser b-lazy"
                            width={310}
                            height={310}
                          />
                        </div>
                      </Link>
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
                      Working with Krunal and the team was a breeze! An extremely hardworking and
                      supportive team that you can rely on. More work lined up for the team.{' '}
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
              <div className="slick-slide">
                <div className="slideTestimonials">
                  <div className="TestimonialsPic">
                    <div className="testpicClint">
                      <Link href="">
                        <div className="imgDivclint">
                          <Image
                            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                            data-src="https://www.groovyweb.co/uploads/testimony/1687169931-Mihir-Thaker.png"
                            alt="Client Testimonials"
                            title="Client Testimonials"
                            className="profileuser b-lazy"
                            width={310}
                            height={310}
                          />
                        </div>
                      </Link>
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
                      realization. DeuLo~Tech Solutions reflected "Trust and Confidence," and the
                      key reason I awarded this project to DeuLo~Tech Solutions were that they
                      promote local talents and give them opportunities to outgrow themselves.
                      DeuLo~Tech Solutions went above and beyond and constantly supported changes to
                      the initial scope of work. Groovy Web is now our development partner, and I
                      highly recommend them for any custom development requirements.
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
            <div className="project-explore ReadMore text-center">
              <Link href="/client-testimonial" className="btn custom-btn common-btn blue">
                read more testimonials
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

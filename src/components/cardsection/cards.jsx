import Image from 'next/image';
import Link from 'next/link';
import dottielogo from '../../uploads/projects/1693980626-Dottie logo.png';
import dottieimg from '../../uploads/projects/1693980626-Dottie.png';
export const Cards = () => {
  return (
    <>
      <section className="Padding-custom" data-aos="fade-up">
        <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
          <small>Success Stories</small>
          <h3>Where We Turned Ideas into Reality</h3>
        </div>
        <div className="project-div-per" data-aos="fade-up" data-aos-delay={200}>
          <div className="project-div">
            <div className="container-fluid container-xl">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <div className="projectNameDiv">
                      <div className="projectNamelogo">
                        <Image
                          className="b-lazy"
                          src={dottielogo}
                          alt="Dottie"
                          title="Dottie"
                          width={66}
                          height={66}
                        />
                      </div>
                      <div className="projectName">
                        <p>Dottie </p>
                      </div>
                    </div>
                    <div className="project-content">
                      <p>
                        Dottie Disability Dating is a compassionate online platform serving the
                        disabled community across Belgium, Netherlands, France, Germany, and the UK.
                        Connect with potential partners or friends, receive tailored daily matches,
                        engage through text, audio, and video communication, attend events, and
                        more.{' '}
                      </p>
                    </div>
                    <div className="projectTec">
                      <p>Technology Stack</p>
                      <div className="logoTec">
                        <div className="tectStack">
                          <Link href="/#">
                            <i className="icon-ReactJS tec-custom" />
                          </Link>
                        </div>
                        <div className="tectStack">
                          <Link href="/#">
                            <i className="icon-yii tec-custom" />
                          </Link>
                        </div>
                        <div className="tectStack">
                          <Link href="/#">
                            <i className="icon-MySQL tec-custom" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="project-explore">
                      <Link
                        href="work/Dottie"
                        className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                        Explore{' '}
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="projectImage">
                      <Image
                        className="b-lazy"
                        src={dottieimg}
                        alt="Dottie"
                        title="Dottie"
                        width={746}
                        height={465}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================================= */}
      <div className="Padding-custom" data-aos="fade-up">
        <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
          <small>Success Stories</small>
          <h3>Where We Turned Ideas into Reality</h3>
        </div>
        <div className="project-div-per" data-aos="fade-up" data-aos-delay={200}>
          <div className="project-div">
            <div className="container-fluid container-xl">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-5">
                    <div className="projectNameDiv">
                      <div className="projectNamelogo">
                        <img
                          className="b-lazy"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          data-src="https://www.groovyweb.co/uploads/projects/1693980626-Dottie logo.png"
                          alt="Dottie"
                          title="Dottie"
                          width={66}
                          height={66}
                        />
                      </div>
                      <div className="projectName">
                        <p>Dottie </p>
                      </div>
                    </div>
                    <div className="project-content">
                      <p>
                        Dottie Disability Dating is a compassionate online platform serving the
                        disabled community across Belgium, Netherlands, France, Germany, and the UK.
                        Connect with potential partners or friends, receive tailored daily matches,
                        engage through text, audio, and video communication, attend events, and
                        more.{' '}
                      </p>
                    </div>
                    <div className="projectTec">
                      <p>Technology Stack</p>
                      <div className="logoTec">
                        <div className="tectStack">
                          <Link href="/#">
                            <i className="icon-ReactJS tec-custom" />
                          </Link>
                        </div>
                        <div className="tectStack">
                          <Link href="/#">
                            <i className="icon-yii tec-custom" />
                          </Link>
                        </div>
                        <div className="tectStack">
                          <Link href="/#">
                            <i className="icon-MySQL tec-custom" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="project-explore">
                      <Link
                        href="work/dottie"
                        className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                        Explore
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="projectImg">
                      <img
                        className="b-lazy"
                        src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        data-src="https://www.groovyweb.co/uploads/projects/1693980626-Dottie.png"
                        alt="Dottie"
                        title="Dottie"
                        width={746}
                        height={465}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="project-div-per" data-aos="fade-up" data-aos-delay={200}>
        <div className="project-div">
          <div className="container-fluid container-xl">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7">
                  <div className="projectImg">
                    <img
                      className="b-lazy b-loader"
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://www.groovyweb.co/uploads/projects/1655797088-BH-Portfolio-Image-Optimized.jpg"
                      alt="Rehabilitation Management Software"
                      title="Rehabilitation Management Software"
                      width={746}
                      height={465}
                    />
                  </div>
                </div>
                <div className="col-md-5 pl30">
                  <div className="projectNameDiv">
                    <div className="projectNamelogo">
                      <img
                        className="b-lazy b-loader"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://www.groovyweb.co/uploads/projects/1655795756-BH-Resized-120.png"
                        alt="Rehabilitation Management Software"
                        title="Rehabilitation Management Software"
                        width={66}
                        height={66}
                      />
                    </div>
                    <div className="projectName">
                      <p>Rehabilitation Management Software </p>
                    </div>
                  </div>
                  <div className="project-content">
                    <p>
                      InSpired - One-stop solution for effective management and uninterrupted
                      control of Inspired Behavioral Inc., institutions.
                    </p>
                  </div>
                  <div className="projectTec">
                    <p>Technology Stack</p>
                    <div className="logoTec">
                      <div className="tectStack">
                        <Link href="/#">
                          <i className="icon-ReactJS tec-custom" />
                        </Link>
                      </div>
                      <div className="tectStack">
                        <Link href="/#">
                          <i className="icon-php tec-custom" />
                        </Link>
                      </div>
                      <div className="tectStack">
                        <Link href="/#">
                          <i className="icon-yii tec-custom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="project-explore">
                    <Link
                      href="work/Rehabilitation-Management-Software"
                      className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-div-per" data-aos="fade-up" data-aos-delay={200}>
        <div className="project-div">
          <div className="container-fluid container-xl">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5">
                  <div className="projectNameDiv">
                    <div className="projectNamelogo">
                      <img
                        className="b-lazy"
                        src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                        data-src="https://www.groovyweb.co/uploads/projects/1625220625-1-FilesDNA-icon.png"
                        alt="FilesDNA"
                        title="FilesDNA"
                        width={66}
                        height={66}
                      />
                    </div>
                    <div className="projectName">
                      <p>FilesDNA </p>
                    </div>
                  </div>
                  <div className="project-content">
                    <p>
                      FilesDNA is a paper-to-pixel system, which helps organizations to smoothly
                      transit from papers to digital documents. Managing documents and getting
                      signatures got so easy with FilesDNA.{' '}
                    </p>
                  </div>
                  <div className="projectTec">
                    <p>Technology Stack</p>
                    <div className="logoTec">
                      <div className="tectStack">
                        <Link href="/#">
                          <i className="icon-ReactJS tec-custom" />
                        </Link>
                      </div>
                      <div className="tectStack">
                        <Link href="/#">
                          <i className="icon-sails-seeklogocom1 tec-custom" />
                        </Link>
                      </div>
                      <div className="tectStack">
                        <Link href="/#">
                          <i className="icon-node tec-custom" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="project-explore">
                    <Link
                      href="work/FilesDNA"
                      className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                      {' '}
                      Explore
                    </Link>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="projectImg">
                    <img
                      className="b-lazy"
                      src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                      data-src="https://www.groovyweb.co/uploads/projects/1669122173-1-FilesDNA.jpg"
                      alt="FilesDNA"
                      title="FilesDNA"
                      width={746}
                      height={465}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="project-explore text-center">
        <Link href="work" className="btn custom-btn common-btn blue">
          {' '}
          Discover More{' '}
        </Link>
      </div>
    </>
  );
};

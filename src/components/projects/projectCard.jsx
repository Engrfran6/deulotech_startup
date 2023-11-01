import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ProjectCards = ({projects}) => {
  return (
    <>
      {projects?.map((project, index) => (
        <div
          className={`project-div-per ${index % 2 === 0 ? 'image-left' : 'text-left'}`}
          data-aos="fade-up"
          data-aos-delay={200}
          key={index}>
          <div className="project-div">
            <div className="container-fluid container-xl">
              <div className="col-md-12">
                <div className="row">
                  {index % 2 === 0 ? (
                    <>
                      <div className="col-md-5">
                        <div className="projectNameDiv">
                          <div className="projectNamelogo">
                            <Image
                              className="b-lazy"
                              src={project.logoUrl}
                              alt={project.name}
                              title={project.name}
                              width={66}
                              height={66}
                            />
                          </div>
                          <div className="projectName">
                            <p>{project.name}</p>
                          </div>
                        </div>
                        <div className="project-content">
                          <p>{project.description}</p>
                        </div>

                        <div className="projectTec">
                          <p>Technology Stack</p>
                          <div className="logoTec">
                            <div className="tectStack">
                              <Link href="/#">{project.techStackIcon.icon1}</Link>
                            </div>
                            <div className="tectStack">
                              <Link href="/#">{project.techStackIcon.icon2}</Link>
                            </div>
                            <div className="tectStack">
                              <Link href="/#">{project.techStackIcon.icon3}</Link>
                            </div>
                          </div>
                        </div>
                        <div className="project-explore" style={{display: 'flex', gap: '.7rem'}}>
                          <Link
                            href={`work/${project.name.toLowerCase().replace(/\s/g, '-')}`}
                            className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                            Explore
                          </Link>
                          <Link
                            href={`work/${project.name.toLowerCase().replace(/\s/g, '-')}`}
                            className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                            Live Demo
                          </Link>
                        </div>
                      </div>

                      <div className="col-md-7">
                        <div className="projectImage">
                          <Image
                            className="b-lazy"
                            src={project.imageUrl}
                            alt={project.name}
                            title={project.name}
                            width={746}
                            height={465}
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-md-7">
                        <div className="projectImg">
                          <Image
                            className="b-lazy b-loader"
                            src={project.imageUrl}
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
                            <Image
                              className="b-lazy b-loader"
                              src={project.logoUrl}
                              alt="Rehabilitation Management Software"
                              title="Rehabilitation Management Software"
                              width={66}
                              height={66}
                            />
                          </div>
                          <div className="projectName">
                            <p>{project.name} </p>
                          </div>
                        </div>
                        <div className="project-content">
                          <p>{project.description}</p>
                        </div>
                        <div className="projectTec">
                          <p>Technology Stack</p>
                          <div className="logoTec">
                            <div className="tectStack">
                              <Link href="/#">{project.techStackIcon.icon1}</Link>
                            </div>
                            <div className="tectStack">
                              <Link href="/#">{project.techStackIcon.icon2}</Link>
                            </div>
                            <div className="tectStack">
                              <Link href="/#">{project.techStackIcon.icon3}</Link>
                            </div>
                          </div>
                        </div>
                        <div className="project-explore" style={{display: 'flex', gap: '.7rem'}}>
                          <Link
                            href={`work/${project.name.toLowerCase().replace(/\s/g, '-')}`}
                            className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                            Explore
                          </Link>
                          <Link
                            href={`work/${project.name.toLowerCase().replace(/\s/g, '-')}`}
                            className="btn custom-btn hover1Btn hover1Btn_new common-btn blue">
                            Live Demo
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                  {index < 3 && (
                    <section className="Padding-custom" data-aos="fade-up">
                      <div className="SimilarSection">
                        <div className="container-fluid container-xl">
                          <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
                            <h2>Looking For Something Similar?</h2>
                            <p className="heroSubText">
                              Hit the button below and Contact Us to for Consultation
                            </p>
                          </div>
                          <div className="project-explore text-center mt-0">
                            <button
                              type="button"
                              onclick="if (!window.__cfRLUnblockHandlers) return false; location.href='https://www.groovyweb.co/contact-us';"
                              className="btn custom-btn common-btn blue mt-0"
                              data-cf-modified-c1eb07818d331d23970e1c3f-="">
                              Get Free Consultation
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

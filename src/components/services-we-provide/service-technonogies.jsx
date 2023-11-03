'use client';

import {useState} from 'react';
import Link from 'next/link';
import {AccordionBtn} from '../buttons/accordion/accordion-btn';
import {serviceDatas} from './service-data';
import {Accordion, AccordionButton} from 'react-bootstrap';

export const OurServicesTechnology = () => {
  const convertTitleToLink = () => serviceDatas.title1?.toLowerCase().replace(/\s/g, '-');
  const link = convertTitleToLink();

  return (
    <main id="main">
      <section className="Padding-custom">
        <div className="section-title" data-aos="fade-up">
          <small>Our Expertise</small>
          <h3>Technologies we are GOOD with</h3>
        </div>
        <div className="workWithDisv">
          <div className="container-fluid container-xl">
            <div className="workTabMains">
              <div className="container-fluidw" data-aos="fade-up">
                <div className="rows">
                  <div className="col-lg-12ss">
                    {/* <div className="accordion accordion-flush expertise-accordion" id="worklist1">
                      {serviceDatas.slice(0, 5).map((service, index) => (
                        <div className="accordion-item" key={index}>
                          <h2 className="accordion-header">
                            <AccordionBtn
                              title1={service.title1}
                              ariaExpanded={activeAccordion === index ? 'true' : 'false'}
                              onClick={() => toggleAccordion(index)}
                            />
                          </h2>
                          <div
                            id={`work-content-${index}`}
                            className={`accordion-collapse collapse ${
                              activeAccordion === index ? 'show' : ''
                            }`}
                            data-parent="#worklist1">
                            <div className="accordion-body">
                              <p>{service.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div> */}
                    <Accordion defaultActiveKey="0" flush alwaysOpen>
                      {serviceDatas.slice(0, 5).map((service, index) => (
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>{service.title1}</Accordion.Header>
                          {/* <Accordion.Body>{service.description}</Accordion.Body> */}
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-explore ReadMoreService text-center">
          <Link href="our-service" className="btn custom-btn common-btn blue">
            Read More about Services
          </Link>
        </div>
      </section>
    </main>
  );
};

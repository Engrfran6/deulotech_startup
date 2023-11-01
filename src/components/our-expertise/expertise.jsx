'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {AccordionBtn} from '../buttons/accordion/accordion-btn';
import {mernApp, mobileApp, mvpApp, saasApp, webApp} from './expertise-data';

export const OurExpertise = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // Initialize the first item as active

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(index);
    } else {
      setActiveAccordion(0);
    }
  };

  return (
    <main id="main">
      <section className="Padding-custom">
        <div className="section-title" data-aos="fade-up">
          <small>Our Expertise</small>
          <h3>Technologies we are GOOD with</h3>
        </div>
        <div className="workWithDiv">
          <div className="container-fluid container-xl">
            <div className="workTabMain">
              <div className="container-fluid" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="accordion accordion-flush expertise-accordion" id="worklist1">
                      {[mobileApp, webApp, mernApp, saasApp, mvpApp].map((item, index) => (
                        <div className="accordion-item" key={index}>
                          <h2 className="accordion-header">
                            <AccordionBtn
                              title={item.title}
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
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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

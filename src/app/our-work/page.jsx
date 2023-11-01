import Link from 'next/link';
import {ContactForm} from '@/components/contactsForm/contactForm';
import {ProjectCards} from '@/components/projects/projectCard';
import projects from '@/components/projects/projectDetails';

export default function OurWork() {
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
          <section className="Padding-custom pt-90 custom-work" data-aos="fade-up">
            <div className="breadcrumbHero">
              <div className="container-fluid container-xl">
                <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
                  <h1>Our Work</h1>
                  <p className="heroSubText">
                    Read about some of our best success stories where we transformed our clients'
                    ideas into a scalable and user-friendly product by beating all the challenges
                    with our exceptional efforts
                  </p>
                </div>
                <div className="mouseDiv">
                  <Link href="/our-work">
                    <div className="icon-mouse" />
                    <i className="icon-top" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <ProjectCards projects={projects} />
        </main>
      </div>

      <ContactForm />
    </>
  );
}

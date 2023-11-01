import Link from 'next/link';
import {TestimonyCard} from './testimonyCard';
import {clientData} from './testimonyData';

export const Testimonies = () => {
  return (
    <section className="Padding-custom" data-aos="fade-up">
      <div className="section-title" data-aos="fade-up" data-aos-delay={200}>
        <small>Client Testimonials</small>
        <h5>Good things our clients say about us</h5>
      </div>

      <div className="TestimonialsMainData">
        <div className="TestimonialsMain">
          <div className="container-fluid container-xl">
            <div className="clients-slider swiper-container">
              <div className="slick-slide">
                <TestimonyCard clientData={clientData} />
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

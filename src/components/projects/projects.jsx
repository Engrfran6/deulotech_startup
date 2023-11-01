import Link from 'next/link';
import {ProjectCards} from './projectCard';
import projects from './projectDetails';

export const Projects = () => {
  return (
    <section className="Padding-custom" data-aos="fade-up">
      <div className="section-title Padding-custom" data-aos="fade-up" data-aos-delay={200}>
        <small>Success Stories</small>
        <h3>Where We Turned Ideas into Reality</h3>
      </div>

      <>
        <ProjectCards projects={projects.slice(0, 2)} />
      </>

      <div className="project-explore text-center">
        <Link href="work" className="btn custom-btn common-btn blue">
          Discover More
        </Link>
      </div>
    </section>
  );
};

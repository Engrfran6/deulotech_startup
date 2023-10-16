import Link from 'next/link';

export const OurProcess = () => {
  return (
    <section className="Padding-custom" data-aos="fade-up" data-aos-delay={200}>
      <div className="section-title">
        <small>Our Process</small>
        <h4>See what our projects have to go through..!</h4>
      </div>
      <div className="container-fluid container-xl">
        <div className="MethodologyMain text-center">
          <div className="DiagramDiv">
            <img
              className="b-lazy b-loader"
              src="/assets/img/assets-img/Diagram.svg"
              width={1276}
              height={427}
              alt="Our Process"
              title="Our Process"
            />
          </div>
        </div>
      </div>
      <div className="project-explore text-center">
        <Link href="/app-cost-calculator/index" className="btn custom-btn common-btn blue m-a-10">
          Estimate My App
        </Link>
        <Link href="/how-we-work" className="btn custom-btn common-btn blue m-a-10">
          Know More
        </Link>
      </div>
    </section>
  );
};

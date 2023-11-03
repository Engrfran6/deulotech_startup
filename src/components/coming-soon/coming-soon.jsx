import Link from 'next/link';

export const ComingSoon = () => {
  return (
    <section className="Padding-custom" style={{height: '50vh', marginTop: '8rem'}}>
      <div className="section-title" data-aos="fade-up">
        <small style={{paddingBottom: '3rem'}}>Page Not Avalaible Right Now</small>
        <h3>Coming SOON!!!</h3>
      </div>

      <div className="project-explore ReadMoreService text-center">
        <Link href="/" className="btn custom-btn common-btn blue">
          GO BACK
        </Link>
      </div>
    </section>
  );
};

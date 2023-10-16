import Link from 'next/link';

export const Button = ({title}) => {
  return (
    <div className="project-explore text-center">
      <Link href="/work" className="btn custom-btn common-btn blue">
        {title}
      </Link>
    </div>
  );
};

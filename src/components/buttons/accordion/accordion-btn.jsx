import Link from 'next/link';
// import './accordion-btn.css';

export const AccordionBtn = ({title1, ariaExpanded, toggleAccordion}) => {
  const convertTitleToLink = () => title1?.toLowerCase().replace(/\s/g, '-');
  const link = convertTitleToLink();

  const handleClick = () => {
    toggleAccordion(); // Call the provided toggleAccordion function
  };

  return (
    <div
      onClick={handleClick}
      className="accordion-button"
      type="button"
      // data-toggle="collapse"
      // data-target="#work-content-2"
      aria-expanded={`${ariaExpanded}`}>
      <Link href={`service/${link}`} target="_blank">
        {title1}
      </Link>
      <Link href={`service/${link}`} target="_blank" className="open-external">
        <svg
          id="Layer_1"
          style={{enableBackground: 'new 0 0 64 64'}}
          version="1.1"
          viewBox="0 0 64 64"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '\n.st0 {\n                                      fill: #134563;\n                                    }\n                                  ',
            }}
          />
          <g>
            <g id="Icon-External-Link" transform="translate(382.000000, 380.000000)">
              <polyline
                className="st0"
                id="Fill-118"
                points="-352.3,-343.4 -354.6,-345.7 -328.8,-371.4 -326.6,-369.2 -352.3,-343.4 "></polyline>
              <polyline
                className="st0"
                id="Fill-119"
                points="-326,-354.9 -329.4,-354.9 -329.4,-368.6 -343.1,-368.6 -343.1,-372 -326,-372 -326,-354.9 "></polyline>
              <path
                className="st0"
                d="M-334.6-324h-34.3c-2.8,0-5.1-2.3-5.1-5.1v-34.3c0-2.8,2.3-5.1,5.1-5.1h18.9v3.4h-18.9 c-0.9,0-1.7,0.8-1.7,1.7v34.3c0,0.9,0.8,1.7,1.7,1.7h34.3c0.9,0,1.7-0.8,1.7-1.7V-348h3.4v18.9C-329.4-326.3-331.7-324-334.6-324 "
                id="Fill-120"
              />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
};

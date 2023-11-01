import Link from 'next/link';
import Image from 'next/image';

export const TestimonyCard = ({clientData}) => {
  return (
    <>
      {clientData?.map((client, index) => (
        <div className="slideTestimonials" key={index}>
          <div className="TestimonialsPic">
            <div className="testpicClint">
              <Link href="/">
                <div className="imgDivclint">
                  <Image
                    src={client.clientPhoto}
                    alt="Client Testimonials"
                    title="Client Testimonials"
                    className="profileuser b-lazy"
                    width={310}
                    height={310}
                  />
                </div>
              </Link>
            </div>
            <div className="skewDiv">
              <div className="element"> </div>
            </div>
          </div>

          <div className="leftDataclint">
            <div className="quotationTop">
              <i className="icon-quotation" />
            </div>
            <p className="clintFeeds">{client.clientField}</p>
            <div className="quotationbottom">
              <i className="icon-quotation-bottom" />
            </div>
            <div className="clintnameDiv">
              <p>{client.clientName}</p>
              <small>{client.clientTitle}</small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

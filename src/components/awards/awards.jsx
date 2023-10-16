import Image from 'next/image';

export const Awards = () => {
  return (
    <section id="awards">
      <div className="awards-container">
        <div className="award-box clutch-top">
          <Image
            className="b-lazy b-loader"
            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            data-src="https://www.groovyweb.co/uploads/accredited/Clutch.png"
            width={83}
            height={90}
          />
        </div>
        <div className="award-box good-firms">
          <Image
            className="b-lazy b-loader"
            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            data-src="https://www.groovyweb.co/uploads/accredited/GoodFirms.png"
            width={90}
            height={77}
          />
        </div>
        <div className="award-box mobile-app-health">
          <Image
            className="b-lazy b-loader"
            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            data-src="https://www.groovyweb.co/uploads/accredited/mobile-app.png"
            width={90}
            height={90}
          />
        </div>
        <div className="award-box top-developers">
          <Image
            className="b-lazy b-loader"
            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            data-src="https://www.groovyweb.co/uploads/accredited/Top_Developers.png"
            width={90}
            height={89}
          />
        </div>
        <div className="award-box software-world">
          <Image
            className="b-lazy b-loader"
            src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
            data-src="https://www.groovyweb.co/uploads/accredited/Mobile-App-Development-Companies.png"
            width={90}
            height={90}
          />
        </div>
      </div>
    </section>
  );
};

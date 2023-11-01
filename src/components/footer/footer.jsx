import Image from 'next/image';
import Link from 'next/link';
import {FooterAddress} from './address';

export const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-newsletter"></div>
      <div className="footer-top">
        <div className="container">
          <div className="row gy-4 pb-50 ">
            <div className="col-lg-3 col-md-12 footer-info">
              <Link href="/" className="logo d-flex align-items-center">
                {/* <Image width={170} height={50} src="assets/img/Logo.svg" alt="" loading="lazy" /> */}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <p>DeuloTech</p>
                  <small> Assurance of excellence</small>
                </div>
              </Link>
              <p>
                We are a perfect team of artisans for building an innovative and amazing digital
                solutions.
              </p>
              <div className="career_inq_footer">
                <p className="footertitle">Looking for career opportunity?</p>
                <div className="footcontactDetails">
                  <ul>
                    <li>
                      <Link target="_blank" href="mailto:career@groovyweb.firm.in">
                        <i className="icon-email1" />
                        career@deulotech.com
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" className="num-txt" href="tel:+919737100736">
                        <i className="icon-mobile-1" />
                        +234 7038689224
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <p className="footerMinTitle">DeuLoTech</p>
              <ul>
                <li>
                  <Link href="about-us">About Us</Link>
                </li>
                <li>
                  <Link href="work">Our Work</Link>
                </li>
                <li>
                  <Link href="career">Careers</Link>
                </li>
                <li>
                  <Link href="client-testimonial">Testimonials</Link>
                </li>
                <li>
                  <Link href="contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-6 footer-links">
              <p className="footerMinTitle">Our Services</p>
              <ul>
                <li>
                  <Link href="service/mobile-app-development">Mobile App Development</Link>
                </li>
                <li>
                  <Link href="service/cross-platform-mobile-app-development">
                    Cross Platform Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="service/progressive-web-app-development">
                    Progressive Web App Development
                  </Link>
                </li>
                <li>
                  <Link href="service/web-development">Web Development</Link>
                </li>
                <li>
                  <Link href="service/software-development">Custom Software Development</Link>
                </li>
                <li>
                  <Link href="service/mern-stack-development">MERN Stack Development</Link>
                </li>
                <li>
                  <Link href="service/saas-development">SaaS Development</Link>
                </li>
                <li>
                  <Link href="service/mvp-development">MVP Development</Link>
                </li>
                <li>
                  <Link href="service/mean-stack-development">MEAN Stack Development</Link>
                </li>
                <li>
                  <Link href="service/browser-extension-development">
                    Browser Extension Development
                  </Link>
                </li>
                <li>
                  <Link href="service/chat-bot-development">Chat Bot Development</Link>
                </li>
                <li>
                  <Link href="service/desktop-application-development">
                    Desktop Application Development
                  </Link>
                </li>
                <li>
                  <Link href="service/android-app-development-company">
                    Custom Android App Development
                  </Link>
                </li>
                <li>
                  <Link href="service/ios-app-development-company">Custom iOS App Development</Link>
                </li>
                <li>
                  <Link href="service/flutter-app-development-company">
                    Flutter App Development
                  </Link>
                </li>
                <li>
                  <Link href="service/ionic-app-development-company">Ionic App Development</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <p className="footerMinTitle">Our Technology</p>
              <ul>
                <li className="bold-title-footer">
                  <Link href="">Mobile</Link>
                </li>
                <li>
                  <Link href="service/react-native-app-development">React Native</Link>
                </li>
                <li>
                  <Link href="service/flutter-app-development-company">Flutter</Link>
                </li>
                <li>
                  <Link href="service/ionic-app-development-company">Ionic</Link>
                </li>
                <li>
                  <Link href="service/android-app-development-company">Android</Link>
                </li>
                <li>
                  <Link href="service/ios-app-development-company">IOS</Link>
                </li>
                <li className="bold-title-footer">
                  <Link href="">Framework</Link>
                </li>
                <li>
                  <Link href="service/yii2-framework-development">Yii2</Link>
                </li>
                <li>
                  <Link href="service/sails-js-framework-development">Sail.JS</Link>
                </li>
                <li>
                  <Link href="service/next-js-framework-development">Next.js</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <p className="footerMinTitle">&nbsp;</p>
              <ul>
                <li className="bold-title-footer">
                  <Link href="">Front End</Link>
                </li>
                <li>
                  <Link href="service/react-js-development">React.JS</Link>
                </li>
                <li>
                  <Link href="service/web-development">Angular.JS</Link>
                </li>
                <li>
                  <Link href="service/web-development">Vue JS</Link>
                </li>
                <li className="bold-title-footer">
                  <Link href="">Backend</Link>
                </li>
                <li>
                  <Link href="service/node-js-development">Node.JS </Link>
                </li>
                <li>
                  <Link href="service/php-development">PHP</Link>
                </li>
                <li className="bold-title-footer">
                  <Link href="">Desktop</Link>
                </li>
                <li>
                  <Link href="service/electron-js-development">Electron.js</Link>
                </li>
              </ul>
            </div>
          </div>

          <FooterAddress />
        </div>
      </div>

      <div className="container-copy">
        <div className="container">
          <div className="footer-copy">
            <div className="copyright">
              <strong>
                <span>
                  © 2015 - 2023 DeuLo Technology Solutions PRIVATE LIMITED. All Rights Reserved.
                </span>
              </strong>
            </div>
            <div className="socialFooter">
              <ul>
                <li>
                  <Link
                    href="https://www.facebook.com/deulotech.com"
                    target="_blank"
                    rel="nofollow">
                    <Image
                      width={24}
                      height={24}
                      className="b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://www.deulotech.com/assets/img/assets-img/Vectors/facebook.svg"
                      alt="social-icon"
                    />
                    facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/company/groovyweb"
                    target="_blank"
                    rel="nofollow">
                    <Image
                      width={24}
                      height={24}
                      className="b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://www.deulotech.com/assets/img/assets-img/Vectors/linkedin.svg"
                      alt="social-icon"
                    />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/groovywebco" target="_blank" rel="nofollow">
                    <Image
                      width={24}
                      height={24}
                      className="b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://www.deulotech.com/dws-assets/img/assets-img/Vectors/twitter.svg"
                      alt="social-icon"
                    />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/deulotech.com"
                    target="_blank"
                    rel="nofollow">
                    <Image
                      width={24}
                      height={24}
                      className="b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://www.deulotech.com/assets/img/assets-img/Vectors/instagram.svg"
                      alt="social-icon"
                    />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/@wearedeulotech"
                    target="_blank"
                    rel="nofollow">
                    <Image
                      width={24}
                      height={24}
                      className="b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://www.deulotech.com/assets/img/assets-img/Vectors/YouTube.svg"
                      alt="social-icon"
                    />
                    Youtube
                  </Link>
                </li>
                <li>
                  <Link href="https://www.behance.net/groovyweb" target="_blank" rel="nofollow">
                    <Image
                      width={24}
                      height={24}
                      className="b-lazy"
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC4yMjggMTUuMDFoLTIuMjI4di0yLjAxaDIuMjYxYzEuODc4IDAgMi4wMDMgMi4wMS0uMDMzIDIuMDF6bTYuNzU4LTIuNjc3aDMuMDE4Yy0uMTE3LTEuNzE1LTIuNzMtMS45NzctMy4wMTggMHptLTYuODA0LTMuMzMzaC0yLjE4MnYyaDIuMzg5YzEuNjczIDAgMS45MzctMi0uMjA3LTJ6bTE1LjgxOC00djE0YzAgMi43NjEtMi4yMzggNS01IDVoLTE0Yy0yLjc2MiAwLTUtMi4yMzktNS01di0xNGMwLTIuNzYxIDIuMjM4LTUgNS01aDE0YzIuNzYyIDAgNSAyLjIzOSA1IDV6bS0xMCAzaDV2LTFoLTV2MXptLTMuNTUyIDMuNjE4YzEuOTA3LS45NzQgMS44MzctNC41NS0xLjgxMy00LjYwNGgtNC42MzV2OS45NzhoNC4zMTFjNC41MjIgMCA0LjQ0NS00LjUzNCAyLjEzNy01LjM3NHptOS40ODcuNjAyYy0uMjc0LTEuNzYzLTEuNTI4LTIuOTUtMy41ODMtMi45NS0yLjA5NCAwLTMuMzUyIDEuMzQtMy4zNTIgMy45NDcgMCAyLjYzMSAxLjM2NyAzLjc4MyAzLjQxNiAzLjc4M3MzLjEwNi0xLjEzNSAzLjQtMmgtMi4xMTFjLS43MzYuODU1LTIuODkzLjUyMS0yLjc2Ny0xLjM1M2g1LjA2Yy4wMS0uNjM0LS4wMTItMS4wODktLjA2My0xLjQyN3oiLz48L3N2Zz4="
                      data-src="https://www.deulotech.com/assets/img/assets-img/Vectors/behance.svg"
                      alt="social-icon"
                    />
                    Behance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

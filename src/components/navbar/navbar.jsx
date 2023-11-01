'use client';

import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';

export const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleDropdownMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleDropdownMouseEnter2 = () => {
    setShowDropdown2(true);
  };

  const handleDropdownMouseLeave2 = () => {
    setShowDropdown2(false);
  };

  return (
    <header id="header" className="header fixed-top landing-one header-scrolled">
      <div className="container-fluid d-flex align-items-center justify-content-between full-header">
        <Link href="//" className="logo d-flex align-items-center ">
          {/* <Image
            width={160}
            height={47}
            className="scoll_downlogo"
            src="assets/img/LogoWhite.svg"
            alt="DeuLo~Tech Solutions"
          />
          <Image
            width={160}
            height={47}
            className="scoll_uplogo"
            src="assets/img/Logo.svg"
            alt=""
            loading="lazy"
          /> */}

          <p className="scoll_downlogo">DWS1</p>
          <p className="scoll_uplogo">DWS2</p>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link className="nav-link" href="/our-work">
                Projects
              </Link>
            </li>

            <li
              className="dropdown mega-dropdown"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}>
              <Link href="/our-service">
                <span className="service-link">Services</span>
              </Link>
              {showDropdown && (
                <div className="mega-dropdown-menu">
                  <div className="dropdown-menuw">
                    <div
                      className="flex-col-menu"
                      style={{
                        position: 'absolute',
                        left: '-72.5rem',
                      }}>
                      <div className="servicesDiv">
                        <p className="MegaSubTitle">Our Services</p>
                        <ul className="dropdown-menu-sub">
                          <li>
                            <Link href="/service/mobile-app-development">
                              Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/cross-platform-mobile-app-development">
                              Cross Platform Mobile App Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/progressive-web-app-development">
                              PWA Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/web-development">Web Development</Link>
                          </li>
                          <li>
                            <Link href="/service/software-development">
                              Custom Software Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/mern-stack-development">
                              MERN Stack Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/saas-development">SaaS Development</Link>
                          </li>
                          <li>
                            <Link href="/service/mvp-development">MVP Development</Link>
                          </li>
                          <li>
                            <Link href="/service/mean-stack-development">
                              MEAN Stack Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/browser-extension-development">
                              Browser Extension Development
                            </Link>
                          </li>
                          <li>
                            <Link href="/service/chat-bot-development">Chat Bot Development</Link>
                          </li>
                          <li>
                            <Link href="/service/desktop-application-development">
                              Desktop Application Development
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="TechnologyDiv">
                        <p className="MegaSubTitle">Our Technology</p>
                        <div className="flexRowMenu">
                          <ul className="dropdown-menu-sub">
                            <li className="subTitle">
                              <Link href="/service/mobile-app-development">Mobile App</Link>
                            </li>
                            <li>
                              <Link href="/service/react-native-app-development">React Native</Link>
                            </li>
                            <li>
                              <Link href="/service/ionic-app-development-company">IONIC</Link>
                            </li>
                            <li>
                              <Link href="/service/flutter-app-development-company">Flutter</Link>
                            </li>
                            <li>
                              <Link href="/service/android-app-development-company">Android</Link>
                            </li>
                            <li>
                              <Link href="/service/ios-app-development-company">iOS</Link>
                            </li>
                          </ul>
                          <ul className="dropdown-menu-sub">
                            <li className="subTitle">
                              <Link href="/service/web-development">Front End</Link>
                            </li>
                            <li>
                              <Link href="/service/react-js-development">React.JS</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">Angular</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">Angular.JS</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">Vue JS</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">Backbone JS</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">TypeScript</Link>
                            </li>
                          </ul>
                          <ul className="dropdown-menu-sub">
                            <li className="subTitle">
                              <Link href="/service/yii2-framework-development">
                                Framework / CMS
                              </Link>
                            </li>
                            <li>
                              <Link href="/service/yii2-framework-development">Yii2</Link>
                            </li>
                            <li>
                              <Link href="/service/sails-js-framework-development">Sails JS</Link>
                            </li>
                            <li>
                              <Link href="/service/next-js-framework-development">Next JS</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">Laravel</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">CakePHP</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">CodeIgniter</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">Wordpress</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="flexRowMenu">
                          <ul className="dropdown-menu-sub">
                            <li className="subTitle">
                              <Link href="/service/web-development">UI / UX Design</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">User Interface</Link>
                            </li>
                            <li>
                              <Link href="/service/web-development">User Experience</Link>
                            </li>
                          </ul>
                          <ul className="dropdown-menu-sub">
                            <li className="subTitle">
                              <Link href="/service/web-development">Backend</Link>
                            </li>
                            <li>
                              <Link href="/service/node-js-development">Node JS</Link>
                            </li>
                            <li>
                              <Link href="/service/php-development">PHP</Link>
                            </li>
                          </ul>
                          <ul className="dropdown-menu-sub">
                            <li className="subTitle">
                              <Link href="/service/desktop-application-development">
                                Desktop App
                              </Link>
                            </li>
                            <li>
                              <Link href="/service/electron-js-development">Electron.JS </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="BadgesDiv">
                        <p className="MegaSubTitle">Expert Badges</p>
                        <div className="BadgesDetails">
                          <div className="badgeslab">
                            <p className="badgeslabTitle">React.JS Development</p>
                            <p>
                              React JS development is one of the focus areas of SCAND front-end
                              development department.
                            </p>
                          </div>
                          <div className="badgeslab">
                            <p className="badgeslabTitle">Yii2 Development</p>
                            <p>Yes, it is! Yii is a fast, secure, and efficient PHP framework.</p>
                          </div>
                          <div className="badgeslab">
                            <p className="badgeslabTitle">Laravel Development</p>
                            <p>
                              Laravel is a web application framework with expressive, elegant
                              syntax.
                            </p>
                          </div>
                          <div className="badgeslab">
                            <p className="badgeslabTitle">React Native Development</p>
                            <p>
                              React Native lets you create truly native apps and doesn't compromise
                              your users' experiences.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <div className="mega-dropdown-menu">
              <div className="dropdown-menu">
                <div className="flex-col-menu">
                  <div className="servicesDiv whyGroovyMenu">
                    <p className="MegaSubTitle">We Are DWS</p>
                    <ul className="dropdown-menu-sub">
                      <li>
                        <Link href="//#">Plan the work and work the plan</Link>
                      </li>
                      <li>
                        <Link href="//#">Pleasure Puts Perfection</Link>
                      </li>
                      <li>
                        <Link href="//#">Everything is possible</Link>
                      </li>
                      <li>
                        <Link href="//#">We work with you</Link>
                      </li>
                      <li>
                        <Link href="//#">Every Project is Special</Link>
                      </li>
                      <li>
                        <Link href="//#">Keep Communicating with Clients</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="SolutionsDiv CompanyDiv">
                    <div className="CompanyDivMenu">
                      <div className="comDiv">
                        <p className="MegaSubTitle">Company</p>
                        <div className="flexRowMenu">
                          <ul className="dropdown-menu-sub">
                            <li>
                              <Link href="/about-us">Our Story</Link>
                            </li>
                            <li>
                              <Link href="/client-testimonial">Client Testimonials</Link>
                            </li>
                            <li>
                              <Link href="/how-we-work">How We Work</Link>
                            </li>
                            <li>
                              <Link href="/contact-us">Contact Us</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="techBox2">
                        <div className="TechnologyDiv">
                          <div className="flexRowMenu">
                            <ul className="dropdown-menu-sub">
                              <li className="subTitle">
                                <Link href="/service/web-development">Backend</Link>
                              </li>
                              <li>
                                <Link href="/service/node-js-development">Node JS</Link>
                              </li>
                              <li>
                                <Link href="/service/php-development">PHP</Link>
                              </li>
                            </ul>
                            <ul className="dropdown-menu-sub">
                              <li className="subTitle">
                                <Link href="/service/yii2-framework-development">
                                  Framework / CMS
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/yii2-framework-development">Yii2</Link>
                              </li>
                              <li>
                                <Link href="/service/sails-js-framework-development">Sails JS</Link>
                              </li>
                              <li>
                                <Link href="/service/next-js-framework-development">Next JS</Link>
                              </li>
                              <li>
                                <Link href="/service/web-development">Laravel</Link>
                              </li>
                              <li>
                                <Link href="/service/web-development">CakePHP</Link>
                              </li>
                              <li>
                                <Link href="/service/web-development">CodeIgniter</Link>
                              </li>
                              <li>
                                <Link href="/service/web-development">Wordpress</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="techBox3">
                        <div className="TechnologyDiv">
                          <div className="flexRowMenu">
                            <ul className="dropdown-menu-sub">
                              <li className="subTitle">
                                <Link href="/service/desktop-application-development">
                                  Desktop App
                                </Link>
                              </li>
                              <li>
                                <Link href="/service/electron-js-development">Electron.JS</Link>
                              </li>
                            </ul>
                            <ul className="dropdown-menu-sub">
                              <li className="subTitle">
                                <Link href="/service/web-development">UI / UX Design</Link>
                              </li>
                              <li>
                                <Link href="/service/web-development">User Interface</Link>
                              </li>
                              <li>
                                <Link href="/service/web-development">User Experience</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <li
              className="dropdown mega-dropdown"
              onMouseEnter={handleDropdownMouseEnter2}
              onMouseLeave={handleDropdownMouseLeave2}>
              <Link href="/">
                <span>Company</span>
              </Link>
              {showDropdown2 && (
                <div className="mega-dropdown-menu">
                  <div className="dropdown-menud">
                    <div
                      className="flex-col-menu"
                      style={{
                        position: 'absolute',
                        left: '-72.5rem',
                      }}>
                      <div className="servicesDiv whyGroovyMenu">
                        <p className="MegaSubTitle">We Are DWS</p>
                        <ul className="dropdown-menu-sub">
                          <li>
                            <Link href="//#">Plan the work and work the plan</Link>
                          </li>
                          <li>
                            <Link href="//#">Pleasure Puts Perfection</Link>
                          </li>
                          <li>
                            <Link href="//#">Everything is possible</Link>
                          </li>
                          <li>
                            <Link href="//#">We work with you</Link>
                          </li>
                          <li>
                            <Link href="//#">Every Project is Special</Link>
                          </li>
                          <li>
                            <Link href="//#">Keep Communicating with Clients</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="SolutionsDiv CompanyDiv">
                        <div className="CompanyDivMenu">
                          <div className="comDiv">
                            <p className="MegaSubTitle">Company</p>
                            <div className="flexRowMenu">
                              <ul className="dropdown-menu-sub">
                                <li>
                                  <Link href="/about-us">Our Story</Link>
                                </li>
                                <li>
                                  <Link href="/client-testimonial">Client Testimonials</Link>
                                </li>
                                <li>
                                  <Link href="/how-we-work">How We Work</Link>
                                </li>
                                <li>
                                  <Link href="/contact-us">Contact Us</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="comDiv">
                            <p className="MegaSubTitle">Careers@DWS</p>
                            <div className="flexRowMenu">
                              <ul className="dropdown-menu-sub">
                                <li>
                                  <Link href="/career">Join Our Team</Link>
                                </li>
                                <li>
                                  <Link href="/life-at-DWS">Life@DWS</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="BadgesDiv AdvBadges">
                          <div className="AddDiv">
                            <div className="hireMain">
                              <p>We are Hiring</p>
                              <div className="hireOption">
                                <span>
                                  Frontend <small>(Experience - 2 to 4 Years)</small>
                                </span>
                                <span>
                                  Backend <small>(Experience - 1 to 4 Years)</small>
                                </span>
                                <span>
                                  UI/UX <small>(Experience - 2 to 3 Years)</small>
                                </span>
                                <span>
                                  B.A <small>(Experience - 1 to 2 Years)</small>
                                </span>
                              </div>
                              <div className="project-explore ReadMore text-left">
                                <button
                                  type="button"
                                  href="/www.deulowebsolutions.com/career"
                                  className="getstarted common-btn blue">
                                  View more
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link className="nav-link" href="/career">
                Career
              </Link>
            </li>
            <li className="dropdown mega-dropdown">
              <Link className="nav-link blog-hover" href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="getstarted common-btn blue" href="/request-quote">
                Get the Quote
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
};

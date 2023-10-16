import Link from 'next/link';

export const MilstoneAchieved = () => {
  return (
    <section
      className="Padding-custom"
      data-aos="fade-up"
      data-aos-delay={200}
      style={{position: 'relative'}}>
      <div className="section-title">
        <small>Milestones We Achieved </small>
        <h3>All it took was Good Leadership and Team Efforts..!</h3>
      </div>
      <div className="container-fluid container-xl">
        <div className="BringDataMain">
          <div className="bringBg">
            <div className="rightBring">
              <div
                className="box-blue"
                data-match-height="groupName"
                style={{borderRadius: '5px 0 0 5px'}}>
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">500</span>+
                  </p>
                  <span>Project Delivered</span>
                </div>
              </div>
              <div
                className="box-blue"
                style={{backgroundColor: '#0D49B9'}}
                data-match-height="groupName">
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">250</span>+
                  </p>
                  <span>Happy Clients &nbsp;&nbsp;</span>
                </div>
              </div>
              <div
                className="box-blue"
                style={{backgroundColor: '#1050C8'}}
                data-match-height="groupName">
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">99</span>%
                  </p>
                  <span>Client Satisfaction Rate</span>
                </div>
              </div>
              <div
                className="box-blue box-res"
                style={{backgroundColor: '#1559D8'}}
                data-match-height="groupName">
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">50</span>%
                  </p>
                  <span>Recurring Clients</span>
                </div>
              </div>
              <div
                className="box-blue box-res"
                style={{backgroundColor: '#1E62E2'}}
                data-match-height="groupName">
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">150</span>%
                  </p>
                  <span>Average Company Growth</span>
                </div>
              </div>
              <div
                className="box-blue box-res1"
                style={{backgroundColor: '#266AEC'}}
                data-match-height="groupName">
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">40</span>+
                  </p>
                  <span>5 Star Ratings on Clutch.co</span>
                </div>
              </div>
              <div
                className="box-blue box-res1"
                style={{backgroundColor: '#3175F8'}}
                data-match-height="groupName">
                <div className="bringDetails">
                  <p className="counter-num">
                    <span className="counter">100</span>+
                  </p>
                  <span>In-House Talent</span>
                </div>
              </div>
            </div>
            <div className="leftBring">
              <div className="groovyDetails">
                <h4>We Are DeuLoTech</h4>
                <div className="dataAbout">
                  <div className="lifeGroovy">
                    <p>
                      We came into existence in December 2021. Under the leadership of Mr. Francis
                      Uloho O. and with the help of the emerging team spirit, we achieved
                      outstanding excellence throughout these years.
                    </p>
                    <p>
                      In these years, we have grown exponentially in team size, experience, and
                      knowledge in trending modern technologies. We are one of the leading Mobile
                      App and Web Development team in the market
                    </p>
                  </div>
                  <div className="benefityDatapoint">
                    <p>
                      The key to our greatest achievements is our determination and dedication
                      towards our principles
                    </p>
                    <div className="principlesDiv">
                      <ul>
                        <li>Plan the work and work the plan</li>
                        <li>Everything is possible</li>
                        <li>Every Project is Special</li>
                      </ul>
                      <ul>
                        <li>Pleasure Puts Perfection</li>
                        <li>We work with you</li>
                        <li>Keep Communicating with Clients</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ReadMore text-center btn-weare">
              <Link href="/about-us" className="btn custom-btn read-btn-more common-btn blue">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

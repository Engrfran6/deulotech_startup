import Image from 'next/image';

export const ContactAddress = () => {
  return (
    <section className="Padding-custom aos-init aos-animate pb-100" data-aos="fade-up">
      <div className="container-fluid container-xl">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
            <div className="mapAdresDiv">
              <div className="addresDetails">
                <div className="AddFooter">
                  <div className="iconAdd">
                    <i className="icon-gate-of-india" />
                  </div>
                  <div className="addFoot">
                    <small>India</small>
                    <p className="footerMinTitle">Nadiad, GJ</p>
                  </div>
                </div>
                <div className="addressContact">
                  <p>517 - 521, CenterSquare,</p>
                  <p>Santram Road,</p>
                  <p>Nadiad - 387001</p>
                </div>
              </div>
              <div className="mapDetails">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9880845627367!2d72.85968831491307!3d22.691487485121787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e5b071d2bd815%3A0x4e78efa8c31fc220!2sGroovy%20Web!5e0!3m2!1sen!2sin!4v1630061317237!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
            <div className="mapAdresDiv">
              <div className="addresDetails">
                <div className="AddFooter">
                  <div className="iconAdd">
                    <i className="icon-gate-of-india" />
                  </div>
                  <div className="addFoot">
                    <small>India</small>
                    <p className="footerMinTitle">Ahmedabad, GJ</p>
                  </div>
                </div>
                <div className="addressContact">
                  <p>B-907, Devaurum Complex</p>
                  <p>100 Feet Rd, Prahlad Nagar,</p>
                  <p>Ahmedabad, Gujarat 380015</p>
                </div>
              </div>
              <div className="mapDetails">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.52012734772092!2d72.51285523433752!3d23.01194508977617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9bf68e3af605%3A0x56164fdfaafc6b3c!2sPrahlad%20Nagar!5e0!3m2!1sen!2sin!4v1697110148265!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
            <div className="mapAdresDiv">
              <div className="addresDetails">
                <div className="AddFooter">
                  <div className="iconAdd">
                    <Image
                      width={100}
                      height={100}
                      src="/assets/Image/brandenburg-gate.png"
                      alt=""
                      loading="lazy"
                      style={{height: 50, width: 'auto', objectFit: 'cover'}}
                    />
                  </div>
                  <div className="addFoot">
                    <small>Germany</small>
                    <p className="footerMinTitle">Berlin</p>
                  </div>
                </div>
                <div className="addressContact">
                  <p>13A Levetzowstraße, Berlin,</p>
                  <p>10555, Germany</p>
                </div>
              </div>
              <div className="mapDetails">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.7480837036255!2d13.334152876957686!3d52.519897936236674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85108cb3b5f6b%3A0xe97bbbfa0d74f519!2sLevetzowstra%C3%9Fe%2013A%2C%2010555%20Berlin%2C%20Germany!5e0!3m2!1sen!2sin!4v1695188927732!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-20">
            <div className="mapAdresDiv">
              <div className="addresDetails">
                <div className="AddFooter">
                  <div className="iconAdd aus-icon">
                    <i className="icon-Aus-building" />
                  </div>
                  <div className="addFoot">
                    <small>Australia</small>
                    <p className="footerMinTitle">NSW</p>
                  </div>
                </div>
                <div className="addressContact">
                  <p>Level 5, 4 Columbia CT,</p>
                  <p>Norwest NSW, 2153,</p>
                  <p>Australia</p>
                </div>
              </div>
              <div className="mapDetails">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.2597789502424!2d153.38957691502225!3d-28.016534882664825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b911b95ef900a2f%3A0xcd9334d338c55be5!2sGroovy%20Web!5e0!3m2!1sen!2sin!4v1630061384085!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{border: 0}}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

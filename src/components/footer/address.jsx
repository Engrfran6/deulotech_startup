import Image from 'next/image';

export const FooterAddress = () => {
  return (
    <div className="row gy-4 br-top AddressFooter">
      <div className="col-lg-3 col-md-12 footer-info">
        <div className="AddFooter">
          <div className="iconAdd">
            <i className="icon-gate-of-india" />
          </div>
          <div className="addFoot">
            <small>Nigeria</small>
            <p className="footerMinTitle">Head Office, NG</p>
            <p>plot 320 Aba ExpressWay,</p>
            <p>Aba Road,</p>
            <p>Port-Hacourt - 100001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

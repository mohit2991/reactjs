import React from "react";
const LogoFooter = "/images/logofooter.png"

function Footer() {

  return (
    <footer id="footer" className="mt-4">
      <div className="container-fluid">
        <div className="container">
          <div className="footer-one footer-one d-flex justify-content-between">
            <div className="">
              Got a show, event, activity or a great experience? Partner with us
              & get listed on BookMyShow
            </div>
            <div className="">
              <button type="button" className="btn btn-danger btn-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-two">
        <div className="container">
          <div className=" d-flex justify-content-around">
            <div className="d-flex justify-content-between align-items-center justify-content-center">
              <img src="" />
              <p>24/7 CUSTOMER CARE</p>
            </div>
            <div className="d-flex justify-content-between align-items-center justify-content-center">
              <img src="" />
              <p>24/7 CUSTOMER CARE</p>
            </div>
            <div className="d-flex justify-content-between align-items-center justify-content-center">
              <img src="" />
              <p>24/7 CUSTOMER CARE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="footer-three d-flex justify-content-around">
          <img src={LogoFooter} alt={"LogoFooter"} />
        </div>
      </div>
    </footer>
  );
}
export default Footer;

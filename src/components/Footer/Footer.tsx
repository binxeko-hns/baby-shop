import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col p-4">
            <div className="img mt-4">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop.png"
                alt=""
              />
            </div>
            <p className="mt-4 mb-4">
              In the BeFriends Club you can take advantage of attractive offers
            </p>
            <a href="#" className="button-black m-0 ">
              Join now
            </a>
            <div className="img mt-5">
              <img
                src="https://themes.muffingroup.com/be/babyshop/wp-content/uploads/2021/10/babyshop-footer-pic1-300x22.png"
                alt=""
              />
            </div>
          </div>
          <div className="col p-4">
            <h5>Useful links</h5>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Help & About us</a>
              </li>
              <li>
                <a href="#">Shipping & Returns</a>
              </li>
              <li>
                <a href="#">Refund Policy</a>
              </li>
            </ul>
            <h5>Delivery</h5>
            <ul>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">Free Delivery</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col p-4">
            <h5>Customer service</h5>
            <ul>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Downloads</a>
              </li>
              <li>
                <a href="#">Address</a>
              </li>
              <li>
                <a href="#">Account detail</a>
              </li>
              <li>
                <a href="#">last password</a>
              </li>
            </ul>
          </div>
          <div className="col p-4">
            <h5>Need help?</h5>
            <p>
              <i className="fa-solid fa-mobile"></i>
              +61 383 766 284
            </p>
            <p>
              <i className="fa-solid fa-mobile"></i>
              +61 383 766 284
            </p>
            <h5>Openning hour:</h5>
            <p>Monday - Friday: 8am - 5pm</p>
            <p>Saturday - Sunday 9am - 4pm</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container footer-mobile">
        <div className="pt-3 pb-3 d-flex justify-content-between footer-mobile">
          <h6>
            © 2023 Betheme by Muffin group | All Rights Reserved | Powered by
            WordPress
          </h6>
          <ul className="d-flex">
            <li className="me-2">
              <a href="#">Terms and condition</a>
            </li>
            <li className="me-2">
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

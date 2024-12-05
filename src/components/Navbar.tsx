import Button from "./Button";
import logo from "../../images/logo.svg";
import humbrgar from "../../images/icon-hamburger.svg";

export default function Navbar() {
  // change icon and show drop menu function
  function Dropmenu() {
    const humb = document.querySelector(".humbrgar");
    humb?.classList.toggle("close");
    document.querySelector(".overlay")?.classList.toggle("show");
    document.querySelector(".drop-menu")?.classList.toggle("drop");
  }

  return (
    <>
      <div className="container">
        <div className="Navbar">
          {/* Start logo */}
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          {/* End logo */}
          {/* Start Links */}
          <ul className="links">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          {/* End Links */}
          {/* Start Button */}
          <Button />
          {/* End Button */}
          {/* Start humbrgar  */}
          <img
            className="humbrgar"
            src={humbrgar}
            alt=""
            onClick={() => {
              Dropmenu();
            }}
          />
          {/* End humbrgar  */}
          {/* start the drop menu */}
          <ul className="drop-menu">
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Carers</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
          {/* end the drop menu */}
        </div>
      </div>
    </>
  );
}

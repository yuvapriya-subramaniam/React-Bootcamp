import react from "react";
import reactDom from "react-dom/client";
import logo from "./images/logo2.png";

/**
 * Header
 *  -logo
 *  -nav bar
 * Body
 *  -search
 *  -restaurant container
 *      -restaurant card
 * Footer
 *  -copyright
 *  -links
 *  -address
 *  -contact
 *
 */

const Header = () => {
  return (
    <div id="headerContainer" className="header">
      {/* <img id="logo" src={logo} className="header" /> */}
      <p>Dine@Home</p>
      <ul id="menuContainer" className="header">
        <li>Home</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

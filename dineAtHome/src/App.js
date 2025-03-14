import react from "react";
import reactDom from "react-dom/client";
import logo from "./images/logo2.png";
import AppLayout from "./layouts/AppLayout"

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

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

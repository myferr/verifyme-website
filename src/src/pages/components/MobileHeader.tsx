import mobileHeaderIcon from "../assets/mobileMenuIcon.png";
import "./styles/MobileHeader.scss";

import { showNavigation } from "./mobileNav.ts";

export default function MobileHeader() {
  return (
    <>
      <div id="mobileheader-container" onClick={() => showNavigation()}>
        <div id="mobileheader">
          <img src={mobileHeaderIcon} width={60} className="mobileHeaderIcon" />
        </div>
      </div>
      <div id="mobile-navigator-container">
        <div id="mobile-navigator">
          <MobileNavigator />
        </div>
      </div>
    </>
  );
}

function MobileNavigator() {
  return (
    <>
      <a href="/">
        <button className="nav-link">Home</button>
      </a>
      <a href="/add-bot">
        <button className="nav-link">Add bot</button>
      </a>
      <a href="/support">
        <button className="nav-link">Support</button>
      </a>
      <a href="/docs">
        <button className="nav-link">Docs</button>
      </a>
      <a href="/commands">
        <button className="nav-link">Commands</button>
      </a>
      <a href="/team">
        <button className="nav-link">Team</button>
      </a>
      <a href="/premium">
        <button className="nav-link-premium">premium</button>
      </a>
    </>
  );
}

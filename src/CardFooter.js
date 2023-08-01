import React from "react";

import Twitter from './tw.png';
import Facebook from './fb.png';
import Instagram from './ig.png';
import Linkedin from './in.png';
import Github from './git.png';

export default function CardFooter() {
  return (
    <div className="card--footer">
      <div class="row">
        <div class="column">
          <img src={Twitter} alt="Twitter"  />
        </div>
        <div class="column">
          <img src={Facebook} alt="Facebook" />
        </div>
        <div class="column">
          <img src={Instagram} alt="Instagram"  />
        </div>
        <div class="column">
          <img src={Linkedin} alt="Linkedin" />
        </div>
        <div class="column">
          <img src={Github} alt="GitHub"  />
        </div>
      </div>
    </div>
  );
}

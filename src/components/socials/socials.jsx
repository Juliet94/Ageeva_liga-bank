import React from 'react';
import {Link} from 'react-router-dom';

import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import youtube from '../../assets/images/icon-youtube.svg';

function Socials() {
  return (
    <ul>
      <li>
        <Link>
          <span className="visually-hidden"> Facebook </span>
          <img src={facebook} alt="Иконка facebook" />
        </Link>
      </li>
      <li>
        <Link>
          <span className="visually-hidden"> Instagram </span>
          <img src={instagram} alt="Иконка instagram" />
        </Link>
      </li>
      <li>
        <Link>
          <span className="visually-hidden"> Twitter </span>
          <img src={twitter} alt="Иконка twitter" />
        </Link>
      </li>
      <li>
        <Link>
          <span className="visually-hidden"> Youtube </span>
          <img src={youtube} alt="Иконка youtube" />
        </Link>
      </li>
    </ul>
  );
}

export default Socials;

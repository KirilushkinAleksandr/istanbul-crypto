import React from 'react';

import IconTG from '../images/telegram.png';

function MessengerButtons() {
  return (
    <a
      href="https://t.me/bjbi_org"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="telegram__link">
        <img src={IconTG} alt="" />
      </div>
    </a>
  );
}

export default MessengerButtons;

import React from 'react';

import { ReactComponent as IconTG } from '../images/telegram.svg';

function MessengerButtons() {
  return (
    <a
      href="https://t.me/bjbi_seamen"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="page__link">
        <IconTG  />
      </div>
    </a>
  );
}

export default MessengerButtons;

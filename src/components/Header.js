function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/" />
      <ul className="header__menu">
        <li className="header__menu-item">Title</li>
        <li className="header__menu-item">FAQ</li>
        <li className="header__menu-item">About us</li>
      </ul>
      <button type="button" className="header__button">
        EN
      </button>
      <button type="button" className="header__button">
        TR
      </button>
      <button type="button" className="header__button">
        RU
      </button>
    </header>
  );
}

export default Header;
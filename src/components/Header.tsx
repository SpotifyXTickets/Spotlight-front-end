import "@/styles/components/_header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left-wrapper">
          <a className="header__logo" href="" title="">
            <img src="https://picsum.photos/36" alt="" />
          </a>
          <nav className="header__navigation">
            <a>Nav item 1</a>
            <a>Nav item 2</a>
            <a>Nav item 3</a>
          </nav>
        </div>
        <div className="header__right-wrapper">
          <div className="header__user">
            <img src="https://picsum.photos/36" alt="" />
          </div>
          <div className="header__settings">settings</div>
        </div>
      </div>
    </header>
  );
}

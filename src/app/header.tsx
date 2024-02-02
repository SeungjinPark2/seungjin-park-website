import './header.scss';

export default function Header() {
  return <header>
    <nav>
      <div className='header-container-left'>
        <a>logo</a>
        <a className='header-button'>blog</a>
      </div>
    </nav>
  </header>;
}
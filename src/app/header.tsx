import './header.scss';

export default function Header() {
  return <header>
    <nav>
      <div className='header-container-left'>
        <a>logo</a>
        <a className='header-button'>blog</a>
      </div>

      <div>
        <input className='search-bar' type='search' />
      </div>

      <div className='header-container-right'>
        <a className='header-button'>Connect Wallet</a>
      </div>
    </nav>
  </header>;
}
import Content from './content/content';
import Footer from './footer/footer';
import Header from './header/header';
import SideSection from './side-section/side-section';
import './page.scss';

export default function Main() {
  return <main>
    <Header />
    <div className="container">
      <SideSection />
      <Content />
    </div>
    <Footer />
  </main>;
}

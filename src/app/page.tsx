import Content from './content';
import Footer from './footer';
import Header from './header';
import SideSection from './side-section';
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

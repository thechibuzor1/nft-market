
import Auctions from "./components/Auctions/Auctions";
import Footer from "./components/Footer/Footer";
import Habitant from "./components/Habitant/Habitant";
import Header from "./components/Header/Header";
import Overline from "./components/Overline/Overline";
import Popular from "./components/Popular/Popular";
import Stats from "./components/Stats/Stats";
import TripleSection from "./components/TripleSection/TripleSection";
 

export default function Home() {
  return (
    <>
    <Header />
    <Auctions/>
    <Overline />
    <TripleSection />
    <Habitant />
    <Popular/>
    <Stats />
    <Footer/>
    </>
  );
}

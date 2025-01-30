import Auctions from "./components/Auctions/Auctions";
import Footer from "./components/Footer/Footer";
import Habitant from "./components/Habitant/Habitant";
import Header from "./components/Header/Header";
import Overline from "./components/Overline/Overline";
import Popular from "./components/Popular/Popular";
import Stats from "./components/Stats/Stats";
import TripleSection from "./components/TripleSection/TripleSection";

/**
 * Home Page Component
 * 
 * This component renders the main homepage layout of the NFT marketplace.
 * It includes sections like Auctions, Popular Listings, Stats, and more.
 *
 */

export default function Home() {
  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Content Sections */}
      <main>
        <Auctions />
        <Overline />
        <TripleSection />
        <Habitant />
        <Popular />
        <Stats />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

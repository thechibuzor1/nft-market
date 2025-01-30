import TopBar from "../components/Header/TopBar";
import Footer from "../components/Footer/Footer";
import MoreFrom from "./MoreFrom";
import Body from "./Body";

function Details() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <main className="flex-grow">
        <Body />
        <MoreFrom />
      </main>
      <Footer />
    </div>
  );
}

export default Details;

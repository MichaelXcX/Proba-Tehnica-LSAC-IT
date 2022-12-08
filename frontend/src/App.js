import { Fragment } from "react";
import Footer from "./components/Footer";
import MostViewed from "./components/MostViewed";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Salty from "./components/Salty";
import Upload from "./components/Upload";

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Salty />
      <Upload />
      <MostViewed />
      <Footer />

    </Fragment>
  );
}

export default App;
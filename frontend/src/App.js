import { Fragment } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Salty from "./components/Salty";
import Upload from "./components/Upload";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Salty />
      <Upload />
      <Footer />
    </Fragment>
  );
}

export default App;
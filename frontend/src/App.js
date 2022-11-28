import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Salty from "./components/Salty";
import Upload from "./components/Upload";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Salty />
      <Upload />
    </Fragment>
  );
}

export default App;
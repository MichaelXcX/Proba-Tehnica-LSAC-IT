import { Fragment, useState } from "react";
import Footer from "./components/Footer";
import MostViewed from "./components/MostViewed";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Salty from "./components/Salty";
import Upload from "./components/Upload";

function App() {
  const [status, setStatus] = useState('close');
  const handlePopup = function(event) {
    event.preventDefault();
    if(status === "close")
      setStatus("open");
    else 
      setStatus("close")
  }
  return (
    <Fragment>
      <Navbar handleClick={handlePopup}/>
      <Salty />
      <Upload />
      <MostViewed />
      <Footer />
      <Popup popupType="register" status={status}/>

    </Fragment>
  );
}

export default App;
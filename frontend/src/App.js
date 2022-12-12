import { Fragment } from "react";
import Footer from "./components/Footer";
import MostViewed from "./components/MostViewed";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Salty from "./components/Salty";
import Upload from "./components/Upload";

// Poti sa folosesti si react-bootstrap ca sa nu te chinui super mult cu 
// partea de responsiveness si pentru ca poti doar sa customizezi niste chestii,
// dar kudos maxim pentru ca ai facut site-ul sa arate asa armaghedon doar din css
// Efectiv umpic css god ngl 

// Legat de organizarea proiectului, eu personal prefer un project structure feature-based, 
// adica ai un folder components in care ai mai multe foldere pentru fiecare componenta si in
// folder-ele alea pui jsx si css si dupa ai un folder de pagini in care pui, well, paginile(cam cum ati facut la BW ) =))))
// Acum nici approach-ul tau nu e gresit, dar pentru proiecte mari poate sa devina relativ greu 
// de administrat. Deci nu e neaparat o problema, again mai mult un lucru de care sa fii aware
function App() {
  return (
    // Aici cred ca poti folosi si un div simplu, dar oricum nu cred ca e o problema ca 
    // ai folosit Fragment
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
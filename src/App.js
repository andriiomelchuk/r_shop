import React from "react";
import {Header} from "./layout/Header";
import {Footer} from "./layout/Footer";
import {Shop} from "./layout/Shop";

function App() {
  return (
      <React.Fragment>
        <Header />
        <Shop />
        <Footer />
      </React.Fragment>


      /*
        <>
            <Header />
        </>
      */
  );
}

export default App;

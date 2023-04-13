
import React from "react";
import './../styles/App.css';
import Page from "./Page";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Page header={"Welcome to my website"} footer={"© My Website. All rights reserved."}>
          <p>This is the content of my website.</p>
        </Page>
    </div>
  )
}

export default App

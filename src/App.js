


import * as React from "react";
import {useState, useEffect}  from "react";
import axios from "axios"
// import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
// import products from "./products.json";
// import preduzeca from "./preduzeca.json";

const App = () => {



  const [records, setRecords] = useState(null);

  // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
    async function getData() {
      const response = await fetch("http://173.212.203.236/BRODARSTVO/api/vratikomitente");
      const data = await response.json();

      // store the data into our books variable
      setRecords(data) ;
    }
  }, []); 


  return (
    <Grid
      style={{
        height: "400px",
      }}
      data={records}
    >
      <Column field="sifra" title="Sifra" width="40px" />
      <Column field="naziv_firme" title="Naziv" width="250px" />
      <Column field="ptt" title="Ptt" width="250px" />
      <Column field="pak" title="Pak" width="250px" />
      <Column field="mesto" title="Mesto" width="250px" />
      <Column field="ulica" title="Ulica" width="250px" />
      <Column field="drzava" title="Drzava" width="250px" />
      <Column field="opstina" title="Opstina" width="250px" />
      
 
      
    </Grid>
  );
};

export default App;
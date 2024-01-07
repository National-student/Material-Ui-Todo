import * as React from "react";
import DataTable from "./components/Table/Table";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Data from "./components/CreateData/Data";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        {" "}
        <br />
        <Data /> <br />
        <DataTable />
      </Container>
    </React.Fragment>
  );
}

export default App;

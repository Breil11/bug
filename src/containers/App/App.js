import { BrowserRouter as Router } from "react-router-dom";



import RouteMap from 'shared/routes/RouteMap';
import Menu from "components/Menu/Menu";
import './App.css';
import { Container, Grid } from "@mui/material";

function App() {
  return (
    <Container>
      <Router className='App'>
        <Grid container spacing={4}>
          <Grid item xs={2}>
            <Menu />
          </Grid>
          <Grid item xs={10}>
            <RouteMap />
          </Grid>
        </Grid>
      </Router>
    </Container>
  );
}

export default App;

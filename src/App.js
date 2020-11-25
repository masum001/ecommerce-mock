import { Grid } from "@material-ui/core";
import ProductList from "./components/ProductList";
import Cart from './components/Cart'
import ProductContextProvider from "./context/ProductContext";
import { Route, Switch } from 'react-router-dom'
const { default: Header } = require("./components/Header");



function App() {
  return (
    <div className="App">
    <ProductContextProvider>
    <Grid container direction="column">
      <Grid item >
         <Header />
      </Grid>
      <Grid item container> 
          <Grid item sm={2} xs={false}/>
            <Grid item sm={8} xs={12}>
            <Switch>
              <Route exact path='/' component={ProductList} />
              <Route  path='/cart' component={Cart} />
            </Switch>
            </Grid>
          <Grid item sm={2} xs={false}/>
      </Grid>
    </Grid>
    </ProductContextProvider>
    </div>
  );
}

export default App;

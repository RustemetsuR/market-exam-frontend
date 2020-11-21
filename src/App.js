import './App.css';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import Products from './containers/Product/Products/Products';
import Layout from './components/Layout/Layout';
import Login from './containers/User/Login/Login';
import Register from './containers/User/Register/Register';
import SingleProduct from './containers/Product/SingleProduct/SingleProduct';
import AddNewProduct from './containers/Product/AddNewProduct/AddNewProduct';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Container>
          <Layout>
            <Route exact path='/products' component={Products} />
            <Route exact path='/addNewProduct' component={AddNewProduct} />
            <Route exact path='/products/:id' component={SingleProduct} />
            <Route exact path='/user/login' component={Login} />
            <Route exact path='/user/register' component={Register} />
          </Layout>
        </Container>
      </Switch>
    </div>
  );
}

export default App;

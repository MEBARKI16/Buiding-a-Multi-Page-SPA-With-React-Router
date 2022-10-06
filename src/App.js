import {Route, Switch} from 'react-router-dom'
import Products from './pages/Products'
import MainHeader from './components/MainHeader'
import Welcome from './pages/Welcome'
import ProductDetail from './pages/ProductDetail'
function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Switch>
    <Route path='/welcome'>
<Welcome />
    </Route>  
     <Route path='/product-detail/:productId'>
<ProductDetail/>
    </Route>
    <Route path='/products' exact>
<Products />
    </Route>
 
    </Switch>
    </main>
    </div>
  );
}

export default App;

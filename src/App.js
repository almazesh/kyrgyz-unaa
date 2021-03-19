import { Route, Switch } from "react-router";
import Navbar from './components/Navbar/index'
import Footer from './components/Footer/index'
import Main from './pages/Main/index'
function App() {
  return (
      <>
        <Navbar/>
            <Switch>
                <Route path='/' component={Main}  />
            </Switch>
        <Footer/>
      </>
  );
}

export default App;

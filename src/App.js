import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services/Services';
import OnlineDocs from './Pages/OnlineDocs/OnlineDocs/OnlineDocs';
import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/Sign/SignIn/SignIn';
import AuthProvider from './Hooks/AuthProvider';
import PrivateRoute from './Hooks/PrivateRoute';
import ServicesDetails from './Pages/Services/ServicesDetails/ServicesDetails';
import SingleDocs from './Pages/OnlineDocs/SingleDocs/SingleDocs';
import ForeignDocs from './Pages/ForeignDocs/ForeignDocs/ForeignDocs';
import ForeignSingleDoc from './Pages/ForeignDocs/ForeignSingleDoc/ForeignSingleDoc';
import Confirmation from './Pages/Confirmation/Confirmation';
import SignUp from './Pages/Sign/SignUp/SignUp';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
        <AuthProvider>
        <Router>
         <Header></Header>
         <Switch>
          <Route exact path={["/","/home"]}>
            <Home></Home>
          </Route>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>
          <Route path="/register">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/onlinedoctor/:id">
            <SingleDocs></SingleDocs>
          </PrivateRoute>
          <Route path="/onlinedoctor">
            <OnlineDocs></OnlineDocs>
          </Route>
          <PrivateRoute exact path="/services/:id">
            <ServicesDetails></ServicesDetails>
          </PrivateRoute>
          <PrivateRoute path="/onlinedoctor/:id">
            <SingleDocs></SingleDocs>
          </PrivateRoute>
          <Route path="/services">
            <Services></Services>
          </Route>
          <PrivateRoute path="/foreigndoctors/:id">
              <ForeignSingleDoc></ForeignSingleDoc>
          </PrivateRoute>
          <Route path="/foreigndoctors">
            <ForeignDocs></ForeignDocs>
          </Route>
          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route>
            <Confirmation></Confirmation>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
         </Switch>
         <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;

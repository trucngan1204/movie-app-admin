import './App.css';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';


import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import Films from './pages/Admin/Films/Films';
import ShowTime from './pages/Admin/Showtime/ShowTime';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Edit from './pages/Admin/Films/Edit/Edit';
import AddNew from './pages/Admin/Films/AddNew/AddNew';


// const CheckoutTemplateLazy = lazy(() => import('./templates/CheckoutTemplate/CheckoutTemplate'))

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <UserTemplate path="/" exact Component={Login} />
        {/* <UserTemplate path="/register" exact Component={Register} /> */}
        <AdminTemplate path="/admin" exact Component={Dashboard} />


      
        <AdminTemplate path="/admin/films" exact Component={Films} />
        <AdminTemplate path="/admin/films/edit/:id/" exact Component={Edit} />
        <AdminTemplate path="/admin/films/addnew" exact Component={AddNew} />
        <AdminTemplate path="/admin/films/showtime/:id/:tenphim" exact Component={ShowTime} />

        <AdminTemplate path="/admin/users" exact Component={Dashboard} />

        <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} />
        <Route path="/pagenotfound" component={PageNotFound}/>
      
      </Switch>
    </Router>
  );
}

export default App;




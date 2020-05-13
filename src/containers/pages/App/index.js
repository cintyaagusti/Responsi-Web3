// //ini awalnya file App.js dari folder src project ANTD yg dipindah ke folder App dengan nama index.js

// import React from 'react';
// import Content from '../src/Content/Content'
// import myGallery from '../src/Content/myGallery'
// import './App.css';
// import Navbar from './Menu/navbar'
// import Routing from './Content/Router'

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Routing/>
      
//     </div>
//   );
// }

// export default App;


//ini koding baru ngikutin tutorial
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
import { store } from '../../../config/redux'

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <div>
          <Route exact path="/" component={Register}/> 
          <Route path="/login" component={Login}/> 
          <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    </Provider>
  );
}
//memanggil component dashboard, login, dan register

export default App;
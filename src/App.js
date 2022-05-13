import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
   <div className="container">
   <div className="row g-3">
       <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">

           <label for="" className="form-label">username</label>
           <input type="text" className="form-control"/>
       </div>
       <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">

           <label for="" className="form-label">password</label>
           <input type="text" className="form-control"/>
       </div>
       <div className="col col-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">

          <button className="btn btn-success">LOGIN</button>
       </div>
   </div>
</div>
  );
}

export default App;

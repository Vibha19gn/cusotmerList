import React, {Component} from 'react';
import '../styles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customers from "../components/customers";
import Spinner from '../common/spinner';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Customers/>
        <Spinner/>
      </div>
    );
  }
}

export default App;

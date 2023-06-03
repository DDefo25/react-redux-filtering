import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
      <div className='container mx-auto' style={{width: '70vw'}}>
        <ServiceAdd />
        <ServiceList />
      </div>
    </Provider>
  );
}

export default App;

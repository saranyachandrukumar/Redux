import logo from './logo.svg';
import './App.css';
import Customeradd from './components/Customeradd';
import Customerview from './components/Customerview';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
	<Provider store={store}>
		<div className="App">
			<h1>React Redux Customer Example</h1>
			<Customeradd/>
			<Customerview/>
		</div>
	</Provider>
  );
}

export default App;
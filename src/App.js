import './App.css';
import Navbar from './Dashboard/Navbar';
import Login from './login';

function App() {return (<>{localStorage.getItem('token') ? <Navbar /> : <Login />}</>)}

export default App;
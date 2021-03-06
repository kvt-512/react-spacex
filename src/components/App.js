import Form from './Form';
import Table from './Table';
import Details from './Details';
import Login from './Login';
import Logout from './Logout';
import './App.css';

function App() {
  return (
    <div className="app">
      <Login></Login>
      <Logout></Logout>
      <Form></Form>
      <Table></Table>
      <Details></Details>
    </div>
  );
}

export default App;

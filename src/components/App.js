import Form from './Form';
import Table from './Table';
import Details from './Details';
import Login from './Login';
import Logout from './Logout';

function App() {
  return (
    <div>
      <h1>SpaceX Dashboard</h1>
      <Login></Login>
      <Logout></Logout>
      <Form></Form>
      <Table></Table>
      <Details></Details>
    </div>
  );
}

export default App;

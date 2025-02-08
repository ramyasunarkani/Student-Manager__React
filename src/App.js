import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
function App() {
  return (
    <div className="App">
      <Header/>
      <NewUser/>
      <UserList/>
    </div>
  );
}

export default App;

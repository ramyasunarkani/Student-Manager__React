import NewUser from "./components/NewUser/NewUser";
import Header from "./components/Header/Header";
import UserList from "./components/UserList/UserList";
import { useState,useEffect } from "react";
function App() {
  const [users,setUsers]=useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [editingUser, setEditingUser] = useState(null);

   const addUsersHandler=(name,phone,address)=>{
    setUsers((prev)=>{
      return [...prev,{name:name,phone:phone,address:address,id:Math.random().toString()}]
    })
    setEditingUser(null);
    
   }
   const deleteUserHandler = (userId) => {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update local storage
      return updatedUsers;
    });

  };
  const editUserHandler = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setEditingUser(userToEdit);
      deleteUserHandler(userId); // Remove from local storage when editing
    }
  };

   useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users))
   },[users])
  return (
    < >
      <Header length={users.length}/>
      <NewUser onAddusers={addUsersHandler} editingUser={editingUser}/>
      <UserList users={users} onDelete={deleteUserHandler} onEdit={editUserHandler}/>
    </>
  );
}

export default App;

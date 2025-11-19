import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <>
            <Route path="/" element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />}/>
          </>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

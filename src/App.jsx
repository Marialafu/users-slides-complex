import { useState } from "react";
import Filters from "./components/filters/Filters";
import UsersCard from "./components/usersCard/UsersCard";
import {USERS} from './constants/usersInfo'
import { v4 } from "uuid";

const App = () => {

  const [users, setUsers] = useState(USERS)

  return <>
    <header>
      <h1>Listado de usuarios</h1>
    </header>
    <main>
      <Filters/>
      {users.map(user => {
        return (
      <UsersCard key={v4()}  {...user} />)
    })}
    </main>
  </>;
};

export default App;

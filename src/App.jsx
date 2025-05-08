import { useState } from "react";
import UsersCard from "./components/usersCard/UsersCard";
import {USERS} from './constants/usersInfo'

const App = () => {

  return <>
    <header>
      <h1>Listado de usuarios</h1>
    </header>
    <main>
      <UsersCard {...USERS} />
    </main>
  </>;
};

export default App;

import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import UserTable from "./components/UserTable";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? <UserTable /> : <LoginForm onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}

export default App;
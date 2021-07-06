
import React, { useState } from "react";
import Navigator from './routes/homeStack';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <Navigator />
  );
}


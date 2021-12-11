import { useState } from "react";
function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/api/register", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Register user</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="name"
        />
        <br /> <br />
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="email"
        />{" "}
        <br /> <br />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="text"
          placeholder="password"
        />{" "}
        <br /> <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
}

export default Register;

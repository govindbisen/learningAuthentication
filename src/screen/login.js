import { useState } from "react";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/api/login", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      alert("login success", data.user);
      window.location.href = "/dashboard";
    } else {
      alert("sorry!!");
    }
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Existing user please Login</h1>
      <form onSubmit={loginUser}>
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
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

export default Login;

import { Button } from "@mui/material";
import { useState } from "react";

export default function FromHeadling() {
  const [User, setUser] = useState({
    Fullname: "",
    Email: "",
    Password: "",
  });

  function HandleData() {
    console.log(User);
    setUser({
      Fullname: "",
      Email: "",
      Password: "",
    });
  }

  return (
    <>
      <label>Pramod ki jay ho</label>
      <br />
      <input
        type="text"
        placeholder="Name "
        value={User.Fullname}
        onChange={(e) => setUser({ ...User, Fullname: e.target.value })}
        style={{ fontSize: "20px" }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="Email"
        value={User.Email}
        onChange={(e) => setUser({ ...User, Email: e.target.value })}
        style={{ fontSize: "20px" }}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={User.Password}
        onChange={(e) => setUser({ ...User, Password: e.target.value })}
        style={{ fontSize: "20px" }}
      />
      <h1>
        Fullname : {User.Fullname} <br /> Email : {User.Email} <br /> Password :
        {User.Password}
      </h1>

      <Button sx={{fontSize:"20px", fontWeight:"bold",backgroundColor:"#4CAF50", color:"white", padding:"10px  50px 10px 50px",fontFamily:"-moz-initial"}} onClick={HandleData} >View</Button>
    </>
  );
}
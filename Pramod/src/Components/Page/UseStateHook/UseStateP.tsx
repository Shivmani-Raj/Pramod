import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import "./UseStateP.css";

export default function UseStateP() {
  const [Count, setCount] = useState(0);

  function FnDecre() {
    setCount(Count - 1);
  }

  return (
    <Grid
      sx={{
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        pt: 10,
      }}
    >
      <Typography className="text">Counter : {Count}</Typography>
      <Typography>
        <button className="button" onClick={FnDecre}>
          Decrement
        </button>
        <button className="button" onClick={() => setCount(Count + 1)}>
          Increment
        </button>
      </Typography>
    </Grid>
  );
}

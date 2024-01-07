import { Button, TextField } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { json } from "react-router-dom";

const Data = () => {
  const { row, setRow } = useContext(DataContext);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [age, setAge] = useState(0);

  const handleFirst = (evt) => {
    setFirst(evt.target.value);
  };
  const handleLast = (evt) => {
    setLast(evt.target.value);
  };
  const handleAge = (evt) => {
    setAge(evt.target.value);
  };

  const handleCreate = () => {
    const todo = {
      id: row.at()?.id ? row.at()?.id + 1 : 1,
      lastName: last,
      firstName: first,
      age: age,
    };

    setRow([todo, ...row]);
    localStorage.setItem("todo", JSON.stringify([todo, ...row]))
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        label="First name"
        type="text"
        variant="outlined"
        autoComplete="off"
        onChange={handleFirst}
      />
      <TextField
        id="outlined-basic"
        label="Last name"
        type="text"
        variant="outlined"
        autoComplete="off"
        onChange={handleLast}
      />
      <TextField
        id="outlined-basic"
        label="Age"
        type="number"
        variant="outlined"
        autoComplete="off"
        onChange={handleAge}
      />
      <Button onClick={handleCreate} variant="contained">
        Create
      </Button>
    </div>
  );
};

export default Data;

import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import './NewUser.css'

const NewUser = (props) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (props.editingUser) {
      setName(props.editingUser.name);
      setMobile(props.editingUser.phone);
      setAddress(props.editingUser.address);
    }
  }, [props.editingUser]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddusers(name, mobile, address);
    setName("");
    setMobile("");
    setAddress("");
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Mobile:</label>
          <input type="tel" id="phone" value={mobile} onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <Button type="submit">{props.editingUser ? "Update" : "Add"}</Button>
      </form>
    </>
  );
};

export default NewUser;

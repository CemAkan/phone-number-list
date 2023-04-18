import React from "react";
import { useState, useEffect } from "react";

function Form({ setContacts, contacts }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  useEffect(() => {
    setForm({
      name: "",
      phone: "",
    });
  }, [contacts]);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSumbit = (e) => {
    e.preventDefault();

    if (form.name === "" || form.phone === "") {
      alert("Please fill in the blanks");
      return;
    }
    setContacts([...contacts, form]);
  };

  return (
    <form onSubmit={onSumbit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
    </form>
  );
}

export default Form;

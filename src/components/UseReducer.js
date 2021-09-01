import React, { useReducer, useState } from "react";

/*
    useReducer is an alternative to useState hook.
    When you have complex state logic that involves multiple sub-values or when next state depends on previous one we can use useReducer.
*/

const initialState = [
  { id: Date.now(), name: "John", email: "john@gmail.com" },
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((contact) => {
        return contact.id !== action.payload.id;
      });

    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log(state);

  const addContact = (e) => {
    e.preventDefault();

    const contact = {
      id: Date.now(),
      name,
      email,
    };

    setName("");
    setEmail("");
    dispatch({ type: "add", payload: contact });
  };

  return (
    <div className="App">
      <h1>UseReducer Hook</h1>
      <form onSubmit={addContact}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>

      <div>
        <ul>
          {state.map((contact) => {
            return (
              <li style={{ listStyleType: "none" }} key={contact.id}>
                <h2>{contact.name}</h2>
                <h2>{contact.email}</h2>
                <div>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: contact.id } })
                    }
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UseReducer;

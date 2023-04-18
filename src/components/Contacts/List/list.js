import { useState } from "react";
import "./index.css";

function List({ contacts }) {
  const [search, setSearch] = useState("");

  const filteredContacts = contacts.filter((contact) => {
    return Object.keys(contact).some((key) =>
      contact[key].toString().toLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredContacts.map((contact) => (
          <div className="list" key={contact.phone}>
            <div>
              <div>
                <h3 className="name-list">{contact.name}</h3>
              </div>
              <div>
                <p className="phone-list">{contact.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;

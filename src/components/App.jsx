import React from "react";
import Card from "./cards.jsx";
import contacts from "../contacts.js"
import Avatar from "./Avatar.jsx";

function createCard(contact){  //return card tag....this function is passed to .map() function 
  return(  // each .map() function must have unique key function-->with unique tag value for each element in that array
    <Card
      key={contact.id}
      name = {contact.name}
      img = {contact.imgURL}
      tel = {contact.phone}
      mail = {contact.email}
    > 
    </Card>
  )
  
}
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDlTelQUeBFk24-PCXK7UqEvNRwlUk2Ho0g&usqp=CAU"></Avatar>

      {contacts.map(createCard)};
      {/* <Card name={contacts[0].name}   //using contacts.jsx file import array of objects
      img={contacts[0].imgURL}
      tel={contacts[0].phone}
      mail={contacts[0].email}></Card>

<Card name={contacts[1].name}   //using contacts.jsx file import array of objects
      img={contacts[1].imgURL}
      tel={contacts[1].phone}
      mail={contacts[1].email}></Card>

<Card name={contacts[2].name}   //using contacts.jsx file import array of objects
      img={contacts[2].imgURL}
      tel={contacts[2].phone}
      mail={contacts[2].email}></Card>

      <Card name={contacts[3].name}   //using contacts.jsx file import array of objects
      img={contacts[3].imgURL}
      tel={contacts[3].phone}
      mail={contacts[3].email}></Card> */}

    </div>
  );
}

export {createCard};
export default App;

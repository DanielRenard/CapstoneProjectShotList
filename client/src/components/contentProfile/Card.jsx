import { useState } from "react";
import ShotForm from "./ShotForm";

function Card({ shot, onDeleteEvent, onUpdate }) {
  const [editCard, setEditCard] = useState(false);

  const toggleEditMode = () => {
    setEditCard(!editCard);
  };

  const handleDelete = () => {
    console.log(shot._id);
    onDeleteEvent(shot._id);
  };

  const handleEdit = (data) => {
    onUpdate(data);
    setEditCard(false);
  };

  const cancelEdit = ( ) => {
    setEditCard(false);
  }

  let template;

  if (!editCard) {
    template = (
      <div>
        <img width={300} src={shot.image}></img>
        <h2 key={shot._id}>User: {shot.userName}</h2>
        <h3>
          Shot Name: {shot.name}, Id: {shot.id}{" "}
        </h3>
        <h4>Description: {shot.description}</h4>
        <p>
          Set Piece: {shot.setPiece}, Show: {shot.show}
        </p>
        <button onClick={toggleEditMode}>Edit Card</button>
      </div>
    );
  } else {
    template = ( 
      <div>
        <ShotForm aShot={shot} onSubmit={handleEdit} />
        <button onClick={cancelEdit}>Cancel Edit</button>
      </div>
    );
  }

  return (
    <div className="card">
      {template}
      <button onClick={handleDelete}>Delete Shot from database</button>

    </div>
  );
}
export default Card;

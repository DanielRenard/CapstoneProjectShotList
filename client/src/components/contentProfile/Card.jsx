import { useState } from "react";
import ShotForm from "./ShotForm";

function Card({ shot, onDeleteEvent, onUpdate }) {
  // const parseImageData = (data) => {
  //   let reader = new FileReader()
  //   reader.addEventListener("load", (e) => {
  //     setCardImage(e.target.result)
  //     })
  //     // let blob = new Blob(data, {type: "image/jpeg"})
  //   reader.readAsDataURL(blob)
  // }

  // parseImageData(shot.image?.data)

  const [cardImage, setCardImage] = useState("");

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

  const cancelEdit = () => {
    setEditCard(false);
  };

  let template;

  if (!editCard) {
    template = (
      <div>
        <img width={300} src={JSON.parse(shot.image)}></img>
        <h2 key={shot._id}>User: {shot.userName}</h2>
        <h3>Shot Name: {shot.name} </h3>
        <h3>Camera: {shot.cameraNumber}</h3>
        <h3>Id: {shot.cameraId} </h3>
        <h3>Set Piece: {shot.setPiece} </h3>
        <h3>Show: {shot.show}</h3>
        <p>Description: {shot.description}</p>
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
      <button onClick={handleDelete}>Delete Shot</button>
    </div>
  );
}
export default Card;

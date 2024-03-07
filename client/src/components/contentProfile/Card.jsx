import { useState } from "react";
import ShotForm from "./ShotForm";
import { useEffect } from "react";
import axios from "axios";


function Card({ shot, onDeleteEvent, onUpdate }) {


  const [editCard, setEditCard] = useState(false);

  const [shotUser, setShotUser] = useState();

  
  const fetchData = async () => {
    // console.log("+++++", shot)
    try {
      const response = await axios.get(`http://localhost:8085/api/users/${shot.user}`);
      // Sets up the data to currentShots
      // console.log("------", shot.user, response.data.data);
      setShotUser(response.data.data[0]);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Just console logging to catch potential errors
    }
  };
  

  useEffect(() => {
    fetchData(); //calling the function
    // console.log(currentShots)
  }, []);


  const toggleEditMode = () => {
    setEditCard(!editCard);
  };

  const handleDelete = () => {
    // console.log(shot._id);
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
    // console.log(shot.image)
    try {
      // if statement shorthand; check for image before parsing; need to make api call for taggedUsers similar to shotUser gonna be an array and ea will be an user
      template = (
        <div>
          <img width={200} src={shot.image?JSON.parse(shot.image):""}></img> 
          <h2 key={shot._id}>User: {shotUser?.userName}</h2>
          <h3>Shot Name: {shot.name} </h3>
          <h3>Camera: {shot.cameraNumber}</h3>
          <h3>Id: {shot.cameraId} </h3>
          <h4>Set Piece: {shot.setPiece} </h4>
          <h4>Show: {shot.show}</h4>
          <p>Description: {shot.description}</p>
          <p>Tag a Users: {shot.taggedUsers}</p>
          <button onClick={toggleEditMode}>Edit Card</button>
        </div>
      );
    }catch(e){ console.log(e, shot) }

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

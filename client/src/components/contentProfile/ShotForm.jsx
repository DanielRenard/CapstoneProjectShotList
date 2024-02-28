import { useContext, useState } from "react";

export default function ShotForm({ onSubmit, aShot={} }) {
  const [userName, setUserName] = useState(aShot.userName || "");
  const [id, setId] = useState(aShot.id || "");
  const [name, setName] = useState(aShot.name || "");
  const [setPiece, setSetPiece] = useState(aShot.setPiece || "");
  const [image, setImage] = useState(aShot.image || "");
  const [show, setShow] = useState(aShot.show || "");
  const [description, setDescription] = useState(aShot.description || "");
  const [dataBaseID, setDataBaseId] = useState(aShot._id || "");
  // const [submitResult, setSubmitResult] = useState("");

  // const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      dataBaseID: dataBaseID,
      userName: userName,
      id: id,
      name: name,
      setPiece: setPiece,
      image: image,
      show: show,
      description: description,
    };

    onSubmit(data);
  };

  return (
    <>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <label>
              User Name
              <input
                type="text"
                value={userName}
                name="userName"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Shot Name
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description
              <input
                type="text"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Image
              <input
                type="text"
                value={image}
                name="image"
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <br />
            <label>
              ID
              <input
                type="text"
                value={id}
                name="id"
                onChange={(e) => setId(e.target.value)}
              />
            </label>
            <br />
            <label>
              Set Piece
              <input
                type="text"
                value={setPiece}
                name="setPiece"
                onChange={(e) => setSetPiece(e.target.value)}
              />
            </label>
            <br />
            <label>
              Show
              <input
                type="text"
                value={show}
                name="show"
                onChange={(e) => setShow(e.target.value)}
              />
            </label>
            <br />
            <input
              type="hidden"
              value={dataBaseID}
              name="_id"
              onChange={(e) => setDataBaseId(e.target.value)}
            />
          </div>
          <div className="formRow">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

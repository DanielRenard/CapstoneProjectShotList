import { useContext, useState } from "react";

export default function ShotForm({ onSubmit, aShot = {} }) {
  const [userName, setUserName] = useState(aShot.userName || "");
  const [cameraNumber, setCameraNumber ] = useState(aShot.cameraNumber)
  const [cameraId, setCameraId] = useState(aShot.cameraId || "");
  const [name, setName] = useState(aShot.name || "");
  const [setPiece, setSetPiece] = useState(aShot.setPiece || "");
  const [image, setImage] = useState(aShot.image || "");
  const [show, setShow] = useState(aShot.show || "");
  const [description, setDescription] = useState(aShot.description || "");
  const [dataBaseID, setDataBaseId] = useState(aShot._id || "");

  function onImageChange(e) {
    console.log("image changed", e)
    let reader = new FileReader()
    reader.addEventListener("load", (e) => {
      // console.log("++++", e.target.result) 
      setImage(JSON.stringify(e.target.result)) // this is the other part that i broke w/ shema. should take in e.target.result
      })
    reader.readAsDataURL(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(image)
    const data = {
      dataBaseID: dataBaseID,
      userName: userName,
      cameraNumber: cameraNumber,
      cameraId: cameraId,
      name: name,
      setPiece: setPiece,
      image: image,
      show: show,
      description: description,
    };
    
    // let reader = new FileReader()
    // reader.addEventListener("load", (event) => {console.log(event) 
    //   onSubmit(data);})
    onSubmit(data);
    // reader.readAsDataURL(image)
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
                type="file"
                // value={image}
                name="image"
                // onChange={(e) => setImage(e.target.value)}
                onChange={onImageChange}
              />
            </label>
            <br />
            <label>
              Camera ID
              <input
                type="text"
                value={cameraId}
                name="cameraId"
                onChange={(e) => setCameraId(e.target.value)}
              />
            </label>
            <br />
            <label>
              Camera Number
              <input
                type="text"
                value={cameraNumber}
                name="camerNumber"
                onChange={(e) => setCameraNumber(e.target.value)}
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

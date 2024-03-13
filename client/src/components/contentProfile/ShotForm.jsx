import { useContext, useState } from "react";
import { useUserContext } from "/src/context/userContext";
import { useEffect } from "react";
import axios from "axios";

export default function ShotForm({ onSubmit, aShot = {} }) {
  const { currentUser } = useUserContext();
  const [cameraNumber, setCameraNumber] = useState(aShot.cameraNumber || "");
  const [cameraId, setCameraId] = useState(aShot.cameraId || "");
  const [name, setName] = useState(aShot.name || "");
  const [setPiece, setSetPiece] = useState(aShot.setPiece || "");
  const [image, setImage] = useState(aShot.image || "");
  const [show, setShow] = useState(aShot.show || "");
  const [description, setDescription] = useState(aShot.description || "");
  const [dataBaseID, setDataBaseId] = useState(aShot._id || "");
  const [userDirectory, setUserDirectory] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8085/api/users/`);
      // Sets up the data to currentShots
      // console.log("------", response.data.data);
      let filterUsers = response.data.data.filter((taggedUser) => {
        return (
          taggedUser._id != currentUser._id && taggedUser.userType != "user"
        );
      });
      setUserDirectory(filterUsers); //need to filter data ie director or producer; not currentUser
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Just console logging to catch potential errors
    }
  };
  useEffect(() => {
    fetchData(); //calling the function
    // console.log(currentShots)
  }, []);

  function onImageChange(e) {
    let reader = new FileReader();
    reader.addEventListener("load", (e) => {
      setImage(JSON.stringify(e.target.result)); // this is the other part that i broke w/ schema. should take in e.target.result
    });
    reader.readAsDataURL(e.target.files[0]);
  }

  const handleSubmitProducer = async (e) => {
    e.preventDefault();
    // console.log(image)

    const taggedUsers = Array.from(
      document.querySelectorAll(
        ".shotFormUserTags input[type='checkbox']:checked"
      )
    ).map((input) => input.value);

    const data = {
      dataBaseID: dataBaseID,
      user: currentUser._id,
      name: name,
      image: image,
      description: description,
      taggedUsers: taggedUsers,
    };

    // let reader = new FileReader()
    // reader.addEventListener("load", (event) => {console.log(event)
    //   onSubmit(data);})
    onSubmit(data);
    // reader.readAsDataURL(image)
  };

  const handleSubmitDirector = async (e) => {
    e.preventDefault();
    // console.log(image)

    const taggedUsers = Array.from(
      document.querySelectorAll(
        ".shotFormUserTags input[type='checkbox']:checked"
      )
    ).map((input) => input.value);

    const data = {
      dataBaseID: dataBaseID,
      user: currentUser._id,
      cameraNumber: cameraNumber,
      cameraId: cameraId,
      name: name,
      setPiece: setPiece,
      image: image,
      show: show,
      description: description,
      taggedUsers: taggedUsers,
    };

    // let reader = new FileReader()
    // reader.addEventListener("load", (event) => {console.log(event)
    //   onSubmit(data);})
    onSubmit(data);
    // reader.readAsDataURL(image)
  };

  // console.log("=====", userDirectory);

  let userDirectoryChecks = userDirectory?.map((user) => {
    return (
      <label className="taggedUserContainer" key={user._id}>
        <input value={user._id} type="checkbox" />
        {user.userName}
      </label>
    );
  });

  let producerFormTemplate = (
    <>
      <div className="input">
        <form onSubmit={handleSubmitProducer}>
          <div className="formRow">
            <label><h3>User: ...{currentUser.userName}</h3></label>
            <label>
              Shot Name:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Image:
              <input type="file" name="image" onChange={onImageChange} />
            </label>
            <div className="shotFormUserTags">
              <h4>Tag a User:</h4>
              <div>{userDirectoryChecks}</div>
            </div>
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

  let directorFromTemplate = (
    <>
      <div className="input">
        <form onSubmit={handleSubmitDirector}>
          <div className="formRow">
            <label><h3>User:... {currentUser.userName}</h3></label>
            <label>
              Shot Name:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label>
              Description:
              <input
                type="text"
                value={description}
                name="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </label>
            <br />
            <label>
              Image:
              <input type="file" name="image" onChange={onImageChange} />
            </label>
            <br />
            <label>
              Camera ID:
              <input
                type="text"
                value={cameraId}
                name="cameraId"
                onChange={(e) => setCameraId(e.target.value)}
              />
            </label>
            <br />
            <label>
              Camera Number:
              <input
                type="number"
                value={cameraNumber}
                name="camerNumber"
                onChange={(e) => setCameraNumber(e.target.value)}
              />
            </label>
            <br />
            <label>
              Set Piece:
              <input
                type="text"
                value={setPiece}
                name="setPiece"
                onChange={(e) => setSetPiece(e.target.value)}
              />
            </label>
            <br />
            <label>
              Associated Show:
              <input
                type="text"
                value={show}
                name="show"
                onChange={(e) => setShow(e.target.value)}
              />
            </label>
            <div className="shotFormUserTags">
              <h4>Tag a User:</h4>
              <div>{userDirectoryChecks}</div>
            </div>
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

  return (
    <div className="card">
      {currentUser.userType === "producer" ? producerFormTemplate : ""}
      {currentUser.userType === "director" ? directorFromTemplate : ""}
    </div>
  );
}

import { useState } from "react";
import Card from "./Card";
import ShotForm from "./ShotForm";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import 'C:/Users/danie/git/MiniProject3/client/src/style/card.css' //find proper file path

function CardList() {

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/shots");
      // Sets up the data to currentShots
      console.log(response.data.data);
      setCurrentShots(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Just console logging to catch potential errors
    }
  };
  const [currentShots, setCurrentShots] = useState([]);

  useEffect(() => {
    fetchData(); //calling the function
    // console.log(currentShots)
  }, []);

  const handleAddShot = async (data) => {
    let result = await fetch("http://localhost:8085/api/shots/newshot", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        fetchData()
      });
  };

  const handleDelete = async (idToDelete) => {
    let result = await fetch(`http://localhost:8085/api/shots/${idToDelete}`,{
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        fetchData();
        // console.log(data);
      });
    // let newShots = currentShots.filter((shot) => idToDelete != shot._id);
    // setCurrentShots(newShots);
  };

  const handleUpdate   = async (data) => {
    let result = await fetch(`http://localhost:8085/api/shots/${data.dataBaseID}`,{
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        fetchData();
        // console.log(data);
      });
    }

  const shotItemsComponent = currentShots.map((shot) => (
    <Card
      key={shot._id}
      shot={shot}
      onDeleteEvent= {handleDelete}
      onUpdate={handleUpdate}
    />
  ));

  return (
    <>
      <div className="gridWrapper">
        <ShotForm onSubmit={handleAddShot} />
        {shotItemsComponent}
      </div>
    </>
  );
}

export default CardList;
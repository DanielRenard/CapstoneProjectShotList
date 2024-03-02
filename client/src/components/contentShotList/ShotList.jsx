import CameraData from "../../data/CameraData";
import ShotListItem from "./ShotListItem";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import axios from "axios";

import { useEffect } from "react";

export default function ShotList() {

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
  // export default function ShotList()  {

  const cameraList = currentShots?.map((camera) => {

    const columns = [
      { field: "cameraId", headerName: "ID", width: 70 },
      { field: "name", headerName: "Name", width: 200 },
      { field: "setPiece", headerName: "Set Piece", width: 130 },
      {
        field: "image",
        headerName: "Image",
        width: 110,
        renderCell: (params) => {
            return (
                <img className="tableImage" width="100px" src={params.value}/>
            )
        }
      },
      {
        field: "selection",
        headerName: "Select",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 250,
        valueGetter: (params) => {
          return `${params.row.name || ""} ${params.row.cameraId || ""}`},
      },
    ];

    return (
      <div key={camera.name}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {camera.name}
          </AccordionSummary>
          <AccordionDetails>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={camera.shotList}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
              />
            </div>
            {/* {shotList} */}
          </AccordionDetails>
        </Accordion>
      </div>
    );
  });

  return <div className="ShotList">{cameraList}</div>;
}
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const columns = [
  { field: "cameraId", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "setPiece", headerName: "Set Piece", width: 130 },
  {
    field: "image",
    headerName: "Image",
    width: 110,
    renderCell: (params) => {
      return <img className="tableImage" width="100px" src={JSON.parse(params.value)} />;
    },
  },
  { field: "show", headerName: "Show", width: 200 },
  { field: "description", headerName: "Description", width: 300 }

];

export default function ShotList() {
  const [currentShotsOne, setCurrentShotsOne] = useState([]);
  const [currentShotsTwo, setCurrentShotsTwo] = useState([]);
  const [currentShotsThree, setCurrentShotsThree] = useState([]);

  const fetchData = async () => {
    try {
      const shots = await axios.get("http://localhost:8085/api/shots");
      // Sets up the data to currentShots
      // console.log(shots.data.data);
      //here filter by cameraNumber
      const cameraOne = shots.data.data.filter((shot) => shot.cameraNumber === 1)
      // console.log(cameraOne)
      setCurrentShotsOne(cameraOne)
      const cameraTwo = shots.data.data.filter((shot) => shot.cameraNumber === 2)
      // console.log(cameraTwo)
      setCurrentShotsTwo(cameraTwo)
      const cameraThree = shots.data.data.filter((shot) => shot.cameraNumber === 3)
      // console.log(cameraThree)
      setCurrentShotsThree(cameraThree)
    } catch (error) {
      console.error("Error fetching data: ", error);
      // Just console logging to catch potential errors
    }
  };

  useEffect(() => {
    fetchData(); //calling the function
  }, []);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Camera 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={currentShotsOne}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Camera 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={currentShotsTwo}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Camera 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              getRowId={(row) => row._id}
              rows={currentShotsThree}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

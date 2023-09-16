import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useState } from "react";
import bgImage from "assets/images/bg-home.jpg";
import MKBox from "components/MKBox";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { TableRow } from "@mui/material";

const rows = [
  {
    name: "Introduction to stock market",
    history: [
      {
        videoId: "x0G4WtO0LCQ",
        subtopic: "Stock Market Basics for beginners",
      },
      {
        videoId: "p7HKvqRI_Bo?si=WdQGHr_SYoFhTKPD",
        subtopic: "How does the stock market work?",
      },
      {
        videoId: "NkxHXz-TuxuG-Yen",
        subtopic: "Types of Orders In Stock Market",
      },
      {
        videoId: "NazmJXWfDIE",
        subtopic: "What is Stock Exchange?",
      },
      {
        videoId: "ymUsQEg-RHs?si=vGgU5L1yeq6ZBM6R",
        subtopic: "What is a Stockbroker? ",
      },
      {
        videoId: "l_2nw0Y2dPs?si=CO4rJH4Z3zyxE9dS",
        subtopic: "Key players in the stock market",
      },
    ],
  },
  {
    name: "The Technical Analysis",
    history: [
      {
        videoId: "eynxyoKgpng&t=140s",
        subtopic: "Candlestick Charts - 2:30",
      },
      {
        videoId: "2020-01-02",
        subtopic: "How does the stock market work?",
      },
    ],
  },
];

function LearnDashboard() {
  // Create an array to store the open/close state of each row
  const [openRows, setOpenRows] = useState(Array(rows.length).fill(false));

  const toggleRow = (index) => {
    // Create a new copy of the openRows array with the clicked row toggled
    const newOpenRows = [...openRows];
    newOpenRows[index] = !newOpenRows[index];
    setOpenRows(newOpenRows);
  };

  const embedYouTubeVideo = (videoId) => {
    // Create an iframe element with the YouTube video embed URL
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";

    // Replace the placeholder element with the iframe
    const placeholderElement = document.getElementById(`video-placeholder-${videoId}`);
    if (placeholderElement) {
      placeholderElement.replaceWith(iframe);
    }
  };

  return (
    <DashboardLayout>
      <MKBox
        minHeight="60vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#fff" }}>What do you want to learn today?</h1>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: "50%",
            padding: "10px",
            marginTop: "10px",
          }}
        />
      </MKBox>
      <div style={{ paddingTop: "20px" }}>
        <h4>Courses</h4>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableBody>
            {rows.map((row, index) => (
              <React.Fragment key={row.name}>
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                  <TableCell style={{ width: "35px", paddingRight: "0px" }}>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => toggleRow(index)} // Toggle the specific row
                    >
                      {openRows[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                </TableRow>
                <TableRow key={`subtopic-${index}`}>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Table size="small" aria-label="purchases">
                          <TableBody>
                            {row.history.map((historyRow) => (
                              <TableRow key={historyRow.videoId}>
                                <TableCell component="th" scope="row">
                                  <span
                                    id={`video-placeholder-${historyRow.videoId}`}
                                    onClick={() => embedYouTubeVideo(historyRow.videoId)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    <img
                                      src={`https://img.youtube.com/vi/${historyRow.videoId}/0.jpg`}
                                      //alt={historyRow.subtopic}
                                    />
                                  </span>
                                </TableCell>
                                <TableCell>{historyRow.subtopic}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardLayout>
  );
}

export default LearnDashboard;

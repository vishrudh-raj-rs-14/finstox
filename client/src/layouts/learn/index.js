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
import { Link } from "react-router-dom";
import { AnimatePresence, motion  } from "framer-motion";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import LockIcon from '@mui/icons-material/Lock';

const rows = [
  {
    modules: 1,
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
    modules: 2,
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
  {
    modules: 3,
    name: "Comming Soon",
    history: [
      {
        videoId: "#",
        subtopic: "Comming Soon",
      },
      {
        videoId: "#",
        subtopic: "Comming Soon",
      },
    ],
  },
  {
    modules: 4,
    name: "Comming Soon",
    history: [
      {
        videoId: "#",
        subtopic: "Comming Soon",
      },
      {
        videoId: "#",
        subtopic: "Comming Soon",
      },
    ],
  },
];

function LearnDashboard() {
  // Create an array to store the open/close state of each row
  const [openRows, setOpenRows] = useState(Array(rows.length).fill(false));

  // for framer motion
  const [selectedId, setSelectedId] = useState(null)

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
      <DashboardNavbar />
      {/* <MKBox
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
      </MKBox> */}

      <div style={{ paddingTop: "20px" }}>
        <h4 className="lg:text-3xl font-bold">Courses</h4>
      </div>
      
      <TableContainer component={Paper}>
        <Table className="bg-white" aria-label="collapsible table">
          <TableBody className="bg-white" >
            {rows.map((row, index) => (
              <React.Fragment key={row.name}>
                <TableRow className="bg-slate-300"  sx={{ "& > *": { borderBottom: "unset" } }}>
                  <TableCell style={{ width: "35px", paddingRight: "0px" }}>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => toggleRow(index)} // Toggle the specific row
                    >
                      {openRows[index] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell className="bg-slate-300"   component="th" scope="row">
                    <div className="flex flex-row justify-between">
                      <h2 className="lg:text-xl font-medium"> <span >{row.modules}. </span> {row.name}</h2>
                      <h2 className="lg:text-sm font-medium"> { row.history.length }</h2>
                    </div>
                  </TableCell>
                </TableRow>
                
                <TableRow className="bg-white"  key={`subtopic-${index}`}>
                  <TableCell className="bg-white lg:mx-10" style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 0 }}>
                        <Table className="bg-white border-none" size="small" aria-label="purchases">
                          <TableBody className="bg-white border-none" >
                            {row.history.map((historyRow, index) => (
                              // <TableRow key={historyRow.videoId}>
                              //   <TableCell component="th" scope="row">
                              //     <span
                              //       id={`video-placeholder-${historyRow.videoId}`}
                              //       onClick={() => embedYouTubeVideo(historyRow.videoId)}
                              //       style={{ cursor: "pointer" }}
                              //     >
                              //       <img
                              //         src={`https://img.youtube.com/vi/${historyRow.videoId}/0.jpg`}
                              //         alt={historyRow.subtopic}
                              //         width="2rem"
                              //       />
                              //     </span>
                              //   </TableCell>
                              //     <TableCell >{historyRow.subtopic}</TableCell>
                              //     {/* <TableCell > 
                              //       <a href={`https://youtube.com/watch?${historyRow.videoId} `}  target="_blank">
                              //         {historyRow.subtopic}
                              //       </a>
                              //   </TableCell> */}
                              // </TableRow>
                              <>
                              <div key={historyRow.videoId} className="m-4 h-16 mx-10 flex items-center bg-slate-200 rounded shadow-sm">
                                <motion.div layoutId={historyRow.videoId} onClick={() => setSelectedId(historyRow.videoId)}>
                                  {/* <motion.h5>{item.subtitle}</motion.h5> */}
                                  <motion.h2 className="flex items-center mx-8 font-medium"> {index + 1} <span>&nbsp; &nbsp;</span>  { historyRow.subtopic}</motion.h2>
                                </motion.div>
                              </div>
                              <AnimatePresence>
                                {selectedId && (
                                  <motion.div layoutId={selectedId} className="fixed  flex flex-row items-start top-1/2 lg:left-96 justify-center min-w-full min-h-fit z-40 " onClick={() => setSelectedId(null)}>
                                    {/* <motion.h5>{item.subtitle}</motion.h5> */}
                                    {/* <motion.h2>"Not Avaliable"</motion.h2> */}
                                    {/* <span
                                        id={`video-placeholder-${rows.videoId}`}
                                        onMouseEnter={() => embedYouTubeVideo(rows.videoId)}
                                        style={{ cursor: "pointer" }}
                                      >
                                    </span> */}
                                    <div className="flex justify-center mb-32">
                                      <iframe src={`https://www.youtube.com/embed/${selectedId}`} width="560" height="315"></iframe>
                                    </div>

                                    <motion.button className="" onClick={() => setSelectedId(null)}>❌</motion.button>
                                  </motion.div>
                                )}
                            </AnimatePresence>
                              </>
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

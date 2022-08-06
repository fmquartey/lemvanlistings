import { Delete, Edit, Forward, Search, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { apilink } from '../../Helper';

const Upcoming = () => {
  const { setTitle, setUpcomingColor } = useContext(UserContext);

  const [open, setOpen] = React.useState(false);

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  // const editCurrent = (id) => {
  //     navigate(`/app/landlord/tenants/${id}`);
  //     setTitle("\\ Edit Current");
  //     handleCloseMenu();
  // }

  const moveToPast = (id) => {
    console.log(id);
    handleCloseMenu();
  }

  const getUpcoming = () => {
    setLoading(true);
    Axios.get(`${apilink}/api/listings`)
      .then((res) => {
        setLoading(false);
        setListings(res.data.data);
        console.log(listings)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // getCurrent();
    // setTitle("\\ Upcoming");
    setUpcomingColor(true)
  }, [])

  return (
    <>
      <Box
        sx={{
          width: "100%",
          marginTop: "10px",
        }}>
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "300px",
              md: "300px",
              lg: "300px",
            },
            padding: "0px 10px",
            border: "1px solid #ACACAC",
            marginBottom: "10px",
            borderRadius: "8px",
          }}>
          <InputBase
            placeholder='Search'
            fullWidth={true}
            endAdornment={<Search sx={{
              color: "#ACACAC",
            }} />}
          />
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Property type</TableCell>
                <TableCell align="center">Location</TableCell>
                <TableCell align="center">No. years</TableCell>
                <TableCell align="center">Started</TableCell>
                <TableCell align="center">Ended</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center">Francis Quartey</TableCell>
                <TableCell align="center">0542450230</TableCell>
                <TableCell align="center">Apartment</TableCell>
                <TableCell align="center">Kasoa</TableCell>
                <TableCell align="center">No. years</TableCell>
                <TableCell align="center">Started</TableCell>
                <TableCell align="center">Ended</TableCell>

              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {/* <Menu
        id="menu-area"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => editListing(12)}>
          <ListItemIcon>
            <Edit fontSize="inherit" />
          </ListItemIcon>
          Edit
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => deleteListing(12)}>
          <ListItemIcon>
            <VisibilityOff fontSize="inherit" />
          </ListItemIcon>
          Hide
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => deleteListing(12)}>
          <ListItemIcon>
            <Delete fontSize="inherit" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu> */}
    </>
  )
}

export default Upcoming

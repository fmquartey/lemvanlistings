import { Delete, Edit, Search } from '@mui/icons-material';
import { Box, Button, Divider, InputBase, ListItemIcon, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { apilink } from '../../Helper';


const Draft = () => {
  const { setTitle, setDraftCol } = useContext(UserContext);
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
  const editListing = (id) => {
    navigate(`/app/landlord/listings/editdraft/${id}`);
    setTitle("\\ Draft")
    handleCloseMenu();
  }

  const deleteListing = (id) => {
    console.log(id);
    handleCloseMenu();
  }

  const getDrafts = () => {
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
    getDrafts();
    // setTitle("\\ Draft");

    setDraftCol(true);
  }, [])

  return (
    <Box sx={{
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
              <TableCell>Property title</TableCell>
              <TableCell align="center">Property type</TableCell>
              <TableCell align="center">Amount </TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Verified</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Estate house
              </TableCell>
              <TableCell align="center">Apartment</TableCell>
              <TableCell align="center">GHS 300 / Month</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Pending</TableCell>
              <TableCell align="center">
                <Button
                  onClick={handleMenuClick}
                  variant="text"
                  sx={{
                    textTransform: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#35BF43",
                  }}>Options</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Menu
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
            <Delete fontSize="inherit" />
          </ListItemIcon>
          Delete
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Draft

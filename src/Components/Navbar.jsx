import styled from '@emotion/styled';
import { ArrowDropDown } from '@mui/icons-material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Avatar, Badge, Box, Button, FormControlLabel, IconButton, InputBase, Menu, MenuItem, Switch, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'

const Navbar = () => {

    //Browse menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorAEl, setAnchorAEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const openA = Boolean(anchorAEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleAClick = (event) => {
        setAnchorAEl(event.currentTarget);
    };
    const handleAClose = () => {
        setAnchorAEl(null);
    };

    //Search 
    const Search = styled('div')(({ theme }) => ({
        borderRadius: "25px",
        backgroundColor: "lightgray",
        padding: '9px',
        backgroundColor: '#f2f5fa',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }))


    return (
        <Box className="navbar" height='2rem' gap='1rem' sx={{ display: "flex", flexDirection: "row", height: '4rem', alignItems: 'center', justifyContent: 'space-between' }}>

            <Box className="logo" gap='1.4rem' sx={{ display: "flex", flexDirection: "row", alignItems: 'center' }}>
                <Box sx={{ display: "flex", alignItems: 'center', gap: "0.4rem" }}>
                    <img width='35px' height='35px' src="https://www.cipherschools.com/static/media/Cipherschools_icon@2x.3b571d743ffedc84d039.png" alt="" />
                    <Typography fontWeight='bold' variant='h6'>Cypher Schools</Typography>
                </Box>
                {/* Browse Menu */}
                <div>
                    <Box
                        onClick={handleClick}
                        sx={{ cursor: 'pointer', display: 'flex', gap: '4px', alignItems: 'center' }}
                    >
                        <i class="fa-regular fa-compass"></i>
                        <p>Browse</p>
                        <i class="fa-solid fa-chevron-down"></i>
                    </Box>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleAClose}>App Development</MenuItem>
                        <MenuItem onClick={handleAClose}>Game Development</MenuItem>
                        <MenuItem onClick={handleAClose}>Web Development</MenuItem>
                        <MenuItem onClick={handleAClose}>Data Stuctures</MenuItem>
                        <MenuItem onClick={handleAClose}>Programming</MenuItem>
                        <MenuItem onClick={handleAClose}>Machine Learning</MenuItem>
                        <MenuItem onClick={handleAClose}>Data Science</MenuItem>
                        <MenuItem onClick={handleAClose}>Others</MenuItem>
                    </Menu>
                </div>
            </Box>


            {/* Left Items Search and widget icons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Search>
                    <div>
                        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                        <input style={{ border: 'none', backgroundColor: '#f2f5fa', outline: 'none', marginLeft: '9px', width: '18rem' }} type='search' placeholder='Search and Learn' />
                    </div>
                    <i class="fa-solid fa-filter"></i>
                </Search>

                {/* Widget Icons */}
                {/* Notification icon */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <Tooltip title='Notifiacation'>
                        <NotificationsNoneIcon sx={{ cursor: 'pointer' }} />
                    </Tooltip>

                    {/* Profile Icon */}
                    <Box>
                    <Avatar onClick={handleAClick} sx={{ bgcolor: 'grey', width: '27px', height: '27px', fontSize: '14px', cursor: 'pointer' }}>A</Avatar>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorAEl}
                        open={openA}
                        onClose={handleAClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >

                        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                        <MenuItem onClick={handleClose}>My Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Enrolled Courses</MenuItem>
                        <MenuItem onClick={handleClose}>Whishlist</MenuItem>
                        <MenuItem onClick={handleClose}>Programming</MenuItem>
                        <MenuItem onClick={handleClose}>Liked Videos</MenuItem>
                    </Menu>
                    </Box>

                    {/* Points icon */}
                    <Box sx={{display:"flex", alignItems:"center", gap:'0.3rem'}}>
                        <img src="https://www.cipherschools.com/static/media/WatchPoints.1caa87d88b88c0d4b4ee24fdd5b1db3f.svg" alt="" />
                        <span style={{color:"orange", fontWeight:'bold', fontSize:"1.5rem"}}>0</span>
                    </Box>

                    {/* Switch for Dark and light mode */}
                    <FormControlLabel control={<Switch defaultChecked />} label="mode" />


                </Box>
            </Box>

        </Box>
    )
}

export default Navbar

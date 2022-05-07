
import React, {  Fragment, useEffect, useState   } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';

const pages = ['Products', 'Pricing', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const HomePage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    console.log("done")
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [description, setDescription] = useState("");
  const [ name , setName ] = useState("");
  const [ sellername , setSellername ] = useState("");
  const [ qnt , setQnt ] = useState("");
  const [ prize , setPrice ] = useState("");
  const [ quality , setQuality ] = useState("");
  const username = "user2"

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {

        const body = { description,name,sellername,qnt,prize,quality,username };



        const response = await fetch("http://localhost:5000/easybuymartprod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });
    } catch (err) {
        console.error(err.message);
    }
}

  return <Fragment>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            easyBUYmart
        </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Product</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Pricing</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
        </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              PRODUCTS
            </Button>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              PRICING
</Button>
            <Button

              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              CONTACT
</Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Button sx={{ marginRight: 3 }} variant="contained" data-toggle="modal" data-target="#exampleModalCenter">Add New Item</Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <div style={{ alignItems: 'center', justifyContent: 'center', padding: 10, display: 'flex' }}>
      <Card sx={{ maxWidth: 345, alignItems: "center", justifyContent: 'center' }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
        </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">ADD TO CART</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>



    </div>
    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add New Item</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            {/* model body */}


              <div class="form-group">
                <label for="exampleFormControlInput1">Item Name</label>
                <input value="" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Item name" value={name} onChange={e => setName(e.target.value)} required></input>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Seller Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name" value={sellername} onChange={e => setSellername(e.target.value)} required></input>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Quantity</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter item/items quantity" value={qnt} onChange={e => setQnt(e.target.value)} required></input>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1">Price</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter item/items quantity" value={prize} onChange={e => setPrice(e.target.value)} required></input>
              </div>

              <div class="form-group">
                <label for="exampleFormControlSelect1">Quality</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>Brand New</option>
                  <option>Used</option>

                  value={quality} onChange={e => setQuality(e.target.value)}
                </select>
              </div>

              <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={description} onChange={e => setDescription(e.target.value)}></textarea>
              </div>


            {/* end of the model body */}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" onClick={e => onSubmitForm(e)}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}
export default HomePage

import React, { Fragment, useEffect, useState } from "react";
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
import Stack from '@mui/material/Stack';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Album from "../Components/homepagebanner";

const drawerWidth = 300;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const pages = ['Products', 'Pricing', 'Contact'];
const settings = ['Profile', 'Account', 'board', 'Logout'];

const HomePage = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const [open3, setOpen3] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen3(true);
  };
  const handleDrawerClose = () => {
    setOpen3(false);
  };

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
  const logOut = () => {
    window.location = "/"

  };

  const navAdmin = () => {
    window.location = "/"

  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen4(false);
  };

  const checkoutPage = () => {
    window.location="checkout"
  }


  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [sellername, setSellername] = useState("");
  const [qnt, setQnt] = useState("");
  const [prize, setPrice] = useState("");
  const [quality, setQuality] = useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [items, setItem] = useState([]);
  const [carts, setCart] = useState([]);
  const username = "user2"



  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (name === "" || sellername === "" || description === "") {
      setOpen(true)

    } else {
      try {

        const body = { description, name, sellername, qnt, prize, quality, username };



        const response = await fetch("http://localhost:5000/easybuymartprod", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      } catch (err) {
        console.error(err.message);
      }
      window.location="/home"
      handleClick()


    }

  }
  //get products
  const getItem = async () => {
    try {
      const response = await fetch("http://localhost:5000/easybuymartprodviewclient")
      const jsonDATA = await response.json();

      setItem(jsonDATA);


    } catch (err) {
      console.error(err.message);
    }


  }

  //get cart Item
  const getcartItem = async () => {
    try {
      const response = await fetch("http://localhost:5000/easybuymartcart")
      const jsonDATA = await response.json();

      setCart(jsonDATA);


    } catch (err) {
      console.error(err.message);
    }


  }

  const addtoCart = async (id) => {

    try {


      const response = await fetch(
        `http://localhost:5000/productcart/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },

        }
      );
      setItem(items.filter(item => item.prod_id != id))


    } catch (err) {
      console.error(err.message);
    }
    getItem()
    setOpen2(true)
    getcartItem()



  };

  const removefromCart = async (id) => {

    try {


      const response = await fetch(
        `http://localhost:5000/productcartrmv/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },

        }
      );
      setItem(items.filter(item => item.prod_id != id))


    } catch (err) {
      console.error(err.message);
    }
    getItem()
    setOpen4(true)
    getcartItem()



  };

  useEffect(() => {
    getItem();
    getcartItem();

  }, []);

  return <Fragment>

    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth
        }
      }}
      variant="persistent"
      anchor="right"
      open={open3}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {carts.map((cart , index) => (
          <ListItem>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  {cart.name}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  monthly rental is Rs {(cart.price / 3) + 5 | 0}
                </Typography>
                <Typography variant="body2">
                  Total price is {cart.price}

                </Typography>
              </CardContent>
              <CardActions>

                <Button onClick={() => removefromCart(cart.prod_id)} size="small">Remove</Button>
              </CardActions>
            </Card>


          </ListItem>
        ))}
        <Button onClick={() => checkoutPage()} style={{ alignItems: 'center', justifyContent: 'center', padding: 10, display: 'flex' , marginLeft:10 }} variant="contained">Chechout</Button>
      </List>

    </Drawer>

    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Item successfully added to the cart
        </Alert>
      </Snackbar>
      <Snackbar open={open4} autoHideDuration={6000} onClose={handleClose1}>
        <Alert onClose={handleClose1} severity="error" sx={{ width: '100%' }}>
          Item successfully removed from cart
        </Alert>
      </Snackbar>

    </Stack>
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

            <Button sx={{ marginRight: 3, backgroundColor: 'orange' }} variant="contained" data-toggle="modal" data-target="#exampleModalCenter">Add New Item</Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleDrawerOpen} sx={{ p: 0, marginLeft: 3, color: 'white' }}>
                <AddShoppingCartIcon />
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

              <MenuItem onClick={handleCloseUserMenu && logOut}>
                <Typography textAlign="center">LogOut</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Account</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu && navAdmin}>
                <Typography textAlign="center">Dashboard</Typography>
              </MenuItem>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Album />

    {/* product item */}

    {items.map(item => (
      <div style={{ alignItems: 'center', justifyContent: 'center', padding: 10, display: 'flex' }} key={item.prod_id}>
        <Card sx={{ maxWidth: 345, minWidth: 345, alignItems: "center", justifyContent: 'center' }}>

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <br></br>
            <Typography variant="body2" color="text.secondary">
              Total Value is RS {item.price} /=
        </Typography>
            <Typography variant="body2" color="text.secondary">
              Monthly Value is RS {(item.price / 3) + 5 | 0} /=
        </Typography>

          </CardContent>
          <CardActions>
            <Button onClick={() => addtoCart(item.prod_id)} size="small">ADD TO CART</Button>

          </CardActions>
        </Card>
      </div>
    ))}

    {/* product item */}

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
            <Collapse in={open}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
              >
                You need to fill-out all sections
        </Alert>
            </Collapse>


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
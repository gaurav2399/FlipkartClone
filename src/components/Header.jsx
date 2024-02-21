import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );


    return (
        <StyledHeader position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
// import './style.css';
// import '';
// import flipkartLogo from '../../images/logo/flipkart.png';
// import goldenStar from '../../images/logo/golden-star.png';
// import flipkartLogo from "../Appstore.png";
// import goldenStar from "../assets/shops/playstore.png";
// import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
// // import "../components/Header.css";

// const DropdownMenu = (props) => {
//   return (
//     <div className="headerDropdownContainer">
//       {props.menu}
//       <div className="dropdown">
//         <div className="upArrow"></div>
//         {props.firstMenu}
//         <ul className="headerDropdownMenu">
//           {
//             props.menus && props.menus.map((item, index) =>
//               <li key={index}><a href={item.href}>{item.label}</a></li>
//             )
//           }
//         </ul>
//       </div>
//     </div>
//   );
// }

// const Header = (props) => {
//   return (
//     <div className="header">
//       <div className="subHeader">
//         <div className="logo">
//           <a href="">
//             <img src={flipkartLogo} className="logoimage" alt="" />
//           </a>
//           <a style={{ marginTop: '-10px' }}>
//             <span className="exploreText">Explore</span>
//             <span className="plusText">Plus</span>
//             <img src={goldenStar} className="goldenStar" alt="" />
//           </a>
//         </div>
//         <div style={{
//           padding: '0 10px'
//         }}>
//           <div className="searchInputContainer">
//             <input
//               className="searchInput"
//               placeholder={'search for products, brands and more'}
//             />
//             <div className="searchIconContainer">
//               <IoIosSearch style={{
//                 color: '#2874f0'
//               }} />
//             </div>

//           </div>
//         </div>
//         <div className="rightMenu">
//           <DropdownMenu
//             menu={
//               <a className="loginButton">
//                 Login
//             </a>
//             }
//             menus={[
//               { label: 'My Profile', href: '', icon: null },
//               { label: 'Flipkart Plus Zone', href: '', icon: null },
//               { label: 'Orders', href: '', icon: null },
//               { label: 'Wishlist', href: '', icon: null },
//               { label: 'Rewards', href: '', icon: null },
//               { label: 'Gift Cards', href: '', icon: null },
//             ]}
//             firstMenu={
//               <div className="firstmenu">
//                 <span>New Customer?</span>
//                 <a style={{ color: '#2874f0' }}>Sign Up</a>
//               </div>
//             }
//           />
//           <DropdownMenu
//             menu={
//               <a className="more">
//                 <span>More</span>
//                 <IoIosArrowDown />
//               </a>
//             }
//             menus={[
//               { label: 'Notification Preference', href: '', icon: null },
//               { label: 'Sell on flipkart', href: '', icon: null },
//               { label: '24x7 Customer Care', href: '', icon: null },
//               { label: 'Advertise', href: '', icon: null },
//               { label: 'Download App', href: '', icon: null }
//             ]}
//           />
//           <div>
//             <a className="cart">
//               <IoIosCart />
//               <span style={{ margin: '0 10px' }}>Cart</span>
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   )

// }

// export default Header
import {React} from 'react'
// import Avatar from '@mui/material/Avatar';
// import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
// import { LoginContext } from '../context/ContextProvider';
// import { Logincontext } from '../context/Contextprovider';
// import { makeStyles } from '@material-ui/core';
import "./Rightheader.css";
import { Divider } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';



const Rightheader = ({ logclose,logoutuser}) => {

    const imgd = "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png"

    // const { account, setAccount } = useContext(LoginContext);

    //  this is left drawer bt name is right header

    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {
                    
                            
                    }
                    {/* {account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : ""} */}
                </div>
                <div className="nav_btn" onClick={()=>logclose()}>
                {/* onClick={() => logclose()}>onClick={() => logclose()}> */}
                    <NavLink to="/">Home</NavLink>
                  
                    
                    <NavLink to="/">Shop By Category</NavLink>
                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    <NavLink to="/" style={{ marginTop: 10 }}>Today's Deal</NavLink>
                    {
                         <NavLink to="#">Your Order</NavLink> 
                    }
                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    <div className="flag">
                        <NavLink to="/" style={{ marginTop: 14 }}>Settings</NavLink>
                        <img src={imgd} alt="india flag" style={{ width: 35, marginLeft: 10 }} />
                    </div>
                  

           

                </div>
            </div>
        </>
    )
}

export default Rightheader
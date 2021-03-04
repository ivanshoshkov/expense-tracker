import React, { useState } from "react";
import Logo from "../Logo";
import classes from "./Navbar.module.css";
import TopNav from "../../uploads/sidebar-top.png";
import { ReactComponent as BackArrow } from "../../uploads/arrow-back.svg";
import { ReactComponent as HamburgerToggle } from "../../uploads/hamburger-toggle.svg";
import { ReactComponent as SidebarBottom } from "../../uploads/sidebar-bottom.svg";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";

import Home from "../Home/Home";
import InviteFriendControlls from "../Promotions/InviteFriendControlls";

//ROUTER
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SendMoney from "../SendMoney/SendMoney";
import AddMoney from "../AddMoney/AddMoney";
import NewAccount from "../NewAccount/NewAccount";

function Navbar(props) {
  const [open, setOpen] = useState(false);

  const toggleClasses = [classes.Sidenav, open ? classes.sidenavOpen : ""];

  return (
    <Router>
      <div className={classes.Navbar}>
        <div className={toggleClasses.join(" ")}>
          <div className={classes.toggle}>
            <img src={TopNav} alt="sidebar-top" className={classes.TopNav} />
            {open ? (
              <BackArrow
                className={classes.ToggleButton}
                onClick={(e) => setOpen(!open)}
              />
            ) : (
              <HamburgerToggle
                className={classes.ToggleButton}
                onClick={(e) => setOpen(!open)}
              />
            )}
          </div>
          <div className={classes.navigation_items}>
            <div className={classes.nav_item_holder}>
              <Link
                to="/"
                className={classes.navigation_item}
                onClick={(e) => setOpen(!open)}
              >
                <HomeOutlinedIcon className={classes.nav_icon} />
                Dashboard
              </Link>
            </div>
            <div className={classes.nav_item_holder}>
              <Link
                to={{
                  pathname: "/send-money",
                  aboutProps: {
                    name: "SEND MONEY",
                  },
                }}
                className={classes.navigation_item}
                onClick={(e) => setOpen(!open)}
              >
                <SendOutlinedIcon className={classes.nav_icon} />
                Send money
              </Link>
            </div>
            <div className={classes.nav_item_holder}>
              <Link
                to="/add-money"
                className={classes.navigation_item}
                onClick={(e) => setOpen(!open)}
              >
                <AccountBalanceWalletOutlinedIcon
                  className={classes.nav_icon}
                />
                Add money
              </Link>
            </div>
          </div>
          <SidebarBottom
            width="360px"
            height="306px"
            className={classes.SidebarBottom}
          />
        </div>
        <div className={classes.navWrapper}>
          <div>
            <HamburgerToggle
              onClick={(e) => setOpen(!open)}
              alt="sidebar-top"
              className={classes.navHamburger}
            />
            <Link to="/"   className={classes.navigation_item}>
              <Logo />
            </Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/"  title="Home" component={Home}   />
        <Route path="/send-money" title="Send Money" component={SendMoney} />
        <Route path="/add-money" title="Add Money" component={AddMoney} />
        <Route path="/new-account" title="Add Money" component={NewAccount} />
        <Route
          path="/invite-friend"
          title="Add Money"
          component={InviteFriendControlls}
        />
      </Switch>
    </Router>
  );
}

export default Navbar;

// className={classes.ToggleButton}

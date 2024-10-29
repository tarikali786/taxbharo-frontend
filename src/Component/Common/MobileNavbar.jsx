import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarData } from "../../data/data";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemButton,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(null);
  const [open, setOpen] = useState(false);

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expand/collapse
  };
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div className=" sticky  top-0 w-full   z-50  md:hidden  px-2  py-5 shadow-md flex items-center justify-between gap-2  bg-white-500">
      <Link to="/" className=" w-24 h-auto   ">
        <img
          src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
          alt=""
        />
      </Link>
      <div className="md:hidden block" onClick={toggleDrawer(true)}>
        <MenuIcon className="text-black-500" style={{ fontSize: "32px" }} />
      </div>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        className="md:hidden"
      >
        <List style={{ width: 250, height: "100vh" }} className="relative">
          <div className="md:w-32 md:h-10 w-28 h-8 ml-4 mb-4">
            <img
              src="https://www.taxbharo.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-blue.f73a0aaf.png&w=1920&q=75"
              alt="Logo"
            />
          </div>
          {NavbarData.map((item, index) => (
            <div key={index}>
              <ListItemButton onClick={() => handleExpand(index)}>
                <ListItemText primary={item.name} />
                {item.children ? (
                  expanded === index ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )
                ) : null}
              </ListItemButton>

              {/* Collapsible Children Items */}
              {item.children && (
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child, childIndex) => (
                      <ListItem key={childIndex} sx={{ pl: 4 }}>
                        <ListItemText
                          primary={child.title ? child.title : child.segment}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ))}
          <Link
            to="/auth/sign-in"
            className="absolute bottom-1 left-0 w-full bg-blue-500 text-center py-4 rounded-3xl font-semibold text-white-500 text-xl transform transition-transform animate-bounce"
          >
            Login
          </Link>
        </List>
      </Drawer>
    </div>
  );
};

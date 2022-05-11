import React from "react";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
export default function CardUserInfo(props){
    return(
        // <div>
        //     Hellof
        // </div>

        <div style={{ display:"flex", justifyContent:"flex-end", alignItems:"center" }}>
            
              <img
                src="https://www.gravatar.com/avatar/c0bc039e1fa3c0e09e4c69a6d0a8c7bf?s=48&d=identicon&r=PG&f=1"
                alt="Site Logo"
                width="16"
                height="16"
              />
              <Link href="/question" underline="none" color="#0074CC" sx={{ "& :hover": { color: "#0A95FF" }}}>
                  <Typography
                    variant="body1"
                    
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                    //   color: "#0074CC",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginLeft: "5px",
                      fontSize: "12px",
                    wordWrap:"wrap",
                    wordBreak: "break-all"
                    }}
                    textTransform="none"
                  >
                    Username
                  </Typography>
                  </Link>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "inline-block" },
                  color: "#525960",
                  fontFamily:
                    '"-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  fontSize: "12px",
                  fontWeight: "bold",
                  marginLeft: "5px",
                }}
                textTransform="none"
              >
                2963
              </Typography>
              <Typography
                variant="body2"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "inline-block" },
                  color: "#6A737C",
                  fontFamily:
                    '"-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif","Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                  fontSize: "12px",
                  marginLeft: "5px",
                }}
                textTransform="none"
              >
                asked 1 hr ago
              </Typography>
            
        </div>
    );
}
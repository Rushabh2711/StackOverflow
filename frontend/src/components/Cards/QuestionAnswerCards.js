import { Divider } from "@mui/material";
import * as React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TagsList from "./TagsList";
import CardUserInfo from "./CardUserInfo";
import CheckIcon from '@mui/icons-material/Check';
import Tooltip from '@mui/material/Tooltip';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  color: theme.palette.text.secondary,
  boxShadow: "none",
  verticalAlign: "center",
}));

export default function QuestionAnswerCards(props) {
  const tags = ["r", "python", "c++", "javascript", "cases"];
  return (
    <div>
      <Divider />
      <Grid
        container
        spacing={2}
        style={{ marginBottom: "5px", alignItems: "flex-start", marginTop: "5px" }}
      >
        <Grid item xs={2} sm={2} md={2} style={{ paddingTop: "0px" }}>
          <Item>
            <Grid
              container
              spacing={2}
              direction="column"
              style={{
                marginBottom: "5px",
                marginTop: "5px",
                alignItems: "flex-end",
                justifyContent: "flex-start",
              }}
            >
              <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "0px" }}>
                <Item>
                <Tooltip title="0 Votes" placement="right-end">
                    <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#0C0D0E",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      fontSize: "13px",
                    }}
                    textTransform="none"
                  >
                    0 Votes
                  </Typography>
                  </Tooltip>
                  </Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "0px" }}>
                <Item>
                <Tooltip title="0 Answers" placement="right-end">
                    <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#0C0D0E",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      fontSize: "13px",
                      padding:"5px 0px"
                    }}
                    textTransform="none"
                  >
                    0 Answers
                  </Typography>
                  
                  {/* <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#3D8F58",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      fontSize: "13px",
                      padding:"5px 5px",
                      border:"1px solid #3D8F58",
                      borderRadius:"2px"
                    }}
                    textTransform="none"
                  >
                    1 Answers
                  </Typography> */}
                  {/* <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#FFFFFF",
                      backgroundColor: "#48A868",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      padding:"5px 5px",
                      fontSize: "13px",
                      borderRadius:"2px",
                      
                    }}
                    textTransform="none"
                  >
                    <CheckIcon style={{ verticalAlign: "middle" }}/> 3 Answers
                  </Typography> */}
                  </Tooltip>
                  </Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "0px" }}>
                <Item>
                <Tooltip title="0 views" placement="right-end">
                    {/* <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#0C0D0E",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      fontSize: "13px",
                    }}
                    textTransform="none"
                  >
                    0 Views
                  </Typography> */}
                  <Typography
                    variant="body1"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#DA680B",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      fontSize: "13px",
                    }}
                    textTransform="none"
                  >
                    1k Views
                  </Typography>
                  </Tooltip>
                  </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={10} style={{ paddingTop: "0px" }}>
          <Item>
            <Grid
              container
              spacing={2}
              direction="column"
              style={{
                marginBottom: "5px",
                marginTop: "5px",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "0px" }}>
                <Item>
                  <Link href="/question" underline="none" color="#0074CC" sx={{ "& :hover": { color: "#0A95FF" }}}>
                  <Typography
                    variant="body1"
                    
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                    //   color: "#0074CC",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                      marginRight: "0px",
                      fontSize: "17px",
                    wordWrap:"wrap",
                    wordBreak: "break-all"
                    }}
                    textTransform="none"
                  >
                    Question Title aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </Typography>
                  </Link>
                </Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ paddingTop: "0px" }}>
                <Item>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                      display: { xs: "none", sm: "inline-block" },
                      color: "#3B4045",
                      fontFamily:
                        '-apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif',
                        marginRight: "0px",
                      fontSize: "13px",
                      wordWrap:"wrap",
                    wordBreak: "break-all"
                    }}
                    textTransform="none"
                  >
                    Question Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionaqasdasdDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={4} sm={4} md={4} style={{ width: "100%", paddingTop: "5px" }}>
                <Item>
                <Grid container spacing={2} style={{ alignItems: "center", marginTop: "0px"}}>
              <Grid item xs={6} sm={6} md={6} style={{ paddingTop: "0px" }}>
                <Item>
                  <TagsList tags={tags}/>
                </Item>
              </Grid>
              <Grid item xs={6} sm={6} md={6} style={{ paddingTop: "0px" }}>
                <Item style={{ textAlign: "right" }}>
                  <CardUserInfo type="home" />
                </Item>
              </Grid>
            </Grid>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

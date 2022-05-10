import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";
import UserActivitySidebar from "../components/UserProfile/UserActivitySidebar";
import _ from "lodash";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import moment from "moment";

export default function UserActivityReputation() {
  const [user, setUser] = useState("");
  const [activity, setActivity] = useState(userJson);
  const [dataKey, setDataKey] = useState([]);
  const [data, setData] = useState([]);

  const { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/` + id)
      .then((res) => {
        setUser(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
        navigate("/errorpage");
      });

    let groupedDatesThatMatch = _.mapValues(
      _.groupBy(activity, (i) => moment(i.date).format("MMMM Do YYYY")),
      (app) => _.groupBy(app, (i) => i.questionId)
    );

    var count = 0;
    var keyValue = [];
    var keyData = [];
    console.log(dataKey.length);
    for (var key in groupedDatesThatMatch) {
      if (groupedDatesThatMatch.hasOwnProperty(key)) {
        keyValue[count] = key;
        setData[count] = groupedDatesThatMatch[key];
        console.log(key + " -> " + groupedDatesThatMatch[key]);
        count++;
      }
      setDataKey(keyValue);
      setData(keyData);
    }
  }, []);

  return (
    <div>
      <div className="userprofile-details-component">
        <UserDetails user={user}></UserDetails>
      </div>
      <div>
        <UserProfileNavbar page={"activity"} user={user}></UserProfileNavbar>
      </div>
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {" "}
          <UserActivitySidebar
            tab={"reputation"}
            user={user}
          ></UserActivitySidebar>
        </Grid>
        <Grid item xs={9}>
          {" "}
          <Typography
            sx={{ fontSize: 20, color: "#212121", align: "left" }}
            color="text.secondary"
            gutterBottom
            align="left"
          >
            Reputation
          </Typography>
          {dataKey.length !== 0 ? (
            dataKey.map((key) => (
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{key}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <div></div>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

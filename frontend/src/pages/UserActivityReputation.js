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
  List,
  ListItem,
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

  let d = [
    {
      title: "May 8th 2022",
      content: [
        {
          title: "122",
          content: [
            {
              title: [
                {
                  questionId: 122,
                  activityType: "upvote",
                  date: "2022-05-08T23:26:44.337+00:00",
                  userId: 1,
                },
              ],
              content: [],
            },
          ],
        },
        {
          title: "123",
          content: [
            {
              title: [
                {
                  questionId: 123,
                  activityType: "upvote",
                  date: "2022-05-08T23:26:44.337+00:00",
                  userId: 1,
                },
                {
                  questionId: 123,
                  activityType: "upvote",
                  date: "2022-05-08T23:26:44.337+00:00",
                  userId: 1,
                },
              ],
              content: [],
            },
          ],
        },
      ],
    },
    {
      title: "May 7th 2022",
      content: [
        {
          title: "123",
          content: [
            {
              title: [
                {
                  questionId: 123,
                  activityType: "upvote",
                  date: "2022-05-07T23:26:44.337+00:00",
                  userId: 1,
                },
              ],
              content: [],
            },
          ],
        },
      ],
    },
    {
      title: "May 6th 2022",
      content: [
        {
          title: "123",
          content: [
            {
              title: [
                {
                  questionId: 123,
                  activityType: "upvote",
                  date: "2022-05-06T23:26:44.337+00:00",
                  userId: 1,
                },
              ],
              content: [],
            },
          ],
        },
      ],
    },
  ];

  function litem(d) {
    return (
      <ListItem
        sx={{
          border: 1,
          borderColor: "#bdbdbd",
          bgcolor: "#eeeeee",
        }}
      >
        {" "}
        <Typography
          sx={{ fontSize: 13, color: "#212121", align: "left" }}
          color="text.secondary"
          gutterBottom
          align="left"
        >
          {d}
        </Typography>
      </ListItem>
    );
  }

  function recurr(d) {
    console.log(d);
    if (isArray(d.title)) {
      {
        return (
          <div>
            {" "}
            <List sx={{ width: "100%", bgcolor: "background.paper" }}>
              {d.title.map((reps) => litem(reps.activityType))}
            </List>
            <br></br>
          </div>
        );
      }
    } else {
      return (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{d.title}</Typography>
          </AccordionSummary>
          <Accordion>
            <AccordionDetails
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {d.content.map((con) => recurr(con))}
            </AccordionDetails>
          </Accordion>
        </Accordion>
      );
    }
  }

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

    console.log("here");
    console.log(groupedDatesThatMatch);

    const getObjects = (o, parent) =>
      o && typeof o === "object" && !isArray(o)
        ? Object.entries(o).map(([title, v]) => ({
            title,
            key,
            content: getObjects(v, title),
          }))
        : [{ title: o, key, content: [] }];

    var result = getObjects(groupedDatesThatMatch, "null");
    console.log(result);
    var count = 0;
    var keyValue = [];
    var keyData = [];
    for (var key in groupedDatesThatMatch) {
      if (groupedDatesThatMatch.hasOwnProperty(key)) {
        keyValue[count] = key;
        keyData[key] = groupedDatesThatMatch[key];
        count++;
      }
      setDataKey(keyValue);
      setData(keyData);
    }
  }, []);

  function isArray(arr) {
    return arr instanceof Array;
  }

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
          {d.map((du) => recurr(du))}
        </Grid>
      </Grid>
    </div>
  );
}

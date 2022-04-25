import React, { useEffect, useState } from "react";
import userJson from "../dummydata/user.json";
import UserDetails from "../components/UserProfile/UserDetails";
import UserProfileNavbar from "../components/UserProfile/UserProfileNavbar";

export default function UserActivity() {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(userJson.userData);
  }, []);

  return (
    <div>
      <div className="userprofile-details-component">
        <UserDetails user={user}></UserDetails>
      </div>
      <div>
        <UserProfileNavbar page={"activity"} user={user}></UserProfileNavbar>
      </div>
    </div>
  );
}

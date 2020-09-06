import React, { useState, useEffect } from "react";
import { Avatar } from "@material-ui/core";

const ProfilePhoto = (props) => {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setPhoto(data.results));
  }, []);

  return (
    <div>
      <Avatar>
        {photo.map((pt) => (
          <img src={pt.picture.thumbnail} key={pt.username}></img>
        ))}
      </Avatar>
    </div>
  );
};

export default ProfilePhoto;

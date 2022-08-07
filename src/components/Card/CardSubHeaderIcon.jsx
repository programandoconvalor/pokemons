// Core
import React from "react";
import { Avatar, Card, CardHeader } from "@material-ui/core";
// Img
import adminImg from "../../assets/images/ball.png";

const CardSubHeaderIcon = ({ title, subTitle }) => {
  return (
    <>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              alt={title}
              src={adminImg}
              style={{ height: 100, width: 100 }}
            />
          }
          title={title}
          subheader={subTitle}
        />
      </Card>
    </>
  );
};
export default CardSubHeaderIcon;

import React, { useState, useEffect } from "react";
import {
  Div,
  Button,
  Panel,
  PanelHeader,
  Input,
  Group,
  Header,
  CardGrid,
  Card,
} from "@vkontakte/vkui";
import { NAME_PROJECT } from "../constants";
import { UserRating } from "../items";

const Rating = ({ id, go, fetchedUser }) => {
  const users = [
    {
      fullName: "Кирилл Андреев",
      photoURL:
        "https://sun2.tattelecom-nbc.userapi.com/impf/c857632/v857632332/1ee4b/5GFcHvy27h4.jpg?size=1280x960&quality=96&sign=91a0bafec0b6f56139047ffde009a21c",
      likes: 58,
      city: "Казань",
      id: 236908027,
    },
    {
      fullName: "Кирилл Андреев",
      photoURL:
        "https://sun2.tattelecom-nbc.userapi.com/impf/c857632/v857632332/1ee4b/5GFcHvy27h4.jpg?size=1280x960&quality=96&sign=91a0bafec0b6f56139047ffde009a21c",
      likes: 58,
      city: "Казань",
      id: 236908027,
    },
    {
      fullName: "Кирилл Андреев",
      photoURL:
        "https://sun2.tattelecom-nbc.userapi.com/impf/c857632/v857632332/1ee4b/5GFcHvy27h4.jpg?size=1280x960&quality=96&sign=91a0bafec0b6f56139047ffde009a21c",
      likes: 58,
      city: "Казань",
      id: 236908027,
    },
  ];

  const renderUsers = users.map((item, index) => {
    return (
      <UserRating
        fullName={item.fullName}
        photoURL={item.photoURL}
        likes={item.likes}
        city={item.city}
        id={item.id}
        index={index + 1}
      />
    );
  });

  return (
    <Panel id={id}>
      <Div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          height: "70vh",
          padding: "60px 20px 20px 20px",
        }}
      >
        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0px 0px 10px 0px",
            fontSize: "20px",
          }}
        >
          Рейтинг
        </Div>

       
          {renderUsers}
       
      </Div>
    </Panel>
  );
};

export { Rating };

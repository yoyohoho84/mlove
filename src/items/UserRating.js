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
  RichCell,
  Avatar,
} from "@vkontakte/vkui";
import { NAME_PROJECT } from "../constants";
import Icon16Like from "@vkontakte/icons/dist/16/like";

const UserRating = ({ fullName, photoURL, likes, city, id, index }) => {
  return (
    <Group style={{ width: "100%" }}>
      <RichCell
        style={{ paddingLeft: "0px" }}
        disabled
        multiline
        before={
          <Div>
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                // margin: "4px",
                zIndex: 2,
                fontSize: "15px",
                color: "white",
                width: "20px",
                height: "20px",
                backgroundColor: "black",
                borderRadius: "10px",
              }}
            >
              {index}
            </span>
            <Avatar size={72} src={photoURL} />
          </Div>
        }
        text={<Div style={{ marginLeft: "10px", color: "gray" }}> {city}</Div>}
        // caption="Вчера в 20:30"
        // after={
        //   <Div
        //     style={{
        //       display: "flex",
        //       flexDirection: "row",
        //       justifyContent: "center",
        //       alignItems: "center",
        //     }}
        //   >
        //     <Div>56</Div>
        //     <Icon16Like style={{ marginLeft: "10px" }} fill="red" width={28} height={28}  />
        //   </Div>
        // }
        actions={
          <Div style={{ marginLeft: "10px" }}>
            <Button>Написать</Button>
            <Button
              mode="secondary"
              href={`https://vk.com/call?id=${id}`}
              target="_blank"
            >
              Позвонить
            </Button>
          </Div>
        }
      >
        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <Div>{fullName}</Div>
          <Div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Div>56</Div>
            <Icon16Like
              style={{ marginLeft: "5px" }}
              fill="red"
              width={28}
              height={28}
            />
          </Div>
        </Div>
      </RichCell>
    </Group>
  );
};

export { UserRating };

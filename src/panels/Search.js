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

const Search = ({ id, go, fetchedUser }) => {
  return (
    <Panel id={id}>
      {/* <PanelHeader></PanelHeader> */}

      <Div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          padding: "40px 20px 20px 20px",
        }}
      >

        <Group
        style={{width: "80%" }}
          separator="hide"
          header={<Header mode="secondary">Название группы</Header>}
        >
          <CardGrid  > 
            <Card size="l" mode="shadow" >
              <div style={{ height: 300, }} />
            </Card>
          </CardGrid>
        </Group>

        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "80%",
            marginTop: "20px",
          }}
        >
          <Button>Dislike</Button>
          <Button>Like</Button>
        </Div>
      </Div>
    </Panel>
  );
};

export { Search };

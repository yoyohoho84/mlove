import React, { useState, useEffect } from "react";
import { Div, Button, Panel, PanelHeader, Input } from "@vkontakte/vkui";
import {NAME_PROJECT} from "../constants"

const CitySelection = ({ id, go, fetchedUser }) => {
  return (
    <Panel id={id}>
      {/* <PanelHeader></PanelHeader> */}

      <Div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          // alignItems: "center",
          height: "80vh",
          padding: "60px 20px 20px 20px",
        }}
      >
        <Div style={{ margin: "0px 0px 10px 0px", fontSize: "20px" }}>
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
            Выберите город
          </Div>

          <Input
            // top=""
            placeholder="Казань"
            // onChange={onChangeHandlerId}
            type="text"
            // value={inputValue}
          />
        </Div>

        <Button onClick={go} data-to="meme-themes">
          Далее
        </Button>
      </Div>
    </Panel>
  );
};

export { CitySelection };

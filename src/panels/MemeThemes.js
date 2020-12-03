import React, { useState, useEffect } from "react";
import { Div, Button, Panel, PanelHeader, Input } from "@vkontakte/vkui";
import { dataMemeThemes } from "../data";
import {NAME_PROJECT} from "../constants"

const MemeThemes = ({ id, go, fetchedUser }) => {
  const renderMemeThemes = dataMemeThemes.map((item, index) => {
    return <Button style={{margin: "0px 10px 10px 0px"}} >{item}</Button>;
  });
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
            Выберите тему
          </Div>

          <Div>{renderMemeThemes}</Div>
        </Div>

        <Button onClick={go} data-to="search-filter">
          Далее
        </Button>
      </Div>
    </Panel>
  );
};

export { MemeThemes };

import React, { useState, useEffect } from "react";
import {
  Div,
  Button,
  Panel,
  PanelHeader,
  Input,
  RangeSlider,
  FormLayout,
  Textarea,
} from "@vkontakte/vkui";
import { dataMemeThemes } from "../data";
import { NAME_PROJECT } from "../constants";

const SearchFilter = ({ id, go, fetchedUser }) => {
  const [filterParams, setFilterParams] = useState([
    { gender: "Все", actived: true },
    { gender: "Девушки", actived: false },
    { gender: "Парни", actived: false },
  ]);
  const [startYear, setStartYear] = useState(18);
  const [endYear, setEndYear] = useState(23);

  // const pickGender = (gender) => {
  // const felterGender = filterParams.map(i =>
  //   if(i.gender === gender) {
  //     return setFilterParams(prevState => [...prevState, ])
  //   }
  //   )

  //   setFilterParams(prevState => [...prevState, ])

  // }

  function onChangeSlider([startYear, endYear]) {
    setStartYear(startYear);
    setEndYear(endYear);

    console.log("startYear :", startYear, "endYear :", endYear);
  }

  const renderInterestingGender = filterParams.map((item, index) => {
    return (
      <Button
        key={index}
        id={index}
        style={{
          margin: "0px 10px 10px 0px",
          backgroundColor: item.actived ? "green" : "",
        }}
        // onClick={setFilterParams(prevState => [...prevState, ])}
      >
        {item.gender}
      </Button>
    );
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
            Фильтр
          </Div>
          <FormLayout
            style={{
              margin: "0px 0px 0px 12px",
            }}
          >
            <Div> {renderInterestingGender}</Div>
          </FormLayout>

          <FormLayout>
            <RangeSlider
              // style={{ marginTop: "40px" }}
              step={1}
              min={18}
              max={50}
              value={[startYear, endYear]}
              onChange={onChangeSlider}
              top="Возраст"
              bottom={`${startYear} - ${endYear}`}
            />
          </FormLayout>

          <FormLayout>
            <Textarea
              top="О себе"
              placeholder="Я не душ, но после меня ты тоже намокнешь)"
            />
          </FormLayout>
        </Div>

        <Button onClick={go} data-to="city-selection">
          Начать
        </Button>
      </Div>
    </Panel>
  );
};

export { SearchFilter };

import React from "react";
import PropTypes from "prop-types";

import {
  Avatar,
  Div,
  Button,
  Group,
  PanelHeader,
  Panel,
  FormLayout,
  Textarea,
} from "@vkontakte/vkui";
import { NAME_PROJECT } from "../constants";

const Profile = ({ id, go, fetchedUser }) => {
  return (
    <Panel id={id}>
      {/* <PanelHeader></PanelHeader> */}

      <Div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 20px 20px 20px",
        }}
      >
        {fetchedUser && (
          <>
            <Avatar size={112} src={fetchedUser.photo_max_orig} />
            <Div style={{ marginTop: "10px" }}>
              {fetchedUser.first_name}, 26
            </Div>
          </>
        )}
      </Div>
      <Div>
        <FormLayout>
          <Textarea
            top="О себе"
            placeholder="Я не душ, но после меня ты тоже намокнешь)"
          />
        </FormLayout>
      </Div>
      <Group title="Navigation Example">
        <Div>
          <Button size="xl" level="2" onClick={go} data-to="city-selection">
            Show me the Persik, please
          </Button>
        </Div>
      </Group>
    </Panel>
  );
};

export { Profile };

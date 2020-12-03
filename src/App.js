import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  Epic,
  Tabbar,
  TabbarItem,
  ConfigProvider,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Icon16Done from "@vkontakte/icons/dist/16/done";
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel";
import Icon28UserCircleOutline from "@vkontakte/icons/dist/28/user_circle_outline";
import Icon28Favorite from "@vkontakte/icons/dist/28/favorite";
import Icon20Search from "@vkontakte/icons/dist/20/search";
import Icon28Profile from "@vkontakte/icons/dist/28/profile";

import "./styles/reset.sass";
// import "./styles/icons.sass";
// import "./styles/panels.sass";
// import "./styles/items.sass";
// import "./styles/components.sass";

import { Profile, CitySelection, MemeThemes, SearchFilter, Search, Rating } from "./panels";

const App = () => {
  const [activePanel, setActivePanel] = useState("rating");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      console.log(user);
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <Epic
      tabbar={
        <>
          {activePanel === "how-it-works" ? (
            <></>
          ) : (
            <Tabbar>
              <TabbarItem onClick={go} data-to="rating" text="Рейтинг">
                {activePanel === "rating" ? (
                  <Icon28Favorite fill="#11729c" width={26} height={26} />
                ) : (
                  <Icon28Favorite width={26} height={26} />
                )}
              </TabbarItem>
              <TabbarItem onClick={go} data-to="search" text="Поиск">
                {activePanel === "search" ? (
                  <Icon20Search fill="#11729c" width={26} height={26} />
                ) : (
                  <Icon20Search width={26} height={26} />
                )}
              </TabbarItem>
              <TabbarItem onClick={go} data-to="profile" text="Профиль">
                {activePanel === "profile" ? (
                  <Icon28Profile fill="#11729c" width={26} height={26} />
                ) : (
                  <Icon28Profile width={26} height={26} />
                )}
              </TabbarItem>
            </Tabbar>
          )}
        </>
      }
    >
      <ConfigProvider isWebView={true}>
        <View activePanel={activePanel} popout={popout}>
          <Profile id="profile" fetchedUser={fetchedUser} go={go} />
          <CitySelection
            id="city-selection"
            fetchedUser={fetchedUser}
            go={go}
          />
          <MemeThemes id="meme-themes" fetchedUser={fetchedUser} go={go} />
          <SearchFilter id="search-filter" fetchedUser={fetchedUser} go={go} />
					<Search id="search" fetchedUser={fetchedUser} go={go} />
          <Rating id="rating" fetchedUser={fetchedUser} go={go} />
        </View>
      </ConfigProvider>
    </Epic>
  );
};

export default App;

import Game from "./Game";
import Header from "./Header";
import "../styles/App.css";
import {
  GlobalSettingsContext,
  useGlobalSettings,
} from "../hooks/useGlobalSettings";
import { StatisticsContext, useStatistics } from "../hooks/useStatistics";
import Button from "./Button";
import { useState } from "react";

function App() {
  const globalSettings = useGlobalSettings();
  const statistics = useStatistics();
  const [explore, setExplore] = useState<boolean>(true);

  return (
    <StatisticsContext.Provider value={statistics}>
      <GlobalSettingsContext.Provider value={globalSettings}>
        <div className="app-container">
          {explore ? (
            <div>
              <h1>A jornada</h1>
              <div>
                "Que haja uma luz nos lugares mais escuros, quando todas as
                outras luzes se apagarem."
              </div>
              <div className="subTitle">
                responda as perguntas e encontre seu destino.
              </div>
              <Button
                onClick={() => {
                  setExplore(false);
                }}
                className="mt-3"
                label="EXPLORAR"
              />
            </div>
          ) : (
            <Game />
          )}
        </div>
      </GlobalSettingsContext.Provider>
    </StatisticsContext.Provider>
  );
}

export default App;

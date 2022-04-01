import Game from "./Game";
import Header from "./Header";
import "../styles/App.css";
import {
  GlobalSettingsContext,
  useGlobalSettings,
} from "../hooks/useGlobalSettings";
import { StatisticsContext, useStatistics } from "../hooks/useStatistics";
import Button from "./Button";
import { useEffect, useMemo, useState } from "react";
import { getDailyWord, getLast, getToday, wordList } from "../utils";
import { DailyWord } from "../models";

function App() {
  const globalSettings = useGlobalSettings();
  const statistics = useStatistics();
  const [explore, setExplore] = useState<boolean>(true);
  const [frase, setFrase] = useState<string>("");

  const dailyWord = useMemo<DailyWord>(() => {
    let word = getDailyWord();
    setFrase(word.fraseInicio);
    return word;
  }, []);

  return (
    <StatisticsContext.Provider value={statistics}>
      <GlobalSettingsContext.Provider value={globalSettings}>
        <div className="app-container">
          {explore ? (
            <div>
              <h1>A jornada 💍</h1>
              <div>{frase}</div>
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
            <div className="fullw">
              <Game />
            </div>
          )}
        </div>
      </GlobalSettingsContext.Provider>
    </StatisticsContext.Provider>
  );
}

export default App;

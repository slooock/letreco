import Game from "./Game";
import Header from "./Header";
import "../styles/App.css";
import {
  GlobalSettingsContext,
  useGlobalSettings,
} from "../hooks/useGlobalSettings";
import { StatisticsContext, useStatistics } from "../hooks/useStatistics";
import Button from "./Button";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getDailyWord, getLast, getToday, wordList } from "../utils";
import { getStage, Stage } from "../utils/stages";
import { DailyWord } from "../models";

import { useParams } from "react-router";

function App() {
  const globalSettings = useGlobalSettings();
  const statistics = useStatistics();
  const [explore, setExplore] = useState<boolean>(true);
  const [frase, setFrase] = useState<string>("");
  const [stage, setStage] = useState<Stage>();

  const dailyWord = useMemo<DailyWord>(() => {
    let word = getDailyWord();
    if (word) {
      setFrase(word.fraseInicio);
    }
    return word;
  }, []);

  useEffect(() => {
    console.log(window.location.href);

    const url = window.location.href;
    const etapa = url.split("=")[1];
    const resp = getStage(etapa);
    // console.log(resp);
    setStage(resp);
  }, []);

  const shuffle = useCallback(() => {
    setFrase(
      "A mais ou menos dois anos nos conhecemos e começamos a namorar, chegou a hora de dar um passo a frente, aqui está presente pessoas que amamos para testemunhar esse momento especial."
    );
  }, []);

  useEffect(() => {
    console.log(stage);
    if (stage?.id === "5") {
      localStorage.clear();
      shuffle();
    }
  }, [stage?.id]);

  return (
    <StatisticsContext.Provider value={statistics}>
      <GlobalSettingsContext.Provider value={globalSettings}>
        <div className="app-container">
          {new Date() > new Date(2022, 3, 2, 17, 0, 0) && stage?.id !== "5" ? (
            <div className="stage">
              <h2 className="title">Etapa {stage?.id}</h2>
              <div className="text">{stage?.text}</div>
              <div className="next">Continue a jornada indo para </div>
              <div>{stage?.next}</div>
            </div>
          ) : (
            <div className="fullw">
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
          )}
        </div>
      </GlobalSettingsContext.Provider>
    </StatisticsContext.Provider>
  );
}

export default App;

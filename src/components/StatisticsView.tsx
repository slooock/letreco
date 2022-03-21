import { useContext, useEffect, useState } from "react";
import { GlobalSettingsContext } from "../hooks/useGlobalSettings";
import {
  GuessDistributionKeys,
  StatisticsContext,
} from "../hooks/useStatistics";
import "../styles/StatisticsView.css";

const COUNTDOWN_SECOND = 1000;
const DISTRIBUTION_FIXED_WIDTH = 12;
const DISTRIBUTION_VARIABLE_WIDTH = 100 - DISTRIBUTION_FIXED_WIDTH;

const getCountdownString = () => {
  const todayDate = new Date();

  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  tomorrowDate.setHours(0, 0, 0, 0);

  const offsetInMs = tomorrowDate.getTime() - todayDate.getTime();

  const offsetInSeconds = Math.floor(offsetInMs / 1000);
  const seconds = (offsetInSeconds % 60).toString().padStart(2, "0");

  const offsetInMinutes = Math.floor(offsetInSeconds / 60);
  const minutes = (offsetInMinutes % 60).toString().padStart(2, "0");

  const offsetInHours = Math.floor(offsetInMinutes / 60);
  const hours = offsetInHours.toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
};

export function StatisticsView() {
  const [{ isColorblindModeActive }] = useContext(GlobalSettingsContext);

  const [{ distribution, currentStreak, maxStreak }] =
    useContext(StatisticsContext);

  const [countdown, setCountdown] = useState<string>(getCountdownString());

  const distributionKeys = Object.keys(distribution).filter(
    (key) => key !== "X"
  ) as GuessDistributionKeys[];
  const distributionValues = Object.values(distribution) as number[];

  const maxDistribution = Math.max(...distributionValues);

  const allGames = distributionValues.reduce((prev, cur) => prev + cur);
  const wonGames = allGames - distribution.X;

  const wonPercentage = allGames !== 0 ? (wonGames / allGames) * 100 : 0;
  const wonPercentageStr = Number.isSafeInteger(wonPercentage)
    ? `${wonPercentage}%`
    : `${wonPercentage.toFixed(1).replace(".", ",")}%`;

  const getVariableWidth = (distributionValue: number) => {
    return (distributionValue / maxDistribution) * DISTRIBUTION_VARIABLE_WIDTH;
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown(getCountdownString());
    }, COUNTDOWN_SECOND);

    return () => clearInterval(countdownInterval);
  });

  return (
    <div className="col-5 d-flex flex-column text-center justify-content-center">
      <span>A nova pista estará disponível em:</span>
      <h4>{countdown}</h4>
    </div>
  );
}

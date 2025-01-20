import { useState } from "react";
import "./App.css";
import LocationForm from "./LocationForm";
import WeatherInfo from "./WeatherInfo";
import type { LunarData, SolarData, WeatherData } from "./types";
import SunMoonInfo from "./SunMoonInfo";

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined
  );
  const [solarData, setSolarData] = useState<SolarData | undefined>(undefined);
  const [lunarData, setLunarData] = useState<LunarData | undefined>(undefined);

  return (
    <>
      <LocationForm
        setWeatherData={setWeatherData}
        setSolarData={setSolarData}
        setLunarData={setLunarData}
      />
      <SunMoonInfo solarData={solarData} lunarData={lunarData} />
      <WeatherInfo data={weatherData} />
    </>
  );
};

export default App;

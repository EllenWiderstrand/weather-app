import "./App.css";
import RiseSetCard from "./RiseSetCard";
import sunrise from "./assets/sunrise.svg";
import sunset from "./assets/sunset.svg";
import moonrise from "./assets/moonrise.svg";
import moonset from "./assets/moonset.svg";
import moon from "./assets/moon.svg";
import type { LunarData, SolarData } from "./types";
import { formatTime, getMoonPhase } from "./utils";

interface SunMoonInfoProps {
  solarData?: SolarData;
  lunarData?: LunarData;
}

const SunMoonInfo = ({ solarData, lunarData }: SunMoonInfoProps) => {
  if (!solarData || !lunarData) return;

  const sunriseIso = solarData.properties.sunrise.time;
  const sunriseTime = formatTime(sunriseIso);

  const sunsetIso = solarData.properties.sunset.time;
  const sunsetTime = formatTime(sunsetIso);

  const moonriseIso = lunarData.properties.moonrise.time;
  const moonriseTime = formatTime(moonriseIso);

  const moonsetIso = lunarData.properties.moonset.time;
  const moonsetTime = moonsetIso ? formatTime(moonsetIso) : "-";

  const moonPhase = getMoonPhase(lunarData.properties.moonphase);

  return (
    <div className="sun-moon-info">
      <RiseSetCard icon={sunrise} title="Sunrise" value={sunriseTime} />
      <RiseSetCard icon={sunset} title="Sunset" value={sunsetTime} />
      <RiseSetCard icon={moonrise} title="Moonrise" value={moonriseTime} />
      <RiseSetCard icon={moonset} title="Moonset" value={moonsetTime} />
      <RiseSetCard icon={moon} title="Moon phase" value={moonPhase} />
    </div>
  );
};

export default SunMoonInfo;

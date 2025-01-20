import { FormEvent, useState } from "react";
import "./App.css";
import Input from "./Input";
import {
  getLatLong,
  getLunarData,
  getSolarData,
  getWeatherData,
} from "./utils";
import type { LunarData, SolarData, WeatherData } from "./types";

interface LocationFormProps {
  setWeatherData: (weatherData: WeatherData) => void;
  setSolarData: (solarData: SolarData) => void;
  setLunarData: (lunarData: LunarData) => void;
}

const LocationForm = ({
  setWeatherData,
  setSolarData,
  setLunarData,
}: LocationFormProps) => {
  const [country, setCountry] = useState<string>("");
  const [city, setCity] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const latLong = await getLatLong(city, country);
    if (!latLong) return;

    const weatherData = await getWeatherData(latLong);
    if (weatherData) {
      setWeatherData(weatherData);
    }

    const solarData = await getSolarData(latLong);
    if (solarData) {
      setSolarData(solarData);
    }

    const lunarData = await getLunarData(latLong);
    if (lunarData) {
      setLunarData(lunarData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="location-form">
      <Input
        label="Country"
        id="country"
        value={country}
        setValue={setCountry}
      />
      <Input label="City" id="city" value={city} setValue={setCity} />
      <button type="submit" className="submit-button">
        Search
      </button>
    </form>
  );
};

export default LocationForm;

import ky from "ky";
import {
  LatLong,
  LatLongResponse,
  LunarData,
  SolarData,
  WeatherData,
} from "./types";

export const getLatLong = async (
  city: string,
  country: string
): Promise<LatLong | undefined> => {
  const response = await ky
    .get<LatLongResponse>(
      `https://nominatim.openstreetmap.org/search?city=${city}&country=${country}&format=json`
    )
    .json();

  const firstResponse = response[0];
  const lat = firstResponse.lat;
  const long = firstResponse.lon;

  const formattedLat = parseFloat(lat).toFixed(3);
  const formattedLong = parseFloat(long).toFixed(3);

  return { lat: formattedLat, long: formattedLong };
};

export const getWeatherData = async ({
  lat,
  long,
}: LatLong): Promise<WeatherData | undefined> => {
  const response = await ky
    .get<WeatherData>(
      `https://www.finn.no/pf/wx/weather/compact?lat=${lat}&lon=${long}`
    )
    .json();

  return response;
};

export const getSolarData = async ({
  lat,
  long,
}: LatLong): Promise<SolarData | undefined> => {
  const response = await ky
    .get<SolarData>(
      `https://www.finn.no/pf/wx/sunmoon/sun?lat=${lat}&lon=${long}`
    )
    .json();

  return response;
};

export const getLunarData = async ({
  lat,
  long,
}: LatLong): Promise<LunarData | undefined> => {
  const response = await ky
    .get<LunarData>(
      `https://www.finn.no/pf/wx/sunmoon/moon?lat=${lat}&lon=${long}`
    )
    .json();

  return response;
};

export const formatDate = (date: Date): string => {
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });

  return `${day} ${month}`;
};

export const formatTime = (isoString: string): string => {
  const date = new Date(isoString);

  const hours = date.getUTCHours().toString().padStart(2, "0");
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
};

export const getMoonPhase = (degrees: number) => {
  if (degrees === 0) {
    return "New moon";
  }
  if (degrees < 90) {
    return "Waxing crescent";
  }
  if (degrees < 180) {
    return "Waxing gibbous";
  }
  if (degrees === 180) {
    return "Full moon";
  }
  if (degrees < 270) {
    return "Waning gibbous";
  }
  if (degrees <= 360) {
    return "Waning crescent";
  }
  return "No information";
};

import { Fragment } from "react/jsx-runtime";
import "./App.css";
import type { WeatherData } from "./types";
import { formatDate, formatTime } from "./utils";

interface WeatherInfoProps {
  data?: WeatherData;
}

const WeatherInfo = ({ data }: WeatherInfoProps) => {
  const units = data?.properties.meta.units;

  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  const fourDaysFromNow = new Date();
  fourDaysFromNow.setDate(today.getDate() + 4);

  const weatherForFiveDays = data?.properties.timeseries.filter((item) => {
    const itemDate = new Date(item.time);
    return itemDate.getTime() < fourDaysFromNow.getTime();
  });

  return (
    <table className="weather-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Temperature</th>
          <th>Cloud area</th>
          <th>Wind speed</th>
          <th>Wind direction</th>
          <th>Humidity</th>
          <th>Air pressure</th>
        </tr>
      </thead>
      <tbody>
        {weatherForFiveDays ? (
          weatherForFiveDays.map((weatherData, i) => {
            const weatherInfo = weatherData.data.instant.details;
            const date = new Date(weatherData.time);

            return (
              <Fragment key={weatherData.time}>
                {date.getUTCHours() === 0 || i === 0 ? (
                  <tr className="weather-table-day">
                    <td colSpan={7}>{formatDate(date)}</td>
                  </tr>
                ) : null}
                <tr>
                  <td>{formatTime(weatherData.time)}</td>
                  <td>
                    {weatherInfo.air_temperature} {units?.air_temperature}
                  </td>
                  <td>
                    {weatherInfo.cloud_area_fraction}
                    {units?.cloud_area_fraction}
                  </td>
                  <td>
                    {weatherInfo.wind_speed} {units?.wind_speed}
                  </td>
                  <td>
                    {weatherInfo.wind_from_direction}{" "}
                    {units?.wind_from_direction}
                  </td>
                  <td>
                    {weatherInfo.relative_humidity} {units?.relative_humidity}
                  </td>
                  <td>
                    {weatherInfo.air_pressure_at_sea_level}{" "}
                    {units?.air_pressure_at_sea_level}
                  </td>
                </tr>
              </Fragment>
            );
          })
        ) : (
          <tr className="empty-table-info">
            <td colSpan={7}>
              Enter a country and city to get information about the weather
              there
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default WeatherInfo;

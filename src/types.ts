export type LatLong = {
  lat: string;
  long: string;
};

export type LatLongResponse = {
  place_id: number;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  class: string;
  type: string;
  place_rank: number;
  importance: number;
  addresstype: string;
  name: string;
  display_name: string;
  boundingbox: string[];
}[];

type NextHours = {
  details: {
    precipitation_amount?: number;
  };
  summary: {
    symbol_code: string;
  };
};

export type WeatherData = {
  properties: {
    meta: {
      units: {
        air_pressure_at_sea_level: string;
        air_temperature: string;
        cloud_area_fraction: string;
        precipitation_amount: string;
        relative_humidity: string;
        wind_from_direction: string;
        wind_speed: string;
      };
      updated_at: string;
    };
    timeseries: {
      time: string;
      data: {
        instant: {
          details: {
            air_pressure_at_sea_level: number;
            air_temperature: number;
            cloud_area_fraction: number;
            relative_humidity: number;
            wind_from_direction: number;
            wind_speed: number;
          };
        };
        next_12_hours?: NextHours;
        next_1_hours?: NextHours;
        next_6_hours?: NextHours;
      };
    }[];
  };
};

export type SolarData = {
  properties: {
    solarmidnight: {
      disc_centre_elevation: number;
      time: string;
      visible: boolean;
    };
    solarnoon: {
      disc_centre_elevation: number;
      time: string;
      visible: boolean;
    };
    sunrise: {
      azimuth: number;
      time: string;
    };
    sunset: {
      azimuth: number;
      time: string;
    };
  };
};

export type LunarData = {
  properties: {
    high_moon: {
      disc_centre_elevation: number;
      time: string;
      visible: boolean;
    };
    low_moon: {
      disc_centre_elevation: number;
      time: string;
      visible: boolean;
    };
    moonphase: number;
    moonrise: {
      azimuth: number;
      time: string;
    };
    moonset: {
      azimuth: number | null;
      time: string | null;
    };
  };
};

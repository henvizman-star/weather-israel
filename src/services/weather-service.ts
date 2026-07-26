import axios from "axios";
import type { WeatherModel } from "../models/weather-model";
import { appConfig } from "../utils/app-config";

class WeatherService {
    public async getCurrentWeather(city: string): Promise<WeatherModel> {
        if (!appConfig.weatherApiKey) {
            throw new Error("חסר מפתח מזג אוויר בקובץ .env");
        }

        const response = await axios.get<WeatherModel>(appConfig.weatherUrl, {
            params: {
                key: appConfig.weatherApiKey,
                q: city,
            },
        });

        return response.data;
    }
}

export const weatherService = new WeatherService();

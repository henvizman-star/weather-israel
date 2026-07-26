import axios from "axios";
import type { CitiesApiResponse, CityModel } from "../models/city-model";
import { appConfig } from "../utils/app-config";

class CitiesService {
    public async getAllCities(): Promise<CityModel[]> {
        const response = await axios.get<CitiesApiResponse>(appConfig.citiesUrl);
        const uniqueCities = new Map<string, CityModel>();

        for (const city of response.data.result.records) {
            const hebrewName = city.city_name_he?.trim();
            const englishName = city.city_name_en?.trim();

            if (!hebrewName || !englishName) continue;

            uniqueCities.set(englishName.toUpperCase(), {
                city_name_he: hebrewName,
                city_name_en: englishName,
            });
        }

        return [...uniqueCities.values()].sort((a, b) =>
            a.city_name_he.localeCompare(b.city_name_he, "he"),
        );
    }
}

export const citiesService = new CitiesService();

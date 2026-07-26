import { useEffect, useState } from "react";
import type { CityModel } from "../../../models/city-model";
import type { WeatherModel } from "../../../models/weather-model";
import { citiesService } from "../../../services/cities-service";
import { historyService } from "../../../services/history-service";
import { weatherService } from "../../../services/weather-service";
import { notify } from "../../../utils/notify";
import { CitySelect } from "../../weather-area/city-select/city-select";
import { WeatherCard } from "../../weather-area/weather-card/weather-card";
import { Spinner } from "../spinner/spinner";
import "./home.css";

export default function Home() {
    const [cities, setCities] = useState<CityModel[]>([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [weather, setWeather] = useState<WeatherModel | null>(null);
    const [isCitiesLoading, setIsCitiesLoading] = useState(true);
    const [isWeatherLoading, setIsWeatherLoading] = useState(false);

    useEffect(() => {
        citiesService
            .getAllCities()
            .then(setCities)
            .catch(notify.error)
            .finally(() => setIsCitiesLoading(false));
    }, []);

    async function handleCityChange(cityEnglishName: string): Promise<void> {
        setSelectedCity(cityEnglishName);
        setWeather(null);

        if (!cityEnglishName) return;

        try {
            setIsWeatherLoading(true);
            const currentWeather =
                await weatherService.getCurrentWeather(cityEnglishName);

            setWeather(currentWeather);
            historyService.add(
                currentWeather.location.name,
                currentWeather.location.country,
            );
        } catch (error) {
            notify.error(error);
        } finally {
            setIsWeatherLoading(false);
        }
    }

    return (
        <section className="home-page">
            <div className="page-intro">
                <span className="section-label">תחזית נוכחית</span>
                <h2>מה מזג האוויר אצלכם?</h2>
                <p>
                    בחרו יישוב בישראל וקבלו מיד את נתוני מזג האוויר העדכניים.
                </p>
            </div>

            <CitySelect
                cities={cities}
                selectedCity={selectedCity}
                disabled={isCitiesLoading}
                onChange={handleCityChange}
            />

            {isWeatherLoading && <Spinner text="בודק את מזג האוויר..." />}
            {weather && <WeatherCard weather={weather} />}

            {!weather && !isWeatherLoading && (
                <div className="weather-placeholder">
                    <span aria-hidden="true">☁</span>
                    <p>נתוני מזג האוויר יופיעו כאן לאחר בחירת יישוב.</p>
                </div>
            )}
        </section>
    );
}

import type { WeatherModel } from "../../../models/weather-model";
import "./weather-card.css";

interface WeatherCardProps {
    weather: WeatherModel;
}

export function WeatherCard({ weather }: WeatherCardProps) {
    const iconUrl = weather.current.condition.icon.startsWith("//")
        ? "https:" + weather.current.condition.icon
        : weather.current.condition.icon;

    return (
        <article className="weather-card">
            <div className="weather-card-heading">
                <div>
                    <p>מזג האוויר עכשיו</p>
                    <h2>{weather.location.name}</h2>
                </div>
                <img
                    src={iconUrl}
                    alt={weather.current.condition.text}
                    width="96"
                    height="96"
                />
            </div>

            <div className="weather-details">
                <div className="weather-detail">
                    <span className="detail-icon" aria-hidden="true">🌍</span>
                    <div>
                        <span>מדינה</span>
                        <strong>{weather.location.country}</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <span className="detail-icon" aria-hidden="true">📍</span>
                    <div>
                        <span>עיר</span>
                        <strong>{weather.location.name}</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <span className="detail-icon" aria-hidden="true">🌡️</span>
                    <div>
                        <span>טמפרטורה</span>
                        <strong>{weather.current.temp_c}°C</strong>
                    </div>
                </div>

                <div className="weather-detail">
                    <span className="detail-icon" aria-hidden="true">💨</span>
                    <div>
                        <span>מהירות הרוח</span>
                        <strong>{weather.current.wind_kph} קמ״ש</strong>
                    </div>
                </div>

                <div className="weather-detail condition-detail">
                    <span className="detail-icon" aria-hidden="true">☁️</span>
                    <div>
                        <span>מצב השמיים</span>
                        <strong>{weather.current.condition.text}</strong>
                    </div>
                </div>
            </div>
        </article>
    );
}

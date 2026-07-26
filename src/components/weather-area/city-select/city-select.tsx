import type { CityModel } from "../../../models/city-model";
import "./city-select.css";

interface CitySelectProps {
    cities: CityModel[];
    selectedCity: string;
    disabled: boolean;
    onChange: (cityEnglishName: string) => void;
}

export function CitySelect({
    cities,
    selectedCity,
    disabled,
    onChange,
}: CitySelectProps) {
    return (
        <div className="city-select-wrapper">
            <label htmlFor="city-select">בחרו יישוב</label>
            <select
                id="city-select"
                value={selectedCity}
                disabled={disabled}
                onChange={(event) => onChange(event.target.value)}
            >
                <option value="">
                    {disabled ? "טוען יישובים..." : "בחרו יישוב מהרשימה"}
                </option>
                {cities.map((city) => (
                    <option key={city.city_name_en} value={city.city_name_en}>
                        {city.city_name_he}
                    </option>
                ))}
            </select>
            <p>{cities.length.toLocaleString("he-IL")} יישובים זמינים</p>
        </div>
    );
}

export interface CityModel {
    city_name_he: string;
    city_name_en: string;
}

export interface CitiesApiResponse {
    result: {
        records: CityModel[];
    };
}


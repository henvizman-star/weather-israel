class AppConfig {
    public readonly citiesUrl =
        "https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&limit=2000";

    public readonly weatherUrl =
        "https://api.weatherapi.com/v1/current.json";

    public readonly weatherApiKey =
        import.meta.env.VITE_WEATHER_API_KEY?.trim() ?? "";
}

export const appConfig = new AppConfig();

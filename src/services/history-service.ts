import type { HistoryModel } from "../models/history-model";

class HistoryService {
    private readonly storageKey = "weather-search-history";

    public getAll(): HistoryModel[] {
        const historyJson = localStorage.getItem(this.storageKey);
        if (!historyJson) return [];

        try {
            return JSON.parse(historyJson) as HistoryModel[];
        } catch {
            localStorage.removeItem(this.storageKey);
            return [];
        }
    }

    public add(city: string, country: string): void {
        const history = this.getAll();
        const historyItem: HistoryModel = {
            id: Date.now().toString(),
            searchedAt: new Date().toISOString(),
            city,
            country,
        };

        localStorage.setItem(
            this.storageKey,
            JSON.stringify([historyItem, ...history]),
        );
    }

    public clear(): void {
        localStorage.removeItem(this.storageKey);
    }
}

export const historyService = new HistoryService();


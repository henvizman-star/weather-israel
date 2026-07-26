import { useState } from "react";
import type { HistoryModel } from "../../../models/history-model";
import { historyService } from "../../../services/history-service";
import "./history.css";

export default function History() {
    const [history, setHistory] = useState<HistoryModel[]>(
        historyService.getAll(),
    );

    function clearHistory(): void {
        historyService.clear();
        setHistory([]);
    }

    return (
        <section className="history-page">
            <div className="page-title-row">
                <div>
                    <span className="section-label">החיפושים שלי</span>
                    <h2>היסטוריית חיפושים</h2>
                </div>
                {history.length > 0 && (
                    <button type="button" onClick={clearHistory}>
                        ניקוי היסטוריה
                    </button>
                )}
            </div>

            {history.length === 0 ? (
                <div className="empty-state">
                    <span aria-hidden="true">⌕</span>
                    <h3>עדיין אין חיפושים</h3>
                    <p>חפשו יישוב בדף הבית והוא יופיע כאן.</p>
                </div>
            ) : (
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>תאריך ושעה</th>
                                <th>יישוב</th>
                                <th>מדינה</th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        {new Date(item.searchedAt).toLocaleString(
                                            "he-IL",
                                        )}
                                    </td>
                                    <td>{item.city}</td>
                                    <td>{item.country}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
}

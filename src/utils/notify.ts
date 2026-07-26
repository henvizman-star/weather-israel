import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { errorExtractor } from "error-extractor";

class Notify {
    public error(error: unknown): void {
        iziToast.error({
            title: "×©×’×™××”",
            message: errorExtractor.getMessage(error),
            position: "topCenter",
            rtl: true,
        });
    }
}

export const notify = new Notify();



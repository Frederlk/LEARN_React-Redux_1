import { showAlert } from "./actions";
import { CREATE_POST } from "./types";

const forbiddenWords = ["fuck", "php", "russia"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbiddenWords.filter((w) => action.payload.title.includes(w));
                if (found.length) {
                    return dispatch(showAlert("You've used forbidden words"));
                }
            }
            return next(action);
        };
    };
}

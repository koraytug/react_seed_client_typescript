import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
// import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root.reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
    // middlewares.push(logger);
}
export type AppState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

const exportedObject = {store: store, persistStore: persistStore};

export default exportedObject;

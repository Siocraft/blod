import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { DonationRequestsFiltersSlice } from "./slices";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  persistStore,
  persistReducer,
  PersistConfig,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface RootReducer {
  donationRequestsFilter: ReturnType<typeof DonationRequestsFiltersSlice.reducer>;
}

const persistConfig: PersistConfig<RootReducer> = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  donationRequestsFilter: DonationRequestsFiltersSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
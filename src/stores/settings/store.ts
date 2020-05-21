import { useState, useEffect, useCallback } from "preact/hooks";
import { caseFn } from "@nll/dux/Reducers";
import { createStore } from "@nll/dux/Store";
import { actionCreatorFactory } from "@nll/dux/Actions";
import { useStoreFactory, useDispatchFactory } from "@nll/dux/React";

import { INITIAL_SETTINGS_STATE, SettingsStateCodec } from "./const";
import { SettingsState } from "./models";
import { createStateRestore, logger } from "../../libs/dux";

/** Save Store */
const action = actionCreatorFactory("SETTINGS_STORE");
export const settingsStore = createStore(
  INITIAL_SETTINGS_STATE
).addMetaReducers(logger());
export const useSettingsStore = useStoreFactory(
  settingsStore,
  useState,
  useEffect
);
export const useSettingsDispatch = useDispatchFactory(
  settingsStore,
  useCallback
);

/** Alter Settings */
export const changeSettings = action.simple<Partial<SettingsState>>(
  "CHANGE_SETTINGS"
);
const changeSettingsCase = caseFn(
  changeSettings,
  (s: SettingsState, { value }) => ({ ...s, ...value })
);
settingsStore.addReducers(changeSettingsCase);

// /** Buzz */
// const buzz = action.simple<number[]>("BUZZ");
// const failureBuzz = buzz([50]);
// const successBuzz = buzz([125, 250, 75, 50, 75, 50, 300]);
// const buzzRunEvery = filterEvery(
//   buzz,
//   ({ settings: { vibration } }: GameState, { value }) => {
//     if (vibration && notNil(navigator.vibrate)) {
//       navigator.vibrate(value);
//     }
//   }
// );
// gameStore.addRunEverys(buzzRunEvery);

/** Storage */
const storage = createStateRestore<SettingsStateCodec, SettingsState>(
  SettingsStateCodec,
  "SETTINGS_STORE"
);
storage.wireupActions(settingsStore, [changeSettings]);

import { createSlice } from '@reduxjs/toolkit';

export type SystemInfo = {
  systemId: string;
  title: string;
  description: string;
  status: string;
  date: string;
  detalization: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  },
  profile: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  },
  roles: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  },
  users: {
    checked: boolean;
    toggleDown: boolean;
    toggleSync: boolean;
  }
}

type State = {
  [key: string]: SystemInfo;
};

const initialState: State = {};

const informationSlice = createSlice({
  name: 'information',
  initialState: initialState,
  reducers: {

    removeSystem: (state, action) => {
      const currentSystem = action.payload;
      const isChecked = currentSystem.detalization.checked ||
        currentSystem.profile.checked ||
        currentSystem.roles.checked ||
        currentSystem.users.checked;
      if (!isChecked) {
        delete state[action.payload.systemId];
      } else {
        state[action.payload.systemId] = action.payload;
      }
    },
    setInformation: (state, action) => {
      action.payload.forEach((system) => {
        state[system.systemId] = system;
      })
    },
    setToggle: (state, action) => {
     const currentSystem = state[action.payload.systemId];
     currentSystem[action.payload.key][action.payload.innerKey] = action.payload.value;
      state[action.payload.systemId] = currentSystem;
    }
  },

});


export const { setInformation, removeSystem, setToggle } = informationSlice.actions;
export default informationSlice.reducer;
import { StateCreator } from "zustand";

type AuthState = {
  user: any | null;
  token: string | null;
};

type AuthAction = {
  setUser: (user: any) => void;
  setToken: (token: string) => void;
};

export type AuthSlice = AuthState & AuthAction

const initialState: AuthState = {
    user: null,
    token: null
}

const authSlice: StateCreator<AuthSlice> = (set) => ({
    ...initialState,
    setUser: (user: any) => set({user}),
    setToken: (token: string) => set({token})
})

export default authSlice


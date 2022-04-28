import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Auth = {
  loading: boolean
  isSignedIn: boolean
  jwt: string | undefined
}

export type AuthState = {
  auth: Auth
}

export type UpdateUserPayload = Auth;

// 初期値
const initialState: AuthState = {
    auth: {
      loading: false,
      isSignedIn: false,
      jwt: "",
    }

};

export type authSignup = {
    loading: boolean
    isSignedIn: boolean
    jwt: string
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    // ユーザーのストアを変更する関数を定義
    reducers: {
        authSign(state,action: PayloadAction<authSignup>,) {
          state.auth = action.payload
        },
        authSetJWT(state,action: PayloadAction<string | undefined>) {
          state.auth.jwt = action.payload
        },
        authSetIsSignedIn(state,action: PayloadAction<boolean>) {
          state.auth.isSignedIn = action.payload
        },
        authSetLoading(state,action: PayloadAction<boolean>) {
          state.auth.loading = action.payload
        },
        reset() {
            return { ...initialState };
        },
    },
});

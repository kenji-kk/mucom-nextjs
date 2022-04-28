import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  userName: string | null
  email: string | null
  createdAt: string | null
  updatedAt: string | null
}

export type UserState = {
  user: User
}

export type UpdateUserPayload = User;

// 初期値
const initialState: UserState = {
    user: {
      userName: "",
      email: "",
      createdAt: "",
      updatedAt: "",
    }

};

export type signupUser = {
    userName: string;
    email: string
    createdAt: string
    updatedAt: string
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    // ユーザーのストアを変更する関数を定義
    reducers: {
        userSign(state,action: PayloadAction<signupUser>,) {
          state.user = action.payload
        },
        reset() {
            return { ...initialState };
        },
    },
});

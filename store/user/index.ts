import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    username: string;
    email: string;
};

export type UserState = User;

export type UpdateUserPayload = User;

// 初期値
const initialState: UserState = {
    username: "Next.js",
    email: "next@gmail.com"
};

export type UpdateUser = {
    username: string;
    email: string
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    // ユーザーのストアを変更する関数を定義
    reducers: {
        updateUser(
            state,
            action: PayloadAction<UpdateUser>,
        ) {
            return { ...state, ...action.payload };
        },
        reset() {
            return { ...initialState };
        },
    },
});

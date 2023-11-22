import { configureStore } from "@reduxjs/toolkit";
import { currentUser } from "./currentUser"

export const store = configureStore({
    reduce: {
        currentUser
    }
})
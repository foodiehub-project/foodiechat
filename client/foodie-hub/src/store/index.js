import { configureStore } from "@reduxjs/toolkit";
import userGroups from "./usergroups";

const store = configureStore({
    reducer: {
        userGroups
    }
})

export default store
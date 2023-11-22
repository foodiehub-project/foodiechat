// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import BASE_URL from "../BaseUrl";

// const userGroups = createSlice({
//     name: "userGroups",
//     initialState: {
//         data: [],
//         loading: false,
//         error: "",
//         lastFetched: Date.now()
//     },
//     reducers: {
//         fetchStart(state) {
//             return {
//                 ...state,
//                 loading: true,
//                 error: ""
//             };
//         },
//         fetchSuccess(state, action) {
//             return {
//                 ...state,
//                 loading: false,
//                 data: action.payload,
//                 lastFetched: Date.now()
//             };
//         },
//         fetchFailed(state, action) {
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload
//             };
//         }
//     }
// });

// export const { fetchStart, fetchSuccess, fetchFailed } = userGroups.actions;

// export const fetchUserGroups = () => {
//     return async (dispatch, getState) => {
//         const userGroups = getState().userGroups.data;
//         const lastFetched = getState().userGroups.lastFetched;

//         if (userGroups.length > 0 && Date.now() - lastFetched < 5000) return;

//         dispatch(fetchStart());
//         try {
//             const { data } = await axios({
//                 method: "get",
//                 url: `${BASE_URL}/user-groups`,
//                 headers: {
//                     authorization: `Bearer ${localStorage.access_token}`
//                 }
//             });
//             dispatch(fetchSuccess(data));
//         } catch (error) {
//             dispatch(fetchFailed(error.response?.data?.message || "Kesalahan tidak diketahui terjadi"));
//         }
//     };
// };

// export default userGroups.reducer;



import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../BaseUrl";

const userGroups = createSlice({
    name: "userGroups",
    initialState: {
        data: [],
        loading: false,
        error: "",
        lastFetched: Date.now()
    },
    reducers: {
        fetchStart(state) {
            state.loading = true,
            state.error = ""
        },
        fetchSuccess(state, action) {
            state.loading = false,
            state.data = action.payload,
            state.lastFetched = Date.now()
        },
        fetchFailed(state, action) {
            state.loading = false,
            state.error = action.payload
        }
    }
});

export const { fetchStart, fetchSuccess } = userGroups.actions;

export const fetchUserGroups = () => {
    return async (dispatch, getState) => {
        const userGroups = getState().userGroups.data;
        const lastFetched = getState().userGroups.lastFetched;

        if (userGroups.length > 0 && (Date.now() - lastFetched) < 5000 ) return

        dispatch(fetchStart());
        try {
            const { data } = await axios({
                method: "get",
                url: `${BASE_URL}/user-groups`,
                headers: {
                    authorization: `Bearer ${localStorage.access_token}`
                }
            });
            dispatch(fetchSuccess(data));
        }
        catch(error) {
            dispatch(fetchFailed(error.response.data.message));
        }
    }
}

export default userGroups.reducer


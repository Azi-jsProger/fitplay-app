import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8888/register', userData);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response ? error.response.data : 'Unknown error');
        }
    }
);

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8888/login', credentials);
            localStorage.setItem('token', response.data.token);
            return response.data.user;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        loading: false,
        error: null,
        isAuthenticated: false,
        language: 'ky',  // начальный язык
    },
    reducers: {
        setLanguage: (state, action) => {
            state.language = action.payload;
        },
        logout: (state) => {
            state.userInfo = null;
            state.isAuthenticated = false;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userInfo = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, setLanguage } = userSlice.actions;
export default userSlice.reducer;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
//
// export const registerUser = createAsyncThunk(
//     'user/register',
//     async (userData, { rejectWithValue }) => {
//         try {
//             const response = await axios.post('http://localhost:8888/register', userData);
//             return response.data;
//         } catch (error) {
//             return rejectWithValue(error.response ? error.response.data : 'Unknown error');
//         }
//     }
// );
//
// export const loginUser = createAsyncThunk(
//     'user/login',
//     async (credentials, { rejectWithValue }) => {
//         try {
//             const response = await axios.post('http://localhost:8888/login', credentials);
//             localStorage.setItem('token', response.data.token);
//             return response.data.user;
//         } catch (error) {
//             return rejectWithValue(error.response.data);
//         }
//     }
// );
//
// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         userInfo: null,
//         loading: false,
//         error: null,
//         isAuthenticated: false,
//         language: 'ky',  // начальный язык
//     },
//     reducers: {
//         setLanguage: (state, action) => {
//             state.language = action.payload;
//         },
//         logout: (state) => {
//             state.userInfo = null;
//             state.isAuthenticated = false;
//             localStorage.removeItem('token');
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(registerUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(registerUser.fulfilled, (state) => {
//                 state.loading = false;
//             })
//             .addCase(registerUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             })
//             .addCase(loginUser.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.userInfo = action.payload;
//                 state.isAuthenticated = true;
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload;
//             });
//     },
// });
//
// export const { logout, setLanguage } = userSlice.actions;
// export default userSlice.reducer;

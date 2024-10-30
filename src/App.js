import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MainRoutes from "./routes/mainRoutes";
import { checkAuthentication } from './redux/slices/userSlice';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthentication());
    }, [dispatch]);

    return (
        <div>
            <MainRoutes />
        </div>
    );
};

export default App;

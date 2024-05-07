import { configureStore } from '@reduxjs/toolkit';
import mainSearchReducer from './Slicer/MainSearchSlicer.js';

export default configureStore({
    reducer: {
        mainSearch: mainSearchReducer,
        // Diğer reducer'lar buraya eklenecek
    },
});

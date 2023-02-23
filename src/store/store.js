import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './tasks';

export default configureStore({
reducer:{
counter:counterReducer
    
},

});

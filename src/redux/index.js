import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {RestorentSlice} from './Sliceapi';
export default configureStore({
  reducer: {
    api: RestorentSlice.reducer,
    middleware: [thunk],
  },
});

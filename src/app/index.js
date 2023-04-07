import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";

export default configureStore ({
    
    reducer:{
        Tasks:TaskSlice
    }

})
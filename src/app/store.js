import { configureStore } from "@reduxjs/toolkit";
import getUsersReducer from "../features/getUser/getUsersSlice";
import getQuestionBankReducer from "../features/getQuestionBank/getQuestionBankSlice";
import getFilterCategoryReducer from "../features/getQuestionBank/FormFilter/getFilterCategorySlice";
import getDetailQuestion from "../features/getDetailQuestion/getDetailQuestionSlice";

const rootReducer = {
  user: getUsersReducer,
  questionBank: getQuestionBankReducer,
  filterCategory: getFilterCategoryReducer,
  getDetailQuestion: getDetailQuestion,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;

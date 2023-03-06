import React from "react";

// 創建審查所有清單的狀態和動作
const initialState = {
  reviewList: [],
  loading: false,
  error: null,
};

const ListReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LISTS_SUCCESS":
      return {
        ...state,
        reviewLists: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_LISTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "REMOVE_LIST":
      return {
        ...state,
        reviewLists: state.reviewLists.filter(
          (list) => list.id !== action.payload
        ),
      };
    default:
      return state;
  }
};


export default ListReducer; 

import {
  FETCH_GOOGLE_DRIVE_FILES_BEGIN,
  FETCH_GOOGLE_DRIVE_FILES_SUCCESS,
  FETCH_GOOGLE_DRIVE_FILES_FAILURE,
} from "../actions/googleDriveAction";

const initialState = {
  files: [],
  loading: false,
  error: null,
};
export default googleGdFileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GOOGLE_DRIVE_FILES_BEGIN:
      return {
        ...state,
        loading: true,
        files: [],
      };
    case FETCH_GOOGLE_DRIVE_FILES_SUCCESS:
      return {
        ...state,
        loading: false,
        files: action.payload.files,
        error: null,
      };
    case FETCH_GOOGLE_DRIVE_FILES_FAILURE:
      return {
        ...state,
        loading: false,
        files: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const FETCH_GOOGLE_DRIVE_FILES_BEGIN = "FETCH_GOOGLE_DRIVE_FILES_BEGIN";
export const GET_GOOGLE_DRIVE_FILES_SUCCESS = "GET_GOOGLE_DRIVE_FILES_SUCCESS";
export const GET_GOOGLE_DRIVE_FILES_FAILURE = "GET_GOOGLE_DRIVE_FILES_FAILURE";

export const fetchGdFiles = (extensions = ["*"]) => {
  return (dispatch) => {
    dispatch(beginFetchGdFiles());
    return fetch(`
      http://www.music-app-api.somee.com/api/google-drive-music-files/${extensions.join(
        ","
      )}
    `)
      .then((response) => response.json())
      .then((responseData) => {
        dispatch(successFetchGdFiles(responseData));
        return responseData;
      })
      .catch((error) => {
        dispatch(failureFetchGdFiles(error));
        return alert(error);
      });
  };
};
export const beginFetchGdFiles = () => ({
  type: FETCH_GOOGLE_DRIVE_FILES_BEGIN,
});

export const successFetchGdFiles = (file = []) => ({
  type: FETCH_GOOGLE_DRIVE_FILES_SUCCESS,
  payload: {
    files,
  },
});
export const failureFetchGdFiles = (error) => ({
  type: FETCH_GOOGLE_DRIVE_FILES_FAILURE,
  payload: {
    error,
  },
});

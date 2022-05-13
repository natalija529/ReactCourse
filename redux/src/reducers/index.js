import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Name", duration: "4:01" },
    { title: "Name2", duration: "3:01" },
    { title: "Name3", duration: "2:01" },
    { title: "Name4", duration: "1:01" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

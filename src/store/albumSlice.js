// albumSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state with an empty album
const initialState = {
  albums: [],
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    // Action to add a photo to an album by albumId
    addPhotoToAlbum: (state, action) => {
      const { albumId, photo } = action.payload;
      const album = state.albums.find((alb) => alb.id === albumId);
      if (album) {
        album.photos.push(photo);
      }
    },
    addAlbum: (state, action) => {
      state.albums.push(action.payload);
    },
  },
});

// Export the action
export const { addPhotoToAlbum, addAlbum } = albumSlice.actions;

// Export the reducer
export default albumSlice.reducer;

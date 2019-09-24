const express = require('express');
const router = express.Router();
const { showPlaylists, createPlaylist, deletePlaylist, showPlaylist, editPlaylist, searchPlaylist } = require("../controllers/playlists")
const { showSongs, createSong, deleteSong, showSong, editSong } = require("../controllers/songs")

router.get('/playlists', showPlaylists); 
router.post('/playlists/new', createPlaylist);
router.get('/playlist/:id/delete', deletePlaylist)
router.get('/playlist/:id', showPlaylist)
router.get('/playlist/:id/edit', editPlaylist);

// router.get('/playlist/search', searchPlaylist);

router.get('/songs', showSongs);
router.post('/songs/new', createSong);
router.get('/song/:id/delete', deleteSong)
router.get('/song/:id', showSong)
router.get('/song/:id/edit', editSong);



module.exports = router;

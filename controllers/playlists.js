
const Playlist = require("../models/Playlist")
const Song = require("../models/Song")


const showPlaylists = (req, res, next) => {
    Playlist.find({}, (err, foundPlaylists) => {
        if (err) {
            res.json({error: err});
        }
        res.json({playlist: [foundPlaylists]});
    });
 };

const createPlaylist = (req, res) => {
    Playlist.find({ title: req.body.title }, (error,foundPlaylists) => {
        if (error) {
            return res.json({error: error});
        }
        if (foundPlaylists.length !== 0) {
            return res.json({error: "Playlist already exists."});
        }
        Playlist.create([req.body], (err, createdPlaylist) => {
            if (err) {
                res.json({error: err});
            }
            res.json({playlist: createdPlaylist})
        })
    }) 
}

const deletePlaylist = (req, res, next) => {
    Playlist.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
            res.json({error: 'Playlist not deleted !'});
        }
    
        res.json({message: 'Playlist deleted' })
    })
}

const showPlaylist = (req, res, next) => {
    Song.find({ playlist_id: req.params.id }, (error, foundSong) => {
        if (error) {
            res.status(500).json({ error: error })
        }
        Playlist.findById(req.params.id, (err, foundPlaylist) => {
            if (err) {
                res.status(500).json({ error: err })
            }
            res.json({ playlist: foundPlaylist, song: foundSong });
        })
    })
 };
 
 
 const editPlaylist = (req, res, next) => {
     Playlist.findById(req.params.id, (err, foundPlaylist) => {
         if (err) {
             res.status(500).json({error: err});
            }
            foundPlaylist.title = req.body.title;
            
            foundPlaylist.save((err,savedPlaylist) => {
                if(err) {
                    res.status(500).json({error: err});
                }
                res.json({playlist: savedPlaylist});
            });
        });
};
    
const searchPlaylist = (req, res, next) => {
/*     const title = req.query.title.split("").join("");
    const genre = req.query.genre.split("").join("");
    const artist = req.query.artist.split("").join("");

    Playlist.find({title, genre, artist}, (err, foundPlaylist) => {
        if (err) {
            res.status(500).json({ error: err })
        }
        Song.find({ artist }, (error, foundSong)  => {
            if (error) {
                res.status(500).json({ error: error })
            }
        })
        res.json({ playlist: foundPlaylist, song: foundSong });
    }
) */}

module.exports = { createPlaylist, showPlaylists, deletePlaylist, showPlaylist, editPlaylist, searchPlaylist };

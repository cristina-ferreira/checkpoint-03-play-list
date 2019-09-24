const Song = require("../models/Song")


const showSongs = (req, res, next) => {
    Song.find({}, (err, foundSongs) => {
        if (err) {
            res.json({error: err});
        }
        res.json({song: [foundSongs]});
    });
 };


const createSong = (req, res) => {
    Song.find({ title: req.body.title }, (error,foundSongs) => {
        if (error) {
            return res.json({error: error});
        }
        if (foundSongs.length !== 0) {
            return res.json({error: "Song already exists."});
        }
        Song.create([req.body], (err, createdSong) => {
            if (err) {
                res.json({error: err});
            }
            res.json({song: createdSong})
        })
    }) 
}

const deleteSong = (req, res, next) => {
    Song.deleteOne({_id: req.params.id}, (err) => {
        if (err) {
        res.json({error: "Song not deleted."});
        }
    
        res.json({message: "Song deleted"});
    })
}


const showSong = (req, res, next) => {
    Song.findById(req.params.id, (err, foundSong) => {
        if (err) {
            res.status(500).json({error: err});
        }
        res.json({song: foundSong});
    });
};


const editSong = (req, res, next) => {
    Song.findById(req.params.id, (err, foundSong) => {
        if (err) {
            res.status(500).json({error: err});
        }
        foundSong.title = req.body.title;
        foundSong.artist= req.body.artist;
        foundSong.album_picture = req.body.album_picture;
        foundSong.youtube_url = req.body.youtube_url;
        foundSong.playlist_id= req.body.author_id;
        foundSong.save((err,savedSong) => {
            if(err) {
                res.status(500).json({error: err});
            }
            res.json({song: savedSong});
        });
    });
};

module.exports = { createSong, showSongs, deleteSong, showSong, editSong };

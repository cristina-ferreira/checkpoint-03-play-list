const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playlistSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }
)

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },

        artist: {
            type: String,
            required: true
        },

        album_picture: {
            type: String,
            required: false
        },

        youtube_url: {
            type: String,
            required: false
        },

        playlist_id: {
            type: Schema.Types.ObjectId,
            path: 'Playlist',
            required: true
        }

    },
    
    {
        timestamps: true
    }
)

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
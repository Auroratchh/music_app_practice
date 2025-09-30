import getRandom from "./utils.js"

const playlist = [];

export default function createPlaylist(data, actual_playlist){

    const playlist = [];

    if(actual_playlist !== null){
        playlist.concat(actual_playlist);

    }

    console.log(data)


    if(data.length !== 0){

        let index_song = getRandom(data.length);
        let song
        playlist.push(data[index_song]);
        data.splice(index_song, 1);

        console.log(playlist);

        return createPlaylist(data, playlist);
    }

    return playlist;
}
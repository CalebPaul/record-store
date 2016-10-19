"use strict";
var Album = (function () {
    function Album(name, artist, genre, price) {
        this.name = name;
        this.artist = artist;
        this.genre = genre;
        this.price = price;
        this.carted = false;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.model.js.map
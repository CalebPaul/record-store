"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AlbumListComponent = (function () {
    function AlbumListComponent() {
        this.selectedGenre = "all";
        this.selectedArtist = "all";
    }
    AlbumListComponent.prototype.onChangeGenre = function (optionGenre) {
        this.selectedGenre = optionGenre;
    };
    AlbumListComponent.prototype.onChangeArtist = function (optionArtist) {
        this.selectedArtist = optionArtist;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], AlbumListComponent.prototype, "childAlbumList", void 0);
    AlbumListComponent = __decorate([
        core_1.Component({
            selector: 'album-list',
            template: "\n    <select (change)=\"onChangeGenre($event.target.value)\" class=\"filter form-control\">\n      <option value=\"all\" selected>Show All Genre</option>\n      <option value=\"Rock\" >Show Rock</option>\n      <option value=\"Soul\" >Show Soul</option>\n      <option value=\"Folk\" >Show Folk</option>\n    </select>\n    <select (change)=\"onChangeArtist($event.target.value)\" class=\"filter form-control\">\n      <option value=\"all\" selected>Show All Artists</option>\n      <option value=\"Jimi Hendrix\" >Show Jimi Hendrix Albums</option>\n      <option value=\"Sam Cooke\" >Show Sam Cooke Albums</option>\n      <option value=\"James Taylor\" >Show James Taylor Albums</option>\n    </select>\n  <div *ngFor=\"let currentAlbum of childAlbumList | genre:selectedGenre | artist:selectedArtist\">\n    <album-display [album]=\"currentAlbum\"></album-display>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumListComponent);
    return AlbumListComponent;
}());
exports.AlbumListComponent = AlbumListComponent;
//# sourceMappingURL=album-list.component.js.map
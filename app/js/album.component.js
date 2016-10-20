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
var album_model_1 = require('./album.model');
var AlbumComponent = (function () {
    function AlbumComponent() {
    }
    AlbumComponent.prototype.toggleCart = function (setCarted) {
        this.album.carted = setCarted;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', album_model_1.Album)
    ], AlbumComponent.prototype, "album", void 0);
    AlbumComponent = __decorate([
        core_1.Component({
            selector: 'album-display',
            template: "\n    <div>\n      <ul>\n        <li>\n        <input *ngIf=\"album.carted === true\" type=\"checkbox\" checked (click)=\"toggleCart(false)\"/>\n        <input *ngIf=\"album.carted === false\" type=\"checkbox\" (click)=\"toggleCart(true)\"/>\n        <strong>{{ album.artist }}</strong>, <em>{{ album.name }}</em>\n        </li>\n        <li>{{ album.genre }}</li>\n        <li>{{ \"$\" + album.price }}.00</li>\n      </ul>\n\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AlbumComponent);
    return AlbumComponent;
}());
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map
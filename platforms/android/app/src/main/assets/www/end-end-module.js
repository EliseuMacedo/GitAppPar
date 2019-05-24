(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["end-end-module"],{

/***/ "./src/app/end/end.module.ts":
/*!***********************************!*\
  !*** ./src/app/end/end.module.ts ***!
  \***********************************/
/*! exports provided: EndPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPageModule", function() { return EndPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _end_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end.page */ "./src/app/end/end.page.ts");







var routes = [
    {
        path: '',
        component: _end_page__WEBPACK_IMPORTED_MODULE_6__["EndPage"]
    }
];
var EndPageModule = /** @class */ (function () {
    function EndPageModule() {
    }
    EndPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_end_page__WEBPACK_IMPORTED_MODULE_6__["EndPage"]]
        })
    ], EndPageModule);
    return EndPageModule;
}());



/***/ }),

/***/ "./src/app/end/end.page.html":
/*!***********************************!*\
  !*** ./src/app/end/end.page.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button dafaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</header>-->\n\n<ion-content>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"auto\">\n\n          <ion-card class=\"ion-card\">\n            <img src=\"assets/img/end1.jpg\"/>\n          </ion-card>\n\n          <ion-row>\n            <ion-col>\n              <div text-center>\n                <ion-button id=\"Proximo2\" routerLink=\"/end-one\" expand=\"default\"  shape=\"round\" fill=\"solid\" size=\"default\" color=\"secondary\">\n                <ion-ripple-effect></ion-ripple-effect>\n                Próximo\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/end/end.page.scss":
/*!***********************************!*\
  !*** ./src/app/end/end.page.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-card {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kL0M6XFxVc2Vyc1xcVGkwNVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXGdscHZBcHBcXGFwcEdscHYvc3JjXFxhcHBcXGVuZFxcZW5kLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW5kL2VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/end/end.page.ts":
/*!*********************************!*\
  !*** ./src/app/end/end.page.ts ***!
  \*********************************/
/*! exports provided: EndPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPage", function() { return EndPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EndPage = /** @class */ (function () {
    function EndPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EndPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.navigateForward("/end-one");
        }, 10000);
    };
    EndPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end',
            template: __webpack_require__(/*! ./end.page.html */ "./src/app/end/end.page.html"),
            styles: [__webpack_require__(/*! ./end.page.scss */ "./src/app/end/end.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EndPage);
    return EndPage;
}());



/***/ })

}]);
//# sourceMappingURL=end-end-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["end-one-end-one-module"],{

/***/ "./src/app/end-one/end-one.module.ts":
/*!*******************************************!*\
  !*** ./src/app/end-one/end-one.module.ts ***!
  \*******************************************/
/*! exports provided: EndOnePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOnePageModule", function() { return EndOnePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _end_one_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end-one.page */ "./src/app/end-one/end-one.page.ts");







var routes = [
    {
        path: '',
        component: _end_one_page__WEBPACK_IMPORTED_MODULE_6__["EndOnePage"]
    }
];
var EndOnePageModule = /** @class */ (function () {
    function EndOnePageModule() {
    }
    EndOnePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_end_one_page__WEBPACK_IMPORTED_MODULE_6__["EndOnePage"]]
        })
    ], EndOnePageModule);
    return EndOnePageModule;
}());



/***/ }),

/***/ "./src/app/end-one/end-one.page.html":
/*!*******************************************!*\
  !*** ./src/app/end-one/end-one.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<header>\n  <ion-toolbar>\n  </ion-toolbar>\n</header>-->\n\n<ion-content>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"auto\">\n          <ion-card class=\"ion-card\">\n            <img src=\"assets/img/end2.jpg\"/>\n          </ion-card>\n    \n            <div text-center>\n              <ion-button id=\"Proximo3\" routerLink=\"/end-two\" expand=\"default\"  shape=\"round\" fill=\"solid\" size=\"default\" color=\"danger\">\n              <ion-ripple-effect></ion-ripple-effect>\n              Próximo\n              </ion-button>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/end-one/end-one.page.scss":
/*!*******************************************!*\
  !*** ./src/app/end-one/end-one.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-card {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kLW9uZS9DOlxcVXNlcnNcXFRpMDVcXERvY3VtZW50c1xcd29ya3NwYWNlXFxnbHB2QXBwXFxhcHBHbHB2L3NyY1xcYXBwXFxlbmQtb25lXFxlbmQtb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW5kLW9uZS9lbmQtb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/end-one/end-one.page.ts":
/*!*****************************************!*\
  !*** ./src/app/end-one/end-one.page.ts ***!
  \*****************************************/
/*! exports provided: EndOnePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndOnePage", function() { return EndOnePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EndOnePage = /** @class */ (function () {
    function EndOnePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EndOnePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.navigateForward("/end-two");
        }, 10000);
    };
    EndOnePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-one',
            template: __webpack_require__(/*! ./end-one.page.html */ "./src/app/end-one/end-one.page.html"),
            styles: [__webpack_require__(/*! ./end-one.page.scss */ "./src/app/end-one/end-one.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EndOnePage);
    return EndOnePage;
}());



/***/ })

}]);
//# sourceMappingURL=end-one-end-one-module.js.map
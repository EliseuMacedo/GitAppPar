(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["end-two-end-two-module"],{

/***/ "./src/app/end-two/end-two.module.ts":
/*!*******************************************!*\
  !*** ./src/app/end-two/end-two.module.ts ***!
  \*******************************************/
/*! exports provided: EndTwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndTwoPageModule", function() { return EndTwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _end_two_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end-two.page */ "./src/app/end-two/end-two.page.ts");







var routes = [
    {
        path: '',
        component: _end_two_page__WEBPACK_IMPORTED_MODULE_6__["EndTwoPage"]
    }
];
var EndTwoPageModule = /** @class */ (function () {
    function EndTwoPageModule() {
    }
    EndTwoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_end_two_page__WEBPACK_IMPORTED_MODULE_6__["EndTwoPage"]]
        })
    ], EndTwoPageModule);
    return EndTwoPageModule;
}());



/***/ }),

/***/ "./src/app/end-two/end-two.page.html":
/*!*******************************************!*\
  !*** ./src/app/end-two/end-two.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <ion-toolbar color=\"light\"></ion-toolbar>\n</header>\n\n<ion-content text-center color=\"light\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"auto\">\n          <img src=\"assets/img/end3.jpg\"/>\n      \n              <ion-button id=\"Proximo4\" routerLink=\"/end-three\" \n                          expand=\"default\" shape=\"round\" fill=\"solid\"\n                          size=\"default\" color=\"danger\">\n              <ion-ripple-effect></ion-ripple-effect>\n              Quero Ajudar\n              </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n          \n\n</ion-content>"

/***/ }),

/***/ "./src/app/end-two/end-two.page.scss":
/*!*******************************************!*\
  !*** ./src/app/end-two/end-two.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Proximo4 {\n  margin-top: -400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5kLXR3by9DOlxcVXNlcnNcXFRpMDVcXERvY3VtZW50c1xcd29ya3NwYWNlXFxnbHB2QXBwXFxhcHBHbHB2L3NyY1xcYXBwXFxlbmQtdHdvXFxlbmQtdHdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW5kLXR3by9lbmQtdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNQcm94aW1vNHtcclxuICAgIG1hcmdpbi10b3A6IC00MDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/end-two/end-two.page.ts":
/*!*****************************************!*\
  !*** ./src/app/end-two/end-two.page.ts ***!
  \*****************************************/
/*! exports provided: EndTwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndTwoPage", function() { return EndTwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EndTwoPage = /** @class */ (function () {
    function EndTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EndTwoPage.prototype.ngOnInit = function () {
        /** setTimeout(() => {
          this.navCtrl.navigateForward("/end-three");
        }, 3000);*/
    };
    EndTwoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-two',
            template: __webpack_require__(/*! ./end-two.page.html */ "./src/app/end-two/end-two.page.html"),
            styles: [__webpack_require__(/*! ./end-two.page.scss */ "./src/app/end-two/end-two.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EndTwoPage);
    return EndTwoPage;
}());



/***/ })

}]);
//# sourceMappingURL=end-two-end-two-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["end-three-end-three-module"],{

/***/ "./src/app/end-three/end-three.module.ts":
/*!***********************************************!*\
  !*** ./src/app/end-three/end-three.module.ts ***!
  \***********************************************/
/*! exports provided: EndThreePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndThreePageModule", function() { return EndThreePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _end_three_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./end-three.page */ "./src/app/end-three/end-three.page.ts");







var routes = [
    {
        path: '',
        component: _end_three_page__WEBPACK_IMPORTED_MODULE_6__["EndThreePage"]
    }
];
var EndThreePageModule = /** @class */ (function () {
    function EndThreePageModule() {
    }
    EndThreePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_end_three_page__WEBPACK_IMPORTED_MODULE_6__["EndThreePage"]]
        })
    ], EndThreePageModule);
    return EndThreePageModule;
}());



/***/ }),

/***/ "./src/app/end-three/end-three.page.html":
/*!***********************************************!*\
  !*** ./src/app/end-three/end-three.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <ion-toolbar>\n  </ion-toolbar>\n</header>\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"auto\">\n        <img src=\"assets/img/The-End.jpg\"/> \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n \n"

/***/ }),

/***/ "./src/app/end-three/end-three.page.scss":
/*!***********************************************!*\
  !*** ./src/app/end-three/end-three.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZC10aHJlZS9lbmQtdGhyZWUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/end-three/end-three.page.ts":
/*!*********************************************!*\
  !*** ./src/app/end-three/end-three.page.ts ***!
  \*********************************************/
/*! exports provided: EndThreePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndThreePage", function() { return EndThreePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var EndThreePage = /** @class */ (function () {
    function EndThreePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EndThreePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.navigateBack("/home");
        }, 7000);
    };
    EndThreePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-end-three',
            template: __webpack_require__(/*! ./end-three.page.html */ "./src/app/end-three/end-three.page.html"),
            styles: [__webpack_require__(/*! ./end-three.page.scss */ "./src/app/end-three/end-three.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], EndThreePage);
    return EndThreePage;
}());



/***/ })

}]);
//# sourceMappingURL=end-three-end-three-module.js.map
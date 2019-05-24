(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["incompatible-incompatible-module"],{

/***/ "./src/app/incompatible/incompatible.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/incompatible/incompatible.module.ts ***!
  \*****************************************************/
/*! exports provided: IncompatiblePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompatiblePageModule", function() { return IncompatiblePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incompatible_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incompatible.page */ "./src/app/incompatible/incompatible.page.ts");







var routes = [
    {
        path: '',
        component: _incompatible_page__WEBPACK_IMPORTED_MODULE_6__["IncompatiblePage"]
    }
];
var IncompatiblePageModule = /** @class */ (function () {
    function IncompatiblePageModule() {
    }
    IncompatiblePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_incompatible_page__WEBPACK_IMPORTED_MODULE_6__["IncompatiblePage"]]
        })
    ], IncompatiblePageModule);
    return IncompatiblePageModule;
}());



/***/ }),

/***/ "./src/app/incompatible/incompatible.page.html":
/*!*****************************************************!*\
  !*** ./src/app/incompatible/incompatible.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"auto\">\n        \n            <img  id=\"image-background\" src=\"assets/img/incompativel.jpg\"/>\n              \n            <div text-center>\n              <ion-button id=\"Proximo\" routerLink=\"/information\" expand=\"default\"  shape=\"round\" fill=\"solid\" size=\"default\" color=\"secondary\">\n              <ion-ripple-effect></ion-ripple-effect>\n              Próximo\n              </ion-button>\n            </div>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/incompatible/incompatible.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/incompatible/incompatible.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Proximo {\n  margin-top: -200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5jb21wYXRpYmxlL0M6XFxVc2Vyc1xcVGkwNVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXGdscHZBcHBcXGFwcEdscHYvc3JjXFxhcHBcXGluY29tcGF0aWJsZVxcaW5jb21wYXRpYmxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5jb21wYXRpYmxlL2luY29tcGF0aWJsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjUHJveGltb3tcclxuICAgIG1hcmdpbi10b3A6IC0yMDBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/incompatible/incompatible.page.ts":
/*!***************************************************!*\
  !*** ./src/app/incompatible/incompatible.page.ts ***!
  \***************************************************/
/*! exports provided: IncompatiblePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncompatiblePage", function() { return IncompatiblePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var IncompatiblePage = /** @class */ (function () {
    function IncompatiblePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IncompatiblePage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.navigateForward("/information");
        }, 7000);
    };
    IncompatiblePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incompatible',
            template: __webpack_require__(/*! ./incompatible.page.html */ "./src/app/incompatible/incompatible.page.html"),
            styles: [__webpack_require__(/*! ./incompatible.page.scss */ "./src/app/incompatible/incompatible.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], IncompatiblePage);
    return IncompatiblePage;
}());



/***/ })

}]);
//# sourceMappingURL=incompatible-incompatible-module.js.map
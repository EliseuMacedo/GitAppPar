(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"],{

/***/ "./src/app/information/information.module.ts":
/*!***************************************************!*\
  !*** ./src/app/information/information.module.ts ***!
  \***************************************************/
/*! exports provided: InformationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPageModule", function() { return InformationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information.page */ "./src/app/information/information.page.ts");







var routes = [
    {
        path: '',
        component: _information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]
    }
];
var InformationPageModule = /** @class */ (function () {
    function InformationPageModule() {
    }
    InformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]]
        })
    ], InformationPageModule);
    return InformationPageModule;
}());



/***/ }),

/***/ "./src/app/information/information.page.html":
/*!***************************************************!*\
  !*** ./src/app/information/information.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content text-center>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"auto\">\n\n          <img  id=\"image-background\" src=\"assets/img/informacao.jpg\"/>\n\n          <ion-row class=\"ion-row\">\n            <ion-col>\n\n              <div padding>\n                <ion-spinner class=\"spinner\" name=\"dots\" color=\"secondary\"></ion-spinner>\n              </div>\n              \n            </ion-col>\n          </ion-row>\n  \n          <ion-row>\n            <ion-col>\n              <div>\n                <ion-button id=\"Proximo1\" routerLink=\"/end\" expand=\"default\"  shape=\"round\" fill=\"solid\" size=\"default\" color=\"secondary\">\n                  <ion-ripple-effect></ion-ripple-effect>\n                  Próximo\n                </ion-button>\n              </div>\n            </ion-col>\n          </ion-row>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    \n  \n    \n\n   \n  \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/information/information.page.scss":
/*!***************************************************!*\
  !*** ./src/app/information/information.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Proximo1 {\n  margin-top: -30px;\n  margin-left: 10px; }\n\n.ion-row {\n  margin-top: -70px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3JtYXRpb24vQzpcXFVzZXJzXFxUaTA1XFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcZ2xwdkFwcFxcYXBwR2xwdi9zcmNcXGFwcFxcaW5mb3JtYXRpb25cXGluZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNQcm94aW1vMXtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLmlvbi1yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/information/information.page.ts":
/*!*************************************************!*\
  !*** ./src/app/information/information.page.ts ***!
  \*************************************************/
/*! exports provided: InformationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationPage", function() { return InformationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var InformationPage = /** @class */ (function () {
    function InformationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    InformationPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.navigateForward("/end");
        }, 7000);
    };
    InformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! ./information.page.html */ "./src/app/information/information.page.html"),
            styles: [__webpack_require__(/*! ./information.page.scss */ "./src/app/information/information.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], InformationPage);
    return InformationPage;
}());



/***/ })

}]);
//# sourceMappingURL=information-information-module.js.map
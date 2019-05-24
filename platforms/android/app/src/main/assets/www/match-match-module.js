(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["match-match-module"],{

/***/ "./src/app/match/match.module.ts":
/*!***************************************!*\
  !*** ./src/app/match/match.module.ts ***!
  \***************************************/
/*! exports provided: MatchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPageModule", function() { return MatchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _match_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match.page */ "./src/app/match/match.page.ts");







var routes = [
    {
        path: '',
        component: _match_page__WEBPACK_IMPORTED_MODULE_6__["MatchPage"]
    }
];
var MatchPageModule = /** @class */ (function () {
    function MatchPageModule() {
    }
    MatchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_match_page__WEBPACK_IMPORTED_MODULE_6__["MatchPage"]]
        })
    ], MatchPageModule);
    return MatchPageModule;
}());



/***/ }),

/***/ "./src/app/match/match.page.html":
/*!***************************************!*\
  !*** ./src/app/match/match.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   \n<ion-content color=\"light\">\n\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"auto\">\n\n                <ion-slides #mySlider>  \n                  <ion-slide *ngFor=\"let item of imagens\">\n                    <ion-card class=\"ion-card\" mode=\"ios\">   \n                      <img src=\"{{ item.img }}\"/>\n                    </ion-card>\n                  </ion-slide>\n                </ion-slides>\n                    \n                        <ion-row text-center>\n                          <ion-col> \n                            <ion-button id=\"Sim\"\n                                        shape=\"round\"\n                                        fill=\"outline\" \n                                        size=\"default\" \n                                        color=\"success\"\n                                        (click)=\"slideNext()\">\n                              <ion-ripple-effect></ion-ripple-effect>\n                              <ion-icon name=\"heart-empty\" size=\"large\"></ion-icon>\n                            </ion-button>\n                          </ion-col>  \n      \n                          <ion-col>\n                            <ion-button id=\"Nao\"\n                                        shape=\"round\" \n                                        fill=\"outline\" \n                                        size=\"default\" \n                                        color=\"danger\"\n                                        (click)=\"slideNext()\">\n                              <ion-ripple-effect></ion-ripple-effect>\n                              <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n                            </ion-button>\n                          </ion-col>\n                        </ion-row>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/match/match.page.scss":
/*!***************************************!*\
  !*** ./src/app/match/match.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Sim {\n  margin-top: -30px;\n  margin-right: 40px;\n  margin-left: 30px; }\n\n#Nao {\n  margin-top: -30px;\n  margin-left: 40px;\n  margin-right: 30px; }\n\n.ion-card {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gvQzpcXFVzZXJzXFxUaTA1XFxEb2N1bWVudHNcXHdvcmtzcGFjZVxcZ2xwdkFwcFxcYXBwR2xwdi9zcmNcXGFwcFxcbWF0Y2hcXG1hdGNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUTtFQUNJLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGNoL21hdGNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAgICAgI1NpbXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAjTmFve1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAgLTMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW9uLWNhcmR7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/match/match.page.ts":
/*!*************************************!*\
  !*** ./src/app/match/match.page.ts ***!
  \*************************************/
/*! exports provided: MatchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPage", function() { return MatchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cont = 0;
        this.imagens = [
            {
                'img': 'assets/img/match1.jpg'
            },
            {
                'img': 'assets/img/match2.jpg'
            },
            {
                'img': 'assets/img/match3.jpg'
            },
            {
                'img': 'assets/img/match4.jpg'
            },
            {
                'img': 'assets/img/match5.jpg'
            }
        ];
    }
    MatchPage.prototype.ngOnInit = function () {
    };
    MatchPage.prototype.slideNext = function () {
        this.cont = this.cont + 1;
        this.mySlide.slideNext();
        if (this.cont == 5) {
            this.navCtrl.navigateForward("/incompatible");
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatchPage.prototype, "mySlide", void 0);
    MatchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match',
            template: __webpack_require__(/*! ./match.page.html */ "./src/app/match/match.page.html"),
            styles: [__webpack_require__(/*! ./match.page.scss */ "./src/app/match/match.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MatchPage);
    return MatchPage;
}());



/***/ })

}]);
//# sourceMappingURL=match-match-module.js.map
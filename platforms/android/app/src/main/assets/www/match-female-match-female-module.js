(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["match-female-match-female-module"],{

/***/ "./src/app/match-female/match-female.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/match-female/match-female.module.ts ***!
  \*****************************************************/
/*! exports provided: MatchFemalePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFemalePageModule", function() { return MatchFemalePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _match_female_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match-female.page */ "./src/app/match-female/match-female.page.ts");







var routes = [
    {
        path: '',
        component: _match_female_page__WEBPACK_IMPORTED_MODULE_6__["MatchFemalePage"]
    }
];
var MatchFemalePageModule = /** @class */ (function () {
    function MatchFemalePageModule() {
    }
    MatchFemalePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_match_female_page__WEBPACK_IMPORTED_MODULE_6__["MatchFemalePage"]]
        })
    ], MatchFemalePageModule);
    return MatchFemalePageModule;
}());



/***/ }),

/***/ "./src/app/match-female/match-female.page.html":
/*!*****************************************************!*\
  !*** ./src/app/match-female/match-female.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-content color=\"light\">\n\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"auto\">\n\n                      <ion-slides #mySlider>  \n                          <ion-slide *ngFor=\"let item of imagens\">\n                            <ion-card class=\"ion-card\" mode=\"ios\">   \n                              <img src=\"{{ item.img }}\"/>\n                            </ion-card>\n                          </ion-slide>\n                      </ion-slides>\n                    \n  \n                    <ion-row text-center>\n                      <ion-col> \n                        <ion-button id=\"Sim\" \n                                    shape=\"round\"\n                                    fill=\"outline\" \n                                    size=\"default\" \n                                    color=\"success\"\n                                    (click)=\"slideNext()\">\n                          <ion-ripple-effect></ion-ripple-effect>\n                          <ion-icon name=\"heart-empty\" size=\"large\"></ion-icon>\n                        </ion-button>\n                      </ion-col>  \n      \n                      <ion-col>\n                        <ion-button id=\"Nao\" \n                                    shape=\"round\" \n                                    fill=\"outline\" \n                                    size=\"default\" \n                                    color=\"danger\" \n                                    (click)=\"slideNext()\">\n                          <ion-ripple-effect></ion-ripple-effect>\n                          <ion-icon name=\"close-circle-outline\" size=\"large\"></ion-icon>\n                        </ion-button>\n                      </ion-col>\n                    </ion-row>\n\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                      \n    \n</ion-content>\n"

/***/ }),

/***/ "./src/app/match-female/match-female.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/match-female/match-female.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Sim {\n  margin-top: -30px;\n  margin-right: 40px;\n  margin-left: 30px; }\n\n#Nao {\n  margin-top: -30px;\n  margin-left: 40px;\n  margin-right: 30px; }\n\n.ion-card {\n  margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gtZmVtYWxlL0M6XFxVc2Vyc1xcVGkwNVxcRG9jdW1lbnRzXFx3b3Jrc3BhY2VcXGdscHZBcHBcXGFwcEdscHYvc3JjXFxhcHBcXG1hdGNoLWZlbWFsZVxcbWF0Y2gtZmVtYWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUTtFQUNJLGlCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hdGNoLWZlbWFsZS9tYXRjaC1mZW1hbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgICAgICAjU2lte1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAgLTMwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAjTmFve1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pb24tY2FyZHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgIl19 */"

/***/ }),

/***/ "./src/app/match-female/match-female.page.ts":
/*!***************************************************!*\
  !*** ./src/app/match-female/match-female.page.ts ***!
  \***************************************************/
/*! exports provided: MatchFemalePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFemalePage", function() { return MatchFemalePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var MatchFemalePage = /** @class */ (function () {
    function MatchFemalePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.cont = 0;
        this.imagens = [
            {
                "img": "assets/img/match6.jpg"
            },
            {
                "img": "assets/img/match7.jpg"
            },
            {
                "img": "assets/img/match8.jpg"
            },
            {
                "img": "assets/img/match9.jpg"
            },
            {
                "img": "assets/img/match10.jpg"
            }
        ];
    }
    MatchFemalePage.prototype.ngOnInit = function () {
    };
    MatchFemalePage.prototype.slideNext = function () {
        this.cont = this.cont + 1;
        this.mySlide.slideNext();
        if (this.cont == 5) {
            this.navCtrl.navigateForward("/incompatible");
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mySlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MatchFemalePage.prototype, "mySlide", void 0);
    MatchFemalePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-female',
            template: __webpack_require__(/*! ./match-female.page.html */ "./src/app/match-female/match-female.page.html"),
            styles: [__webpack_require__(/*! ./match-female.page.scss */ "./src/app/match-female/match-female.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], MatchFemalePage);
    return MatchFemalePage;
}());



/***/ })

}]);
//# sourceMappingURL=match-female-match-female-module.js.map
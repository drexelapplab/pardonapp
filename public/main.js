(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/*!**************************************************!*\
  !*** ./src/app/_directives/alert.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/*!************************************************!*\
  !*** ./src/app/_directives/alert.component.ts ***!
  \************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/*!**************************************!*\
  !*** ./src/app/_directives/index.ts ***!
  \**************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/_directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/*!**********************************!*\
  !*** ./src/app/_guards/index.ts ***!
  \**********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/_helpers/error.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/_helpers/error.interceptor.ts ***!
  \***********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/*!******************************************!*\
  !*** ./src/app/_helpers/fake-backend.ts ***!
  \******************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/_helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony import */ var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fake-backend */ "./src/app/_helpers/fake-backend.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/completion.service.ts":
/*!*************************************************!*\
  !*** ./src/app/_services/completion.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.completeOne = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.completeTwo = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.completeThree = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.completeFour = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.completeFive = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentCompleteOne = this.completeOne.asObservable();
        this.currentCompleteTwo = this.completeTwo.asObservable();
        this.currentCompleteThree = this.completeThree.asObservable();
        this.currentCompleteFour = this.completeFour.asObservable();
        this.currentCompleteFive = this.completeFive.asObservable();
    }
    DataService.prototype.changeStateOne = function (newState) {
        this.completeOne.next(newState);
    };
    DataService.prototype.changeStateTwo = function (newState) {
        this.completeTwo.next(newState);
    };
    DataService.prototype.changeStateThree = function (newState) {
        this.completeThree.next(newState);
    };
    DataService.prototype.changeStateFour = function (newState) {
        this.completeFour.next(newState);
    };
    DataService.prototype.changeStateFive = function (newState) {
        this.completeFive.next(newState);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService, ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.service */ "./src/app/_services/list.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return _list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]; });







/***/ }),

/***/ "./src/app/_services/list.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/list.service.ts ***!
  \*******************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListService = /** @class */ (function () {
    function ListService(http) {
        this.http = http;
        this.serverApi = 'http://localhost:3000';
    }
    ListService.prototype.getAllLists = function () {
        var URL = this.serverApi + "/home/";
        return this.http.get(URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    ListService.prototype.deleteList = function (listId) {
        var URL = this.serverApi + "/home/" + listId;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
        headers.append('Content-Type', 'application/json');
        return this.http.delete(URL, { headers: headers });
    };
    ListService.prototype.addList = function (list) {
        var URL = this.serverApi + "/home/";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"];
        var body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
        console.log(body);
        headers.append('Content-Type', 'application/json');
        return this.http.post(URL, body, { headers: headers });
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get("/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get("/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post("/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put("/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete("/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/achievements/achievements.component.css":
/*!*********************************************************!*\
  !*** ./src/app/achievements/achievements.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backdrop{\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100vh;\n    opacity: 0.43;\n}\n\n.container{margin: 1% auto;\n    width: 80%;\n    background-color: white;\n    border-style: inset;\n    border-width: 5px;\n}\n\nh1, p {\n    text-align: center\n}\n\n.button-routing {\n    background-color: #4CAF50;\n    color: white;\n    padding: 4px 20px;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 16px;\n    border: 2px solid black;\n    float: left;\n}\n\n.button-routing:hover {\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n\n.row,.row2,.achievementdescription,.achievementdescription2, .buttonrow, .buttonrow2{\n    -webkit-column-count: 3;\n    column-count: 3;\n}\n\n.more1,.more2,.more3, .more4, .more5, .more6 {\n    position:relative;\n    text-align: center;\n}\n\n.incomplete-circle{\n    margin: auto;\n    display: table;\n    line-height: 200px;\n    width: 300px;\n    text-align: center;\n    vertical-align: center;\n    border-radius: 20%;\n    background: #ff0028;\n    color: #fff;\n    font: 12px;\n}\n\n.incomplete-circle p {\n    display:        table-cell;\n    vertical-align: middle;\n}\n\n.complete-circle {\n    margin: auto;\n    line-height: 200px;\n    width: 300px;\n    text-align: center;\n    vertical-align: center;\n    border-radius: 20%;\n    background: green;\n    color: #fff;\n    font: 12px;\n}\n\n"

/***/ }),

/***/ "./src/app/achievements/achievements.component.html":
/*!**********************************************************!*\
  !*** ./src/app/achievements/achievements.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n\n  <h1>Hello {{currentUser.firstName}}!</h1>\n  <p> These are your achievements </p>\n  <br>\n  <div class = \"backrow\">\n    <a routerLink=\"/dashboard\" class=\"button-routing\">back</a>\n  </div>\n  <br>\n  <br>\n  <br>\n\n  <div class = \"row\" >\n    <div class = \"achievement-first-incomplete\" *ngIf=\"acompleteOne==false\">\n      <img src=\"../../assets/images/unchecked.png\" height=\"215\" width=\"380\"/>\n    </div>\n    <div class = \"achievement-first-complete\" *ngIf=\"acompleteOne\">\n      <img src=\"../../assets/images/gold.png\" height=\"215\" width=\"380\"/>\n    </div>\n\n    <div class = \"achievement-second-incomplete\" *ngIf=\"acompleteTwo==false\">\n      <img src=\"../../assets/images/unchecked.png\" height=\"215\" width=\"380\"/>\n    </div>\n    <div class = \"achievement-second-complete\" *ngIf=\"acompleteTwo\">\n      <img src=\"../../assets/images/gold.png\" height=\"215\" width=\"380\"/>\n    </div>\n\n    <div class = \"achievement-third-incomplete\" *ngIf=\"acompleteThree==false\">\n      <img src=\"../../assets/images/unchecked.png\" height=\"215\" width=\"380\"/>\n    </div>\n    <div class = \"achievement-third-complete\" *ngIf=\"acompleteThree\">\n      <img src=\"../../assets/images/gold.png\" height=\"215\" width=\"380\"/>\n    </div>\n  </div>\n\n  <div class = \"achievementdescription\">\n    <div class = \"a1descript\">\n      <p> The Section 1 Badge will be recieved after completing the <strong> Personal Information</strong> form </p>\n    </div>\n\n    <div class = \"a2descript\">\n      <p> The Section 2 Badge will be recieved after completing the <strong> Question Name </strong> question </p>\n    </div>\n\n    <div class = \"a3descript\">\n      <p> The Section 3 Badge will be recieved after completing the <strong> Checkbox Information </strong></p>\n    </div>\n  </div>\n\n  <div class = \"buttonrow\">\n    <div class = \"more1\"> <button type=\"a1More\"(click)=\"opena1MoreInfo()\"> more </button> </div>\n    <div class = \"more2\"> <button type=\"a2More\"(click)=\"opena2MoreInfo()\"> more </button> </div>\n    <div class = \"more3\"> <button type=\"a3More\"(click)=\"opena3MoreInfo()\"> more </button> </div>\n  </div>\n\n  <br>\n  <br>\n\n  <div class = \"row2\">\n    <div class = \"achievement-fourth-incomplete\" *ngIf=\"acompleteFour==false\">\n      <img src=\"../../assets/images/unchecked.png\" height=\"215\" width=\"380\"/>\n    </div>\n    <div class = \"achievement-fourth-complete\" *ngIf=\"acompleteFour\">\n      <img src=\"../../assets/images/gold.png\" height=\"215\" width=\"380\"/>\n    </div>\n\n    <div class = \"achievement-fifth-incomplete\" *ngIf=\"acompleteFive==false\">\n      <img src=\"../../assets/images/unchecked.png\" height=\"215\" width=\"380\"/>\n    </div>\n    <div class = \"achievement-fifth-complete\" *ngIf=\"acompleteFive\">\n      <img src=\"../../assets/images/gold.png\" height=\"215\" width=\"380\"/>\n    </div>\n\n    <div class = \"achievement-sixth-incomplete\" *ngIf=\"acompleteSix==false\">\n      <img src=\"../../assets/images/unchecked.png\" height=\"215\" width=\"380\"/>\n    </div>\n    <div class = \"achievement-sixth-complete\" *ngIf=\"acompleteSix\">\n      <img src=\"../../assets/images/gold.png\" height=\"215\" width=\"380\"/>\n    </div>\n  </div>\n\n  <div class = \"achievementdescription2\">\n    <div class = \"a4descript\">\n      <p> The Section 4 Badge will be recieved after completing the <strong> Lawyer Information</strong> form </p>\n    </div>\n\n    <div class = \"a5descript\">\n      <p> The Section 5 Badge will be recieved after completing the <strong> Question Name </strong> question </p>\n    </div>\n\n    <div class = \"a6descript\">\n      <p> The Section 6 Badge will be recieved after completing <strong> Whatever </strong></p>\n    </div>\n  </div>\n\n  <div class = \"buttonrow2\">\n    <div class = \"more4\"> <button type=\"a4More\"(click)=\"opena4MoreInfo()\"> more </button> </div>\n    <div class = \"more5\"> <button type=\"a5More\"(click)=\"opena5MoreInfo()\"> more </button> </div>\n    <div class = \"more6\"> <button type=\"a6More\"(click)=\"opena6MoreInfo()\"> more </button> </div>\n  </div>\n\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMore1}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClosea1MoreInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"> Section 1 Badge</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p> A description of the badge and it's requirements</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClosea1MoreInfo()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMore2}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClosea2MoreInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"> Section 2 Badge</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p> A description of the badge and it's requirements</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClosea2MoreInfo()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMore3}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClosea3MoreInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"> Section 3 Badge</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p> A description of the badge and it's requirements</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClosea3MoreInfo()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMore4}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClosea4MoreInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"> Section 4 Badge</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p> A description of the badge and it's requirements</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClosea4MoreInfo()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMore5}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClosea5MoreInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"> Section 5 Badge</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p> A description of the badge and it's requirements</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClosea5MoreInfo()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMore6}\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onClosea6MoreInfo()\"><span aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\"> Section 6 Badge</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p> A description of the badge and it's requirements</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" (click)=\"onClosea6MoreInfo()\" >Close</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/achievements/achievements.component.ts":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
/* harmony import */ var _services_completion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/completion.service */ "./src/app/_services/completion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AchievementsComponent = /** @class */ (function () {
    function AchievementsComponent(userService, data) {
        this.userService = userService;
        this.data = data;
        this.users = [];
        this.acompleteOne = false;
        this.acompleteTwo = false;
        this.acompleteThree = false;
        this.acompleteFour = false;
        this.acompleteFive = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AchievementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        this.data.currentCompleteOne.subscribe(function (currentCompleteOne) { return _this.acompleteOne = currentCompleteOne; });
        this.data.currentCompleteTwo.subscribe(function (currentCompleteTwo) { return _this.acompleteTwo = currentCompleteTwo; });
        this.data.currentCompleteThree.subscribe(function (currentCompleteThree) { return _this.acompleteThree = currentCompleteThree; });
        this.data.currentCompleteFour.subscribe(function (currentCompleteFour) { return _this.acompleteFour = currentCompleteFour; });
        this.data.currentCompleteFive.subscribe(function (currentCompleteFive) { return _this.acompleteFive = currentCompleteFive; });
    };
    AchievementsComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    AchievementsComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    AchievementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'achievements',
            template: __webpack_require__(/*! ./achievements.component.html */ "./src/app/achievements/achievements.component.html"),
            styles: [__webpack_require__(/*! ./achievements.component.css */ "./src/app/achievements/achievements.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_completion_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AchievementsComponent);
    return AchievementsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<alert></alert>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_directives */ "./src/app/_directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards */ "./src/app/_guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_services */ "./src/app/_services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _questions_set1_questions_set1_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./questions-set1/questions-set1.component */ "./src/app/questions-set1/questions-set1.component.ts");
/* harmony import */ var _questions_set2_questions_set2_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./questions-set2/questions-set2.component */ "./src/app/questions-set2/questions-set2.component.ts");
/* harmony import */ var _questions_set3_questions_set3_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./questions-set3/questions-set3.component */ "./src/app/questions-set3/questions-set3.component.ts");
/* harmony import */ var _questions_set4_questions_set4_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./questions-set4/questions-set4.component */ "./src/app/questions-set4/questions-set4.component.ts");
/* harmony import */ var _questions_set5_questions_set5_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./questions-set5/questions-set5.component */ "./src/app/questions-set5/questions-set5.component.ts");
/* harmony import */ var _dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard-page/dashboard.component */ "./src/app/dashboard-page/dashboard.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _services_completion_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/completion.service */ "./src/app/_services/completion.service.ts");
/* harmony import */ var _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./data-display/data-display.component */ "./src/app/data-display/data-display.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _questions_set1_questions_set1_component__WEBPACK_IMPORTED_MODULE_13__["QuestSet1Component"],
                _questions_set2_questions_set2_component__WEBPACK_IMPORTED_MODULE_14__["QuestSet2Component"],
                _questions_set3_questions_set3_component__WEBPACK_IMPORTED_MODULE_15__["QuestSet3Component"],
                _questions_set4_questions_set4_component__WEBPACK_IMPORTED_MODULE_16__["QuestSet4Component"],
                _questions_set5_questions_set5_component__WEBPACK_IMPORTED_MODULE_17__["QuestSet5Component"],
                _dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_19__["AchievementsComponent"],
                _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_21__["DataDisplayComponent"],
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _services_completion_service__WEBPACK_IMPORTED_MODULE_20__["DataService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["ListService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _questions_set1_questions_set1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questions-set1/questions-set1.component */ "./src/app/questions-set1/questions-set1.component.ts");
/* harmony import */ var _questions_set2_questions_set2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions-set2/questions-set2.component */ "./src/app/questions-set2/questions-set2.component.ts");
/* harmony import */ var _questions_set3_questions_set3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questions-set3/questions-set3.component */ "./src/app/questions-set3/questions-set3.component.ts");
/* harmony import */ var _questions_set4_questions_set4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./questions-set4/questions-set4.component */ "./src/app/questions-set4/questions-set4.component.ts");
/* harmony import */ var _questions_set5_questions_set5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions-set5/questions-set5.component */ "./src/app/questions-set5/questions-set5.component.ts");
/* harmony import */ var _dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-page/dashboard.component */ "./src/app/dashboard-page/dashboard.component.ts");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./achievements/achievements.component */ "./src/app/achievements/achievements.component.ts");
/* harmony import */ var _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data-display/data-display.component */ "./src/app/data-display/data-display.component.ts");












var appRoutes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'questions-set1', component: _questions_set1_questions_set1_component__WEBPACK_IMPORTED_MODULE_4__["QuestSet1Component"] },
    { path: 'questions-set2', component: _questions_set2_questions_set2_component__WEBPACK_IMPORTED_MODULE_5__["QuestSet2Component"] },
    { path: 'questions-set3', component: _questions_set3_questions_set3_component__WEBPACK_IMPORTED_MODULE_6__["QuestSet3Component"] },
    { path: 'questions-set4', component: _questions_set4_questions_set4_component__WEBPACK_IMPORTED_MODULE_7__["QuestSet4Component"] },
    { path: 'questions-set5', component: _questions_set5_questions_set5_component__WEBPACK_IMPORTED_MODULE_8__["QuestSet5Component"] },
    { path: 'achievements', component: _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_10__["AchievementsComponent"] },
    { path: 'dashboard', component: _dashboard_page_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
    { path: 'data-display', component: _data_display_data_display_component__WEBPACK_IMPORTED_MODULE_11__["DataDisplayComponent"] },
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/dashboard-page/dashboard.component.css":
/*!********************************************************!*\
  !*** ./src/app/dashboard-page/dashboard.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backdrop{\n  position:fixed;\n  top:0;\n  left:0;\n  width:100%;\n  height:100vh;\n  background-color: white;\n  opacity: 0.43;\n}\n\n.scaling-svg {\n  display: block;\n  background-color: white;\n  margin: 1vh auto;\n  width: 79.5vh;\n}\n\n"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-page/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <svg class=\"scaling-svg\" id=\"Main_Layer\" viewBox=\"0 0 674.8 827.6\" preserveAspectRatio=\"xMidYMid meet\">\n    <g id=\"mountainBG\"><title>mountain</title>\n      <path style=\"fill: black\" d=\"M664.7,598.2c-5-6.9-7.5-14.6-12.4-21.4s-13.1-12.9-18-20.2-5.4-14.2-9-22.5-10.4-15.9-14.6-23.6c-6-11.1-8-23.8-14.6-34.9-2.7-4.5-8-8.5-10.1-13.5-2.9-6.8-2.8-12.7-5.6-19.1-9.4-21.1-23.3-42.4-32.6-64.1-4.8-11.2-5.9-22-11.2-32.6s-13.5-16.8-18-27c-7.8-17.7-14.1-36.9-21.4-54-2-4.7-1.9-10.4-4.5-14.6,0-10.7,6-19.4,11.2-24.7-.3-25.2-19.7-39.4-30.4-55.1s-15.5-31-24.7-46.1-21.7-32.2-31.5-48.4c-4.4-.9-13.7-.7-14.6-1.1-16.5-1.8-18.3-45.9-24.7-60.7-2.4-5.6-8.1-7.7-11.2-12.4-24,.4-23.7,30.2-30.4,48.4l-32.6,88.8-3.4,20.2a155.7,155.7,0,0,1-12.4,24.7c-8.2,13.2-31.3,36.5-27,52.9,18.5-2.7,24.7-35.7,31.5-51.7,15.1-35.6,29-75.1,43.9-111.3,2.9-7,1.6-14.9,4.5-22.5,3.5-9.2,12.1-17.1,16.9-25.9,21,2.4,15.9,46.8,25.9,61.9,6.3,9.5,20.8,4.6,32.6,9,4.2,1.5,19.6,16.3,22.5,20.2,13.8,18.3,25.1,39.7,36,60.7,4.1,7.9,5.4,20.5,11.2,27-1.1,12.5-9.7,14.8-12.4,24.7s4.8,19.5,5.6,29.2c-6.5.1-19,.7-23.6-2.2-14.7.3-15,11.7-24.7,16.9.7,8.4,3.9,15.6,2.2,23.6l-1.1,25.9c-5,19-14.2,38-23.6,54-2.8,4.8-11.2,9-15.7,12.4s-10.5,10.7-16.9,14.6c-14.2,8.8-30.7,11.3-47.2,18-26.6,10.8-50.3,22.7-72,38.2-19.5,14-36.5,32.2-47.2,55.1-3,6.4-9.8,20.7-3.4,29.2,6.4,18.2,30.3,19.7,50.6,24.7,23.3,5.8,61.6,5.1,85.5,0,5.2-1.1,13.4.4,16.9,1.1h19.1c17.8,3.9,40.9,4.6,59.6,5.6,24.7,1.4,64.4-6,79.8,5.6,2.8,2.1,3,5.3,4.5,9,8.3,20.8-11.8,37.6-23.6,46.1-27.3,19.6-56.3,36.4-84.3,55.1s-57.5,40.7-90,55.1c6.5,10,22.6,17.4,38.2,18-.1,3.7-.3,8.1,1.1,10.1,6.9,3,19.9-4.5,25.9-6.7,14.2-5.3,31.7-5.5,47.2-9,7.1-1.6,13.2.5,19.1-2.2,3.2-1.5,5.9-5.9,9-7.9,1.1-5.4,4.1-14.3,2.2-22.5s-5.5-20,0-28.1,20.8-10.4,30.4-14.6c7.5-3.3,16-9.1,23.6-12.4,19.2-8.2,40.3-12.6,61.9-18l27-1.1c19.4-.2,57.1-6.2,63,10.1h2.2V605C673.3,602.5,666.6,600.9,664.7,598.2ZM444.2,644.3c8.6-5.5,16.3-13.7,24.7-19.1-8.1-5.6-15.7-6-25.9-10.1a476.2,476.2,0,0,0-76.5-23.6c-13.8-3.1-42.6-.1-54,2.2-7.7,1.6-18.5-.2-24.7,1.1-19.2,4-44.6-.8-58.5-4.5-45.9-12.2-66.9-11.9-75.4-63-3.3-19.9,23.1-43.4,32.6-52.9C215,446.2,262.2,424,301.4,407l33.7-10.1c12-5.2,25-16.9,32.6-27,12.9-17.1,36.8-38.9,29.2-72-1.6-6.8,0-12.4-3.4-16.9v-2.2c-11.9,5.7-10.7,28.6-16.9,40.5-4.4,8.5-14.1,13.4-19.1,21.4-2.6.3-3.2.2-4.5,1.1-23.3-.2-24.8-35.8-33.7-51.7L307,277.7l-27-1.1c-3.3.9-6.9,4.7-12.4,3.4s-8.1-7.1-12.4-10.1-7.2-2.3-10.1-4.5c-6.7.7-7,3.9-11.2,6.7.6,6.1,5.5,8.6,3.4,15.7-1,3.3-5.1,7.4-6.7,10.1-10.6,17.4-20,34.1-30.4,50.6-14.8,23.6-32.7,42.9-48.4,65.2-17,24.3-32,49.2-49.5,73.1-10,13.6-23.2,25.1-32.6,39.4-7.8,11.9-14.1,23.7-22.5,34.9L23.6,581.4c-7.8,7.9-11.2,17.9-23.6,21.4V668c8.4-1.4,37.2-12.6,41.6-18,3.6,1,1.7-.6,3.4,2.2,2,5.2-4.7,12.1-6.7,16.9-3.2,7.6-2.9,14.2-5.6,22.5s-8.2,14.9-9,23.6H42.7v69.7c0,10.5-1.7,25.2,1.1,33.7H181.1a53.9,53.9,0,0,1,14.6-2.2V715.2c5.1.1,13.7,1,16.9-1.1s1.7.6,3.4-2.2c3-6.9-5.2-16.3-4.5-24.7,7.8-1.8,30.8-7.9,38.2-1.1,4.9,6.7-2.2,11.3-4.5,16.9-1.3,3.2-.5,7.6-2.2,10.1-.2,13.9.1,19.6,4.5,28.1,21.1-.1,27.8-6.8,41.6-12.4,5.1-2.1,9.8-.2,15.7-2.2s14.1-8,20.2-11.2C367.5,693.1,405,669.3,444.2,644.3Z\"/>\n    </g>\n    <g id=\"menu\" transform=\"translate(20, 20) scale(0.3)\" (click)=\"openModalMenu()\"> <title>Menu</title>\n      <path style=\"fill:#7f4b17\" d=\"M536,203.2c0.4-1.8,1.3-10.6,0.5-12c-1.9-3.5-6.2-4.6-11.3-5c0.1-6.3-1-12.4,0.2-18.2v-3.6\n          c0.4-1.7,1-8.1,0.2-9.6s-4.1-4.2-6.5-5s-2.3-0.2-3.1-0.7s-0.3-3.6-0.2-5.3c2.2-0.1,5.1-0.5,7-0.7c-0.3,0.2-0.4,0.2-1,0.2v0.2\n          c2.3-0.1,6.4-4,7-5.8v-8c-1.5-7.2-2.1-12.6-8.2-15.1l-2.6-12.2c-0.4-1.6,0-3.6-0.7-4.8v-2.4l2.6-1.2c2.2-1.6,5-2.9,7.2-4.6h0.2\n          l-0.7-0.2l1.2-0.7c0-7.9,0.1-16.4-4.8-19.9c0.4-1,1.3-1.2,1.9-1.9c1.7-1.6,2.9-3.7,3.4-6c1.8,0.1,4,0.2,4.8-0.7l0.2-0.2l-0.5-0.5\n          c-1.2,0-3.5,0.3-4.3-0.2s0-1.5-0.2-2.4s-0.9-2.4-1.2-3.4c-0.9-3.2,0.4-6.8-0.5-9.6s-2.2-5.4-3.8-6.7s-2-1-2.6-1.9\n          c7.8-3.9,8.6-11.2,5.8-20.6c-0.5-1.7-0.9-6.3-2.4-6.7l0.5-0.5c-2.8-2.4-7.7-2.2-13-2.2l-25-0.2l-99.1-1L104.8,1L33.3,0.3\n          c-9,0-23.2-1.7-27.8,2.6c-1.6,1.4-3.5,6-2.6,9.4c0.3,0.7,0.4,1.4,0.5,2.2c-0.7,5,2.1,15.3,3.8,19.2c0.9,2,3.2,4,3.8,5.8l0.2,4.1\n          c0.9,3.6,1.4,7.8,2.4,11.3c0.5,1.9,0.2,4.1,1.2,5.5s-5.9,4-7.7,5.5c-4.4,3.8-10.4,15.7-5,23c4.3,2.1,5.2,6.9,3.4,13\n          C5,103.5,5,105.2,4.3,106s0.7,0.8,0.7,1.7h0.7c-0.1,0.6,0,0.7-0.2,1s0.4,0.6,1.2,1c-0.1,3.7-0.6,7.4-1.4,11v4.1c0,6.5,1.2,14.7,5,17\n          c1,0.6,2.2,0.6,3.1,1.2c0.2,0.2,0.3,0.4,0.4,0.7h0.1l0.2,0.4c0.2,0.2,2.3,0.4,2.6,0.5c0.7,1.8,1.1,6.3,1.9,7.7c0,0.6,0,1.1-0.2,1.7\n          c-5.8,0-10.3,0.3-13.7,2.6c-0.7,0.5-1,1.6-1.7,2.2c-0.5,3.6,2,8.3,3.1,12.7c0.5,2.1,0,4,0.5,6.2c1.2,5.1,1.3,11.2,2.9,15.6\n          c0.7,2,1.5,5,3.1,6s1.9,0.6,2.6,1l-0.5,0.5c0.6,0.3,2.1,0.1,2.6,0.5l0.7,0.2l-2.2,2.2c-0.5,0.7-0.3,1.8-1,2.4\n          c0.4,3.9,3.8,11.6,6.2,13.4l1.2,0.2l5,2.9v0.2c-0.3,0.5,4.1,0.7,6,1.2s2.8-0.1,4.1,0.2s5.1,0.2,7.4,0.2l10.1,0.2l84.7,1.2l192,2.6\n          l77.5,0.7c4.2,1.1,10.4,0.2,15.1,0.2h4.1c1.9,0.5,6.3,1.1,8.9,0.5c3.5-0.6,7.1-0.6,10.6-0.2c3.6,0.8,10.7,0.2,15.6,0.2h5.1\n          c4.1,1.1,10.3,0.2,14.9,0.2h4.1c3.8,1,9.6,0.2,13.9,0.2c8.7,0,18.5,0.3,26.6-0.2c-0.3,0.2-0.4,0.2-1,0.2v0.2c1.7,0,1.3-0.3,1.9-1.2\n          c0.4-0.2,0.9-0.3,1.4-0.2c-0.4-0.6-0.3-0.4-1.2-0.5c0.4-0.2,0.9-0.3,1.4-0.2c0.9-4.3,1-9.5,2.6-13.4c0.6-1.5,2.3-3.1,2.6-4.3\n          S535.6,204.8,536,203.2z M12.1,165.3c-0.2-0.3-0.2-0.2-0.2-0.7h0.2V165.3z M472.7,185.9h-10.1c-1.3,0-3.5,0.3-4.3-0.2h18.5\n          C476,186.2,473.9,185.9,472.7,185.9z M496.2,143.4l0.5,0.2L496.2,143.4z M489.5,10.2c-1.3,0-3.5,0.3-4.3-0.2h18.2\n          C502.2,10.9,492.4,10.2,489.5,10.2z M10.7,142l0.5,0.2V142H10.7z M12.6,143.2l0.5,0.2v-0.2H12.6z M13.3,143.4l0.5,0.2h-0.5V143.4z\n           M13.5,199.8v-0.2l-0.7-0.2c0.4,0.3,0.2,0.2,0.8,0.4L13.5,199.8z M14.5,200c-0.5,0.1,0,0.4,0.2,0.5S14.6,200.1,14.5,200L14.5,200z\n           M27,222.6v-0.2h-0.5L27,222.6z\"/>\n      <text font-family=\"TimesNewRoman\" font-size=\"130\" fill=\"white\" transform=\"translate(100, 155)\">Menu</text>\n    </g>\n    <g id=\"section1\" transform=\"translate(230, 720) scale(0.2)\" (click)=\"openModalOne()\"> <title>Section 1</title>\n      <path style=\"fill:#7f4b17\" d=\"M536,203.2c0.4-1.8,1.3-10.6,0.5-12c-1.9-3.5-6.2-4.6-11.3-5c0.1-6.3-1-12.4,0.2-18.2v-3.6\n          c0.4-1.7,1-8.1,0.2-9.6s-4.1-4.2-6.5-5s-2.3-0.2-3.1-0.7s-0.3-3.6-0.2-5.3c2.2-0.1,5.1-0.5,7-0.7c-0.3,0.2-0.4,0.2-1,0.2v0.2\n          c2.3-0.1,6.4-4,7-5.8v-8c-1.5-7.2-2.1-12.6-8.2-15.1l-2.6-12.2c-0.4-1.6,0-3.6-0.7-4.8v-2.4l2.6-1.2c2.2-1.6,5-2.9,7.2-4.6h0.2\n          l-0.7-0.2l1.2-0.7c0-7.9,0.1-16.4-4.8-19.9c0.4-1,1.3-1.2,1.9-1.9c1.7-1.6,2.9-3.7,3.4-6c1.8,0.1,4,0.2,4.8-0.7l0.2-0.2l-0.5-0.5\n          c-1.2,0-3.5,0.3-4.3-0.2s0-1.5-0.2-2.4s-0.9-2.4-1.2-3.4c-0.9-3.2,0.4-6.8-0.5-9.6s-2.2-5.4-3.8-6.7s-2-1-2.6-1.9\n          c7.8-3.9,8.6-11.2,5.8-20.6c-0.5-1.7-0.9-6.3-2.4-6.7l0.5-0.5c-2.8-2.4-7.7-2.2-13-2.2l-25-0.2l-99.1-1L104.8,1L33.3,0.3\n          c-9,0-23.2-1.7-27.8,2.6c-1.6,1.4-3.5,6-2.6,9.4c0.3,0.7,0.4,1.4,0.5,2.2c-0.7,5,2.1,15.3,3.8,19.2c0.9,2,3.2,4,3.8,5.8l0.2,4.1\n          c0.9,3.6,1.4,7.8,2.4,11.3c0.5,1.9,0.2,4.1,1.2,5.5s-5.9,4-7.7,5.5c-4.4,3.8-10.4,15.7-5,23c4.3,2.1,5.2,6.9,3.4,13\n          C5,103.5,5,105.2,4.3,106s0.7,0.8,0.7,1.7h0.7c-0.1,0.6,0,0.7-0.2,1s0.4,0.6,1.2,1c-0.1,3.7-0.6,7.4-1.4,11v4.1c0,6.5,1.2,14.7,5,17\n          c1,0.6,2.2,0.6,3.1,1.2c0.2,0.2,0.3,0.4,0.4,0.7h0.1l0.2,0.4c0.2,0.2,2.3,0.4,2.6,0.5c0.7,1.8,1.1,6.3,1.9,7.7c0,0.6,0,1.1-0.2,1.7\n          c-5.8,0-10.3,0.3-13.7,2.6c-0.7,0.5-1,1.6-1.7,2.2c-0.5,3.6,2,8.3,3.1,12.7c0.5,2.1,0,4,0.5,6.2c1.2,5.1,1.3,11.2,2.9,15.6\n          c0.7,2,1.5,5,3.1,6s1.9,0.6,2.6,1l-0.5,0.5c0.6,0.3,2.1,0.1,2.6,0.5l0.7,0.2l-2.2,2.2c-0.5,0.7-0.3,1.8-1,2.4\n          c0.4,3.9,3.8,11.6,6.2,13.4l1.2,0.2l5,2.9v0.2c-0.3,0.5,4.1,0.7,6,1.2s2.8-0.1,4.1,0.2s5.1,0.2,7.4,0.2l10.1,0.2l84.7,1.2l192,2.6\n          l77.5,0.7c4.2,1.1,10.4,0.2,15.1,0.2h4.1c1.9,0.5,6.3,1.1,8.9,0.5c3.5-0.6,7.1-0.6,10.6-0.2c3.6,0.8,10.7,0.2,15.6,0.2h5.1\n          c4.1,1.1,10.3,0.2,14.9,0.2h4.1c3.8,1,9.6,0.2,13.9,0.2c8.7,0,18.5,0.3,26.6-0.2c-0.3,0.2-0.4,0.2-1,0.2v0.2c1.7,0,1.3-0.3,1.9-1.2\n          c0.4-0.2,0.9-0.3,1.4-0.2c-0.4-0.6-0.3-0.4-1.2-0.5c0.4-0.2,0.9-0.3,1.4-0.2c0.9-4.3,1-9.5,2.6-13.4c0.6-1.5,2.3-3.1,2.6-4.3\n          S535.6,204.8,536,203.2z M12.1,165.3c-0.2-0.3-0.2-0.2-0.2-0.7h0.2V165.3z M472.7,185.9h-10.1c-1.3,0-3.5,0.3-4.3-0.2h18.5\n          C476,186.2,473.9,185.9,472.7,185.9z M496.2,143.4l0.5,0.2L496.2,143.4z M489.5,10.2c-1.3,0-3.5,0.3-4.3-0.2h18.2\n          C502.2,10.9,492.4,10.2,489.5,10.2z M10.7,142l0.5,0.2V142H10.7z M12.6,143.2l0.5,0.2v-0.2H12.6z M13.3,143.4l0.5,0.2h-0.5V143.4z\n           M13.5,199.8v-0.2l-0.7-0.2c0.4,0.3,0.2,0.2,0.8,0.4L13.5,199.8z M14.5,200c-0.5,0.1,0,0.4,0.2,0.5S14.6,200.1,14.5,200L14.5,200z\n           M27,222.6v-0.2h-0.5L27,222.6z\"/>\n      <text font-family=\"TimesNewRoman\" font-size=\"130\" fill=\"white\" transform=\"translate(25, 150)\">Section 1</text>\n    </g>\n    <g id=\"section2\" transform=\"translate(440, 580) scale(0.2)\" (click)=\"openModalTwo()\"> <title>Section 2</title>\n      <path style=\"fill:#7f4b17\" d=\"M536,203.2c0.4-1.8,1.3-10.6,0.5-12c-1.9-3.5-6.2-4.6-11.3-5c0.1-6.3-1-12.4,0.2-18.2v-3.6\n          c0.4-1.7,1-8.1,0.2-9.6s-4.1-4.2-6.5-5s-2.3-0.2-3.1-0.7s-0.3-3.6-0.2-5.3c2.2-0.1,5.1-0.5,7-0.7c-0.3,0.2-0.4,0.2-1,0.2v0.2\n          c2.3-0.1,6.4-4,7-5.8v-8c-1.5-7.2-2.1-12.6-8.2-15.1l-2.6-12.2c-0.4-1.6,0-3.6-0.7-4.8v-2.4l2.6-1.2c2.2-1.6,5-2.9,7.2-4.6h0.2\n          l-0.7-0.2l1.2-0.7c0-7.9,0.1-16.4-4.8-19.9c0.4-1,1.3-1.2,1.9-1.9c1.7-1.6,2.9-3.7,3.4-6c1.8,0.1,4,0.2,4.8-0.7l0.2-0.2l-0.5-0.5\n          c-1.2,0-3.5,0.3-4.3-0.2s0-1.5-0.2-2.4s-0.9-2.4-1.2-3.4c-0.9-3.2,0.4-6.8-0.5-9.6s-2.2-5.4-3.8-6.7s-2-1-2.6-1.9\n          c7.8-3.9,8.6-11.2,5.8-20.6c-0.5-1.7-0.9-6.3-2.4-6.7l0.5-0.5c-2.8-2.4-7.7-2.2-13-2.2l-25-0.2l-99.1-1L104.8,1L33.3,0.3\n          c-9,0-23.2-1.7-27.8,2.6c-1.6,1.4-3.5,6-2.6,9.4c0.3,0.7,0.4,1.4,0.5,2.2c-0.7,5,2.1,15.3,3.8,19.2c0.9,2,3.2,4,3.8,5.8l0.2,4.1\n          c0.9,3.6,1.4,7.8,2.4,11.3c0.5,1.9,0.2,4.1,1.2,5.5s-5.9,4-7.7,5.5c-4.4,3.8-10.4,15.7-5,23c4.3,2.1,5.2,6.9,3.4,13\n          C5,103.5,5,105.2,4.3,106s0.7,0.8,0.7,1.7h0.7c-0.1,0.6,0,0.7-0.2,1s0.4,0.6,1.2,1c-0.1,3.7-0.6,7.4-1.4,11v4.1c0,6.5,1.2,14.7,5,17\n          c1,0.6,2.2,0.6,3.1,1.2c0.2,0.2,0.3,0.4,0.4,0.7h0.1l0.2,0.4c0.2,0.2,2.3,0.4,2.6,0.5c0.7,1.8,1.1,6.3,1.9,7.7c0,0.6,0,1.1-0.2,1.7\n          c-5.8,0-10.3,0.3-13.7,2.6c-0.7,0.5-1,1.6-1.7,2.2c-0.5,3.6,2,8.3,3.1,12.7c0.5,2.1,0,4,0.5,6.2c1.2,5.1,1.3,11.2,2.9,15.6\n          c0.7,2,1.5,5,3.1,6s1.9,0.6,2.6,1l-0.5,0.5c0.6,0.3,2.1,0.1,2.6,0.5l0.7,0.2l-2.2,2.2c-0.5,0.7-0.3,1.8-1,2.4\n          c0.4,3.9,3.8,11.6,6.2,13.4l1.2,0.2l5,2.9v0.2c-0.3,0.5,4.1,0.7,6,1.2s2.8-0.1,4.1,0.2s5.1,0.2,7.4,0.2l10.1,0.2l84.7,1.2l192,2.6\n          l77.5,0.7c4.2,1.1,10.4,0.2,15.1,0.2h4.1c1.9,0.5,6.3,1.1,8.9,0.5c3.5-0.6,7.1-0.6,10.6-0.2c3.6,0.8,10.7,0.2,15.6,0.2h5.1\n          c4.1,1.1,10.3,0.2,14.9,0.2h4.1c3.8,1,9.6,0.2,13.9,0.2c8.7,0,18.5,0.3,26.6-0.2c-0.3,0.2-0.4,0.2-1,0.2v0.2c1.7,0,1.3-0.3,1.9-1.2\n          c0.4-0.2,0.9-0.3,1.4-0.2c-0.4-0.6-0.3-0.4-1.2-0.5c0.4-0.2,0.9-0.3,1.4-0.2c0.9-4.3,1-9.5,2.6-13.4c0.6-1.5,2.3-3.1,2.6-4.3\n          S535.6,204.8,536,203.2z M12.1,165.3c-0.2-0.3-0.2-0.2-0.2-0.7h0.2V165.3z M472.7,185.9h-10.1c-1.3,0-3.5,0.3-4.3-0.2h18.5\n          C476,186.2,473.9,185.9,472.7,185.9z M496.2,143.4l0.5,0.2L496.2,143.4z M489.5,10.2c-1.3,0-3.5,0.3-4.3-0.2h18.2\n          C502.2,10.9,492.4,10.2,489.5,10.2z M10.7,142l0.5,0.2V142H10.7z M12.6,143.2l0.5,0.2v-0.2H12.6z M13.3,143.4l0.5,0.2h-0.5V143.4z\n           M13.5,199.8v-0.2l-0.7-0.2c0.4,0.3,0.2,0.2,0.8,0.4L13.5,199.8z M14.5,200c-0.5,0.1,0,0.4,0.2,0.5S14.6,200.1,14.5,200L14.5,200z\n           M27,222.6v-0.2h-0.5L27,222.6z\"/>\n      <text font-family=\"TimesNewRoman\" font-size=\"130\" fill=\"white\" transform=\"translate(25, 150)\">Section 2</text>\n    </g>\n    <g id=\"section3\" transform=\"translate(130, 510) scale(0.2)\" (click)=\"openModalThree()\"> <title>Section 3</title>\n      <path style=\"fill:#7f4b17\" d=\"M536,203.2c0.4-1.8,1.3-10.6,0.5-12c-1.9-3.5-6.2-4.6-11.3-5c0.1-6.3-1-12.4,0.2-18.2v-3.6\n          c0.4-1.7,1-8.1,0.2-9.6s-4.1-4.2-6.5-5s-2.3-0.2-3.1-0.7s-0.3-3.6-0.2-5.3c2.2-0.1,5.1-0.5,7-0.7c-0.3,0.2-0.4,0.2-1,0.2v0.2\n          c2.3-0.1,6.4-4,7-5.8v-8c-1.5-7.2-2.1-12.6-8.2-15.1l-2.6-12.2c-0.4-1.6,0-3.6-0.7-4.8v-2.4l2.6-1.2c2.2-1.6,5-2.9,7.2-4.6h0.2\n          l-0.7-0.2l1.2-0.7c0-7.9,0.1-16.4-4.8-19.9c0.4-1,1.3-1.2,1.9-1.9c1.7-1.6,2.9-3.7,3.4-6c1.8,0.1,4,0.2,4.8-0.7l0.2-0.2l-0.5-0.5\n          c-1.2,0-3.5,0.3-4.3-0.2s0-1.5-0.2-2.4s-0.9-2.4-1.2-3.4c-0.9-3.2,0.4-6.8-0.5-9.6s-2.2-5.4-3.8-6.7s-2-1-2.6-1.9\n          c7.8-3.9,8.6-11.2,5.8-20.6c-0.5-1.7-0.9-6.3-2.4-6.7l0.5-0.5c-2.8-2.4-7.7-2.2-13-2.2l-25-0.2l-99.1-1L104.8,1L33.3,0.3\n          c-9,0-23.2-1.7-27.8,2.6c-1.6,1.4-3.5,6-2.6,9.4c0.3,0.7,0.4,1.4,0.5,2.2c-0.7,5,2.1,15.3,3.8,19.2c0.9,2,3.2,4,3.8,5.8l0.2,4.1\n          c0.9,3.6,1.4,7.8,2.4,11.3c0.5,1.9,0.2,4.1,1.2,5.5s-5.9,4-7.7,5.5c-4.4,3.8-10.4,15.7-5,23c4.3,2.1,5.2,6.9,3.4,13\n          C5,103.5,5,105.2,4.3,106s0.7,0.8,0.7,1.7h0.7c-0.1,0.6,0,0.7-0.2,1s0.4,0.6,1.2,1c-0.1,3.7-0.6,7.4-1.4,11v4.1c0,6.5,1.2,14.7,5,17\n          c1,0.6,2.2,0.6,3.1,1.2c0.2,0.2,0.3,0.4,0.4,0.7h0.1l0.2,0.4c0.2,0.2,2.3,0.4,2.6,0.5c0.7,1.8,1.1,6.3,1.9,7.7c0,0.6,0,1.1-0.2,1.7\n          c-5.8,0-10.3,0.3-13.7,2.6c-0.7,0.5-1,1.6-1.7,2.2c-0.5,3.6,2,8.3,3.1,12.7c0.5,2.1,0,4,0.5,6.2c1.2,5.1,1.3,11.2,2.9,15.6\n          c0.7,2,1.5,5,3.1,6s1.9,0.6,2.6,1l-0.5,0.5c0.6,0.3,2.1,0.1,2.6,0.5l0.7,0.2l-2.2,2.2c-0.5,0.7-0.3,1.8-1,2.4\n          c0.4,3.9,3.8,11.6,6.2,13.4l1.2,0.2l5,2.9v0.2c-0.3,0.5,4.1,0.7,6,1.2s2.8-0.1,4.1,0.2s5.1,0.2,7.4,0.2l10.1,0.2l84.7,1.2l192,2.6\n          l77.5,0.7c4.2,1.1,10.4,0.2,15.1,0.2h4.1c1.9,0.5,6.3,1.1,8.9,0.5c3.5-0.6,7.1-0.6,10.6-0.2c3.6,0.8,10.7,0.2,15.6,0.2h5.1\n          c4.1,1.1,10.3,0.2,14.9,0.2h4.1c3.8,1,9.6,0.2,13.9,0.2c8.7,0,18.5,0.3,26.6-0.2c-0.3,0.2-0.4,0.2-1,0.2v0.2c1.7,0,1.3-0.3,1.9-1.2\n          c0.4-0.2,0.9-0.3,1.4-0.2c-0.4-0.6-0.3-0.4-1.2-0.5c0.4-0.2,0.9-0.3,1.4-0.2c0.9-4.3,1-9.5,2.6-13.4c0.6-1.5,2.3-3.1,2.6-4.3\n          S535.6,204.8,536,203.2z M12.1,165.3c-0.2-0.3-0.2-0.2-0.2-0.7h0.2V165.3z M472.7,185.9h-10.1c-1.3,0-3.5,0.3-4.3-0.2h18.5\n          C476,186.2,473.9,185.9,472.7,185.9z M496.2,143.4l0.5,0.2L496.2,143.4z M489.5,10.2c-1.3,0-3.5,0.3-4.3-0.2h18.2\n          C502.2,10.9,492.4,10.2,489.5,10.2z M10.7,142l0.5,0.2V142H10.7z M12.6,143.2l0.5,0.2v-0.2H12.6z M13.3,143.4l0.5,0.2h-0.5V143.4z\n           M13.5,199.8v-0.2l-0.7-0.2c0.4,0.3,0.2,0.2,0.8,0.4L13.5,199.8z M14.5,200c-0.5,0.1,0,0.4,0.2,0.5S14.6,200.1,14.5,200L14.5,200z\n           M27,222.6v-0.2h-0.5L27,222.6z\"/>\n      <text font-family=\"TimesNewRoman\" font-size=\"130\" fill=\"white\" transform=\"translate(25, 150)\">Section 3</text>\n    </g>\n    <g id=\"section4\" transform=\"translate(280, 380) scale(0.2)\" (click)=\"openModalFour()\"> <title>Section 4</title>\n      <path style=\"fill:#7f4b17\" d=\"M536,203.2c0.4-1.8,1.3-10.6,0.5-12c-1.9-3.5-6.2-4.6-11.3-5c0.1-6.3-1-12.4,0.2-18.2v-3.6\n          c0.4-1.7,1-8.1,0.2-9.6s-4.1-4.2-6.5-5s-2.3-0.2-3.1-0.7s-0.3-3.6-0.2-5.3c2.2-0.1,5.1-0.5,7-0.7c-0.3,0.2-0.4,0.2-1,0.2v0.2\n          c2.3-0.1,6.4-4,7-5.8v-8c-1.5-7.2-2.1-12.6-8.2-15.1l-2.6-12.2c-0.4-1.6,0-3.6-0.7-4.8v-2.4l2.6-1.2c2.2-1.6,5-2.9,7.2-4.6h0.2\n          l-0.7-0.2l1.2-0.7c0-7.9,0.1-16.4-4.8-19.9c0.4-1,1.3-1.2,1.9-1.9c1.7-1.6,2.9-3.7,3.4-6c1.8,0.1,4,0.2,4.8-0.7l0.2-0.2l-0.5-0.5\n          c-1.2,0-3.5,0.3-4.3-0.2s0-1.5-0.2-2.4s-0.9-2.4-1.2-3.4c-0.9-3.2,0.4-6.8-0.5-9.6s-2.2-5.4-3.8-6.7s-2-1-2.6-1.9\n          c7.8-3.9,8.6-11.2,5.8-20.6c-0.5-1.7-0.9-6.3-2.4-6.7l0.5-0.5c-2.8-2.4-7.7-2.2-13-2.2l-25-0.2l-99.1-1L104.8,1L33.3,0.3\n          c-9,0-23.2-1.7-27.8,2.6c-1.6,1.4-3.5,6-2.6,9.4c0.3,0.7,0.4,1.4,0.5,2.2c-0.7,5,2.1,15.3,3.8,19.2c0.9,2,3.2,4,3.8,5.8l0.2,4.1\n          c0.9,3.6,1.4,7.8,2.4,11.3c0.5,1.9,0.2,4.1,1.2,5.5s-5.9,4-7.7,5.5c-4.4,3.8-10.4,15.7-5,23c4.3,2.1,5.2,6.9,3.4,13\n          C5,103.5,5,105.2,4.3,106s0.7,0.8,0.7,1.7h0.7c-0.1,0.6,0,0.7-0.2,1s0.4,0.6,1.2,1c-0.1,3.7-0.6,7.4-1.4,11v4.1c0,6.5,1.2,14.7,5,17\n          c1,0.6,2.2,0.6,3.1,1.2c0.2,0.2,0.3,0.4,0.4,0.7h0.1l0.2,0.4c0.2,0.2,2.3,0.4,2.6,0.5c0.7,1.8,1.1,6.3,1.9,7.7c0,0.6,0,1.1-0.2,1.7\n          c-5.8,0-10.3,0.3-13.7,2.6c-0.7,0.5-1,1.6-1.7,2.2c-0.5,3.6,2,8.3,3.1,12.7c0.5,2.1,0,4,0.5,6.2c1.2,5.1,1.3,11.2,2.9,15.6\n          c0.7,2,1.5,5,3.1,6s1.9,0.6,2.6,1l-0.5,0.5c0.6,0.3,2.1,0.1,2.6,0.5l0.7,0.2l-2.2,2.2c-0.5,0.7-0.3,1.8-1,2.4\n          c0.4,3.9,3.8,11.6,6.2,13.4l1.2,0.2l5,2.9v0.2c-0.3,0.5,4.1,0.7,6,1.2s2.8-0.1,4.1,0.2s5.1,0.2,7.4,0.2l10.1,0.2l84.7,1.2l192,2.6\n          l77.5,0.7c4.2,1.1,10.4,0.2,15.1,0.2h4.1c1.9,0.5,6.3,1.1,8.9,0.5c3.5-0.6,7.1-0.6,10.6-0.2c3.6,0.8,10.7,0.2,15.6,0.2h5.1\n          c4.1,1.1,10.3,0.2,14.9,0.2h4.1c3.8,1,9.6,0.2,13.9,0.2c8.7,0,18.5,0.3,26.6-0.2c-0.3,0.2-0.4,0.2-1,0.2v0.2c1.7,0,1.3-0.3,1.9-1.2\n          c0.4-0.2,0.9-0.3,1.4-0.2c-0.4-0.6-0.3-0.4-1.2-0.5c0.4-0.2,0.9-0.3,1.4-0.2c0.9-4.3,1-9.5,2.6-13.4c0.6-1.5,2.3-3.1,2.6-4.3\n          S535.6,204.8,536,203.2z M12.1,165.3c-0.2-0.3-0.2-0.2-0.2-0.7h0.2V165.3z M472.7,185.9h-10.1c-1.3,0-3.5,0.3-4.3-0.2h18.5\n          C476,186.2,473.9,185.9,472.7,185.9z M496.2,143.4l0.5,0.2L496.2,143.4z M489.5,10.2c-1.3,0-3.5,0.3-4.3-0.2h18.2\n          C502.2,10.9,492.4,10.2,489.5,10.2z M10.7,142l0.5,0.2V142H10.7z M12.6,143.2l0.5,0.2v-0.2H12.6z M13.3,143.4l0.5,0.2h-0.5V143.4z\n           M13.5,199.8v-0.2l-0.7-0.2c0.4,0.3,0.2,0.2,0.8,0.4L13.5,199.8z M14.5,200c-0.5,0.1,0,0.4,0.2,0.5S14.6,200.1,14.5,200L14.5,200z\n           M27,222.6v-0.2h-0.5L27,222.6z\"/>\n      <text font-family=\"TimesNewRoman\" font-size=\"130\" fill=\"white\" transform=\"translate(25, 150)\">Section 4</text>\n    </g>\n    <g id=\"section5\" transform=\"translate(330, 170) scale(0.2)\" (click)=\"openModalFive()\"> <title>Section 5</title>\n      <path style=\"fill:#7f4b17\" d=\"M536,203.2c0.4-1.8,1.3-10.6,0.5-12c-1.9-3.5-6.2-4.6-11.3-5c0.1-6.3-1-12.4,0.2-18.2v-3.6\n          c0.4-1.7,1-8.1,0.2-9.6s-4.1-4.2-6.5-5s-2.3-0.2-3.1-0.7s-0.3-3.6-0.2-5.3c2.2-0.1,5.1-0.5,7-0.7c-0.3,0.2-0.4,0.2-1,0.2v0.2\n          c2.3-0.1,6.4-4,7-5.8v-8c-1.5-7.2-2.1-12.6-8.2-15.1l-2.6-12.2c-0.4-1.6,0-3.6-0.7-4.8v-2.4l2.6-1.2c2.2-1.6,5-2.9,7.2-4.6h0.2\n          l-0.7-0.2l1.2-0.7c0-7.9,0.1-16.4-4.8-19.9c0.4-1,1.3-1.2,1.9-1.9c1.7-1.6,2.9-3.7,3.4-6c1.8,0.1,4,0.2,4.8-0.7l0.2-0.2l-0.5-0.5\n          c-1.2,0-3.5,0.3-4.3-0.2s0-1.5-0.2-2.4s-0.9-2.4-1.2-3.4c-0.9-3.2,0.4-6.8-0.5-9.6s-2.2-5.4-3.8-6.7s-2-1-2.6-1.9\n          c7.8-3.9,8.6-11.2,5.8-20.6c-0.5-1.7-0.9-6.3-2.4-6.7l0.5-0.5c-2.8-2.4-7.7-2.2-13-2.2l-25-0.2l-99.1-1L104.8,1L33.3,0.3\n          c-9,0-23.2-1.7-27.8,2.6c-1.6,1.4-3.5,6-2.6,9.4c0.3,0.7,0.4,1.4,0.5,2.2c-0.7,5,2.1,15.3,3.8,19.2c0.9,2,3.2,4,3.8,5.8l0.2,4.1\n          c0.9,3.6,1.4,7.8,2.4,11.3c0.5,1.9,0.2,4.1,1.2,5.5s-5.9,4-7.7,5.5c-4.4,3.8-10.4,15.7-5,23c4.3,2.1,5.2,6.9,3.4,13\n          C5,103.5,5,105.2,4.3,106s0.7,0.8,0.7,1.7h0.7c-0.1,0.6,0,0.7-0.2,1s0.4,0.6,1.2,1c-0.1,3.7-0.6,7.4-1.4,11v4.1c0,6.5,1.2,14.7,5,17\n          c1,0.6,2.2,0.6,3.1,1.2c0.2,0.2,0.3,0.4,0.4,0.7h0.1l0.2,0.4c0.2,0.2,2.3,0.4,2.6,0.5c0.7,1.8,1.1,6.3,1.9,7.7c0,0.6,0,1.1-0.2,1.7\n          c-5.8,0-10.3,0.3-13.7,2.6c-0.7,0.5-1,1.6-1.7,2.2c-0.5,3.6,2,8.3,3.1,12.7c0.5,2.1,0,4,0.5,6.2c1.2,5.1,1.3,11.2,2.9,15.6\n          c0.7,2,1.5,5,3.1,6s1.9,0.6,2.6,1l-0.5,0.5c0.6,0.3,2.1,0.1,2.6,0.5l0.7,0.2l-2.2,2.2c-0.5,0.7-0.3,1.8-1,2.4\n          c0.4,3.9,3.8,11.6,6.2,13.4l1.2,0.2l5,2.9v0.2c-0.3,0.5,4.1,0.7,6,1.2s2.8-0.1,4.1,0.2s5.1,0.2,7.4,0.2l10.1,0.2l84.7,1.2l192,2.6\n          l77.5,0.7c4.2,1.1,10.4,0.2,15.1,0.2h4.1c1.9,0.5,6.3,1.1,8.9,0.5c3.5-0.6,7.1-0.6,10.6-0.2c3.6,0.8,10.7,0.2,15.6,0.2h5.1\n          c4.1,1.1,10.3,0.2,14.9,0.2h4.1c3.8,1,9.6,0.2,13.9,0.2c8.7,0,18.5,0.3,26.6-0.2c-0.3,0.2-0.4,0.2-1,0.2v0.2c1.7,0,1.3-0.3,1.9-1.2\n          c0.4-0.2,0.9-0.3,1.4-0.2c-0.4-0.6-0.3-0.4-1.2-0.5c0.4-0.2,0.9-0.3,1.4-0.2c0.9-4.3,1-9.5,2.6-13.4c0.6-1.5,2.3-3.1,2.6-4.3\n          S535.6,204.8,536,203.2z M12.1,165.3c-0.2-0.3-0.2-0.2-0.2-0.7h0.2V165.3z M472.7,185.9h-10.1c-1.3,0-3.5,0.3-4.3-0.2h18.5\n          C476,186.2,473.9,185.9,472.7,185.9z M496.2,143.4l0.5,0.2L496.2,143.4z M489.5,10.2c-1.3,0-3.5,0.3-4.3-0.2h18.2\n          C502.2,10.9,492.4,10.2,489.5,10.2z M10.7,142l0.5,0.2V142H10.7z M12.6,143.2l0.5,0.2v-0.2H12.6z M13.3,143.4l0.5,0.2h-0.5V143.4z\n           M13.5,199.8v-0.2l-0.7-0.2c0.4,0.3,0.2,0.2,0.8,0.4L13.5,199.8z M14.5,200c-0.5,0.1,0,0.4,0.2,0.5S14.6,200.1,14.5,200L14.5,200z\n           M27,222.6v-0.2h-0.5L27,222.6z\"/>\n      <text font-family=\"TimesNewRoman\" font-size=\"130\" fill=\"white\" transform=\"translate(25, 150)\">Section 5</text>\n    </g>\n  </svg>\n<div class=\"backdrop\" [ngStyle]=\"{'display':backDisplay}\"></div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayMenu}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandledMenu()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Menu Navigation</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Page Directory</p>\n        <p><a routerLink=\"/achievements\">Achievements Page</a></p>\n        <p><a routerLink=\"/home\">Introduction Page</a></p>\n        <p><a [routerLink]=\"['/login']\" class=\"button-routing\">Logout</a></p>\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledMenu()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayOne}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandledOne()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Section 1 Form Links</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Here are resources for Form Section One</p>\n        <a routerLink=\"/questions-set1\"> Link to Form 1 </a>\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledOne()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayTwo}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandledTwo()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Section 2 Form Links</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Here are resources for Form Section Two</p>\n        <a routerLink=\"/data-display\"> Link to Form 2</a>\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledTwo()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayThree}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandledThree()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Section 3 Form Links</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Here are resources for Form Section Three</p>\n        <a routerLink=\"/questions-set3\"> Link to Form 3 </a>\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledThree()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayFour}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandledFour()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Section 4 Form Links</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Here are resources for Form Section Four</p>\n        <a routerLink=\"/questions-set4\"> Link to Form 4 </a>\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledFour()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\"  [ngStyle]=\"{'display':displayFive}\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onCloseHandledFive()\"><span aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\">Section 5 Form Links</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>Here are resources for Form Section Five</p>\n        <a routerLink=\"/questions-set5\"> Link to Form 5 </a>\n        <router-outlet></router-outlet>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onCloseHandledFive()\" >Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard-page/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-page/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_completion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/completion.service */ "./src/app/_services/completion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data) {
        this.data = data;
        this.acompleteOne = false;
        this.acompleteTwo = false;
        this.acompleteThree = false;
        this.acompleteFour = false;
        this.acompleteFive = false;
        this.backDisplay = 'none';
        this.displayMenu = 'none';
        this.displayOne = 'none';
        this.displayTwo = 'none';
        this.displayThree = 'none';
        this.displayFour = 'none';
        this.displayFive = 'none';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentCompleteOne.subscribe(function (currentCompleteOne) { return _this.acompleteOne = currentCompleteOne; });
        this.data.currentCompleteTwo.subscribe(function (currentCompleteTwo) { return _this.acompleteTwo = currentCompleteTwo; });
        this.data.currentCompleteThree.subscribe(function (currentCompleteThree) { return _this.acompleteThree = currentCompleteThree; });
        this.data.currentCompleteFour.subscribe(function (currentCompleteFour) { return _this.acompleteFour = currentCompleteFour; });
        this.data.currentCompleteFive.subscribe(function (currentCompleteFive) { return _this.acompleteFive = currentCompleteFive; });
    };
    DashboardComponent.prototype.openModalMenu = function () {
        this.backDisplay = 'block';
        this.displayMenu = 'block';
    };
    DashboardComponent.prototype.onCloseHandledMenu = function () {
        this.backDisplay = 'none';
        this.displayMenu = 'none';
    };
    DashboardComponent.prototype.openModalOne = function () {
        this.backDisplay = 'block';
        this.displayOne = 'block';
    };
    DashboardComponent.prototype.onCloseHandledOne = function () {
        this.backDisplay = 'none';
        this.displayOne = 'none';
    };
    DashboardComponent.prototype.openModalTwo = function () {
        this.backDisplay = 'block';
        this.displayTwo = 'block';
    };
    DashboardComponent.prototype.onCloseHandledTwo = function () {
        this.backDisplay = 'none';
        this.displayTwo = 'none';
    };
    DashboardComponent.prototype.openModalThree = function () {
        this.backDisplay = 'block';
        this.displayThree = 'block';
    };
    DashboardComponent.prototype.onCloseHandledThree = function () {
        this.backDisplay = 'none';
        this.displayThree = 'none';
    };
    DashboardComponent.prototype.openModalFour = function () {
        this.backDisplay = 'block';
        this.displayFour = 'block';
    };
    DashboardComponent.prototype.onCloseHandledFour = function () {
        this.backDisplay = 'none';
        this.displayFour = 'none';
    };
    DashboardComponent.prototype.openModalFive = function () {
        this.backDisplay = 'block';
        this.displayFive = 'block';
    };
    DashboardComponent.prototype.onCloseHandledFive = function () {
        this.backDisplay = 'none';
        this.displayFive = 'none';
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard-page/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard-page/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_completion_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/data-display/data-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/data-display/data-display.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/data-display/data-display.component.html":
/*!**********************************************************!*\
  !*** ./src/app/data-display/data-display.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2> Awesome Bucketlist App </h2>\n\n<!-- Table starts here -->\n<div class=\"container\">\n<table id=\"table\">\n  <thead>\n  <tr>\n    <th>Priority Level</th>\n    <th>Title</th>\n    <th>Description</th>\n    <th> Delete </th>\n\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let list of lists\">\n    <td>{{list.category}}</td>\n    <td>{{list.title}}</td>\n    <td>{{list.description}}</td>\n    <td> <button type=\"button\" (click)=\"deleteList(list); $event.stopPropagation();\">Delete</button></td>\n\n  </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/data-display/data-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/data-display/data-display.component.ts ***!
  \********************************************************/
/*! exports provided: DataDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataDisplayComponent", function() { return DataDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataDisplayComponent = /** @class */ (function () {
    function DataDisplayComponent(listServ) {
        this.listServ = listServ;
        this.lists = [];
    }
    DataDisplayComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    DataDisplayComponent.prototype.loadData = function () {
        var _this = this;
        this.listServ.getAllLists().subscribe(function (response) { return _this.lists = response; });
    };
    DataDisplayComponent.prototype.deleteList = function (list) {
        var _this = this;
        this.listServ.deleteList(list._id).subscribe(function (response) { return _this.lists = _this.lists.filter(function (lists) { return lists != list; }); });
    };
    DataDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'data-display',
            template: __webpack_require__(/*! ./data-display.component.html */ "./src/app/data-display/data-display.component.html"),
            styles: [__webpack_require__(/*! ./data-display.component.css */ "./src/app/data-display/data-display.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], DataDisplayComponent);
    return DataDisplayComponent;
}());



/***/ }),

/***/ "./src/app/data-model.ts":
/*!*******************************!*\
  !*** ./src/app/data-model.ts ***!
  \*******************************/
/*! exports provided: BasicInfo, LawyerInfo, states, completeOne, completeTwo, completeThree, completeFour, completeFive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfo", function() { return BasicInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LawyerInfo", function() { return LawyerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "states", function() { return states; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeOne", function() { return completeOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeTwo", function() { return completeTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeThree", function() { return completeThree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeFour", function() { return completeFour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeFive", function() { return completeFive; });
var BasicInfo = /** @class */ (function () {
    function BasicInfo() {
        this.first = '';
        this.middle = '';
        this.last = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return BasicInfo;
}());

var LawyerInfo = /** @class */ (function () {
    function LawyerInfo() {
        this.lawyer_name = '';
        this.lawyer_office = '';
        this.lawyer_street = '';
        this.lawyer_city = '';
        this.lawyer_zip = '';
    }
    return LawyerInfo;
}());

var states = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'];
var completeOne = false;
var completeTwo = false;
var completeThree = false;
var completeFour = false;
var completeFive = false;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-routing{\n  background-color: #4CAF50;\n  color: white;\n  padding: 4px 20px;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 16px;\n  border: 2px solid black;\n  float: left;\n}\n.button-routing:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.container {\n  margin: 1% auto;\n  width: 80%;\n  background-color: white;\n  border-style: inset;\n  border-width: 6px;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1>Hi {{currentUser.firstName}}!</h1>\n  <h3>All registered users:</h3>\n  <ul>\n    <li *ngFor=\"let user of users\">\n      {{user.username}} ({{user.firstName}} {{user.lastName}})\n      - <a (click)=\"deleteUser(user.id)\" class=\"text-danger\">Delete</a>\n    </li>\n  </ul>\n  <p><a [routerLink]=\"['/login']\" class=\"button-routing\">Logout</a></p>\n  <br>\n  <div>\n    <h1 style = \"text-align:center\">Welcome to Forms Pardon App Test! </h1>\n    <h4>This website is designed to help you through the process of applying for at pardon in the state of Pennslyvania.\n      <br>\n      <br>\n      We have designed this website to be more interactive in comparison to a typical fill-in-pdf. You will be a character attempting to climb a mountain where your goal is the peak.\n      <br>\n      <br>\n      Throughout the map, there are stops in which you will answer questions that pertain to you, other people, as well as all necessary information to complete the pardon form.\n      <br>\n      <br>\n      We sincerely hope that you enjoy the game and wish you good luck in your application process!\n    </h4>\n  </div>\n  <a routerLink=\"/dashboard\" class=\"button-routing\" style = \"display:flex; align-items: center;\">Start Form</a>\n  <router-outlet></router-outlet>\n  <br>\n  <br>\n  <br>\n  <p>-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>\n  <h2> Have any questions? Contact us here!</h2>\n  <p> Drexel Contact Information</p>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function () {
            _this.loadAllUsers();
        });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"), styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")] }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-login{\n    text-align: center;\n}\n.container{\n  margin: 1% auto;\n  width: 80%;\n  background-color: #ffffff;\n  border-style: inset;\n  border-width: 5px;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <br>\n  <img src=\"../../assets/images/banner.jpg\"/>\n  <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>\n  <h2>Login</h2>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n        <div *ngIf=\"f.password.errors.required\">Password is required</div>\n      </div>\n    </div>\n    <button [disabled]=\"loading\" class=\"btn btn-link\">Login</button>\n    <a [routerLink]=\"['/register']\" class=\"btn btn-primary\">Register</a>\n  </form>\n  <br>\n  <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>\n  <h2> Have any questions? Contact us here!</h2>\n  <p> Drexel Contact Information</p>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/questions-set1/questions-set1.component.css":
/*!*************************************************************!*\
  !*** ./src/app/questions-set1/questions-set1.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button1 {\n  background-color: #008CBA;\n  opacity: 0.6;\n  border: none;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 4px;\n  text-align: center;\n  display: inline-block;\n  font-size: 20px;\n}\n.button1:hover {\n  opacity: 1;\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.button2 {\n  background-color: #f44336;\n  opacity: 0.6;\n  border: none;\n  color: white;\n  padding: 8px 20px;\n  border-radius: 4px;\n  text-align: center;\n  display: inline-block;\n  font-size: 20px;\n}\n.button2:hover{\n  opacity: 1;\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.button-routing{\n  background-color: #4CAF50;\n  color: white;\n  padding: 4px 20px;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 16px;\n  border: 2px solid black;\n  float: left;\n}\n.button-routing:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\nh1 {\n  text-align: center;\n}\n.container{\n  margin: 1% auto;\n  width: 60%;\n  background-color: white;\n  border-style: inset;\n  border-width: 5px;\n}\n.formbox{\n  margin: 1%;\n}\n"

/***/ }),

/***/ "./src/app/questions-set1/questions-set1.component.html":
/*!**************************************************************!*\
  !*** ./src/app/questions-set1/questions-set1.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1> Section 1 Form </h1>\n  <div class=\"formbox\">\n    <h2> Personal Information </h2>\n    <form [formGroup]=\"formPage1\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label class=\"center-block\">First Name:\n          <input class=\"form-control\" formControlName=\"first\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Middle Name:\n          <input class=\"form-control\" formControlName=\"middle\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Last Name:\n          <input class=\"form-control\" formControlName=\"last\">\n        </label>\n      </div>\n      <h3> Address </h3>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Street:\n          <input class=\"form-control\" formControlName=\"street\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">City:\n          <input class=\"form-control\" formControlName=\"city\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">State:\n          <select class=\"form-control\" formControlName=\"state\">\n            <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n          </select>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Zip Code:\n          <input class=\"form-control\" formControlName=\"zip\">\n        </label>\n      </div>\n      <button type=\"submit\" class=\"button1\">Submit</button>\n      <button type=\"button\" (click)=\"revert()\" class=\"button2\">Revert</button>\n      <br>\n      <br>\n      <a routerLink=\"/dashboard\" class=\"button-routing\"> Dashboard </a>\n      <a routerLink=\"/questions-set2\" class=\"button-routing\"> Next </a>\n      <router-outlet></router-outlet>\n    </form>\n    <div style=\"clear:both\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questions-set1/questions-set1.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions-set1/questions-set1.component.ts ***!
  \************************************************************/
/*! exports provided: QuestSet1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestSet1Component", function() { return QuestSet1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-model */ "./src/app/data-model.ts");
/* harmony import */ var _services_completion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/completion.service */ "./src/app/_services/completion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestSet1Component = /** @class */ (function () {
    function QuestSet1Component(fb, completionState) {
        this.fb = fb;
        this.completionState = completionState;
        this.states = _data_model__WEBPACK_IMPORTED_MODULE_2__["states"];
        this.completeOne = false;
        this.createForm();
    }
    QuestSet1Component.prototype.getComplete = function () {
        return this.completeOne;
    };
    QuestSet1Component.prototype.createForm = function () {
        this.formPage1 = this.fb.group({
            first: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            middle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    QuestSet1Component.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    QuestSet1Component.prototype.rebuildForm = function () {
        this.formPage1.reset();
    };
    QuestSet1Component.prototype.onSubmit = function () {
        if (this.formPage1.valid) {
            this.completionState.changeStateOne(true);
            this.revert();
        }
    };
    QuestSet1Component.prototype.revert = function () {
        this.rebuildForm();
    };
    QuestSet1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questions-set1',
            template: __webpack_require__(/*! ./questions-set1.component.html */ "./src/app/questions-set1/questions-set1.component.html"),
            styles: [__webpack_require__(/*! ./questions-set1.component.css */ "./src/app/questions-set1/questions-set1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_completion_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], QuestSet1Component);
    return QuestSet1Component;
}());



/***/ }),

/***/ "./src/app/questions-set2/questions-set2.component.css":
/*!*************************************************************!*\
  !*** ./src/app/questions-set2/questions-set2.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin: 1% auto;\n  width: 80%;\n  background-color: white;\n  border-style: inset;\n  border-width: 5px;\n}\n\n.button-routing{\n  background-color: #4CAF50;\n  color: white;\n  padding: 4px 20px;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 16px;\n  border: 2px solid black;\n  float: left;\n}\n\n.button-routing:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n"

/***/ }),

/***/ "./src/app/questions-set2/questions-set2.component.html":
/*!**************************************************************!*\
  !*** ./src/app/questions-set2/questions-set2.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div>\n    <h2> Question 2: </h2>\n    <form action=\"/action_page.php\">\n      <textarea name=\"message\" rows=\"20\" cols=\"150\">Type your answer here. Click bottom right to increase text box size.</textarea>\n      <br>\n      <input type=\"reset\" value=\"Clear Form\"><br>\n    </form>\n    <br>\n    <a routerLink=\"/questions-set1\" class=\"button-routing\"> Back </a>\n    <a routerLink=\"/dashboard\" class=\"button-routing\"> Dashboard </a>\n    <a routerLink=\"/questions-set3\" class=\"button-routing\"> Next </a>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questions-set2/questions-set2.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions-set2/questions-set2.component.ts ***!
  \************************************************************/
/*! exports provided: QuestSet2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestSet2Component", function() { return QuestSet2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestSet2Component = /** @class */ (function () {
    function QuestSet2Component() {
    }
    QuestSet2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questions-set2',
            template: __webpack_require__(/*! ./questions-set2.component.html */ "./src/app/questions-set2/questions-set2.component.html"),
            styles: [__webpack_require__(/*! ./questions-set2.component.css */ "./src/app/questions-set2/questions-set2.component.css")]
        })
    ], QuestSet2Component);
    return QuestSet2Component;
}());



/***/ }),

/***/ "./src/app/questions-set3/questions-set3.component.css":
/*!*************************************************************!*\
  !*** ./src/app/questions-set3/questions-set3.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-routing{\n  background-color: #4CAF50;\n  color: white;\n  padding: 4px 20px;\n  border-radius: 4px;\n  text-align: center;\n  font-size: 16px;\n  border: 2px solid black;\n  float: left;\n}\n.button-routing:hover {\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.container{\n  margin: 1% auto;\n  width: 80%;\n  background-color: white;\n  border-style: inset;\n  border-width: 5px;\n}\n"

/***/ }),

/***/ "./src/app/questions-set3/questions-set3.component.html":
/*!**************************************************************!*\
  !*** ./src/app/questions-set3/questions-set3.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1> Form Page 3</h1>\n  <h2> Question: </h2>\n  <input type=\"checkbox\" [(ngModel)]=\"caucasian\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Caucasian </span><span *ngIf=\"!marked\">Caucasian (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"asian\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Asian </span><span *ngIf=\"!marked\">Asian (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"aa\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">African American </span><span *ngIf=\"!marked\">African American (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"pi\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Pacific Islander </span><span *ngIf=\"!marked\"> Pacific Islander (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"na\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Native American </span><span *ngIf=\"!marked\">Native American (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"me\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\"> Middle Eastern </span><span *ngIf=\"!marked\"> Middle Eastern (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <br>\n  <h2> Question 2: </h2>\n  <input type=\"checkbox\" [(ngModel)]=\"caucasian\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Caucasian </span><span *ngIf=\"!marked\">Caucasian (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"asian\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Asian </span><span *ngIf=\"!marked\">Asian (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"aa\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">African American </span><span *ngIf=\"!marked\">African American (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"pi\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Pacific Islander </span><span *ngIf=\"!marked\"> Pacific Islander (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"na\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\">Native American </span><span *ngIf=\"!marked\">Native American (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <input type=\"checkbox\" [(ngModel)]=\"me\"  data-md-icheck (change)=\"toggleVisibility($event)\"/>\n  <span *ngIf=\"marked\"> Middle Eastern </span><span *ngIf=\"!marked\"> Middle Eastern (false) </span>\n  <span class=\"checkmark\"></span>\n  <br>\n  <br>\n  <a routerLink=\"/questions-set2\" class=\"button-routing\"> Back </a>\n  <a routerLink=\"/dashboard\" class=\"button-routing\"> Dashboard </a>\n  <a routerLink=\"/questions-set4\" class=\"button-routing\"> Next </a>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/questions-set3/questions-set3.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions-set3/questions-set3.component.ts ***!
  \************************************************************/
/*! exports provided: QuestSet3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestSet3Component", function() { return QuestSet3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestSet3Component = /** @class */ (function () {
    function QuestSet3Component() {
        this.name = 'Angular 6';
        this.marked = false;
        this.caucasian = false;
        this.asian = false;
        this.aa = false;
        this.pi = false;
        this.na = false;
        this.me = false;
    }
    QuestSet3Component.prototype.toggleVisibility = function (e) {
        this.marked = e.target.checked;
    };
    QuestSet3Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questions-set3',
            template: __webpack_require__(/*! ./questions-set3.component.html */ "./src/app/questions-set3/questions-set3.component.html"),
            styles: [__webpack_require__(/*! ./questions-set3.component.css */ "./src/app/questions-set3/questions-set3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestSet3Component);
    return QuestSet3Component;
}());



/***/ }),

/***/ "./src/app/questions-set4/questions-set4.component.css":
/*!*************************************************************!*\
  !*** ./src/app/questions-set4/questions-set4.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button1 {\n    background-color: #008CBA;\n    opacity: 0.6;\n    border: none;\n    color: white;\n    padding: 8px 20px;\n    border-radius: 4px;\n    text-align: center;\n    display: inline-block;\n    font-size: 20px;\n}\n.button1:hover {\n    opacity: 1;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.button2 {\n    background-color: #f44336;\n    opacity: 0.6;\n    border: none;\n    color: white;\n    padding: 8px 20px;\n    border-radius: 4px;\n    text-align: center;\n    display: inline-block;\n    font-size: 20px;\n}\n.button2:hover{\n    opacity: 1;\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.button-routing{\n    background-color: #4CAF50;\n    color: white;\n    padding: 4px 20px;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 16px;\n    border: 2px solid black;\n    float: left;\n}\n.button-routing:hover {\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\n.ng-invalid:not(form)  {\n    border-left: 5px solid #a94442; /* red */\n}\n.container{\n  margin: 1% auto;\n  width: 80%;\n  background-color: white;\n  border-style: inset;\n  border-width: 5px;\n}\nh1 {\n  text-align: center;\n}\n\n"

/***/ }),

/***/ "./src/app/questions-set4/questions-set4.component.html":
/*!**************************************************************!*\
  !*** ./src/app/questions-set4/questions-set4.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <h1> Section 4 Form </h1>\n  <div>\n    <h2> Lawyer Information </h2>\n    <form [formGroup]=\"formPage1\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label class=\"center-block\">Lawyer's Full Name:\n          <input class=\"form-control\" formControlName=\"lawyer_name\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Lawyer's Office\n          <input class=\"form-control\" formControlName=\"lawyer_office\">\n        </label>\n      </div>\n      <h3> Address </h3>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Street:\n          <input class=\"form-control\" formControlName=\"lawyer_street\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">City:\n          <input class=\"form-control\" formControlName=\"lawyer_city\">\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">State:\n          <select class=\"form-control\" formControlName=\"state\">\n            <option *ngFor=\"let state of states\" [value]=\"state\">{{state}}</option>\n          </select>\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"center-block\">Zip Code:\n          <input class=\"form-control\" formControlName=\"lawyer_zip\">\n        </label>\n      </div>\n      <button type=\"submit\" class=\"button1\">Submit</button>\n      <button type=\"button\" (click)=\"revert()\" class=\"button2\">Revert</button>\n      <br>\n      <br>\n      <a routerLink=\"/questions-set3\" class=\"button-routing\"> Back </a>\n      <a routerLink=\"/dashboard\" class=\"button-routing\"> Dashboard </a>\n      <a routerLink=\"/questions-set5\" class=\"button-routing\"> Next </a>\n      <router-outlet></router-outlet>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questions-set4/questions-set4.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions-set4/questions-set4.component.ts ***!
  \************************************************************/
/*! exports provided: QuestSet4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestSet4Component", function() { return QuestSet4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data-model */ "./src/app/data-model.ts");
/* harmony import */ var _services_completion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/completion.service */ "./src/app/_services/completion.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestSet4Component = /** @class */ (function () {
    function QuestSet4Component(fb, completionState) {
        this.fb = fb;
        this.completionState = completionState;
        this.states = _data_model__WEBPACK_IMPORTED_MODULE_2__["states"];
        this.completeFour = false;
        this.createForm();
    }
    QuestSet4Component.prototype.getComplete = function () {
        return this.completeFour;
    };
    QuestSet4Component.prototype.createForm = function () {
        this.formPage1 = this.fb.group({
            lawyer_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lawyer_office: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lawyer_street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lawyer_city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lawyer_zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    QuestSet4Component.prototype.ngOnChanges = function () {
        this.rebuildForm();
    };
    QuestSet4Component.prototype.rebuildForm = function () {
        this.formPage1.reset();
    };
    QuestSet4Component.prototype.onSubmit = function () {
        if (this.formPage1.valid) {
            this.completionState.changeStateOne(true);
            this.revert();
        }
    };
    QuestSet4Component.prototype.revert = function () {
        this.rebuildForm();
    };
    QuestSet4Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questions-set4',
            template: __webpack_require__(/*! ./questions-set4.component.html */ "./src/app/questions-set4/questions-set4.component.html"),
            styles: [__webpack_require__(/*! ./questions-set4.component.css */ "./src/app/questions-set4/questions-set4.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_completion_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], QuestSet4Component);
    return QuestSet4Component;
}());



/***/ }),

/***/ "./src/app/questions-set5/questions-set5.component.css":
/*!*************************************************************!*\
  !*** ./src/app/questions-set5/questions-set5.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin: 1% auto;\n  width: 80%;\n  background-color: white;\n  border-style: inset;\n  border-width: 5px;\n}\n.button-routing{\n    background-color: #4CAF50;\n    color: white;\n    padding: 4px 20px;\n    border-radius: 4px;\n    text-align: center;\n    font-size: 16px;\n    border: 2px solid black;\n    float: left;\n}\n.button-routing:hover {\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\n}\nh1 {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/questions-set5/questions-set5.component.html":
/*!**************************************************************!*\
  !*** ./src/app/questions-set5/questions-set5.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n  <div>\n    <h1> Form Page 5</h1>\n    <h2> Question 5: </h2>\n    <form action=\"/action_page.php\">\n      <textarea name=\"message\" rows=\"20\" cols=\"150\">Type your answer here. Click bottom right to increase text box size.</textarea>\n      <br>\n      <input type=\"reset\" value=\"Clear Form\"><br>\n    </form>\n    <br>\n    <a routerLink=\"/questions-set4\" class=\"button-routing\"> Back </a>\n    <a routerLink=\"/dashboard\" class=\"button-routing\"> Dashboard </a>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/questions-set5/questions-set5.component.ts":
/*!************************************************************!*\
  !*** ./src/app/questions-set5/questions-set5.component.ts ***!
  \************************************************************/
/*! exports provided: QuestSet5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestSet5Component", function() { return QuestSet5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestSet5Component = /** @class */ (function () {
    function QuestSet5Component() {
    }
    QuestSet5Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'questions-set5',
            template: __webpack_require__(/*! ./questions-set5.component.html */ "./src/app/questions-set5/questions-set5.component.html"),
            styles: [__webpack_require__(/*! ./questions-set5.component.css */ "./src/app/questions-set5/questions-set5.component.css")]
        })
    ], QuestSet5Component);
    return QuestSet5Component;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  margin: 1% auto;\n  width: 80%;\n  background-color: white;\n  border-style: inset;\n  border-width: 5px;\n}\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n    <br>\n    <img src=\"../../assets/images/banner.jpg\"/>\n    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>\n    <h2>Register</h2>\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\" />\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.firstName.errors.required\">First Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" formControlName=\"lastName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" />\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.lastName.errors.required\">Last Name is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n    <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>\n    <h2> Have any questions? Contact us here!</h2>\n    <p> Drexel Contact Information</p>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services */ "./src/app/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/julesk/pardonapp-master/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
angular.module("meanPaintings").factory("AuthFactory", AuthFactory);
function AuthFactory() {
    let auth = false;
    return { auth: auth };

}
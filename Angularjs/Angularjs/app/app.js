var app = angular.module('app', ['ngMaterial', 'ngMessages', 'chat'])
.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('orange')
      .accentPalette('green')
     .dark();
});

app.constant('config', {
    //
    // Get your PubNub API Keys in link below phone demo.
    //
    "pubnub": {
        "publish-key": "pub-c-04cf6846-f56e-4b82-9408-2c8f9b261b18",
        "subscribe-key": "sub-c-4a1cf4e4-20d5-11e6-9327-02ee2ddab7fe"
    }
});
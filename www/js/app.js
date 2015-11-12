// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/app.html'
      })

      // Each tab has its own nav history stack:
      //Rajya-Sabha Routes
      .state('app.ls', {
        url: '/ls',
        views: {
          'app-ls': {
            templateUrl: 'templates/app-ls-menu.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('app.ls-billsforintroductions', {
        url: '/ls-billsforintroductions',
        views: {
          'app-ls': {
            templateUrl: 'templates/ls-billsforintroductions.html',
            controller: 'LokSabha-BillsForIntroCtrl'
          }
        }
      })

      .state('app.ls-bills', {
        url: '/ls-bills',
        views: {
          'app-ls': {
            templateUrl: 'templates/rs-bills.html',
            controller: 'LokSabha-BillsCtrl'
          }
        }
      })

      .state('app.ls-shortdiscussion', {
        url: '/ls-shortdiscussion',
        views: {
          'app-ls': {
            templateUrl: 'templates/ls-shortdiscussion.html',
            controller: 'LokSabha-DiscussionCtrl'
          }
        }
      })

      .state('app.ls-statements', {
        url: '/ls-statements',
        views: {
          'app-ls': {
            templateUrl: 'templates/ls-statements.html',
            controller: 'LokSabha-StatementsCtrl'
          }
        }
      })

      .state('app.ls-starredquestion', {
        url: '/ls-starredquestion',
        views: {
          'app-ls': {
            templateUrl: 'templates/ls-starredquestion.html',
            controller: 'LokSabha-StatementsCtrl'
          }
        }
      })

      .state('app.ls-paperstobetabled', {
        url: '/ls-paperstobetabled',
        views: {
          'app-ls': {
            templateUrl: 'templates/ls-paperstobetabled.html',
            controller: 'LokSabha-PapersToBeTabledCtrl'
          }
        }
      })

      //Rajya-Sabha Routes
      .state('app.rs', {
        url: '/rs',
        views: {
          'app-rs': {
            templateUrl: 'templates/app-rs-menu.html',
            controller: 'DashCtrl'
          }
        }
      })


      .state('app.rs-billsforintroductions', {
        url: '/rs-billsforintroductions',
        views: {
          'app-rs': {
            templateUrl: 'templates/rs-billsforintroductions.html',
            controller: 'RajyaSabha-BillsForIntroCtrl'
          }
        }
      })

      .state('app.rs-bills', {
        url: '/rs-bills',
        views: {
          'app-rs': {
            templateUrl: 'templates/rs-bills.html',
            controller: 'RajyaSabha-BillsCtrl'
          }
        }
      })

      .state('app.rs-shortdiscussion', {
        url: '/rs-shortdiscussion',
        views: {
          'app-rs': {
            templateUrl: 'templates/rs-shortdiscussion.html',
            controller: 'RajyaSabha-DiscussionCtrl'
          }
        }
      })

      .state('app.rs-statements', {
        url: '/rs-statements',
        views: {
          'app-rs': {
            templateUrl: 'templates/rs-statements.html',
            controller: 'RajyaSabha-StatementsCtrl'
          }
        }
      })

      .state('app.rs-starredquestion', {
        url: '/rs-starredquestion',
        views: {
          'app-rs': {
            templateUrl: 'templates/rs-starredquestion.html',
            controller: 'RajyaSabha-StatementsCtrl'
          }
        }
      })


      .state('app.rs-paperstobetabled', {
        url: '/rs-paperstobetabled',
        views: {
          'app-rs': {
            templateUrl: 'templates/rs-paperstobetabled.html',
            controller: 'RajyaSabha-PapersToBeTabledCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/ls');

  });

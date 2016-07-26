// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ionic-native-transitions','ionic.contrib.ui.tinderCards'])

.directive('noScroll', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            $element.on('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
})


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('home',{
      url:'/home',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "right",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/home.html'
        }
      }
    })
    
    .state('aboutus',{
      url:'/aboutus',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/aboutus.html'
        }
      }
    })
    
    .state('enfields',{
      url:'/enfields',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/enfields.html'
        }
      }
    })
    
    .state('destinations',{
      url:'/destinations',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/destinations.html'
        }
      }
    })
    
    .state('destImages',{
      url:'/destImages',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/destImages.html'
        }
      }
    })
    
    .state('signin',{
      url:'/signin',
      nativeTransitionsAndroid: {
        "type": "flip",
        "direction": "left"
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/signin.html'
        }
      }
    })
    
    .state('settings',{
      url:'/settings',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/settings.html'
        }
      }
    })
    
    .state('accessories',{
      url:'/accessories',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/accessories.html'
        }
      }
    })
    
    .state('events',{
      url:'/events',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/events.html'
        }
      }
    })
    
    .state('map',{
      url:'/map',
      nativeTransitionsAndroid: {
        "type": "slide",
        "direction": "left",
        "duration":  300
    },
      views: {
        'tab-home':{
          templateUrl: 'templates/map.html'
        }
      }
    })
    
    $urlRouterProvider.otherwise('/home');
})



.controller('GalleryCtrl', function($scope, $ionicBackdrop, $ionicModal, $ionicSlideBoxDelegate, $ionicScrollDelegate) {
 
  $scope.images=[];
  
  $scope.loadImages = function(){
    for(var i=0;i<=8;i++){
      $scope.images.push({id: i, src:"img/slider"+(i+1)+".jpg"});
    }
  }
 
  $scope.zoomMin = 1;
  
  $scope.showImages = function(index) {
  $scope.activeSlide = index;
  $scope.showModal('templates/gallery-zoomview.html');
};
 
$scope.showModal = function(templateUrl) {
  $ionicModal.fromTemplateUrl(templateUrl, {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
    $scope.modal.show();
  });
}
 
$scope.closeModal = function() {
  $scope.modal.hide();
  $scope.modal.remove()
};
 
$scope.updateSlideStatus = function(slide) {
  var zoomFactor = $ionicScrollDelegate.$getByHandle('scrollHandle' + slide).getScrollPosition().zoom;
  if (zoomFactor == $scope.zoomMin) {
    $ionicSlideBoxDelegate.enableSlide(true);
  } else {
    $ionicSlideBoxDelegate.enableSlide(false);
  }
};
  
})

.controller('CardsCtrl', function($scope) {
    var cardTypes = [
        { image: 'img/helmet1.jpg', title: 'Hand Painted Helmet: Cafe Racer 76'},
        { image: 'img/boots1.jpg', title: 'Short Riding Boots'},
        { image: 'img/boots2.jpg', title: 'Darwen -detachable suede sneaker'},
        { image: 'img/helmet2.jpg', title: 'Customised White Helmet'},
        { image: 'img/gloves1.jpg', title: 'Riding Gloves Pro Motocross'},
        { image: 'img/helmet3.jpg', title: 'German Helmet Black Coloured'},
        { image: 'img/boots3.jpg', title: 'Zanskar-oil-pull-up leather boots'},
        { image: 'img/bag1.jpg', title: 'Enfield Leather Back Pack'}
    ];
 
    $scope.cards = [];
    $scope.j = 0;
    $scope.addCard = function(i) {
        // var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        
        var newCard = cardTypes[$scope.j];
        for(var i = 0; i < 1; i++){
        newCard.id = i;        
        $scope.cards.push(angular.extend({}, newCard));
    }
        $scope.j++;
        if($scope.j == 8)
        $scope.j=0;
    
    }
     
    for(var i = 0; i < 8; i++){
      $scope.addCard();
    }
    
    $scope.cardSwiped = function(index) {
    };

    $scope.k = 0;
 
    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        $scope.k++;
        if($scope.k == 7){
          for(var i = 0; i < 8; i++){
          $scope.addCard();
        }
        $scope.k = 0;
      }
    }
});
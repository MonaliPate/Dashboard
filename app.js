var app=angular.module("routerApp",['ui.router','ngGrid']);

app.config(function($stateProvider,$urlRouterProvider){

     $urlRouterProvider.otherwise('/product');

     $stateProvider

        .state('product', {
            url: '/product',
            templateUrl: 'partials/product.html',
            controller:"summaryController"
        })


        .state('brand', {
          url: '/product',
            templateUrl: 'partials/brand.html',
         controller:"summaryController"
        })
           .state('category', {
            url: '/category',
            templateUrl: 'partials/category.html',
         controller:"summaryController"

        })
        .state('recentpurchase', {
            url: '/recentpurchase',
            templateUrl: 'partials/recentpurchase.html',
         controller:"summaryController"

        });

});

var app=angular.module("routerApp",['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

     $urlRouterProvider.otherwise('/product');

     $stateProvider

        .state('product', {
            url: '/product',
            templateUrl: 'partials/product.html'
        })


        .state('brand', {
          url: '/product',
            templateUrl: 'partials/brand.html'
        })
           .state('category', {
            url: '/category',
            templateUrl: 'partials/category.html'
        });

});

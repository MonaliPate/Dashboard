app.controller("summaryController",function($http,$scope){


$http.get('content.json').success(function(response) {
        $scope.prod=response.products;
    console.log("$scope.prod",$scope.prod);
    });

    $http.get('content.json').success(function(response) {
        $scope.cat=response.categories;
    console.log("$scope.prod",$scope.category);
    });


    $http.get('content.json').success(function(response) {
        $scope.brand=response.brands;
    console.log("$scope.prod",$scope.brand);
    });

     $scope.gridOptions = {data: 'prod'};
     $scope.gridOption = {data: 'cat'};
     $scope.gridBrand={data:'brand'};
});











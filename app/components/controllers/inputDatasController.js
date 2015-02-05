var module = angular.module("app");
module.controller("inputDatasController", function($scope, calcService) {
	$scope.datas = {
		dataX: "",
		dataY: "",
		sign: ""
	}
	$scope.$watch("datas", function() {
		calcService.setDatas($scope.datas);
	}, true)
});
var module = angular.module("app");
module.controller("resultController", function($scope, calcService) {
	$scope.submit = function() {
		// var datas = calcService.getDatas();
		var dataX = Number(calcService.getDatas().dataX);
		var dataY = Number(calcService.getDatas().dataY);
		switch (calcService.getDatas().sign) {
			case "+":
				$scope.result = dataX + dataY;
				break;
			case "-":
				$scope.result = dataX - dataY;
				break;
			case "*":
				$scope.result = dataX * dataY;
				break;
			case "/":
				$scope.result = dataX / dataY;
				break;
		}
		console.log("result: " + $scope.result);
	};
})
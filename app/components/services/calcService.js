var module = angular.module("app");
module.service('calcService', function() {
	var datas = {};
	this.setDatas = function(datas) {
		this.datas = datas; 
		// console.log(this.datas);
	}

	this.getDatas = function() {
		// console.log("service -> datas: " + this.datas);
		return this.datas;
	}
})

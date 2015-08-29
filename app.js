var app = angular.module("demoApp", ["ngAria", "ngMessages", "ngRoute", "auto-focus", "accessible-list"]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when("/demo/:demoId", {
			controller: "demoCtrl as dm",
			templateUrl: function(param) {
				return "templates/demo_" + param.demoId + ".html";
			}
		})
		.otherwise({
			redirectTo: "/demo/1"
		});
	//$locationProvider.html5Mode(true);
});

app.controller("navCtrl", ["$scope", "$location", function($scope, $location) {
	$scope.checkState = function(state) {
		return $location.path().substring(1) === "demo/" + state;
	}
}]);

app.controller("demoCtrl", ["$scope", function demoCtrl($scope) {
	"use strict";
	var dm = this;
	$scope.focus = {};

	$scope.showModal = function() {
		$scope.modal = true;
		$scope.focus.modalFocus = true;
		$scope.focus.btnFocus = false;
	};

	$scope.closeModal = function() {
		$scope.modal = false;
		$scope.focus.btnFocus = true;
		$scope.focus.modalFocus = false;
	};

	$scope.tacos = [{"name": " Some Like It Hot"}, {"name": "Monk Special"}, {"name": "The Wrangler"}, {"name": "Ranch Hand"}, {"name": "Migas"}, {"name": "#1 Breakfast Taco"}, {"name": "#2 Breakfast Taco"}, {"name": "#3 Breakfast Taco"}, {"name": "#4 Breakfast Taco"}, {"name": "#5 Breakfast Taco"}, {"name": "Green Chile Pork"}, {"name": "The Democrat"}, {"name": "Fried Avocado"}, {"name": "The Republican"}, {"name": "Trailer Park"}, {"name": "The Independent"}, {"name": "Dirty Sanchez"}, {"name": "Brushfire"}, {"name": "Baja Shrimp"}, {"name": "Mr. Pink"}, {"name": "Chicken Fajita"}, {"name": "Mr. Orange"}, {"name": "Beef Fajita"}, {"name": "Crossroads"}, {"name": "Guacamole"}, {"name": "Salsa"}, {"name": "Pico de Gallo"}, {"name": "Rice"}, {"name": "Refried Beans"}, {"name": "Green Chile Queso & Chips"}, {"name": "Chips & Guacamole"}, {"name": "Chips & Salsa"}, {"name": "Grande Burrito"}, {"name": "Street Corn"}, {"name": "Love Puppies"}, {"name": "Lil' Nookies"}];

}]);

app.directive("showAttrs", function() {
	return function(scope, el, attrs) {
		var pre = document.createElement("pre");
		el.after(pre);
		scope.$watch(function() {
			var attrs = {};
			Array.prototype.slice.call(el[0].attributes, 0).forEach(function(item) {
				if (item.name !== "show-attrs") {
					attrs[item.name] = item.value;
				}
			});
			return attrs;
		}, function(newAttrs, oldAttrs) {
			pre.innerText = JSON.stringify(newAttrs, null, 2);
		}, true);
	}
});
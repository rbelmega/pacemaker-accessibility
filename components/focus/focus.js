angular.module("auto-focus", []);

angular.module("auto-focus")
	.directive("autoFocus", ["$timeout", function($timeout) {
		return {
			restrict: "A",
			link: function(scope, element, attr) {
				var tabIndex = element.attr("tabindex") || -1;
				element.attr("tabindex", tabIndex);

				scope.$watch(attr.autoFocus, function(val) {
					val && setFocus(0);
				});
				function setFocus() {
					$timeout(function() {
						element[0].focus();
					}, 0, false)
				}
			}
		}
	}]);
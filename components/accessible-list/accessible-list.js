angular.module("accessible-list", []);

angular.module("accessible-list")
	.directive("accessibleList", ["$timeout", function($timeout) {
		return {
			restrict: "A",
			link: function(scope, element, attr) {
				var focusIndex = 0;
				$timeout(function() {
					var list = Array.prototype.slice.apply(element.find("li"));
					list.forEach(function(item) {
						item.setAttribute("tabindex", -1);
					});
					list[0].setAttribute("tabindex", 0);
				}, 0, false);

				element.on("keydown", function(e) {
					var list = element.find("li");

					//prev
					if (e.keyCode === 38 && focusIndex > 0) {
						list[focusIndex].setAttribute("tabindex", -1);
						list[--focusIndex].setAttribute("tabindex", 0);
						list[focusIndex].focus();
						scope.$apply();
						e.preventDefault();
					}
					if (e.keyCode === 40 && focusIndex < list.length - 1) {
						list[focusIndex].setAttribute("tabindex", -1);
						list[++focusIndex].setAttribute("tabindex", 0);
						list[focusIndex].focus();
						scope.$apply();
						e.preventDefault();
					}

					if (e.keyCode === 13) {
						scope.$apply();
					}
				});
			}
		}
	}]);
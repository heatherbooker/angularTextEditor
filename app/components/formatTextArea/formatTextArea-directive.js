angular.module('blogManager.formatTextArea', [])

.directive('formatTextArea', function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModelCtrl) {

            function read() {
                ngModelCtrl.$setViewValue(element.html());
            };

            ngModelCtrl.$render = function() {
                element.html(ngModelCtrl.$viewValue || "");
            };

            element.bind("blur keyup change", function() {
                scope.$apply(read);
            });
        }
    };
})

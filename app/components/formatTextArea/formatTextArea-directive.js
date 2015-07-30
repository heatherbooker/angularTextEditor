angular.module('bgooDoc.textarea', [])

.directive('formatTextArea', function() {
    return {
        //require: "ngModel",
        controller: 'textAreaController',
        templateUrl: './app/components/formatTextArea/formatTextArea.html',
        link: function(scope, element, attrs, ngModel) {

            function read() {
                alert('reading');
                ngModel.$setViewValue(element.html());
            }

            ngModel.$render = function() {
                element.html(ngModel.$viewValue || "");
            };

            element.bind("blur keyup change", function() {
                scope.$apply(read);
            });
        }
    };
})



.controller('textAreaController', [
    '$scope',
    function($scope) {
        $scope.typedText = "lemmings";

    }
]);

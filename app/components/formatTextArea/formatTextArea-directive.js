angular.module('bgooDoc.textarea', [])

.directive('formatTextArea', function() {
    return {
        restrict: "E",
        require: "ngModel",
        templateUrl: './app/components/formatTextArea/formatTextArea.html'

    };
})


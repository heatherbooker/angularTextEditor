angular.module('bgooDoc.edit', [])



// .directive("formatTextArea", function() {
//     return {
//         //restrict: "A",
//         require: "ngModel",
//         templateUrl: "/app/components/formatTextArea/formatTextArea.html",
//         link: function(scope, element, attrs, ngModel) {

//             function read() {
//                 ngModel.$setViewValue(element.html());
//             }

//             ngModel.$render = function() {
//                 element.html(ngModel.$viewValue || "");
//             };

//             element.bind("blur keyup change", function() {
//                 scope.$apply(read);
//             });
//         }
//     };
// })



.controller('EditController', [

    "$scope",

    function($scope) {

        var startSelec, endSelec;
        $scope.text = "";

        $scope.underline = function() {}

        $scope.bold = function() {}

        $scope.italicize = function() {
            $scope.text = 'nnnnn<i>' + $scope.text + '</i>';
        }

        $scope.getSelected = function() {
            // var textArea = document.getElementById('txtBlock');
            // startSelec = textArea.selectionStart;
            // endSelec = textArea.selectionEnd;
            //var selected = textArea.value.substring(startSelec, endSelec);
            //console.log(selected)
        }


    }

]);

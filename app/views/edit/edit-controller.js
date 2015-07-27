angular.module('bgooDoc.edit', [])

// .directive("formatTextArea", function() {
//     return {
//         //A: attribute matches, C: class, E: element name
//         restrict: "A",
//         require: "ngModel",
//         templateURL: "/app/components/formatTextArea/formatTextArea.html",
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

        $('#txtBlock').on('mousedown', function() {
            $('#txtBlock').on('mouseup', function() {
                //alert(window.getSelection().toString());
            });
        });

        $scope.underline = function() {
            $scope.updatedText = "something";
        }

        $scope.bold = function() {
            //var selected = $scope.getSelected();
            //var allText = textArea;
            //$scope.updatedText = selected;
            $scope.getAllText()
        }

        $scope.italicize = function() {
            console.log(startSelec, endSelec)
            console.log($scope.textInput);
            $scope.textInput = '<i>' + $scope.textInput + '</i>';
        }

        $scope.getSelected = function() {
            var textArea = document.getElementById('txtBlock');
            startSelec = textArea.selectionStart;
            endSelec = textArea.selectionEnd;
            //var selected = textArea.value.substring(startSelec, endSelec);
            //console.log(selected)
        }

        $scope.getAllText = function() {
            console.log($scope.textInput);
        }

    }

]);

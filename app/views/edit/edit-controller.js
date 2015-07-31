angular.module('bgooDoc.edit', [])


.controller('EditController', [

    "$scope",

    function($scope) {

        $scope.text = "";
        var startSelec, endSelec, preSelec, postSelec;

        $scope.underline = function() {}

        $scope.bold = function() {}

        $scope.italicize = function() {

            var selected = $scope.getSelected();

            $scope.text = preSelec + '<i>' + selected + '</i>' + postSelec;

        }

        $scope.getSelected = function() {

            selectionObj = window.getSelection();

            if (selectionObj.isCollapsed) {
                return ""
            } else {
                startSelec = selectionObj.anchorOffset;
                endSelec = selectionObj.focusOffset;
            };
            if (startSelec > endSelec) {
                startSelec = endSelec;
                endSelec = selectionObj.anchorOffset;
            }

            $scope.getRemainder(startSelec, endSelec);

            return window.getSelection().toString()
        }

        $scope.getRemainder = function(start, end) {
            preSelec = $scope.text.substring(0, start);
            postSelec = $scope.text.substring(end);
            console.log(preSelec);
            console.log(postSelec);
        }


    }

]);

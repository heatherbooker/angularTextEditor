angular.module('blogManager.edit', ['ui.event'])


.controller('EditController', [

    "$scope",

    function($scope) {

        $scope.text = "";
        var startSelec, endSelec, preSelec, postSelec, selected;
        var plainText = "";

        $scope.foo = function(event) {
            event.preventDefault();
        }

        $scope.underline = function() {}

        $scope.bold = function() {}

        $scope.italicize = function() {

            //compare against plainText
            //if same, do nothing
            //if different, update

            plainText = $scope.text;

            $scope.text = preSelec + '<i>' + selected + '</i>' + postSelec;

        }

        $scope.getSelected = function() {

            selectionObj = window.getSelection();

            console.log(selectionObj);

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

            selected = window.getSelection().toString();
        }

        $scope.getRemainder = function(start, end) {
            preSelec = $scope.text.substring(0, start);
            postSelec = $scope.text.substring(end);
            console.log(preSelec);
            console.log(postSelec);
        }


    }

]);

angular.module('blogManager.edit', [])


.controller('EditController', [

    "$scope",

    function($scope) {

        $scope.text = "ham and cheese<strong> eggs and </strong>beans words and snorp";
        var startPos, endPos, preSelec, postSelec, selected;
        var bolded = [];
        var underlined = [];
        var italicized = [];


        $scope.getSelTxt = function() {
            selected = $.selection();
            element = $('#fuzz');
            //console.log(startPos.start, startPos.end);
            console.log(element.selectionStart);

        }

        $scope.getSelHtml = function() {
            $('#result').text($.selection('html'));
        }


        $scope.underline = function() {}

        $scope.bold = function() {}

        $scope.italicize = function() {

            $('#result').text('<i>' + selected + '</i>');

        }

    }

]);
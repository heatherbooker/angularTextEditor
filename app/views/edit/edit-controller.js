angular.module('blogManager.edit', [])


.controller('EditController', [

    "$scope",

    function($scope) {

        $scope.text = "";
        var startSelec, endSelec, preSelec, postSelec, selected;
        var bolded = [];
        var underlined = [];
        var italicized = [];


        $scope.underline = function() {}

        $scope.bold = function() {}

        $scope.italicize = function() {

            italicized.push({
                start: startSelec,
                end: endSelec
            });

            console.log(italicized);

            $scope.text = preSelec + '<script>alert("foo")' + selected + '</script>' + postSelec;
            //$scope.text = preSelec + '<i>' + selected + '</i>' + postSelec;
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

            console.log(selected);

            // var txtbox = document.getElementById("txtBlock");
            // var startPos = txtbox.selectionStart;
            // console.log(txtbox.selectionStart);
            // var endPos = txtbox.selectionEnd;
            // //console.log(startPos, endPos);
            // //console.log(txtbox.innerHTML.substring(startPos, endPos));<--this method also gets html
            // allText = txtbox.textContent; //this method gets only content text
            // selected = allText.substring(startPos, endPos);
            // console.log(selected);
            // $scope.getRemainder(startPos, endPos);
        }

        $scope.getRemainder = function(start, end) {
            preSelec = $scope.text.substring(0, start);
            postSelec = $scope.text.substring(end);
            console.log(preSelec);
            console.log(postSelec);
            console.log(start, end);
        }


    }

]);
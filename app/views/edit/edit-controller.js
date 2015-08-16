angular.module('blogManager.edit', [])


.controller('EditController', [

    "$scope",

    function($scope) {

        var txtBox = document.getElementById('txtBlock');

        var doc;

        //get content:
        //console.log($(doc).find('body').html());

        $scope.getTxt = function() {

            doc = txtBox.contentWindow || txtBox.contentDocument.defaultView;
            if (doc.document);
            doc = doc.document;
        }


        $(window).load(function() {
            //I AM ANGRY BECAUSE THIS ONLY WORKS SOMETIMES AND I DON'T UNDERSTAND WHY

            //make iframe useful
            txtBox.contentWindow.document.designMode = "on";
            //initialize select, colorpicker
            $('select').material_select();
            $('.colorpicker-element').colorpicker();

        })

        $scope.changeFontSize = function() {
            $scope.getTxt();
            var fontSz = $('#fontRange').val();
            doc.execCommand('fontSize', false, fontSz);
        }

        $('#fontName').on('change', function() {
            $scope.getTxt();
            var font = $('#fontName').val()
            doc.execCommand('fontName', false, font)
        });

        $scope.changeFontClr = function() {
            $scope.getTxt();
            var color = $('.colorpicker-element').colorpicker('getValue', '#ffffff')
            doc.execCommand('foreColor', false, color);
        }

        $scope.underline = function() {
            $scope.getTxt();
            doc.execCommand('underline');
        }

        $scope.bold = function() {
            $scope.getTxt();
            doc.execCommand('bold');
        }

        $scope.italicize = function() {
            $scope.getTxt();
            doc.execCommand('italic');
        }


    }

]);
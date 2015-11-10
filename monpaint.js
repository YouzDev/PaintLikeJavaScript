/*jslint browser: true node:true*/
/*global $, jQuery, alert*/
"use strict";
$(document).ready(function () {
    $("#myCanvas").hide("slow", function () {


        var color = "#000", painting = false, started = false, canvas = $("#myCanvas"), cursorX, cursorY, context = canvas[0].getContext('2d'), cursorX2, cursorY2, cursorX3, cursorY3;
// var width_brush = 5;
// Trait arrondi :
// context.lineJoin = 'round'; // créer un coin arrondi quand 2 lignes se croisent
// context.lineCap = 'round'; // créer une ligne avec bout arrondi
// $('#crayon').click(function() {
// Click souris enfoncé sur le canvas, je dessine :
        canvas.mousedown(function (e) {
            painting = true;
// CoordonnÃ©es de la souris :
            cursorX = (e.pageX - this.offsetLeft);
            cursorY = (e.pageY - this.offsetTop);
        });
// Relachement du Click sur tout le document, j'arrete de dessiner :
        $(this).mouseup(function (e) {
            painting = false;
            started = false;
            e.preventDefault();
        });
// Mouvement de la souris sur le canvas :
        canvas.mousemove(function (e) {
// Si je suis en train de dessiner (click souris enfonce) :
            if (painting) {
// Set Coordonnees de la souris :
                cursorX = (e.pageX - this.offsetLeft) - 10; // 10 = decalage du curseur
                cursorY = (e.pageY - this.offsetTop) - 10;

 drawLine();
            }
        });
        $("#montre").click(function () {
            $("#myCanvas").fadeTo("slow", 0.9);

        });
// Fonction qui dessine une ligne :
        function drawLine(){
        // Si c'est le debut, j'initialise
            if (!started) {
            // Je place mon curseur pour la premiere fois :
                context.beginPath();
                context.moveTo(cursorX, cursorY);
                started = true;
            } else {
                context.lineTo(cursorX, cursorY);
                context.strokeStyle = document.getElementById('couleur').value;;
            // context.lineWidth = width_brush;
                context.stroke();
            }
        }

        $('#trait').click(function () {
            canvas.unbind();
            var lepremierclic = true;
            canvas.click(function (e) {
                if (lepremierclic === true) {
                    painting = false;
                    cursorX = (e.pageX - this.offsetLeft);
                    cursorY = (e.pageY - this.offsetTop);
                    context.beginPath();
                    context.moveTo(cursorX, cursorY);
                    lepremierclic = false;
                } else {
                    lepremierclic = true;
                    cursorX2 = (e.pageX - this.offsetLeft);
                    cursorY2 = (e.pageY - this.offsetTop);
                    context.lineTo(cursorX2, cursorY2);
                    context.strokeStyle = document.getElementById('couleur').value;
                    context.stroke();
                    context.closePath();

                }

            });

        });

        $('#rectangle').click(function () {
            canvas.unbind();
            var lepremierclic = true;
            canvas.click(function (e) {
                if (lepremierclic === true) {
                    cursorX = (e.pageX - this.offsetLeft);
                    cursorY = (e.pageY - this.offsetTop);
                    context.beginPath();
                    lepremierclic = false;
                } else {
                    lepremierclic = true;
                    cursorX2 = (e.pageX - this.offsetLeft);
                    cursorY2 = (e.pageY - this.offsetTop);
            // console.log(cursorX2);
                    cursorX3 = cursorX2 - cursorX;
                    cursorY3 = cursorY2 - cursorY;

            // console.log(cursorX3);

                    context.rect(cursorX, cursorY, cursorX3, cursorY3);
                    context.strokeStyle = document.getElementById('couleur').value;
                    context.stroke();

                }
            });

        });

        $('#rectanglerempli').click(function () {
            canvas.unbind();
            var lepremierclic = true;
            canvas.click(function (e) {
                if (lepremierclic === true) {
                    cursorX = (e.pageX - this.offsetLeft);
                    cursorY = (e.pageY - this.offsetTop);
                    context.beginPath();
                    lepremierclic = false;
                } else {
                    lepremierclic = true;
                    cursorX2 = (e.pageX - this.offsetLeft);
                    cursorY2 = (e.pageY - this.offsetTop);
            // console.log(cursorX2);
                    cursorX3 = cursorX2 - cursorX;
                    cursorY3 = cursorY2 - cursorY;

            // console.log(cursorX3);

                    context.rect(cursorX, cursorY, cursorX3, cursorY3);
                    context.fillStyle = document.getElementById('couleur').value;
                    context.fill();
                    context.stroke();

                }
            });

        });

        $('#cercle').click(function () {
            canvas.unbind();
            var lepremierclic = true;
            canvas.click(function (e) {
                if (lepremierclic === true) {
                    cursorX = (e.pageX - this.offsetLeft);
                    cursorY = (e.pageY - this.offsetTop);
                    context.beginPath();
                    lepremierclic = false;
                } else {
                    lepremierclic = true;
                    cursorX2 = (e.pageX - this.offsetLeft);
                    cursorY2 = (e.pageY - this.offsetTop);

                var truc = Math.sqrt((cursorX2 - cursorX) * (cursorX2 - cursorX) + (cursorY2 - cursorY) * (cursorY2 - cursorY));

                context.arc(cursorX, cursorY, truc, 0, 2 * Math.PI);
                context.strokeStyle = document.getElementById('couleur').value;
                context.stroke();
                }

        });
    });

    $('#cerclerempli').click(function () {
        canvas.unbind(); 
        var lepremierclic = true;
        canvas.click(function (e) {
            if (lepremierclic === true) {
                cursorX = (e.pageX - this.offsetLeft);
                cursorY = (e.pageY - this.offsetTop);
                context.beginPath();
                lepremierclic = false;
                } else {
                   lepremierclic = true;
                   cursorX2 = (e.pageX - this.offsetLeft);
                   cursorY2 = (e.pageY - this.offsetTop);

                   var truc = Math.sqrt((cursorX2 - cursorX) * (cursorX2 - cursorX) + (cursorY2 - cursorY) * (cursorY2 - cursorY));

                   context.arc(cursorX, cursorY, truc, 0, 2 * Math.PI);
                   context.fillStyle = document.getElementById('couleur').value;
                   context.fill();
                   context.stroke();
            }

        });
    });



    $('#lol').click(function () {
        canvas.unbind(); 
        canvas.mousedown(function (e) {

            painting = false;
            cursorX = (e.pageX - this.offsetLeft);
            cursorY = (e.pageY - this.offsetTop);
            context.beginPath();
            context.moveTo(cursorX, cursorY);

            canvas.click(function() {
                cursorX2 = (e.pageX - this.offsetLeft);
                cursorY2 = (e.pageY - this.offsetTop);
                context.lineTo(cursorX2, cursorY2);
                context.strokeStyle = document.getElementById('couleur').value;
                context.stroke();
                context.closePath();

            });

        });         

    });


    // Clear du Canvas :
    function clear_canvas() {
        context.clearRect(0,0, canvas.width(), canvas.height());
    }

    // $('#reset').click(function() {

    //  location.reload();

    // });
    
    //  // Je lui attribut une couleur de fond :
    //  $(this).css("background", $(this).attr("data-couleur"));

    //  // Et au click :
    //  $(this).click(function() {
    //      // Je change la couleur du pinceau :
    //      color = $(this).attr("data-couleur");

    //      // Et les classes CSS :
    //      $("#couleurs a").removeAttr("class", "");
    //      $(this).attr("class", "actif");

    //      return false;
    //  });
    // });

    
    // Bouton Reset qui va reset le canvas:
    $("#reset").click(function () {
        // Clear canvas :
        clear_canvas();
        // location.reload();
    });

});

});
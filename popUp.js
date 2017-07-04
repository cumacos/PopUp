/** Construye dinámicamente un PopUp.
* Construye dinámicamente un PopUp a partir de una imagen.
* @param sSrcImg (string) Ruta y nombre de la imagen que se desea mostrar.
* @param nObjWidth (numeric) Ancho de la imagen.
* @param nObjHeight (numeric) Altura de la imagen.
*/
function popPup( sSrcImg, nObjWidth, nObjHeight )
{

    this.removeWindows = function ()
    { 

        objDivImg.style.display = "none";
        objDivBackground.style.display = "none";
        document.getElementById( "id_div_group" ).parentNode.removeChild( document.getElementById( "id_div_group" ) ); 

    }

    var objDivGroup = document.createElement( "div" );
    objDivGroup.id = "id_div_group";

    var objDivBackground = document.createElement( "div" );
    objDivBackground.id = "id_div_background";
    objDivBackground.setAttribute( "class", "fondo_opaco_information" );
    objDivBackground.setAttribute( "style", "display: none;" );
    objDivGroup.appendChild( objDivBackground );

    var objImg = document.createElement( "img" );
    objImg.setAttribute( "src", sSrcImg );
    objImg.setAttribute( "onclick", "removeWindows();" );

    nObjWidth  = objImg.width  === 0 ? nObjWidth  : objImg.width ;
    nObjHeight = objImg.height === 0 ? nObjHeight : objImg.height;

    var wW = window.innerWidth  || document.documentElement.clientWidth  || document.body.clientWidth;
    var hH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var w = ( wW - nObjWidth )  / 32;
    var h = ( hH - nObjHeight ) / 12;

    var objDivImg = document.createElement( "div" );
    objDivImg.id = "id_div_img";
    objDivImg.setAttribute( "class", "ventana_modal_information" );
    objDivImg.setAttribute( "style", "display: none; left:" + w + "%;top:" + h + "%;" );
    objDivImg.appendChild( objImg );
    objDivGroup.appendChild( objDivImg );

    document.getElementsByTagName( "body" )[0].appendChild( objDivGroup );
    objDivImg.style.display = "";
    objDivBackground.style.display = "";

}


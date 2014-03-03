/*System Tools*/
function getpath(pn_is_sub){
 var path = "";
 if (pn_is_sub == 1) {
    var path = "../";
 }
return path;
}

function definitionHeader(Vwindow, pn_is_sub){
  VWindow.document.write(
	"<HTML> <head>"+
    "<meta http-equiv=\'content-type\' content=\'text/html; charset=windows-1250\' />"+
	 "</script>"+
     "<script type=\'text/javascript' src=\'"+getpath(pn_is_sub)+"/scripts.js'>"+
    "</script>"
	);
}

/*====================================================================
 Page elements
 ====================================================================*/
/*To main page*/
function Home(pn_is_sub) {
 /*document.write
         ("<a HREF=\'"+getpath(pn_is_sub)+"index.html\'> <img src=\""+getpath(pn_is_sub)+
			"pictures/Firmowka2.png\" width=\"258\" height=\"67\" alt=\"Index\" /></a>");
*/
}

function Logo(pn_is_sub) {
 document.write("<a HREF> <img src=\""+getpath(pn_is_sub)+"pictures/Firmowka2.png\""+
                "width=\"300\" height=\"70\" align=\"center\" /img> </a>"
               );
}

/*Firm address*/
function Address(pn_is_sub) {
 document.write
         ("<a href=\"http://www.buksan.pl\"> <img src=\""+getpath(pn_is_sub)+
			"pictures/address.jpg\" width=\"760\" height=40\"\"67\" alt=\"Index\" /></a>");
}

/*Page Background*/
function PageBackground(pn_is_sub){
  document.write
   ("<BODY background=\""+getpath(pn_is_sub)+
	"pictures/tlo2.jpg\" LEFTMARGIN='0' TOPMARGIN='0' RIGHTMARGIN='0' BOTTOMMARGIN='0' MARGINWIDTH='0' MARGINHEIGHT='0'>");
}

/*page Header*/
function Header(pn_is_sub){
  document.write("<TABLE WIDTH=\'100%' HEIGHT=\'100%' CELLSPACING=\'0' CELLPADDING=\'0' BORDER=\'0'>");
  document.write(
	"<TR>"+
   "<TD ALIGN=\'center'>"+
   "<TABLE CELLSPACING=\'0' CELLPADDING=\'0' BORDER=\'0' HEIGHT=\'100%' WIDTH=\'760'>"+
   "<TR>");
  document.write(
	"<TD VALIGN=\'TOP' HEIGHT=\'6'>"+
	"<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/top_stripe.gif' WIDTH=\'760' HEIGHT=\'6' BORDER=\'0' ALT=\''><BR>"+
   "<TABLE WIDTH=\'760' CELLSPACING=\'0' CELLPADDING=\'0' BORDER=\'0'>"
	);
}

/*Header Beam*/
function HeaderBeam(pn_is_sub){
  /*Contact*/
  document.write(
	"<TABLE WIDTH=\'760' CELLSPACING=\'0' CELLPADDING=\'0' BORDER=\'0'> "+
	"<TR>"
	);
  document.write(
	   "<TD STYLE=background-image: url(\'"+getpath(pn_is_sub)+"pictures/menu_bg.gif'); background-repeat: repeat>"+
		    "<A HREF=\'"+getpath(pn_is_sub)+"pages/contact.html'>"+
			    "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_contact.gif' WIDTH=\'87' HEIGHT=\'18' BORDER=\'0' ALT=\'Dane teleadresowe firmy'>"+
			 "</A>"+
		"</TD>");
  /*Background menu*/
  document.write(
    "<TD ALIGN=\'RIGHT' STYLE=\""+
    "background-image: url(\'"+getpath(pn_is_sub)+"pictures/menu_bg.gif'); background-repeat: repeat\"\">");
  /*Offer*/
  document.write(
     "<A HREF=\'"+getpath(pn_is_sub)+"pages/offer.html'>"+
	   	"<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_offer.gif' WIDTH=\'97' HEIGHT=\'18' BORDER=\'0' ALT=\'Zapoznaj si� z nasz� ofert�'"+
			"onMouseOver=\"this.src=\'"+getpath(pn_is_sub)+"pictures/menu_offer1.gif'\""+
			"onMouseOut =\"this.src=\'"+getpath(pn_is_sub)+"pictures/menu_offer.gif'\">"+
	  "</A>");
  /*Others*/
  document.write(
		"<A HREF=\'"+getpath(pn_is_sub)+"pages/others.html'>"+
		   "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_others.gif' WIDTH='97' HEIGHT='18' BORDER='0' ALT='Inne'"+
			"onMouseOver=\"this.src=\'"+getpath(pn_is_sub)+"pictures/menu_others1.gif'\""+
			"onMouseOut =\"this.src=\'"+getpath(pn_is_sub)+"pictures/menu_others.gif'\">"+
		"</A>"
		);
  /*About*/
  document.write(
		"<A HREF=\'"+getpath(pn_is_sub)+"pages/about.html'>"+
		   "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_about.gif' WIDTH='97' HEIGHT='18' BORDER='0' ALT='O nas - Wczoraj, dzi�, jutro...' "+
			"onMouseOver=\"this.src=\'"+getpath(pn_is_sub)+"pictures/menu_about1.gif'\""+
			"onMouseOut =\"this.src=\'"+getpath(pn_is_sub)+"pictures/menu_about.gif'\">"+
		"</A>"
	);
 document.write(
   "</TD>"+
 "</TR>"
	);
 /*Left shadow*/
 document.write(
   "<TR>"+
    "<TD ALIGN='RIGHT' VALIGN='top'>"+
/*      "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_left_shadow.gif' WIDTH='87' HEIGHT='13'>"+*/
	 "</TD> "+
 	 "<TD ALIGN='RIGHT'>"+
/*        "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_top_shadow.jpg' WIDTH='674' HEIGHT='38'>"+*/
	 "</TD>"+
	"</TR>"
	);
}

/*Page Footer*/
function Footer(pn_is_sub){
 document.write(
   "<TD>&nbsp;</TD>"
	);
 document.write(
   "<TD STYLE=\""+
    "background-image: url(\'pictures/main_bg.jpg'); background-position: top; background-repeat: repeat\"\""+
	 " ALIGN='RIGHT'>"+
	  "<A TARGET=\'_blank'>"+
	    "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/stopka.jpg' WIDTH=\'673' HEIGHT=\'36' BORDER=\'0' ALT=\''>"+
	  "</A>"+
	"</TD>"
  );
/*
 document.write(
   "<TR>"+
	 "<TD>&nbsp;</TD>"+
    "<TD>"+
	   "<IMG SRC=\'"+getpath(pn_is_sub)+"pictures/menu_top_shadow.jpg' WIDTH=\'674' HEIGHT=\'38'>"+
	 "</TD>"+
	"</TR>"
	)
*/
}
/*Visited Counter*/
function VisitCounter(pn_is_sub){
	document.write(
	  "</P>Licznik odwiedzin:"+
	   "<script type=\'text/javascript\'"+
		 "src=\'http://www.deszczowce.pl/licznik/licznik.php?id=65049072\'"+
	   ">"+
		"</script>"+
	  "</P>"
  );
}

/*Tools*/
function ShowPictureOK(pv_picture, pn_is_sub, pnWidth, pnHeight){
/*---------------------------------------------*/
  var borderSize = 50;
  var WindowWidthSize = 0;
  var WindowHeigthSize = 0;
  var PictureWidthSize = pnWidth;
  var PictureHeigthSize = pnHeight;
/*---------------------------------------------*/
  if (PictureWidthSize == null) {PictureWidthSize= screen.availWidth};
  if (PictureHeigthSize ==null) {PictureHeigthSizex=screen.availHeight};
  WindowWidthSize  = PictureWidthSize  + borderSize;
  WindowHeigthSize = PictureHeigthSize + borderSize +80;
/*---------------------------------------------*/
 picture = window.open
	(""
	,"Zdj�cie"
   ,"location=1"+
  ",status=1"+
  ",toolbar=1"+
  ",scrollbars=1"+
  ",width="+WindowWidthSize+
  ",height="+WindowHeigthSize
	);
  picture.moveTo(50,20);
  /*definitionHeader(picture, pn_is_sub);
  picture.document.write(
	"<HTML> <head>"+
    "<meta http-equiv=\'content-type\' content=\'text/html; charset=windows-1250\' />"+
	 "</script>"+
     "<script type=\'text/javascript' src=\'../scripts.js'>"+
    "</script>"
	 "<img src=\'"+getpath(pn_is_sub)+"pictures/"+pv_picture+"\'"+
	)*/
	 picture.document.write("<center> "+pv_picture+"</center> ");
    picture.document.write(
        	"<a>"+
			 "<img src=\'"+getpath(pn_is_sub)+"pictures/"+pv_picture+"\'"+
			 " width=\'"+(PictureWidthSize)+"\' height=\'"+(PictureHeigthSize)+"\' alt=\'Kurtka\' "+
			 "/>"+
			"</a>"+
			"<center> "+
			"<A HREF=\"javascript:window.close();\" \"onClick\"=\'picture.close\'>Zamknij</A>"+
			"</center> "
			);
   picture.document.write(
   "</HEAD>"+
   "</HTML>"
	);
}

function ShowPicture(pv_picture, pn_is_sub, pnWidth, pnHeight){
/*---------------------------------------------*/
  var borderSize = 50
  var WindowWidthSize = 0;
  var WindowHeigthSize = 0;
  var PictureWidthSize = pnWidth;
  var PictureHeigthSize = pnHeight;
/*---------------------------------------------*/
  if (PictureWidthSize == null) {PictureWidthSize= screen.availWidth};
  if (PictureHeigthSize ==null) {PictureHeigthSizex=screen.availHeight};
  WindowWidthSize  = PictureWidthSize  + borderSize;
  WindowHeigthSize = PictureHeigthSize + borderSize +80;
/*---------------------------------------------*/
 picture = window.open
	(""
	,"Zdj�cie"
   ,"location=1"+
  ",status=1"+
  ",toolbar=1"+
  ",scrollbars=1"+
  ",width="+WindowWidthSize+
  ",height="+WindowHeigthSize
	);
  picture.moveTo(50,20);
  /*definitionHeader(picture, pn_is_sub);
  picture.document.write(
	"<HTML> <head>"+
    "<meta http-equiv=\'content-type\' content=\'text/html; charset=windows-1250\' />"+
	 "</script>"+
     "<script type=\'text/javascript' src=\'../scripts.js'>"+
    "</script>"
	 "<img src=\'"+getpath(pn_is_sub)+"pictures/"+pv_picture+"\'"+
	)*/
	 picture.document.write("<center> "+pv_picture+"</center> ");
    picture.document.write(
        	"<a HREF=\"javascript:window.close();\" \"onClick\"=\'picture.close\'>"+
			 "<img src=\'"+getpath(pn_is_sub)+"pictures/"+pv_picture+"\'"+
			 " width=\'"+(PictureWidthSize)+"\' height=\'"+(PictureHeigthSize)+"\' alt=\'Kurtka\' "+
			 "/>"+
			"</a>"+
			"<center> "+
			"<A HREF=\"javascript:window.close();\" \"onClick\"=\'picture.close\'>Zamknij</A>"+
			"</center> "
			)
   picture.document.write(
   "</HEAD>"+
   "</HTML>"
	)
}

function OpenUrl(pv_url){
  window.open(pv_url);
}
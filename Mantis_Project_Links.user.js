// ==UserScript==
// @name        Mantis Project Links
// @author      phija
// @namespace   http://www.phiworld.de
// @description Sets small simple links below the project drop down list for quicker access to the Mantis projects
// @include     http://tracker.atrics.loc*
// @grant       none
// @version     0.1.0
// ==/UserScript==

var links = [
    ["52;14", "Project1"],
    ["52;56", "Project2"]
  ];
var spacing = 8;
var backgroundColor = "#def";

function setLinks() {
  var elements = document.getElementsByTagName("td");
  for (var i = 0; i < elements.length; i++) 
  {   
    // only fix the right span-tag here:
    if (elements[i].className == "login-info-right")
    {      
      var linkText = "<br><div>";
      var style = "margin-right:" + spacing + "px; padding:3px; border:1px solid black; background-color:" + backgroundColor + ";";
      for (var j = 0; j < links.length; j++) 
      {   
        linkText += "<a style='" + style + "' href='http://tracker.atrics.loc/set_project.php?project_id=" + links[j][0] + "' name='Project1'>" + links[j][1] + "</a>";
      }
      elements[i].innerHTML += linkText + "</div>";
    }
  }  
}

setLinks();

var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//START Roblox.Controls.IE6Hack.js


Type.registerNamespace('Roblox.Controls.Image');


Roblox.Controls.Image.IE6Hack = function(element) { 
	var imageElement = element.children("img");
	var src = imageElement.src;
	imageElement.src = imageElement.blankUrl;
	imageElement.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='crop', src='" + src + "')";
}

Roblox.Controls.Image.SetImageSrc = function(element, src) { 
	var imageElement = element.children("img");
	if (imageElement.blankUrl)
	    imageElement.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='crop', src='" + src + "')";
	else
	    imageElement.src = src;
}

if (typeof(Sys) !== 'undefined') Sys.Application.notifyScriptLoaded();

//END Roblox.Controls.IE6Hack.js
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
(function() {var fn = function() {$get('ctl00_ScriptManager1_HiddenField').value += ';;Roblox.Controls:en-US:50ac6d31-c851-47de-9fa1-5c630e1c367e:827cb342';Sys.Application.remove_load(fn);};Sys.Application.add_load(fn);})();


}
/*
     FILE ARCHIVED ON 00:21:24 Oct 06, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:27:59 Jun 11, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 615.123
  PetaboxLoader3.resolve: 368.187 (3)
  PetaboxLoader3.datanode: 411.097 (4)
  RedisCDXSource: 6.605
  exclusion.robots.policy: 0.31
  LoadShardBlock: 475.284 (3)
  exclusion.robots: 0.333
  load_resource: 338.68
  esindex: 0.024
  CDXLines.iter: 68.693 (3)
*/
// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");
 
pageMod.PageMod({
  include: "*.facebook.com",
  contentScriptFile: [ self.data.url("js/jquery.min.js"), 
					  self.data.url('js/jquery.caret.min.js'),
					  self.data.url('js/jquery.observe.min.js'),
					  self.data.url("js/dislike.js")
					],
  contentStyleFile: self.data.url("style/default.css"),
  contentStyle: [ ".dislike_thumb { background-image: url( " + self.data.url("images/dislikeicon16.png") + ") !important; }", 
				  "/*EmojiSymbols Font (c)blockworks - Kenichi Kaneko http://emojisymbols.com/*/ @font-face { font-family: EmojiSymbols;src:local('Apple Color Emoji'),local('Android Emoji'),local('Segoe UI'), url(" + self.data.url("fonts/EmojiSymbols.woff") + ") format(woff);text-decoration: none;font-style: normal;unicode-range: U+1F44E;}"
				  ]
});
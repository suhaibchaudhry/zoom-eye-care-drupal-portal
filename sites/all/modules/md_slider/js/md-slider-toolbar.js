/*------------------------------------------------------------------------
# MD Slider - March 18, 2013
# ------------------------------------------------------------------------
# Websites:  http://www.megadrupal.com -  Email: info@megadrupal.com
--------------------------------------------------------------------------*/

!function(t){var a=function(a){var e=this;this.panel=a,this.selectedItem=null,this.init=function(){t("#md-toolbar a").click(function(){return t(this).hasClass("mdt-text")?e.panel.addBoxItem("text"):t(this).hasClass("mdt-image")?e.panel.addBoxItem("image"):t(this).hasClass("mdt-video")?e.panel.addBoxItem("video"):t(this).hasClass("mdt-align-left")?e.panel.alignLeftSelectedBox():t(this).hasClass("mdt-align-right")?e.panel.alignRightSelectedBox():t(this).hasClass("mdt-align-center")?e.panel.alignCenterSelectedBox():t(this).hasClass("mdt-align-top")?e.panel.alignTopSelectedBox():t(this).hasClass("mdt-align-bottom")?e.panel.alignBottomSelectedBox():t(this).hasClass("mdt-align-vcenter")?e.panel.alignMiddleSelectedBox(t("input.mdt-spacei","#md-toolbar").val()):t(this).hasClass("mdt-spacev")?e.panel.spaceVertical(t("input.mdt-spacei","#md-toolbar").val()):t(this).hasClass("mdt-spaceh")&&e.panel.spaceHorizontal(t("input.mdt-spacei","#md-toolbar").val()),!1}),t("input.mdt-width","#md-toolbar").keyup(function(){if(t("a.mdt-proportions","#md-toolbar").hasClass("mdt-proportions-yes")){var a=t("a.mdt-proportions","#md-toolbar").data("proportions");a>0&&t("input.mdt-height","#md-toolbar").val(Math.round(t(this).val()/a))}}),t("input.mdt-height","#md-toolbar").keyup(function(){if(t("a.mdt-proportions","#md-toolbar").hasClass("mdt-proportions-yes")){var a=t("a.mdt-proportions","#md-toolbar").data("proportions");a>0&&t("input.mdt-width","#md-toolbar").val(Math.round(t(this).val()*a))}}),t("input, select","#md-toolbar").keypress(function(a){var e=a.keyCode||a.which;13==e&&(t(this).trigger("change"),a.preventDefault())}),t("input.mdt-input, select.mdt-input","#md-toolbar").change(function(){var a=t(this).attr("name");switch(a){case"background-transparent":case"background-color":return e.panel.setItemBackground(a,t(this).val()),!0;case"left":case"top":e.panel.setItemAttribute(a,t(this).val());break;case"width":case"height":e.panel.setItemSize(t("input.mdt-width","#md-toolbar").val(),t("input.mdt-height","#md-toolbar").val());break;case"font-size":e.panel.setItemFontSize(a,t(this).val());break;case"style":e.panel.setItemStyle(a,t(this).val());break;case"opacity":e.panel.setItemOpacity(a,t(this).val());break;case"mdtclass":e.panel.setItemClass(a,t(this).val());break;case"color":e.panel.setItemColor(t(this).val());break;case"border-color":e.panel.setItemBorderColor(a,t(this).val());break;case"border-width":e.panel.setItemCssPx(a,t(this).val());break;case"border-style":e.panel.changeBorderStyle(t(this).val());break;default:e.panel.setItemCss(a,t(this).val())}return!1}),t("a.button-style","#md-toolbar").click(function(){return t(this).hasClass("active")?(e.panel.setItemCss(t(this).attr("name"),t(this).attr("normal")),t(this).removeClass("active")):(e.panel.setItemCss(t(this).attr("name"),t(this).attr("active")),t(this).addClass("active")),!1}),t("a.button-align","#md-toolbar").click(function(){if(t(this).hasClass("active")){if(t(this).hasClass("mdt-left-alignment"))return;e.panel.setItemCss("text-align","left"),t("a.mdt-left-alignment","#md-toolbar").addClass("active"),t(this).removeClass("active")}else e.panel.setItemCss("text-align",t(this).attr("value")),t("a.button-align","#md-toolbar").removeClass("active"),t(this).addClass("active");return!1}),t("textarea","#md-toolbar").keyup(function(){e.panel.setItemTitle(t(this).val())}),t("a.mdt-proportions","#md-toolbar").click(function(){if(!t("#md-toolbar").attr("disabled")||"false"==t("#md-toolbar").attr("disabled"))if(t(this).hasClass("mdt-proportions-yes"))t(this).removeClass("mdt-proportions-yes");else{var a=t("input.mdt-width","#md-toolbar").val(),e=t("input.mdt-height","#md-toolbar").val(),o=1;a>0&&e>0&&(o=a/e),t(this).data("proportions",o),t(this).addClass("mdt-proportions-yes")}}),t("#dlg-video").dialog({resizable:!1,autoOpen:!1,draggable:!1,modal:!0,width:680,buttons:{OK:function(){e.updateVideo(t("#videoid").val(),t("#videoname").val(),t("#videothumb").attr("src")),t(this).dialog("close")}},open:function(){var a=e.getVideoValue();t("#videoid").val(a.id),t("#videoname").val(a.name),t("#videothumb").attr("src",a.thumbsrc)},close:function(){t(this).empty()}}),t("input[name=background-color]","#md-toolbar").spectrum({showInput:!0,allowEmpty:!0,preferredFormat:"hex",showButtons:!1,move:function(a){a?t("input[name=background-color]","#md-toolbar").val(a.toHexString()).trigger("change"):t("input[name=background-color]","#md-toolbar").val("").trigger("change")},hide:function(){var a=t("input[name=background-color]","#md-toolbar").val();""!=a?(t("input[name=background-transparent]","#md-toolbar").removeAttr("disabled"),t("input[name=background-color]","#md-toolbar").spectrum("set",a)):(t("input[name=background-transparent]","#md-toolbar").attr("disabled","disabled"),t("input[name=background-color]","#md-toolbar").spectrum("set",""))}}),t("input.mdt-color","#md-toolbar").spectrum({showInput:!0,allowEmpty:!0,preferredFormat:"hex",showButtons:!1,move:function(a){a?t("input.mdt-color","#md-toolbar").val(a.toHexString()).trigger("change"):t("input.mdt-color","#md-toolbar").val("").trigger("change")},hide:function(){var a=t("input.mdt-color","#md-toolbar").val();""!=a?t("input.mdt-color","#md-toolbar").spectrum("set",a):t("input.mdt-color","#md-toolbar").spectrum("set","")}}),t(".panel-change-videothumb").live("click",function(){Drupal.media.popups.mediaBrowser(function(a){var e=a[0];t("#videothumb").attr("src",e.url)})}),t("#btn-search").live("click",function(){var a=t("#txtvideoid").val(),e=Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/get-video-info";e=location.protocol+"//"+location.host+e,t.getJSON(e,{url:a},function(a){switch(a.type){case"youtube":if(a.data){var e=a.data;t("#videoid").val(a.fid),t("#videoname").val(e.title),t("#videothumb").attr("src",e.thumbnail_url)}break;case"vimeo":if(a.data){var e=a.data;t("#videoid").val(e.id),t("#videoname").val(e.title),t("#videothumb").attr("src",e.thumbnail_small)}break;default:alert("Could not find video info for this link. Try again!")}t("#videothumb").size()<=0&&t("#videothumb").parent().append('<a class="panel-change-videothumb" href="#">[Change video thumb]</a>')})}),t("#change-video").click(function(){var a=e.getVideoValue(),o=""!=a.id?1:0,i=Drupal.settings.basePath+Drupal.settings.pathPrefix+"?q=admin/structure/md-slider/video-setting";return i=location.protocol+"//"+location.host+i,t.post(i,{change:o},function(a){t("#dlg-video").append(a).dialog("open")}),!1}),t("#change-image").click(function(){Drupal.media.popups.mediaBrowser(function(a){var o=a[0];t("textarea.mdt-imgalt","#md-toolbar").val(o.filename),t("img.mdt-imgsrc","#md-toolbar").attr("src",o.url),t("input.mdt-fileid","#md-toolbar").val(o.fid),e.panel.setImageData(o.fid,o.filename,o.url)})}),t("#md-toolbar select.mdt-font-family").change(function(){e.panel.changeFontFamily(t(this).val()),e.changeFontWeightOption(t("option:selected",this).data("fontweight"))}),t("#md-toolbar select.mdt-font-weight").change(function(){var a=t(this).val();t(this).data("value",a),e.panel.setItemFontWeight(a)}),t("#border-position a").click(function(){if(t(this).hasClass("bp-all")){var a=t(this).siblings();a.filter(".active").size()<4?a.addClass("active"):a.removeClass("active")}else t(this).toggleClass("active");e.changeBorderPosition()}),t("#border-color","#md-toolbar").spectrum({showInput:!0,preferredFormat:"hex",showButtons:!1,move:function(a){a?t("#border-color","#md-toolbar").val(a.toHexString()).trigger("change"):t("#border-color","#md-toolbar").val("").trigger("change")},hide:function(a){var a=t("#border-color","#md-toolbar").val();t("#border-color","#md-toolbar").spectrum("set",a)}}),t("#md-toolbar input.mdt-border-radius").change(function(){if(""==t(this).val()||isNaN(t(this).val()))t(this).val(0);else if(3==t(this).siblings("input.mdt-border-radius").filter("[value=]").size()){var a=parseInt(t(this).val());t(this).siblings("input.mdt-border-radius").each(function(){t(this).val(a),e.panel.setItemCssPx(t(this).attr("name"),a)})}e.panel.setItemCssPx(t(this).attr("name"),t(this).val())}),t("#md-toolbar input.mdt-padding").change(function(){if(""==t(this).val()||isNaN(t(this).val()))t(this).val(0);else if(3==t(this).siblings("input.mdt-padding").filter("[value=]").size()){var a=parseInt(t(this).val());t(this).siblings("input.mdt-padding").each(function(){t(this).val(a),e.panel.setItemCssPx(t(this).attr("name"),a)})}e.panel.setItemCssPx(t(this).attr("name"),t(this).val())}),t("#md-toolbar input.mdt-custom-class").change(function(){var a=t(this).val();t(this).data("value",a),e.panel.setItemClass(a)}),t("#md-toolbar a.mdt-addlink").click(function(){var a=e.selectedItem.getItemValues(),i=t.extend({value:"",title:"",color:"",background:"",transparent:"",border:"",target:""},a.link);t("#mdt-linkexpand input.mdt-link-value").val(i.value),t("#mdt-linkexpand input.mdt-link-title").val(i.title),t("#mdt-linkexpand input.link-color").val(i.color),t("#mdt-linkexpand select.mdt-link-target").val(i.target),i.color?t("#mdt-linkexpand input.link-color").spectrum("set","#"+i.color):t("#mdt-linkexpand input.link-color").spectrum("set",""),t("#mdt-linkexpand input.link-background").val(i.background),i.background?t("#mdt-linkexpand input.link-background").spectrum("set","#"+i.background):t("#mdt-linkexpand input.link-background").spectrum("set",""),t("#mdt-linkexpand input.link-background-transparent").val(i.transparent),t("#mdt-linkexpand input.link-border").val(i.border),i.border?t("#mdt-linkexpand input.link-border").spectrum("set","#"+i.border):t("#mdt-linkexpand input.link-border").spectrum("set",""),t("#mdt-linkexpand").data("item",e.selectedItem).show(),t(document).bind("click",o)}),t("#mdt-linkexpand a.mdt-link-close").click(function(){t("#mdt-linkexpand").data("item",null),t("#mdt-linkexpand").hide()}),t("#link-color, #link-background, #link-border").spectrum({allowEmpty:!0,preferredFormat:"hex",showInput:!0,showButtons:!1,move:function(a){t(this).val(a?a.toHexString():"")},hide:function(){var a=t(this).val();t(this).spectrum("set",a)}}),t("#mdt-linkexpand a.mdt-link-save").click(function(){e.saveLinkData(),t("#mdt-linkexpand").hide(),t(document).unbind("click",o)}),t("#mdt-linkexpand a.mdt-link-remove").click(function(){var a=t("#mdt-linkexpand").data("item");null!=a&&t(a).data("link",null),t("#mdt-linkexpand").data("item",null),t("#mdt-linkexpand").hide()}),e.disableToolbar()},this.saveLinkData=function(){var a=t("#mdt-linkexpand").data("item"),e={value:t("#mdt-linkexpand input.mdt-link-value").val(),title:t("#mdt-linkexpand input.mdt-link-title").val(),target:t("#mdt-linkexpand select.mdt-link-target").val(),color:t("#mdt-linkexpand input.link-color").val(),background:t("#mdt-linkexpand input.link-background").val(),transparent:t("#mdt-linkexpand input.link-background-transparent").val(),border:t("#mdt-linkexpand input.link-border").val()};t("#link-color, #link-background, #link-border").spectrum("hide"),""!=e.value&&null!=a&&t(a).data("link",e)},this.changeBorderPosition=function(){var a=t("#border-position a.bp-top").hasClass("active")?1:0,o=t("#border-position a.bp-right").hasClass("active")?2:0,i=t("#border-position a.bp-bottom").hasClass("active")?4:0,l=t("#border-position a.bp-left").hasClass("active")?8:0;e.panel.changeBorderPosition(a+o+i+l)},this.weightArray={100:"Thin","100italic":"Thin Italic",200:"Extra Light","200italic":"Extra Light Italic",300:"Light","300italic":"Light Italic",400:"Normal","400italic":"Italic",500:"Medium","500italic":"Medium Italic",600:"Semi Bold","600italic":"Semi Bold Italic",700:"Bold","700italic":"Bold Italic",800:"Extra Bold","800italic":"Extra Bold Italic",900:"Heavy","900italic":"Heavy Italic"},this.changeFontWeightOption=function(a){var o='<option value=""></option>',i=t("#md-toolbar select.mdt-font-weight").data("value");if(a)for(var a=""+a,l=-1!=a.search(",")?a.split(","):[a],n=e.weightArray,r=0;r<l.length;r++){var d=l[r];o+='<option value="'+d+'">'+n[d]+"</option>"}t("#md-toolbar select.mdt-font-weight").html(o).val(i)},this.changeSelectItem=function(t){this.selectedItem=t,this.triggerChangeSelectItem()},this.triggerChangeSelectItem=function(){e.saveLinkData(),t("#mdt-linkexpand").hide(),null==this.selectedItem?this.disableToolbar():(this.changeToolbarValue(),t("#md-toolbar").attr("disabled")&&this.enableToolbar())},this.disableToolbar=function(){t("input, select, textarea","#md-toolbar").not("input.mdt-spacei").val("").attr("disabled",!0),t("#md-toolbar div.mdt-item-type").hide(),t("#md-toolbar").attr("disabled",!0)},this.enableToolbar=function(){t("input, select, textarea","#md-toolbar").removeAttr("disabled"),t("#md-toolbar").attr("disabled",!1)},this.changeToolbarValue=function(){if(null!=this.selectedItem){var a=this.selectedItem.getItemValues();t("input.mdt-width","#md-toolbar").val(a.width),t("input.mdt-height","#md-toolbar").val(a.height),t("input.mdt-left","#md-toolbar").val(a.left),t("input.mdt-top","#md-toolbar").val(a.top),t("input.mdt-starttime","#md-toolbar").val(a.starttime),t("input.mdt-stoptime","#md-toolbar").val(a.stoptime),t("select.mdt-startani","#md-toolbar").val(a.startani),t("select.mdt-stopani","#md-toolbar").val(a.stopani),t("input.mdt-opacity","#md-toolbar").val(a.opacity),t("input.mdt-custom-class","#md-toolbar").val(a.mdtclass),t("select.mdt-style","#md-toolbar").val(a.style),t("input.mdt-background","#md-toolbar").val(a.backgroundcolor),a.backgroundcolor?t("input[name=background-color]","#md-toolbar").spectrum("set","#"+a.backgroundcolor):t("input[name=background-color]","#md-toolbar").spectrum("set",""),t("input.mdt-background-transparent","#md-toolbar").val(a.backgroundtransparent),t("#border-position a").removeClass("active");var e=a.borderposition;1&e&&t("#border-position a.bp-top").addClass("active"),2&e&&t("#border-position a.bp-right").addClass("active"),4&e&&t("#border-position a.bp-bottom").addClass("active"),8&e&&t("#border-position a.bp-left").addClass("active"),t("input.mdt-border-width","#md-toolbar").val(a.borderwidth),t("select.mdt-border-style","#md-toolbar").val(a.borderstyle),a.bordercolor?t("#border-color","#md-toolbar").spectrum("set","#"+a.bordercolor):t("#border-color","#md-toolbar").spectrum("set",""),t("input.border-color","#md-toolbar").val(a.bordercolor),t("input.mdt-br-topleft","#md-toolbar").val(a.bordertopleftradius),t("input.mdt-br-topright","#md-toolbar").val(a.bordertoprightradius),t("input.mdt-br-bottomright","#md-toolbar").val(a.borderbottomrightradius),t("input.mdt-br-bottomleft","#md-toolbar").val(a.borderbottomleftradius),t("input.mdt-p-top","#md-toolbar").val(a.paddingtop),t("input.mdt-p-right","#md-toolbar").val(a.paddingright),t("input.mdt-p-bottom","#md-toolbar").val(a.paddingbottom),t("input.mdt-p-left","#md-toolbar").val(a.paddingleft);var o=1;a.width>0&&a.height>0&&(o=a.width/a.height),t("a.mdt-proportions","#md-toolbar").data("proportions",o);var i=t("#md-toolbar div.mdt-item-type").hide();"text"==a.type?(t("textarea.mdt-textvalue","#md-toolbar").val(a.title),t(i).filter(".mdt-type-text").show(),t("input.mdt-fontsize","#md-toolbar").val(a.fontsize),t("select.mdt-font-family","#md-toolbar").val(a.fontfamily).trigger("change"),t("select.mdt-font-weight","#md-toolbar").val(a.fontweight),t("a.mdt-font-bold","#md-toolbar").toggleClass("active","bold"==a.fontweight),t("a.mdt-font-italic","#md-toolbar").toggleClass("active","italic"==a.fontstyle),t("a.mdt-font-underline","#md-toolbar").toggleClass("active","underline"==a.textdecoration),t("a.mdt-font-allcaps","#md-toolbar").toggleClass("active","uppercase"==a.texttransform),t("a.mdt-left-alignment","#md-toolbar").toggleClass("active","left"==a.textalign),t("a.mdt-center-alignment","#md-toolbar").toggleClass("active","center"==a.textalign),t("a.mdt-right-alignment","#md-toolbar").toggleClass("active","right"==a.textalign),t("a.mdt-justified-alignment","#md-toolbar").toggleClass("active","justified"==a.textalign),t("input.mdt-color","#md-toolbar").val(a.color),a.color?t("input.mdt-color","#md-toolbar").spectrum("set","#"+a.color):t("input.mdt-color","#md-toolbar").spectrum("set","")):"image"==a.type?(t("textarea.mdt-imgalt","#md-toolbar").val(a.title),t("img.mdt-imgsrc","#md-toolbar").attr("src",a.thumb),t("input.mdt-fileid","#md-toolbar").val(a.fileid),t(i).filter(".mdt-type-image").show()):"video"==a.type&&(t("textarea.mdt-videoname","#md-toolbar").val(a.title),t("input.mdt-video-fileid","#md-toolbar").val(a.fileid),t("img.mdt-videosrc","#md-toolbar").attr("src",a.thumb),t(i).filter(".mdt-type-video").show(),t("#md-toolbar input.mdt-color").attr("disabled",!0))}},this.changePositionValue=function(a,e){t("input.mdt-left","#md-toolbar").val(Math.round(a)),t("input.mdt-top","#md-toolbar").val(Math.round(e))},this.changeSizeValue=function(a,e){t("input.mdt-width","#md-toolbar").val(Math.round(a)),t("input.mdt-height","#md-toolbar").val(Math.round(e))},this.getItemSetting=function(){return{starttime:t("input.mdt-starttime","#md-toolbar").val(),stoptime:t("input.mdt-stoptime","#md-toolbar").val(),startani:t("select.mdt-startani","#md-toolbar").val(),stopani:t("select.mdt-stopani","#md-toolbar").val(),customclass:t("input.mdt-custom-class","#md-toolbar").val(),style:t("select.mdt-style","#md-toolbar").val()}},this.changeTimelineValue=function(){null!=this.selectedItem&&(t("input.mdt-starttime","#md-toolbar").val(Math.round(this.selectedItem.data("starttime"))),t("input.mdt-stoptime","#md-toolbar").val(Math.round(this.selectedItem.data("stoptime"))))},this.updateVideo=function(a,o,i){t("textarea.mdt-videoname","#md-toolbar").val(o),t("input.mdt-video-fileid","#md-toolbar").val(a),t("img.mdt-videosrc","#md-toolbar").attr("src",i),e.panel.setVideoData(a,o,i)},this.getVideoValue=function(){return{name:t("textarea.mdt-videoname","#md-toolbar").val(),thumbsrc:t("img.mdt-videosrc","#md-toolbar").attr("src"),id:t("input.mdt-video-fileid","#md-toolbar").val()}},this.focusEdit=function(){if(null!=this.selectedItem){var a=this.selectedItem.data("type");"text"==a?t("textarea.mdt-textvalue","#md-toolbar").focus():"image"==a?t("#change-image").trigger("click"):"video"==a&&t("#change-video").trigger("click")}};var o=function(a){i(t("#mdt-linkexpand").get(0),a.target,t("#mdt-linkexpand").get(0))||(e.saveLinkData(),t("#mdt-linkexpand").data("item",null),t("#mdt-linkexpand").hide(),t(document).unbind("click",o))},i=function(t,a,e){if(t==a)return!0;if(t.contains)return t.contains(a);if(t.compareDocumentPosition)return!!(16&t.compareDocumentPosition(a));for(var o=a.parentNode;o&&o!=e;){if(o==t)return!0;o=o.parentNode}return!1};this.init()};window.MdSliderToolbar=a}(jQuery);

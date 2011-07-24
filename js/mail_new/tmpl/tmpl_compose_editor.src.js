
rr.styles('wysiwyg_frame:rm_tinymce'
	, 'body {padding:0 0 0 3px;margin:0;background-color:#FFF;}'

	, 'body, td, pre {font-family:arial,sans-serif !important;font-size:10pt;}'
	, 'p {margin:0pt;}'

	, 'blockquote {border-left:1px solid #BBB;margin:1ex;padding-left:1ex}'
	, 'a {color:#0000EE !important;}'

	, 'body {margin:4px 0px}'
	, '.tr-field {font:normal small arial}'
	, 'img {-moz-force-broken-image-icon: 1;}'

	, '.mceItemTable, .mceItemTable td, .mceItemTable th, .mceItemTable caption, .mceVisualAid {border: 1px dashed #BBB;}'
	, 'a.mceItemAnchor {width:12px; line-height:6px; overflow:hidden; padding-left:12px;}'
	, 'img.mceItemAnchor {width:12px; height:12px;}'


	, '.fontSize1 {font-size:7pt !important;}'
	, '.fontSize2 {font-size:8pt !important;}'
	, '.fontSize3 {font-size:10pt !important;}'
	, '.fontSize4 {font-size:12pt !important;}'
	, '.fontSize5 {font-size:14pt !important;}'
	, '.fontSize6 {font-size:18pt !important;}'
	, '.fontSize7 {font-size:24pt !important;}'

	, 'font[size="1"] {font-size:7pt !important;}'
	, 'font[size="2"] {font-size:8pt !important;}'
	, 'font[size="3"] {font-size:10pt !important;}'
	, 'font[size="4"] {font-size:12pt !important;}'
	, 'font[size="5"] {font-size:14pt !important;}'
	, 'font[size="6"] {font-size:18pt !important;}'
	, 'font[size="7"] {font-size:24pt !important;}'


	, 'blockquote span.quote {color: #f00;}'

	, '.mceItemHiddenSpellWord {background:url("/i/chameleon/misspell.png") repeat-x bottom left; cursor:default;}'
	);


rr.styles('tmpl:tinymce_tmpl.theme_ramail'
	/* Reset */
	, '.b-wsgRamail table, .b-wsgRamail tbody, .b-wsgRamail a, .b-wsgRamail img, .b-wsgRamail tr, .b-wsgRamail td, .b-wsgRamail iframe, .b-wsgRamail span {border:0; margin:0; padding:0; background:transparent; white-space:nowrap; text-decoration:none; font-weight:normal;color:#000}' //, .b-wsgRamail *

	/* Containers */
	, '.b-wsgRamail iframe {display:block; background:#FFF; border-bottom:1px solid #CCC;}'


	/* Layout */
	, '.b-wsgRamail span.mceIcon, .b-wsgRamail img.mceIcon {display:block; width:20px; height:20px}'
	, '.b-wsgRamail .mceIcon {background:url(http://i.rambler.ru/m/83/i/chameleon/ramail-icons.png) no-repeat 20px 20px}'

	/* Button */
	, '.b-wsgRamail .mceButton {display:block; border:1px solid #FFF; background-color:#FFF;width:20px; height:20px;}'
	, '.b-wsgRamail a.mceButtonEnabled:hover {border:1px solid;border-color:#9EBDD6 #D2E4F1 #DBECF6;}'
	, '.b-wsgRamail a.mceButtonActive {border:1px solid;border-color:#989898 #CBCBCB #CBCBCB;}'
	, '.b-wsgRamail .mceButtonDisabled span {opacity:0.3; -ms-filter:\'alpha(opacity=30)\'; filter:alpha(opacity=30)}'

	/* Separator */
	, '.b-wsgRamail .mceSeparator {display:block; border-left:1px solid #E0E0E0; width:2px; height:16px; margin:0 3px 0 1px;}'

	/* ListBox */
	, '.b-wsgRamail  .mceListBox, .b-wsgRamail .mceListBox a {display:block}'
	, '.b-wsgRamail  .mceListBox .mceText {padding-left:4px; width:70px; text-align:left; border:1px solid #CCC; border-right:0; background:#FFF; font-family:Tahoma,Verdana,Arial,Helvetica; font-size:11px; height:20px; line-height:20px; overflow:hidden}'
	, '.b-wsgRamail  .mceListBox .mceOpen {width:10px; height:20px; background:url(http://i.rambler.ru/m/83/i/chameleon/ramail-icons.png) -10px -1594px; margin-right:2px; border:1px solid #CCC;border-left:0 none;}'

	, '.b-wsgRamail  table.mceListBoxEnabled:hover .mceText, .b-wsgRamail .mceListBoxHover .mceText, .b-wsgRamail .mceListBoxSelected .mceText {border:1px solid #A2ABC0; border-right:0; background:#FFF}'
	, '.b-wsgRamail  table.mceListBoxEnabled:hover .mceOpen, .b-wsgRamail .mceListBoxHover .mceOpen, .b-wsgRamail .mceListBoxSelected .mceOpen {background-color:#FFF; border:1px solid #A2ABC0;border-left:0 none;}'
	, '.b-wsgRamail  .mceListBoxDisabled a.mceText {color:gray; background-color:transparent;}'
	, '.b-wsgRamail  .mceListBoxMenu {overflow:auto; overflow-x:hidden}'
	, '.b-wsgRamail  .mceOldBoxModel .mceListBox .mceText {height:22px}'
	, '.b-wsgRamail  .mceOldBoxModel .mceListBox .mceOpen {width:11px; height:22px;}'
	, '.b-wsgRamail  select.mceNativeListBox {font-family:\'MS Sans Serif\',sans-serif,Verdana,Arial; font-size:7pt; background:#F0F0EE; border:1px solid gray; margin-right:2px;}'

	, ''
	/* Menu */
	, '.defaultSkin  .mceMenu {position:absolute; left:0; top:0; z-index:1000; border:1px solid #D4D0C8}'
	, '.defaultSkin  .mceNoIcons span.mceIcon {width:0;}'
	, '.defaultSkin  .mceNoIcons a .mceText {padding-left:10px}'
	, '.defaultSkin  .mceMenu table {background:#FFF}'
	, '.defaultSkin  .mceMenu a, .defaultSkin .mceMenu span, .defaultSkin .mceMenu {display:block}'
	, '.defaultSkin  .mceMenu td {height:20px}'
	, '.defaultSkin  .mceMenu a {position:relative;padding:3px 0 4px 0}'
	, '.defaultSkin  .mceMenu .mceText {position:relative; display:block; font-family:Tahoma,Verdana,Arial,Helvetica; color:#000;margin:0; padding:0 25px 0 25px; display:block}'
	, '.defaultSkin  .mceMenu span.mceText, .defaultSkin .mceMenu .mcePreview {font-size:11px}'
	, '.defaultSkin  .mceMenu pre.mceText {font-family:Monospace}'
	, '.defaultSkin  .mceMenu .mceIcon {position:absolute; top:0; left:0; width:22px;}'
	, '.defaultSkin  .mceMenu .mceMenuItemEnabled a:hover, .defaultSkin .mceMenu .mceMenuItemActive {background-color:#dbecf3;text-decoration:none;}'
	, '.defaultSkin  td.mceMenuItemSeparator {background:#DDD; height:1px}'
	, '.defaultSkin  .mceMenuItemTitle a {border:0; background:#EEE; border-bottom:1px solid #DDD}'
	, '.defaultSkin  .mceMenuItemTitle span.mceText {color:#000; font-weight:bold; padding-left:4px}'
	, '.defaultSkin  .mceMenuItemDisabled .mceText {color:#888}'
	, '.defaultSkin  .mceMenuItemSelected .mceIcon {background:url(img/menu_check.gif)}'
	, '.defaultSkin  .mceNoIcons .mceMenuItemSelected a {background:url(img/menu_arrow.gif) no-repeat -6px center;background-color:#eee;}'
	, '.defaultSkin  .mceMenu span.mceMenuLine {display:none}'
	, '.defaultSkin  .mceMenuItemSub a {background:url(img/menu_arrow.gif) no-repeat top right;}'

	/* ListBox */
	, '.defaultSkin  .mceListBox, .defaultSkin .mceListBox a {display:block}'
	, '.defaultSkin  .mceListBox .mceText {padding-left:4px; width:70px; text-align:left; border:1px solid #CCC; border-right:0; background:#FFF; font-family:Tahoma,Verdana,Arial,Helvetica; font-size:11px; height:20px; line-height:20px; overflow:hidden}'
	, '.defaultSkin  .mceListBox .mceOpen {width:9px; height:20px; background:url(../../img/icons.gif) -741px 0; margin-right:2px; border:1px solid #CCC;}'
	, '.defaultSkin  table.mceListBoxEnabled:hover .mceText, .defaultSkin .mceListBoxHover .mceText, .defaultSkin .mceListBoxSelected .mceText {border:1px solid #A2ABC0; border-right:0; background:#FFF}'
	, '.defaultSkin  table.mceListBoxEnabled:hover .mceOpen, .defaultSkin .mceListBoxHover .mceOpen, .defaultSkin .mceListBoxSelected .mceOpen {background-color:#FFF; border:1px solid #A2ABC0}'
	, '.defaultSkin  .mceListBoxDisabled a.mceText {color:gray; background-color:transparent;}'
	, '.defaultSkin  .mceListBoxMenu {overflow:auto; overflow-x:hidden}'
	, '.defaultSkin  .mceOldBoxModel .mceListBox .mceText {height:22px}'
	, '.defaultSkin  .mceOldBoxModel .mceListBox .mceOpen {width:11px; height:22px;}'
	, '.defaultSkin  select.mceNativeListBox {font-family:\'MS Sans Serif\',sans-serif,Verdana,Arial; font-size:7pt; background:#F0F0EE; border:1px solid gray; margin-right:2px;}'


	/* Theme */
	, '.b-wsgRamail span.mce_bold {background-position:50% -2005px;}'
	, '.b-wsgRamail span.mce_italic {background-position:50% -2035px;}'
	, '.b-wsgRamail span.mce_underline {background-position:50% -2065px;}'
	, '.b-wsgRamail span.mce_strikethrough {background-position:50% -2095px;}'
	, '.b-wsgRamail span.mce_undo {background-position:50% -2124px;}'
	, '.b-wsgRamail span.mce_redo {background-position:50% -2155px;}'
	, '.b-wsgRamail span.mce_cleanup {background-position:-40px 0}'
	, '.b-wsgRamail span.mce_insertunorderedlist {background-position:50% -2455px;}'
	, '.b-wsgRamail span.mce_insertorderedlist {background-position:50% -2425px;}'

	, '.b-wsgRamail span.mce_outdent {background-position:50% -2365px;}'
	, '.b-wsgRamail span.mce_indent {background-position:50% -2395px;}'

	, '.b-wsgRamail span.mce_justifyleft {background-position:50% -2245px;}'
	, '.b-wsgRamail span.mce_justifycenter {background-position:50% -2275px;}'
	, '.b-wsgRamail span.mce_justifyright {background-position:50% -2305px;}'
	, '.b-wsgRamail span.mce_justifyfull {background-position:50% -2335px;}'



	/* ramail*/
	, '.b-wsgRamail {height:100%;margin:0;padding:0;position:relative;}' //background-color: #F00;
	, '.b-wsgRamail-toolbar {background-color: #FFF;border-bottom:1px solid #CBCBCB;left:0;padding:1px;position:absolute;right:0;top:0;overflow:hidden;}'

	, '.b-wsgRamail-box {top:26px;left:0;right:1px;bottom:1px;overflow:hidden;position:absolute;background-color: #FFF;}'
	, '.b-wsgRamail iframe {width:100% !important; height:100% !important; background-color: #FFF;margin:0;padding:0;border:0 none;}'
	, '.b-wsgRamail {}'
	, '.b-wsgRamail {}'
	);



rr.styles('tmpl:compose_editor'
	, '.b-compose_editor {position:relative;}'
	, '.b-compose_editor-wrap_textarea {padding:1px;display:block;}'
	, '.b-compose_editor-textarea_text {background-color:#FFF;width:100%;border:0px none;padding:0;margin:0;height:300px;}' //background-color:#FFE0E0;
	, '.b-compose_editor-wysiwyg_box {background-color:#FFF;bottom:0;left:0;position:absolute;right:0;top:0;overflow:hidden;}'

	, '.b-compose_editor-wysiwyg_box {}'
	, '.b-compose_editor-textarea_html {visibility:hidden;display:none;}'
	);



tmpl.compose_editor = function(_, pr){
	var ns = this;

	ns.node = _('div.b-compose_editor'
		, _('label.b-compose_editor-wrap_textarea'
			, ns.textarea_text = _('textarea.b-compose_editor-textarea_text', {name: 'text'})
			)

		, _('div.b-compose_editor-wysiwyg_box'
			, ns.textarea_html = _('textarea.b-compose_editor-textarea_html', {name: 'html', value:""})
			)
		)
	};

// шаблона для tinymce редактора
tmpl.tinymce_ramail = function(_, pr) {
	var ns = this;

	ns.node = _('div.b-wsgRamail'
		, ns.box_toolbar = _('div.b-wsgRamail-toolbar')
		, ns.box =_('div.b-wsgRamail-box')
		)
	};

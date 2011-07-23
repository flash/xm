rr.styles('tmpl:rc_calendar',
	".rc-toolbar {padding-bottom:0.3em;overflow:hidden;}",
	".rc-toolbar-end {clear:both;}",

	".rc-toolbar-top {}", //float:right;

	".rc-toolbar-b {cursor:pointer;text-decoration:none;color:#333;background-color:#fff;border:1px solid #fff;float:left;margin:0 0.5ex;padding:0.2em 1ex 0.2ex;}",
	rr.IE<7&&".rc-tbar-b {width:1em;}",
	".rc-toolbar-b:hover {border-color:#AEDCF5;}",
	".rc-toolbar-b--active, .rc-toolbar-b--active:hover {background-color:#EFF9FF;border-color:#AEDCF5;color:#000;}",
	".rc-toolbar-b span {white-space:nowrap;}",
	".rc-toolbar-b .i {display:none;background-color:#777;height:24px;margin:0 auto;width:24px;}", //display:block;


	".rc-page-toolbar button {padding:0 1ex;}",
	//".rc-page-toolbar span.s {padding:0 0.5ex;}",
	//".rc-page-toolbar button, .rc-toolbar-bottom span {vertical-align:middle;}",


	".rc-calendar-resizer {background-color:#F5F5F5;height:5px;cursor:s-resize;position:relative;font-size:0;}",//overflow:hidden;
	".rc-page--mode-month .rc-calendar-resizer {display:none;}",

	".rc-page-toolbar {padding:3px 1ex;margin-bottom:1em;background-color:#EFF9FF;border-top:1px solid #AEDCF5;}",
	//".rc-page--mode-1 .rc-page-toolbar--pleft {padding-left:3em;}",


	".rc-page-toolbar-clear {clear:right;}",

	".rc-page-toolbar .gotoday {margin-left:0.3em;}",
	".rc-page-toolbar .date {margin-left:1em;text-decoration:none;color:#000;}",
	".rc-page-toolbar .date:hover {border-bottom:1px dashed;}",
	""
	);


rr.styles('tmpl:rc_calendar',
	//".rc-areaday {height:100%;overflow:auto;position:relative;}", //width:100%;
	".rc-areaday {height:100%;position:relative;border-top:1px solid #ddd;border-bottom:1px solid #ddd;}", //width:100%;
	".rc-areaday .box {overflow:hidden;position:relative;background-color:#FFF;}", //float:left;clear:right;

	//rr.IE<7 && ".rc-areaday .box {width:100%;}", //float:left;clear:right;
	//!(rr.IE<7) && ".rc-areaday .box {width:100%;}",
	".rc-areaday .box {width:100%;}",


	".rc-areaday .rows {overflow:hidden;margin-top:3px;font-size: 12px;}",
	".rc-areaday .r {border-bottom:1px dashed #AEDCF5; border-top:1px solid #AEDCF5;overflow:hidden;}",
	".rc-areaday-strut {border-top:1px solid #AEDCF5;overflow:hidden;height:2px;}",

	".rc-areaday .r {margin-bottom:23px;height:23px;}",

	//".rc-areaday .r {margin-bottom:13px;height:13px;}",
	//".rc-areaday .r {margin-bottom:30px;height:30px;}",
	//".rc-areaday .r {margin-bottom:1.3em;height:1.3em;}",



	//".rc-areaday .r--fr {padding-top:1px;border-top:0px none #FFF;}",	//".rc-areaday .r--ls {}",
	".rc-areaday .r--end {height:0;overflow:hidden;}",


	".rc-areaday .rh {display:none;}",
	".rc-areaday--numbpanel .rh {display:block;border-top:1px solid #ccc;height:19px;left:1px;margin-left:5px;overflow:hidden;position:absolute;width:40px;z-index:1;}",
	//".rc-areaday .rh--fr {border-top:0px none #FFF;}",



	".rc-areaday .clbox {left:0;right:0;position:absolute;top:0;bottom:0;}",
	".rc-areaday table.columns {width:100%;height:100%;}",

	rr.IE<8&&".rc-areaday table.columns {height:100em;}",

	".rc-areaday table.columns {table-layout:fixed;border-collapse:collapse;}",

	".rc-areaday table.columns td {padding:0;margin:0;vertical-align:top;}",
	".rc-areaday table.columns td {border:0 solid #AEDCF5;border-width:0 0 0 1px;}",

	".rc-areaday table.columns th {padding:0;width:0;}", //border-right:1px solid #ccc;
	".rc-areaday--numbpanel table.columns th {padding:0;width:45px;background-color:#EFEFEF;}", //border-right:1px solid #ccc;


	".rc-areaday table.columns td.d4 {border-color:#999;border-width:0 2px;}",



	".rc-areaday .cbox {height:0;position:relative;z-index:1;}",
	".rc-areaday .cbox--dn {margin:3px 9px 0 2px;}", //background-color:#0F0;
	".rc-areaday .cbox--up {margin: 0 2px;}", //background-color:#f00;

	".rc-areaday .task {left:0;position:absolute;width:100%;top:0px;}",
	".rc-areaday .task div {margin-right:1px;height:90px;border:1px solid}",


	// item
	".rc-day-item {position:absolute;top:0;left:0;width:100%;}",
	".rc-day-item--active  {z-index:29999 !important;}",


	".rc-day-item .c, .rc-day-item .u, .rc-day-item .d {border-color:#9B9CCF;border-style:solid;border-width:0;}",
	".rc-day-item .c {cursor:default;font-size:12px;position:relative;padding:1px 1px 6px;border-width:0 1px;background-color:#CCCCFF;overflow:hidden;}",

	// gradient
	rr.Gecko && ".rc-day-item .c {background-image:-moz-linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,0.6));}",
	rr.WebKit && ".rc-day-item .c {background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.4)));}",
	rr.IE && ".rc-day-item .c {filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF, endColorstr=#77FFFFFF);}",
	//rr.Opera && '.rc-day-item .c {background-image:url("data:image/svg+xml;,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22gr%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%220%25%22%20y2%3D%22100%25%22%3E%3Cstop%20offset%3D%220%25%22%20style%3D%22stop-color%3A%23FFF%3Bstop-opacity%3A0%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20style%3D%22stop-color%3A%23FFF%3Bstop-opacity%3A0.6%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20style%3D%22fill%3Aurl(%23gr)%22%2F%3E%3C%2Fsvg%3E");}',

	// color
	".rc-x--color-0 .xc {background-color: #b7cfed; border-color: #92a5bc;}",
	".rc-x--color-1 .xc {background-color: #e2d2c3; border-color: #b1a79c;}",
	".rc-x--color-2 .xc {background-color: #b3e5e1; border-color: #8fb2b2;}",
	".rc-x--color-3 .xc {background-color: #efb4cf; border-color: #bb8ea4;}",
	".rc-x--color-4 .xc {background-color: #c9c9f7; border-color: #a09fb6;}",
	".rc-x--color-5 .xc {background-color: #fcb895; border-color: #c49176;}",
	".rc-x--color-6 .xc {background-color: #f7e5c1; border-color: #c0b49a;}",
	".rc-x--color-7 .xc {background-color: #ade0b9; border-color: #89ad92;}",
	".rc-x--color-8 .xc {background-color: #d4eafc; border-color: #a7b8c5;}",
	".rc-x--color-9 .xc {background-color: #d5befc; border-color: #a396b0;}",
	".rc-x--color-10 .xc {background-color: #fcd192; border-color: #c3a475;}",
	".rc-x--color-11 .xc {background-color: #ffeea6; border-color: #c6bb85;}",
	".rc-x--color-12 .xc {background-color: #abcecd; border-color: #87a4a5;}",
	".rc-x--color-13 .xc {background-color: #abe6ed; border-color: #8ab1b9;}",
	".rc-x--color-14 .xc {background-color: #dae1e5; border-color: #acb2b7;}",
	".rc-x--color-15 .xc {background-color: #f0f4f5; border-color: #adb2b7;}",


	//".rc-day-item .c--p {margin-right:1px;}", // zabil za4em nujno

	".rc-day-item--A .u, .rc-day-item--B .d, .rc-day-item--AB .u, .rc-day-item--AB .d {display:none;}",

	".rc-day-item--A {margin-top:-3px;}",
	".rc-day-item--A .c {padding-bottom:11px;padding-top:0;}",

	".rc-day-item--B .c {padding-bottom:11px;}",

	".rc-day-item--AB {margin-top:-3px;}",
	".rc-day-item--AB .c {padding-bottom:13px;padding-top:0;}",

	".rc-day-item .c--active {border-width:1px 2px;padding:0 0 5px;}",//padding:0 0 5px;

	".rc-day-item--A .c--active {border-top-width:0;padding-bottom:10px;}",//
	".rc-day-item--B .c--active {border-bottom-width:0;padding-bottom:11px;}",//
	".rc-day-item--AB .c--active {border-width:0 2px;padding-bottom:13px;}",//

	".rc-day-item .h {font-size:x-small;height:1.3em;padding:1px 1ex 2px;white-space:nowrap;}", //background-color:#B7B7E5;cursor:default;

	".rc-day-item .b {padding:0 0.5ex;color:#40404F;}",
	//".rc-areaday-item .f {background-color:transparent;bottom:0;cursor:s-resize;height:4px;position:absolute;width:100%;}",

	".rc-day-item .u, .rc-day-item .d {margin:0 1px;overflow:hidden;height:0;}",
	".rc-day-item .u {border-top-width:1px;}",
	".rc-day-item .d {border-bottom-width:1px;}",

	".rc-day-item .rzA, .rc-day-item .rzB {z-index:1;position:absolute;left:0px;right:0px;height:4px; cursor:s-resize;overflow:hidden;"+(rr.IE?"background:transparent url('about:blank');" : "background-color:transparent;")+"}",//
	".rc-day-item .rzA {top:0px;}",
	".rc-day-item .rzB {margin-top:-3px;}",
	".rc-day-item--A .rzA, .rc-day-item--B .rzB, .rc-day-item--AB .rzA, .rc-day-item--AB .rzB {display:none;}",




	//bottom:-2px;margin-top:-3px;

	rr.IE<7 && ".rc-day-item .rzA, .rc-day-item .rzB {width:100%;font-size:0px;background:transparent url('about:blank');}",//margin-top:-5px;bottom:auto;
	rr.IE<7 && ".rc-day-item .bx {position:absolute;}",

	".rc-areaday-resizer {background-color:#ccc;cursor:n-resize;height:5px;margin-top:1px;overflow-x:hidden;overflow-y:hidden;position:absolute;width:2em;z-index:1;}",
	".rc-areaday-resizerAB {display:none;background-color:#f33;height:5px;margin-top:-3px;overflow-x:hidden;overflow-y:hidden;position:absolute;width:2em;z-index:1;}",
	".rc-areaday-resizerAB--darg {display:block;}",
	".rc-areaday-resizer--darg {background-color:#000;}",

	// selection

	".rc-range {position:absolute;top:0;left:0;width:100%;z-index:999;}",
	".rc-range-box {padding-bottom:0;border:1px dashed #1A5F25;opacity:0.35;margin:0 -1px;cursor:default;font-size:12px;position:relative;background-color:#ADEAB6;overflow:hidden;}",
	//".rc-range-box {-moz-box-shadow:0 0 7px #333;border:1px solid rgba(0,0,0, 0.7);background-color:rgba(255, 255, 255, 0.5);padding-bottom:0;margin:0 -1px;cursor:default;font-size:12px;position:relative;overflow:hidden;}",

	rr.IE<9 && ".rc-range-box {border-color:#6CB577;background-color:transparent; filter:progid:DXImageTransform.Microsoft.gradient (startColorstr=#77ADEAB6, endColorstr=#77ADEAB6);}",

	".rc-range--x-A {margin-top:-3px;}",
	".rc-range-box--x-A {border-top-width:0px;padding-bottom:4px;}",


	".rc-range-box--x-B {border-bottom-width:0px;padding-bottom:5px;}",

	".rc-range--x-AB {margin-top:-3px;}",
	".rc-range-box--x-AB {border-width:0 1px;padding-bottom:9px;}",

	".rc-range-c {position:absolute;overflow:hidden;width:100%;top:1px;}",
	".rc-range-c .bx {padding:2px 0.5ex;overflow:hidden;font-size:small;text-align:center;}",

	rr.IE<7 ? ".rc-range-c--dn {position:relative;overflow:visible;top:auto;}"
		: ".rc-range-c--dn {top:auto;bottom:1px;}",
	rr.IE <7  && ".rc-range-c--dn .ie {position:absolute;width:100%;bottom:1px;overflow:hidden;}",

	".rc-range-c .add, .rc-range-c .info {display:none;}",

	".rc-range-c--m-add .add {display:"+(rr.IE<7?'inline-block;':'inline')+";font-size:medium;margin:0;background-color:#A7DFAF;border:1px solid #9BCFA2;}",// padding:0 20px;
	".rc-range-c--m-add a {text-decoration:none;color:#13740F;padding:0 0.3em;}",
	".rc-range-c--m-text .info {display:"+(rr.IE<7?'inline-block;':'inline')+";color:#333;padding:0 0.3ex;white-space:nowrap;}", //background-color:#FFFFFF;border:1px solid #333;

	//range week
	".rc-range-wk {position:absolute;overflow:hidden;top:1px;left:1px;}",
	".rc-range-wk .bx {padding:2px 0.5ex;overflow:hidden;font-size:small;text-align:center;}",
	".rc-range-wk--ps-right {right: 1px;left:auto;}",
	".rc-range-wk--ps-center {width:100%;}",

	".rc-range-wk .add, .rc-range-wk .info {display:none;}",
	".rc-range-wk--m-add .add {display:"+(rr.IE<7?'inline-block':'inline')+";font-size:medium;margin:0;background-color:#A7DFAF;border:1px solid #9BCFA2;}",// padding:0 20px;
	".rc-range-wk--m-add a {text-decoration:none;color:#13740F;padding:0 0.3em;}",// 20px

	"",
	"",
	"",

	""
	);





rr.styles('tmpl:rc_calendar',
	".rc-areamonth {position:relative;}", //height:100%;
	".rc-page--mode-month .rc-areamonth-c {border-bottom:1px solid;border-right:1px solid;border-color:#AEDCF5;}",
	//".rc-areamonth--pleft {padding-left:3em;"+(!(rr.IE==6||rr.Opera||rr.WebKit)?"padding-right:1px;":'')+"}",
	".rc-areamonth--pleft {padding-left:45px;}",
	".rc-areamonth-head--hide {display:none;}",
	".rc-areamonth-head td {text-align:center;}",

	".rc-areamonth table {width:100%;table-layout:fixed;}", //border-collapse:collapse;

	".rc-areamonth thead tr {height: 1.3em;}",
	".rc-areamonth thead td {overflow:hidden;}",
	//".rc-areamonth td {width:100%;}",

	".rc-areamonth-resizer {background-color:transparent;bottom:0;cursor:s-resize;height:5px;left:0;right:0;overflow:hidden;position:absolute;z-index:1;}",
	rr.IE<7&&".rc-areamonth-resizer {width:100%}",


	".rc-areaweek {height:auto;position:relative;overflow:hidden;background-color:#FFFFFF;}",
	rr.IE<7&&".rc-areaweek {width:100%}",

	".rc-areaweek .bt {position:absolute;left:0;right:0;top:0;bottom:0;overflow:hidden;}",
	rr.IE<8&&".rc-areaweek .bt {height:100%}",

	!(rr.IE<7)&&".rc-areaweek .gr {position:absolute;left:0;right:0;bottom:0;height:20px;overflow:hidden;background-image:url(http://i.r0.ru/m/i/chameleon/ramail-mask.png);background-position:0 100%;}",
	".rc-areaweek .gr {display:none;}",


	".rc-areaweek table {height:100%;border-spacing:0px;border-collapse:collapse;}", //border-collapse:separate;   border-bottom:1px solid #ccc;
	rr.IE<7&&".rc-areaweek table {height:15em}",
	".rc-areaweek td {height:100%;padding:0;vertical-align:top;border-color:#AEDCF5;border-style:solid;border-width:1px 0 0 1px;}", //overflow:hidden;


	".rc-areaweek .h {overflow:hidden;background-color:#EFF9FF;white-space:nowrap;padding:0 1ex;text-align:left;font-size:small;_height:20px}",

	".rc-areaweek .d {margin-left:1ex;}", //display:none float:left;
	".rc-areamonth--ptop .d {display:none;}",


	rr.Gecko && ".rc-areaweek .h {background-image:-moz-linear-gradient(top, rgba(255,255,255,0), rgba(255,255,255,0.8));}",
	rr.WebKit && ".rc-areaweek .h {background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.8)));}",
	rr.IE && ".rc-areaweek .h {margin-right:0px; filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF, endColorstr=#DDFFFFFF);}",

	".rc-areaweek-c {margin-top:3px;padding-top:1.3em;padding-bottom:1.5em;font-size:small;}",
	".rc-areaweek-ct {width:0;height:0;overflow:hidden;visibility:hidden;}",

	".rc-areaweek {font-size:medium;}",
	".rc-areaweek .r, .rc-areaweek .rh {font-size:small;height:1.3em;}",
	".rc-areaweek .r {position:relative;padding-bottom:5px;}",

	".rc-areaweek .rh {display:none;overflow:hidden;position:absolute;width:0;}",
	".rc-areaweek--h-px .rh {display:block;}",


	".rc-areaweek-inf {font-size:x-small;bottom:2px;left:0;position:absolute;white-space:nowrap;text-align:center;}", //overflow:hidden;
	".rc-areaweek-inf .t {cursor:pointer;margin:0 10px;padding:0 15px;display:block;background-color:#EFF9FF;border:1px solid #AEDCF5;}", //background-color:rgba(183, 183, 229, 0.5);
	".rc-areaweek-inf .n {}",

	".rc-areaweek-item  {left:0;position:absolute;cursor:default;}",
	".rc-areaweek-item .c  {display:block;overflow:hidden;height:1.3em;white-space:nowrap;margin:"+(rr.WebKit ? '0 3px 0 3px' : rr.Opera > 9.5 ? '0 3px 0 3px' : '0 2px 0 3px')+";}",

	".rc-areaweek-item .c  {border-width:1px;border-style:solid;padding:1px;}",
	".rc-areaweek-item .c--active  {border-width:2px;padding:0;}",

	// gradient
	//rr.Gecko && ".rc-areaweek-item .c {background-image:-moz-linear-gradient(left, rgba(255,255,195,0), #FFFFC3, #FFFFC3);}",
	//rr.WebKit && ".rc-day-item .c {background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255,255,255,0)), to(rgba(255,255,255,0.4)));}",
	//rr.IE && ".rc-day-item .c {filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF, endColorstr=#77FFFFFF);}",


	".rc-areaweek-item--A .c  {margin-left:1px;padding-left:4px;border-left-width:0;}",
	".rc-areaweek-item--B .c  {margin-right:0;border-right-width:0;}",
	".rc-areaweek-item--AB .c  {margin-left:1px;margin-right:0;padding-left:4px;border-left-width:0;border-right-width:0;}",


	rr.IE<7&&".rc-areaweek-item .c {position:relative;}",
	".rc-areaweek-item .bx {line-height:1.3em;margin-left:0.5ex;"+(rr.IE<7?'position:absolute;':'')+"}",

	".rc-areaweek-item .u, .rc-areaweek-item .d  {display:none;border-top:1px solid #aa5;overflow:hidden;height:0px;float:none;margin:0 4px;}",
	//".rc-areaweek-item--f-day .c  {background-color:#FFFFC3;color:#7F7F5F;}",
	".rc-areaweek-item--f-day .c  {background-color:#FFF;color:#444;}",
	//".rc-areaweek-item--d1 .c  {border-color:#FFF;}",


	".rc-areaweek-item .clr {display:none;height:1.3em;left:5px;overflow:hidden;position:absolute;top:2px;width:10px;}",
	".rc-areaweek-item--f-day .clr {display:block;}",
	".rc-areaweek-item--f-day .clr {left:6px;background-position:0 50%;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAyCAYAAABlG0p9AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kDEAkOMS7Q3DMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAYklEQVRIx+2UsQ3AMAgEH0+Ad/E4HsHZv7wUdqQ0UbCULlz5OvGIAgNQgKIgKab4H/GQVG0hqa5swqQ9TQIagIDxVgsMAR4QXd8TrS6SemBe3zrPxbivAfjKALD8ZimmuCWeBGBWnbBJLZUAAAAASUVORK5CYII=)}",

	".rc-areaweek-item--f-day .bx {padding-left:10px;}",

	"",
	"",

	".rc-areaweek-range  {bottom:0;top:0;position:absolute;z-index:1;left:0;"
		+(rr.IE<7 ? 'height:100%;':'')
		+(rr.IE<9? "background-image:url('about:blank');filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#77ADEAB6, endColorstr=#77ADEAB6);" : '')
		+(rr.IE>8 || rr.Gecko>=1.9 || rr.Opera>10 || rr.WebKit ? "background-color:rgba(173,234,182,0.35);":'')
		+"}",


	".rc-areaweek-range-bx  {"
		+(rr.IE>8 || rr.Gecko>=1.9 || rr.Opera>10 || rr.WebKit ? "display:none;":
			(rr.IE<9?'':"height:100%;margin:0;opacity:0.35;background-color:#ADEAB6;")
			)
		+"}",



	".x-footer {border:1px solid #CCCCCC;clear:both;height:5em;margin-top:1em;}",
	""
//	]);
	);









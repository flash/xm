//var use_host = this.use_host || '/xm';
//var use = this.use || new function(a) {return a={}, function(s) {a[s] || document.write('<script type="text/javascript" src="' + (a[s] = use_host + s) + '" /></script>')}};


// ---- values ----
use('/js/cram/values.src.js');


// ---- mcore:common ----

use('/js/mcore/nano.src.js');
use('/js/mcore/rr_master.src.js');
use('/js/mcore/rr_element.src.js');
use('/js/mcore/rr_drag.src.js');
use('/js/mcore/rr_xhrloader2.src.js');
use('/js/mcore/rr_history.js');
use('/js/mcore/json2.js');



// ---- common ----
use('/js/cram/common.src.js');
use('/js/cram/page_connect.src.js'); // функционал для активезации страници


// ---- elements ----

use('/js/cram/tmpl/tmpl_ubutton.src.js'); // кнопки
use('/js/cram/ui/ui_ubutton.src.js');  // кнопки

use('/js/cram/tmpl/tmpl_umenu.src.js'); // элементы меню
use('/js/cram/ui/ui_umenu.src.js'); // элементы меню
//use('/js/cram/ui/ui_layerbox.src.js'); // код для меню

use('/js/cram/tmpl/tmpl_upager.src.js');
use('/js/cram/ui/ui_upager.src.js');




use('/js/cram/tmpl/tmpl_pages.src.js'); // странички. обшии для всех, всяко разное
use('/js/cram/ui/ui_mainframe.src.js'); // основной каркас
use('/js/cram/ui/ui_page.src.js'); // основной каркас





// ---- обшее ----
use('/js/cram/tmpl/tmpl_topmenu.src.js'); // для шапки



// ---- sidebar folders ----
use('/js/mail_box/tmpl/tmpl_sidebar_folders.src.js');
use('/js/mail_box/ui/ui_sidebar_folders.src.js');


// ---- page mailbox ----
use('/js/mail_box/mailbox.src.js');
use('/js/mail_box/tmpl/tmpl_mailbox_page.src.js');
use('/js/mail_box/ui/ui_mailbox_page.src.js');

//use('/js/cram/tmpl/tmpl_mailbox_sidebar.src.js');
//use('/js/cram/ui/ui_mailbox_sidebar.src.js');
//use('/js/cram/tmpl/tmpl_mailbox.src.js');


/* page compose */
use("/js/mail_new/tmpl/tmpl_page_compose.src.js"); // страница написания письма
use("/js/mail_new/ui/ui_page_compose.src.js"); // страница написания письма
use("/js/mail_new/tmpl/tmpl_compose_editor.src.js"); // страница написания письма
use("/js/mail_new/ui/ui_compose_editor.src.js");  // код для редактора текста в написании письма
use("/js/mail_new/compose.src.js");  // страничка #/compose



// ---- page calendar ----
use('/js/calendar/calendar.use.js'); // модуль (группа файлов). эксперементирую

/*
use('/js/calendar/rc_common.src.js');
use('/js/calendar/source.src.js');
use('/js/calendar/rr_date.src.js');

use('/js/calendar/tmpl_page.src.js');
use('/js/calendar/ui_page.src.js');

use('/js/calendar/tmpl_areaday.src.js');
use('/js/calendar/ui_areaday.src.js');

use('/js/calendar/tmpl_areaweek.src.js');
use('/js/calendar/ui_areaweek.src.js');

use('/js/calendar/tmpl_areamonth.src.js');
use('/js/calendar/ui_areamonth.src.js');

use('/js/calendar/tmpl_scal.src.js');
use('/js/calendar/ui_scal.src.js');

use('/js/calendar/rc_style.src.js');
*/



/* tiny_mce */
use("/js/tiny_mce/tiny_mce_src.js");  // редактор
use("/js/cram/wysiwyg_template_src.js");  // тема rmail

//use("/js/tiny_mce/langs/en.js");  // локализация
//use("/js/tiny_mce/themes/advanced/editor_template_src.js");  // тема advanced
//use("/js/tiny_mce/themes/advanced/langs/en.js");  // тема
//use("/js/tiny_mce/plugins/spellchecker/editor_plugin_src.js");  // локализация

rr.styles('tmpl:page_compose'
	, '.b-page_compose-wrap_send {border:3px solid #CCCCCC;display:inline-block;margin:-3px 5px -3px 0;position: relative;left:-3px;vertical-align: top;}' //margin-left: -3px 3px 0 -3px;


	, '.b-page_compose-modes_toolbar {margin-top:10px;padding:1px 0;text-align:right;font-size:80%;}'
	, '.b-page_compose-modes_pleft {float:left;text-align:left;}'
	, '.b-page_compose-vkey {cursor:pointer;}'
	, '.b-page_compose-saveToSend {line-height: 22px;vertical-align: top;cursor:pointer;display:inline-block;padding:0 2px;border:1px solid transparent;background-color:#FCBCBC;}'
	, '.b-page_compose-saveToSend--checked {background-color: transparent;}'
	, '.b-page_compose-saveToSend--checked:hover {background-color:#EEEEEE;border:1px solid #CCCCCC;cursor:pointer;display:inline-block;padding:0px 2px;}'

	, '.b-page_compose-saveToSend_inp {margin:0 3px 0 0;vertical-align:middle;}'
	//, '.b-page_compose-saveToSend_text {}'



	, '.b-page_compose-modes {}'
	, '.b-page_compose-mode {cursor:pointer;border:1px solid #D8EEF7;color:#0A83BF;padding:0 1ex;}'
	, '.b-page_compose-mode_A {margin-right:2px;}'
	, '.b-page_compose-mode--s-A .A, .b-page_compose-mode--s-B .B {cursor:default;color:#000000;border-color:#7E7E7E #7E7E7E #8B8B8B;background-color:#B4B4B4;background-image:url("/i/chameleon/ramail-icons.png");background-position:0 -3201px;background-repeat:repeat-x;}'
	, '.b-page_compose-mode--s-A .A:hover, .b-page_compose-mode--s-B .B:hover {cursor:default;color:#000000;text-decoration:none;}'

	, '.b-page_compose-text_body {margin-top:15px;border:1px solid #CBCBCB;border-color:#989898 #CBCBCB #CBCBCB;}'

	, '.b-page_compose-wrap_attachs {margin-top:10px;}'
	, '.b-page_compose-button_attachs {background-color: #e2e2e2;}'
	);



tmpl.compose_page = function(_, pr){
	var ns = this;
	ns.text_title = "Новое письмо";
	ns.sidebar = 'mailbox';


	ns.page = _('ui:page'
		, {
			  extend: ns
			//, pid: 'mailbox'

			, title: "Новое письмо"

			, css: 'b-page_compose'
			, css_capion: 'b-page_compose-capion'

			, head: true
			, head_name: "Новое письмо"
			}

		, _('ui:page_head'
			 , _('tmpl:uToolbar'
				, {
					css: "b-page_compose-toolbar_top",
					right: [
						ns.button_cancel = _('ui:uButton', {
							first: 'right',
							//icon: true, css_ico: 'b-icons b-icons--remove',
							text: "Отменить"
							})
						]
					}

				, ns.wrap_sendMail = _('span.b-page_compose-wrap_send'
					, ns.button_sendMail_dn = _('ui:uButton', {
						first: true,
						icon: true, css_icon: 'i-img--send_mail',
						title: "Отправить письмо",
						text: "Отправить"
						})
					)

				, ns.button_saveDraft = _('ui:uButton', {
					text: "Сохранить в черновик"
					})
				)
			)
		, _('ui:page_footer'
			, _('div', {style:'height:26px;'})
			/*
			, _('tmpl:uToolbar'
				, {
					css: "b-page_compose-toolbar_bottom",
					right: [
						ns.button_cancel_dn = _('ui:uButton', {
							first: 'right',
							//icon: true, css_ico: 'b-icons b-icons--remove',
							text: "Отменить"
							})
						]
					}



				, ns.wrap_sendMail_dn = _('span.b-page_compose-wrap_send'
					, ns.button_sendMail_dn = _('ui:uButton', {
						first: true,
						icon: true, css_icon: 'i-img--send_mail',
						title: "Отправить письмо",
						text: "Отправить"
						})
					)


				//, _.html("<label for="save-sent"><input type="checkbox" class="c_compose-save-copy checkbox" tabindex="8" checked="" name="save_sent" id="save-sent">Сохранить копию в папке «Отправленные»</label>")

				/ *
				, _('label.b-page_compose-saveToSend b-page_compose-saveToSend--checked'
					, {
						onclick: function() {
							var n = ns.input_saveToSend;
							rr.css_set('b-page_compose-saveToSend--checked', this, n.checked);
							}
						}

					, ns.input_saveToSend = _('input.b-page_compose-saveToSend_inp', {type: 'checkbox', checked: true})
					, _('span.text', "Сохранить копию в папке «Отправленные»")
					)
					* /
				)
				*/
			)

		, _('div.b-page_compose-body'
			, _('tmpl:compose_headlines', {extend: ns})

			/*
			, _('div.b-page_compose-modes_toolbar'

				, _('div.b-page_compose-modes_pleft'
					, _('a.b-page_compose-vkey'
						, _('span.b-page_compose-vkey_text', "Виртуальная клавиатура")
						)
					)

				, _('span.b-page_compose-modes b-page_compose-mode--s-A'
					, _('a.b-page_compose-mode b-page_compose-mode_A A', {title: "Обычный текст"}
						, _('span.SA', "Просто текст")
						)

					, _('a.b-page_compose-mode b-page_compose-mode_B B', {title: "Текст с форматированием"}
						, _('span.SB', "С оформлением")
						)
					)
				)
				*/

			, _('div.b-page_compose-text_body'
				, ns.editor = _('ui:compose_editor', {name: 'text'})
				)

			, _('div.b-page_compose-wrap_attachs'
				, _('div.b-page_compose-attachs'
					, _('ui:uButton', {
						css: 'b-page_compose-button_attachs',
						css_icon: 'i-img--attach_file',
						icon: true,
						text: "Прикрепить файлы..."
						})
					)


				//, _.html("<h4>Прикреплённые файлы <small>(общим&nbsp;размером не&nbsp;более 20&nbsp;мб)</small></h4>")
				//, _('h4', "Прикреплённые файлы ", _('small', "(общим размером не более 20 мб)"))
				)
			)
		);
	};


rr.styles('tmpl:compose_headlines'
	, '.b-compose_headlines-row {line-height: 26px;height:28px;position: relative;}'
	, '.b-compose_headlines-title {position: absolute;left:0;color: #666666;}'
	, '.b-compose_headlines-box {margin-left: 85px;}'
	, '.b-compose_headlines-button {width:80px;vertical-align: top;}'
	, '.b-compose_headlines-input {vertical-align: top;height: 24px;width:100%;-moz-box-sizing: border-box;box-sizing: border-box;line-height:1.2 !important;}'

	, '.b-compose_headlines-row--other {display:none;}'
	, '.b-compose_headlines-button {background-color:#e2e2e2;}'
	)

tmpl.compose_headlines = function(_, p) {
	var ns = p.extend;

	return _('DIV.b-compose_headlines'
		, _('div.b-compose_headlines-row'
			, _('span.b-compose_headlines-title', "От кого:")
			, _('div.b-compose_headlines-box'
				, _('span'
					, "eee <vasya@puper.eee>"
					)
				)
			)

		, _('div.b-compose_headlines-row'
			, _('span.b-compose_headlines-title'
				, ns.button_toMail = _('ui:uButton'
					, {
						css: 'b-compose_headlines-button',
						icon: true,
						css_icon: 'i-img--contact',
						text: "Кому:"
						}
					)
				)
			, _('div.b-compose_headlines-box'
				, _('INPUT.b-compose_headlines-input', {title:"Двойной клик по полю откроет адресную книгу", type:"text", name:"to"})
				)
			)

		, _('div.b-compose_headlines-row b-compose_headlines-row--other'
			, _('span.b-compose_headlines-title'
				, ns.button_ccMail = _('ui:uButton'
					, {
						css: 'b-compose_headlines-button',
						icon: true, css_ico: 'b-icons b-icons--addr',
						text: "Копия:"
						}
					)
				)
			, _('div.b-compose_headlines-box'
				, _('INPUT.b-compose_headlines-input', {title:"Двойной клик по полю откроет адресную книгу", type:"text", name:"to"})
				)
			)

		, _('div.b-compose_headlines-row b-compose_headlines-row--other'
			, _('span.b-compose_headlines-title'
				, ns.button_bccMail = _('ui:uButton'
					, {
						css: 'b-compose_headlines-button',
						icon: true, css_ico: 'b-icons b-icons--addr',
						text: "С. копия:"
						}
					)
				)
			, _('div.b-compose_headlines-box'
				, _('INPUT.b-compose_headlines-input', {title:"Двойной клик по полю откроет адресную книгу", type:"text", name:"to"})
				)
			)

		, _('div.b-compose_headlines-row'
			, _('span.b-compose_headlines-title b-compose_headlines-title--subj'
				, "Тема:"
				)
			, _('div.b-compose_headlines-box'
				, _('INPUT.b-compose_headlines-input', {title:"Двойной клик по полю откроет адресную книгу", type:"text", name:"to"})
				)
			)
		);
	};
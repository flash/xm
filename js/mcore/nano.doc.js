
rr.Kqn, rr.Opera, rr.Gecko, rr.IE, rr.WebKit, rr.SWF, rr.Chrome, rr.Safari, rr.Firefox
	- numner|NaN , значения для определнного браузера

rr.is_mobile, rr.is_j2me, rr.osWin, rr.osMac, rr.osLnx
	- boolean , флаги для браузера


rr.domReady(cb)
	- реализация DOMContentLoaded
	@param cb {function} , будет вызвана функция когда DOM "готов"
	@param cb {'force'} , форсирует запуск события


rr.extendNS() - внутренняя функция
rr.ns() - внутренняя функция

rr.extend(obj, ext_1[, ext_2[, ...]])
	- копирует свойства обьектов "ext_1[, ext_2[, ...]]" в обьект obj
	  при этом копируются только собственные свойства исключая наследуемые через прототип
	@param obj Object, обьект который будет расширен свойствами ext_N
	@param obj String, в глобальном пространсве имен будет создан обьект с данным именем
	@param ext_1 Object, хеши для расширения
	@return obj Object

rr.init() - устарело. оставлен для совместимости

rr.textSelection_get(node)
	- возврашает положение выделения для Input и TextArea
	@param node  HTMLElement
	@return {start: number, end: number}

rr.textSelection_set(node, start, end)
	- устанавливает выделение в элементе node
	@param node HTMLElement, только для Input и TextArea
	@param start number, положение начала
	@param end number, положение конца выделения

rr.textSelection_collapse(node, flag)
	- сворачивает выделение в начало текстового поля (flag==true) или в конец


rr.getPx('77px')
rr.getEm('77em')
rr.getEx('77ex')
rr.getPc('77%')
	- вернет значение ед.измерения иначе null


rr.$('id_node'[, doc])
	- аналог getElementById('id_node')

rr.trim('  text text   ')
	- обрезает пробелы. преобразует другие типы в строку

rr.timeThrow(error)
	- вызывает throw через небольшой интервал времени, чтобы не прервать выполнение

rr.nullFunction
	- пустая функция.

rr.new_class(obj)
	- конструктор класса

rr.newPrototype(obj_prototype)
	- создает обьект с заданным прототипом


newTemplate(obj_prototype[, ext_1[, ext_2, ..]])
	- создает обьект с заданным прототипом и расширяет его другими обьектами

rr.type(value)
	- возврашает тип значения
	@param value ,
	@return 'undefined' 'null' 'array' 'date' 'regexp' 'string' 'number' 'function' 'object' 'number' 'boolean'

rr.newHttpRequest()
	- аналог new XMLHttpRequest

rr.printx(text, s1[, s2[, s3, ..]])
	- заменяет в тексте %s на аргументы
	- пример rr.printx("top: %s,  left: %s", 100, 50) --> "top: 100,  left: 50",

rr.prints(text, hash)
	- нужно дороботать.

rr.ct(split,  value, value2, value3, ...)
	- обеденяет обьекденяет только строковые и числовые значения. разделяя их значением split

rr.each(obj, cb, prms)
	- и так понятно. но рекомендую реже использовать

rr.map(arr, cb)
	- аналог map массива .
	@return новый массив

rr.indexOf(arr, value,  start)
	- аналог indexOf массива

rr.bind(object_ctx, fun)
	- и так понятно. для производительности упрошенная версия

rr.addHandler(node, type, handler, useCapture)
	- события на dom элемент.
	@param node HTMLElement , элемент на которой ожидаем событие
	@param type {string} , тип события. для упрошения введены mouseScroll,scroll,resize
	@param handler {function} , функция которая получит событие
	@param useCapture {boolean} , по умолчанию false
	@return function handler

rr.removeHandler(node, type, handler, useCapture)
	- удаляет то что было установленно rr.addHandler

rr.addHandler_(node, type, handler, useCapture)
	- аналог rr.addHandler, но useCapture по умолчанию false

rr.removeHandler_(node, type, handler, useCapture)
	- аналог rr.removeHandler, но useCapture по умолчанию false

rr.getClientWH(doc[, notScroll])
	- возврашает размер документа
	@param doc {HTMLDocument}
	@param notScroll {boolean} , true если в результате ненужно возврашать размеры и положения скрола
	@return {
		w: Width,
		h:height,
		st:scrollTop, // !notScroll
		sl:scrollLeft, // !notScroll
		sw:scrollWidth, // !notScroll
		sh:scrollHeight // !notScroll
		}


rr.getScrollTop(doc)
	- возврашает значение Y прокрутки докумета
	@param doc HTMLDocument
	@return number , значение window.pageYOffset

rr.scrollTo(doc, x, y)
	- устанавливает значение X & Y прокрутки для документа. аналог window.scrollTo
	@doc {document}
	@param x {number}, значение в px, window.pageXOffset
	@param y {number}, значение в px, window.pageYOffset

rr.getAbsolutePos(node)
	- определяет положение ноды относительно начала кординат документа
	@param node {Element} , элемент
	@return {Object} , кординаты элемента {x: .. , y: ..}


rr.getRect(node)
	- аналог getBoundingClientRect, возврашает кординаты прямоугольника элемента относительно кординат начала экрана
	@param node {Element} ,
	@return {left: number, top: number, right: number, bottom: number}


rr.getParentNode(nodeName, node, thisStart)
	- спускается по древу к root в поисках тега (nodeName)
	@param nodeName {string}, имя тега
	@param node {Element} , элемент от которого нудно начать поиск
	@param flag {boolean}, искать включая (node)
	return @param {Element||undefined}

rr.getAtt(node, attributeName)
	- возврашает значение атрибута у элемента
	@param node {Element} ,
	@param attributeName {string} ,
	@return {value}

rr.removeAtt(node, attributeName)
	- удаляет указанный атрибут у элемента
	@param node {Element} ,
	@param attributeName {string} ,


rr.getCStyle(node)
	- возврашает currentStyle
	@param node {Element} ,
	@return {HTMLStyle}

rr.style(node, value)
	- выставляет собственные стили элемента
	@param node {Element} ,
	@param value {string|hash} , значение стиля можно указать как строкой так и хешем значений


rr.removeNode(node)
	- удаляет элемент из своего родителя
	@param node {Element} ,

rr.urlEscape(value)
	- URL экранирования . пробел заменяется на "+"
	@param value {string} ,
	@return {string}

rr.urlEscape(value)
	- декодирует строку закодированную rr.urlEscape
	@param value {string} ,
	@return {string}

rr.jsEscape(value)
	- javascript экранирования .
	@param value {string} ,
	@return {string}

rr.htmlEscape(value)
	- HTML экранирования .
	@param value {string} ,
	@return {string}

rr.createSWF(setup[, doc])
	- создает SWF элемент
	@param setup {hash} ,
	@param doc {HTMLDocument} ,

	@param setup.src {string} , адрес ролика
	@param setup.width {number|string}
	@param setup.height {number|string}
	@param setup.parent {HTMLElement} , элемент в который ролик будет положен. предпологается что родитель уже прикреплен к документу и "виден"
	@param setup.document {HTMLDocument}
	@param setup.ieFSCommand {boolean}, интерефейс js<->flash для IE. непоню актуально для новых флешей или нет
	@param setup['flashvars'|'menu'|'quality'|'scale'|'wmode'|'bgcolor'|'swliveconnect'|'allowscriptaccess'|'allowfullscreen'|'seamlesstabbing'|'allownetworking'] {string}



rr.appendScript(src, setup)
	- создает и подключает script к документу.
	@param src {string}, адрес загрузки
	@param setup {function} , будет вызванна данная функция после загрузки function(src, true|false)
	@param src {hash}, параметры
	@param src.event {function}, будет вызванна данная функция после загрузки function(src, true|false)
	@param src.charset {function},  задает атрибут charset. по молчанию utf-8.
	@param src.defer {boolean},  по умолчанию true
	@param src.remove|src.rm {boolean}, если нужно удалять ноду из документа по окончанию загрузки


rr.stopEvent(event)
	- останавливает распространение события по DOM древу
	@param event {Object Event},  обьект события

rr.breakEvent(event)
	- отменяет действие браузера по умолчаю
	@param event {Object Event},  обьект события
	@return false

rr.styles(group, rule[, rule[, ...]])
	- добавляет в коллекцию с именем group список правил
	@param group {string},  группа которой принадлежат указанные правила
	@param rule {string},  css правила. пример '.clss {width:100px;height:300px;}'


rr.styles_create(cssText, doc)
	- создает новый стиль в документе
	@param cssText {string}, текст стиля
	@param doc {HTMLDocument}

rr.styles_include(groups, doc)
	- создает и подключает стил обьеденяя указанные через пробел группы
	@param groups {string}, какие группы нужно использовать в стиле. пример "main top eshoooo"
	@param doc {HTMLDocument}
	@return {HTMLStyle}


rr.cookie_get(name)
	- возврашает значение куки

rr.cookie_set(name, value, expires [, path, domain, secure])
	- устанавливает куку

rr.cookie_remove(name [, path [, domain]])
	- удаляет куку




работа с селекторами классов
важно. не используйте \t и \n в именах класса, только пробел. это ограничение ради производительности

rr.css_is(selectors, node)
	- проверяет есть ли указанный селектор в указаном (node.className)
	- пример rr.css_is('eeee', node)
	- пример rr.css_is('eeee qqqq', node) , (true) только если есть и 'eeee' и 'qqqq'

	@param selectors {string} , селекторы которые нужно проверить на наличие, записанные через пробел
	@param node {HTMLElement} , элемент или {className: string}
	@return boolean


rr.css_add(selectors, node)
	- добовляет селекторы в указанный элемент
	- пример rr.css_add('eeee', node)
	- пример rr.css_add('eeee qqqq', node)

	@param selectors {string}
	@param node {HTMLElement}
	return boolean, (true) если были изменения


rr.css_remove(selectors, node)
	- удаляет селекторы из указанного элемента
	- важно. не используйте \t и \n в именах класса, только пробел. это ограничение ради производительности
	- пример rr.css_remove('eeee', node)
	- пример rr.css_remove('eeee qqqq', node)

	@param selectors {string}
	@param node {HTMLElement}
	return boolean, (true) если были изменения

rr.css_flip(selectors, node)
	- если в элементе нет (selectors) то добавляет иначе удаляет
	@param selectors {string}
	@param node {HTMLElement}


rr.css_replace(selectors_1, selectors_2, node)
	- не использовать. сомнительная функция, хочу ее удалить
	- удаляет все selectors_1 и вставляет selectors_2. если удалять было нечего то замены небудет

rr.css_set(selectors, node, flag)
	- добовляет или удаляет в зависимости от значения (flag)
	@param selectors {string}
	@param node {HTMLElement}
	@param flag {boolean}
	return boolean, (true) если были изменения

rr.css_set_(selectors, node, end)
	- изменяет окончания у селекторов (selectors) на значение (end)
	- пример: rr.css_set_('xx ee', node, '--end') -> 'xx--end ee--end'
	@param selectors {string}
	@param node {HTMLElement}
	@param end {false|string}


rr.css_get(selectors, node)
	- вернет первый селекторо из перечисленных в (selectors) если он есть в (node)
	- пример: rr.css_get('ee xxx', {className:'ssd ee ffgfg fg'}) -> 'ee'
	@param selectors {string}
	@param node {HTMLElement}
	return string


rr.css_get_(prefix, node)
	- возварашает селектор у которого начало совпадает с prefix
	@param prefix {string}
	@param node {HTMLElement}
	return string|undefined


rr.css_first(selector, node)
	- возварашает первый дочерний элемент с селектором (selector)
	@param selector {string}
	@param node {HTMLElement}
	return HTMLElement|undefined

rr.css_next(selector, node)
rr.css_prev(selector, node)
	- возварашает слудуюший/пред. элемент с селектором (selector)
	@param selector {string}
	@param node {HTMLElement}
	return HTMLElement|undefined


rr.css_parent(selectors, node[, flag])
	- возврашает родителя элемента если в нем есть один из перечисленных селекторов
	- найденый селектор помешается в переменную rr.css_return
	@param selectors {string}
	@param node {HTMLElement}
	@param flag {boolean} , начать поиск с самого элемента
	return HTMLElement|undefined

rr.css_switch(selectors, node, index)
	- выставляет селектор в зависимости от указанного индекса
	- если index не указан то будут последовательно перебераться (selectors)
	@param selectors {string|array}
	@param node {HTMLElement}
	@param index {numeber|undefined}


- смотреть в код
rr.css(node);
rr.css(node).node = Element;
rr.css(node).add()
rr.css(node).remove()
rr.css(node).replace()
rr.css(node).flip()
rr.css(node).is()
rr.css(node).get()
rr.css(node).set()
rr.css(node).parent()
rr.css(node).hasNot()
rr.css(node).cb()
rr.css(node).near()
rr.css(node).childs()
rr.css(node).first()
rr.css(node).next()
rr.css(node).prev()




rr.expansion_event
	- (extend) для расширения обьекта моделью событий.
	- пример:
		var x = {};
		rr.extend(x, rr.expansion_event);

		x.addEvent('ontest', function(v) {
			alert(v)
			});

		x.initEvent('ontest', 555) // alert(555)



rr.class_listHandler
	- функционал устарел. будет переписан на групу событий


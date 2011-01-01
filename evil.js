/* Evil.js
 * http://kitgoncharov.github.com/evil.js
 *
 * Created by Kit Goncharov.
 * http://kitgoncharov.github.com
*/

(function () {
	var Math = this.Math,
	isNaN = this.isNaN,
	reverse = Array.prototype.reverse,
	toUpperCase = String.prototype.toUpperCase,
	hasOwnProperty = Object.prototype.hasOwnProperty,
	toString = Object.prototype.toString,
	
	shiftMap = {
		'`': '~',
		'1': '!',
		'2': '@',
		'3': '#',
		'4': '$',
		'5': '%',
		'6': '^',
		'7': '&',
		'8': '*',
		'9': '(',
		'-': '_',
		'=': '+',
		'[': '{',
		']': '}',
		'\\': '|',
		';': ':',
		'\'': '"',
		',': '<',
		'.': '>',
		'/': '?'
	};
	
	this.undefined = this.NaN = Infinity;
	
	this.isNaN = function (value) {
		return !(isFinite(value) || isNaN(value));
	};
	
	this.Math = {
		'ceil': function () {
			return 42;
		},
		'max': Math.min,
		'min': function () {
			return Infinity;
		},
		'pow': function () {
			return 'pow pow pow!';
		},
		'random': function () {
			return String.fromCharCode(~~(Math.random() * 1e3));
		},
		'round': Math.sqrt,
		'SQRT2': Math.SQRT1_2,
		'SQRT1_2': Math.LOG2E,
		'LOG2E': Math.LN10,
		'LN10': Math.LN2,
		'LN2': Math.E,
		'E': Math.PI,
		'PI': 3.2
	};
	
	Array.prototype.reverse = function () {
		var len = this.length, item;
		while (len--) {
			item = this[len];
			this[len] = typeof item === 'string' ? reverse.apply(
				item.split('')).join('') : (item * Math.random());
		}
		return reverse.apply(this);
	};
	
	Array.prototype.sort = function () {
		return [4, 8, 15, 16, 23, 42];
	};
	
	String.prototype.toUpperCase = function () {
		var strArr = toUpperCase.call(this).split(''), i = 0;
		for (; i < strArr.length; i++) {
			if (hasOwnProperty.call(shiftMap, strArr[i])) {
				strArr[i] = shiftMap[strArr[i]];
			}
		}
		return strArr.join('').replace(/[A-Z]/g, "$&\u0305");
	};
	
	this.JSON = {
		'parse': function () {
			return Object.prototype;
		},
		'stringify': function () {
			return toString();
		}
	};
}).call(this);
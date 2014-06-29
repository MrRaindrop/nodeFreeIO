define(function(require) {

	var _ = require('underscore'),
		$ = require('jquery'),
		router = require('module/router'),
		Page = require('pageManager/Page'),
		inherits = require('util/inherits'),
		HeaderUI = require('ui/header/Header'),
		FooterUI = require('ui/footer/Footer');

	var Register = function() {
		Page.call(this);
	};

	inherits(Register, Page);

	Register.prototype.onCreate = function() {
		this.dom = document.createElement('div');
		var template = _.template(this.html, {});
		this.dom.innerHTML = template;
		this.$d = $(this.dom);
		this.headerUI = new HeaderUI(this.$d.find('.header')[0], {});
		this.footerUI = new FooterUI(this.$d.find('.footer')[0], {});
		this.addEvents();
		this.onShow();
	};

	Register.prototype.addEvents = function() {
		this.$d.find('.form').on('submit', _.bind(this.onSubmit, this));
	};

	Register.prototype.onSubmit = function(e) {
		e.preventDefault();
		var _t = $(e.target), id;
		console.log('登录！');
		console.log(e);
		console.log(e.target);
	};

	Register.prototype.onShow = function() {
		this.$d.css('display', 'block');
	};

	Register.prototype.onHide = function() {
		this.$d.css('display', 'none');
	};

	return Register;

});
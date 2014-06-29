define(function(require) {

	var Backbone = require('backbone'),
		_ = require('underscore'),
		$ = require('jquery'),
		config = require('config'),
		routes = {},
		rt, str,
		user = null;

	var UserModel = Backbone.Model.extend({

		defaults: {
		},

		url: './user',

		initialize: function() {
		},

		getCurrent: function() {
			// user.fetch({
			// 	method: 'GET',
			// 	url: './user/getCurrent'
			// });
		},

		login: function(name, pass) {
			console.log('user id:', user.get('id'));
			$.ajax({
				type: 'POST',
				url: './user/login',
				data: {
					name: name,
					password: pass
				},
				success: function(res) {
					console.log('res:', res);
				},
				error: function(err) {
					console.error('err', res);
				}
			});
		}
	});

	if (!user) {
		user = new UserModel();
	}

	console.log('in user.js user:', user);
	return user;

});
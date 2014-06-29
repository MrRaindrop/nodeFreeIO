/* express */

var express = require('express');
var app = express();

/* mongoose */

/*var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:5586/labJourney');

var db = mongoose.connection;
var Schema = mongoose.Schema;

var userSchema = new Schema({
	account: String,
	name: String,
	avatar: String
});

var bubbleSchema = new Schema({
	poster: {
		account: String,
		name: String,
		avatar: String
	},
	content: String,
	postTime: Number,
	comments: [{
		poster: {
			account: String,
			name: String,
			avatar: String
		},
		content: String,
		postTime: Number,
	}]
});

var User = db.model('User', userSchema);
var Bubble = db.model('Bubble', bubbleSchema);

db.on('error', function(err) {
	console.log(err);
});*/

/* express */

app.set('title', 'freeio');

app.use(express.logger());
app.use(express.bodyParser());
console.log('__dirname:', __dirname);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/uploads'));


app.get('/', function(req, res) {
	requestFile('./index.html');
	return;
});

app.post('/user/login', function(req, res) {
	// console.log('method', method);
	console.log('user login: ', res.params);
	// send test data.
	var obj = {
		'id': '0001'
	};
	res.send(JSON.stringify(obj));
});

/*
app.get('/:user', function(req, res) {
	res.send('user ' + req.params.id);
});

app.get('/json', function(req, res) {

	console.log('get json');
	var obj = {
		aa: [1, 2, 'xxx'],
		b: {
			c: 'd',
			aaa: 'bbb',
		},
		c: 'abcde'
	};
	
	res.send(JSON.stringify(obj));
});

app.get('/bubbles', function(req, res) {

	// suppose return 10 entries first.

	console.log('===============================>>>');
	console.log('Bubble', Bubble);

	Bubble.find().sort({ postTime: -1 }).lean().exec(function(err, docs) {
		if (err) {
			console.error('------------------------!!error!!');
		} else {
			console.log('------------------------------------------------->');
			console.log(docs);

			var i, len;

			for (i = 0, len = docs.length; i < len; i++) {

				docs[i].comments.sort(function(a, b) {
					if (a.postTime < b.postTime) {
						return 1;
					} else if (a.postTime > b.postTime) {
						return -1;
					} else {
						return 0;
					}
				});
			}

			
			res.send(JSON.stringify(docs));
		}
	});

});

app.post('/bubble/comment', function(req, res) {

	console.log('req.body', req.body);

	var id = req.body.id;

	Bubble.findByIdAndUpdate(id, {
		$push: {
			'comments': {
				poster: {
					account: req.body.poster.account,
					name: req.body.poster.name,
					avatar: req.body.poster.avatar,
				},
				content: req.body.content,
				postTime: req.body.postTime
			}
		}
	}, {
		upsert: true
	}, function() {
		res.send(JSON.stringify({
			success: true
		}));
	})

});

app.post('/bubble', function(req, res) {

	console.log('req.body', req.body);
	
	var bubble = {
		poster: {
			account: req.body.poster.account,
			name: req.body.poster.name,
			avatar: req.body.poster.avatar,
		},
		content: req.body.content,
		postTime: req.body.postTime
	};

	var bubbleDoc = new Bubble(bubble);
	
	bubbleDoc.save(function(err) {
		if (err) {
			console.error(err.stack);
		}
	});

	res.send(JSON.stringify({
		success: true
	}));

});*/


app.listen(3333);
console.log('Listening on port 3333');
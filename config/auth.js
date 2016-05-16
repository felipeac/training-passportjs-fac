// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth': {
	    'clientID': '1738769186380276',
	    'clientSecret': '706ba7bfe0d31e09340da940541ca2d6',
	    'callbackURL': 'http://localhost:8080/auth/facebook/callback'
	},

	//https://dev.twitter.com/
	'twitterAuth': {
	    'consumerKey': 'cofy9TvcsBhiH46LNXfHteNTK',
	    'consumerSecret': 'c5lBoCfQKxVlS7JAndqhATOllxyAoN3sAvNraYY91Zx0qolMFC',
	    'callbackURL': 'http://localhost.avenuecode.com:8080/auth/twitter/callback'
	},

	//console.developer.google.com or https://console.cloud.google.com
	'googleAuth': {
	    'clientID': '328862859340-31u0d9g638g4bl4kjlmaph89t1uels0b.apps.googleusercontent.com',
	    'clientSecret': 'wS3F_sP3E3qBYNuBpFo87p8l',
	    'callbackURL': 'http://localhost:8080/auth/google/callback'
	},

	//console.developer.google.com or https://console.cloud.google.com
	'linkedinAuth': {
	    'clientID': '77duf6jhk5c96r',
	    'clientSecret': 'D9daOMR9m88Qkx4E',
	    'callbackURL': 'http://localhost:8080/auth/linkedin/callback'
	}

};
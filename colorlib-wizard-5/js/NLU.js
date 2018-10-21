

var NLU = require('watson-developer-cloud/natural-language-understanding/v1');
var readline = require('readline-sync');

var nlu = new NLU({
	version: '2018-03-16',
	username: '6812e6ac-b979-4cb3-abd6-f1cbdb95f252',
	password: '5aJHCXclsK6V',
	url: 'https://gateway.watsonplatform.net/natural-language-understanding/api'
})

var text = readline.question('Que texto desea analizar?');
var key = readline.question('Separe por comas palabras claves que desee analizar');

var text = document.getElementById("text");


function key5(stringz){
	var respu = stringz.split(',');
	respu.forEach(trimming);
	return respu;
}

function trimming(string){
	return string.trim();
}

var lista = key5(key);

var parameters = {
	'text': text,
	'features':{
		'emotion': {
			'document' : true,
			'targets': lista
		},
		'entities': {
			'emotion': true,
			'sentiment': true,
			'limit': 5
		},
		'categories': {}
	},
	'return_analyzed_text':true
}


function analyze() {
    nlu.analyze(parameters, function(err, response){
        if(err){
            if(err.code == 405)
            {
                console.log("error: " + 405 + " No tiene autorizacion.");
            }
            else if (err.code + 404)
            {
                console.log("error: " + 404 + " Not found")
            }
        }
        else {
            console.log(JSON.stringify(response, null, 2));
        }


})};
















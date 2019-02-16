# uitmasufo
Complete the UiTM SuFO\Exit forms and submit automatically.

## Instructions


1. Open UiTM iLearn v3
2. Open SuFO section\Exit Survey
3. Choose lecturers of your choice and proceed to evaluate

4.1.  Paste the code below in your browsers console (F12)

SuFO
```javascript


for(y=0; y<=23; y++){
	var min=2; 
    	var max=6;  
    	var random =Math.floor(Math.random() * (+max - +min)) + +min; 
	
    var questionNo = document.getElementsByName('data[AnalyticSufo][answer'+y+']'); //Find the radio buttons
        questionNo[random].checked = true //Check all the radio buttons
	document.getElementsByClassName('btn btn-success btn-flat')[0].click() //Click the submit button
}

```

Exit Survey
```javascript


for(y=0; y<=23; y++){
	var min=2; 
    	var max=6;  
    	var random =Math.floor(Math.random() * (+max - +min)) + +min;
	
    var questionNo = document.getElementsByName('data['+y+'][check]')
        questionNo[2].checked = true
	document.getElementsByClassName('btn btn-success btn-flat')[0].click()
}

```
5. Profit

## Credit
Inspired by [afiqiqmal](https://github.com/afiqiqmal/UiTM-Sufo-autofill-radio-form)

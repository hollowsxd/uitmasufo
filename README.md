# uitmasufo
Complete the UiTM SuFO forms and submit automatically.

## Instructions


1. Open UiTM iLearn v3
2. Open SuFO section
3. Choose lecturers of your choice and proceed to evaluate

4.1.  Paste the code below in your browsers console

```javascript


for(y=0; y<=23; y++){
    var questionNo = document.getElementsByName('data[AnalyticSufo][answer'+y+']');
        questionNo[2].checked = true
	document.getElementsByClassName('btn btn-success btn-flat')[0].click()
}

```
4.2. Or save as bookmark

```javascript

javascript(function(){
for(y=0; y<=23; y++){
    var questionNo = document.getElementsByName('data[AnalyticSufo][answer'+y+']');
        questionNo[2].checked = true
	document.getElementsByClassName('btn btn-success btn-flat')[0].click()
})();

```
5. Profit

## Credit
Inspired by [afiqiqmal](https://github.com/afiqiqmal/UiTM-Sufo-autofill-radio-formm)

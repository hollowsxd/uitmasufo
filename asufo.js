for(y=0; y<=23; y++){
    var questionNo = document.getElementsByName('data[AnalyticSufo][answer'+y+']'); //Find the radio buttons
        questionNo[2].checked = true //Check all the radio buttons
	document.getElementsByClassName('btn btn-success btn-flat')[0].click() //Click the submit button
}

for(y=0; y<=23; y++){
	var min=2; 
    	var max=6;  
    	var random =Math.floor(Math.random() * (+max - +min)) + +min; 
	
    var questionNo = document.getElementsByName('data[AnalyticSufo][answer'+y+']'); //Find the radio buttons
        questionNo[random].checked = true //Check all the radio buttons
	document.getElementsByClassName('btn btn-success btn-flat')[0].click() //Click the submit button
}

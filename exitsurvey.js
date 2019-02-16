for(y=0; y<=23; y++){
	var min=2; 
    	var max=6;  
    	var random =Math.floor(Math.random() * (+max - +min)) + +min; 
	
    	var questionNo = document.getElementsByName('data['+y+'][check]')
       		questionNo[random].checked = true
		document.getElementsByClassName('btn btn-success btn-flat')[0].click()
}

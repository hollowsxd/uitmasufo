for(y=0; y<=23; y++){
    var questionNo = document.getElementsByName('data['+y+'][check]')
        questionNo[2].checked = true
	document.getElementsByClassName('btn btn-success btn-flat')[0].click()
}
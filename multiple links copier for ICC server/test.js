
function collectAllInputData(){
    let allInputs = document.getElementsByTagName('input')
    let allInputValues = ""
    let allInputValuesArray = []
    
    for(input of allInputs){
     allInputValues= allInputValues + input.value + "\n"
     allInputValuesArray.push(input.value)
     }

     return {
        InputAsString: allInputValues,
        InputAsArray: allInputValuesArray
     }
     
}

function afterKeyPress(b){
        if (b.key === 'Enter') {
            // code for enter
            
           console.log(collectAllInputData(), 'AFter key press')
           
        //    here the data will be sent to backend and the alert sign will be removed later
        alert('stop before loading')
    }
    
    // console.log("pressed something")
    
    
}


document.addEventListener( "keyup", afterKeyPress)


document.addEventListener('submit', (e)=>{
    let datainput = collectAllInputData()
    
    console.log(datainput.InputAsString, "After submission", )
    //    here the data will be sent to backend and the alert sign will be removed later
    alert(datainput.InputAsString)
})



// Notes for later
// 1. How to get the url the user is accessing right now
// 2. 'OnKeyUp' function data should be stored on this way: first we have to put what the user types into a txt file and we have check every five minutes if that file is empty or not, if not then we can send the file data to the backend api to store or do any further work and after that the file should be cleared again.
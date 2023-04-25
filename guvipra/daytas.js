// Print odd numbers in an array
	// anonymous  :  function(array){
	//                   for(var i = 0 ; i< array.length ; i++){
	//                         if(array[i]%2!=0){
	//                            console.log(array[i])
	//                         } 
	//                    }
	//                 }
	// IIFE :     
      (function(array){
	             for(let i = 0 ; i< array.length ; i++){
	                        if(array[i]%2!=0){
	                           console.log(array[i]);
	                        } 
	                   }
	             })([1,2,3,4]);
	             
	// Arrow Function    
    // oddNumbers = (array) => {
	//                    for(var i = 0 ; i< array.length ; i++){
	//                         if(array[i]%2!=0){
	//                            console.log(array[i])
	//                         } 
	//                    }
	//                         }

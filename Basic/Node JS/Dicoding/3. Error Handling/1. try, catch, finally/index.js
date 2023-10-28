

// try {
//     console.log("Irzi");
//     console.log(caca)
// } catch(err){
//     console.log(err.name)
//     console.log(err.message)
//     // console.log(err.stack)
// } finally{
//     console.log("Code ini akan selalu dijalankan.");
// }


// code di body catch  akan dijalankan jika ada error.
// code di body finally akan selalu dijalankan mesikpun tidak/ada error.

// class ValidationError extends Error {
//     constructor(message) {
//       super(message);
//       this.name = "ValidationError";
//     }
//   }
   
//   const json = '{ "age": 30 }';
   
//   try {
//     const user = JSON.parse(jsson);
   
//     if (!user.name) {
//       throw new ValidationError("'name' is required asdasdjs.");
//     }
//     if (!user.age) {
//       throw new ValidationError("'age' is required.");
//     }
   
//     console.log(user.name);
//     console.log(user.age);
//   } catch (error) {
//     if (error instanceof SyntaxError) {
//       console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//       console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//       console.log(error.message);
//     } else {
//       console.log(error.stack);
//     }
//   }

// TODO 1
class ValidationError extends Error{
	constructor(message) {
    	super(message);
      	this.name = "ValidationError"
    }
}
// TODO 2
const validateNumberInput = (param1, param2, param3) => {
	if(typeof(param1) !== 'number') {
    	throw new ValidationError('Argumen pertama harus berupa number')
    } else if (typeof(param2) !== 'number'){
    	throw new ValidationError('Argumen kedua harus berupa number')
    } else if (typeof(param3) !== 'number'){
    	throw new ValidationError('Argumen ketiga harus berupa number')
    }
}
const detectTriangle = (a, b, c) => {
  // TODO 3
 try{
	validateNumberInput(a,b,c)
	if (a === b && b === c) {
   		return 'Segitiga sama sisi';
	}
	if (a === b || a === c || b === c) {
  		return 'Segitiga sama kaki';
	}
		return 'Segitiga sembarang';
	} catch(err) {
   		return err.message;
}
};
console.log(detectTriangle(1, 2, 3))


const questionGenerator = require('./questionGenerator');
const generateChoices = require('./generateChoices');

/*
const options = {
    // question and choices are optional depends on type of execution.  
    choice: {
        choices: ['Prime Number Sequence: ', 'Generate Prime number range: '],
        question: 'Do you want to generate sequence or range? '
    },
    question: ['Please enter size of array: '],
    programs: { 
        program: sumOfArray, 
        questions: (arrSize) => {
            let questions = [];
            for(let i = 1; i <= arrSize; i++) {
                questions.push(`Please enter number ${i}: `);
            }
            return questions;
        },
        validation: validator.isNumber, 
    },
    isStringQuestion: true,
    isMatrixQuestion: false
};
*/

function executor(options) {
    let repeat;
    let numbers = [];
    let number;
    let choiceIndex;
    let input;

    // Its a do while loop and it will continue untill user presses "yes". 
    do {
        console.clear();
        const { choice, programs } = options;
        // If there are choices in options then it will execute this IF condition.  
        if (choice) {
            choiceIndex = generateChoices(choice);
            if (choiceIndex > -1) {
                // Get the program that need to be executed
                const selectedProgram = programs[choiceIndex];
                const { questions, validation, program } = selectedProgram;
                if (questions) {
                    // Get all the question that and information from the user. 
                    numbers = questionGenerator.getInfo(questions);
                    let isValidNumber = true;
                    if (validation) {
                        // it will check for the validation provided. 
                        isValidNumber = numbers.every((number) => validation(number));
                    }
                    if (isValidNumber) {
                        // If validation succeed then it will execute the program. 
                        console.log(program(numbers));
                        // Will ask if you want to repeat the program.  
                        repeat = questionGenerator.repeatQuestion();
                    } else {
                        // This ESLE will be executed if validation fails and re-executes the program. 
                        console.log('Please enter a valid number \n');
                        executor(options);
                    }
                }
            } else {
                // If user selects 0 as choice then program exits. 
                console.log('Program Exited!!');
            }

        } else {
            // This ELSE will be executed if the program run without choices. 
            const { question, programs: { validation, program, questions }, isStringQuestion, isMatrixQuestion } = options;
            // If there are series of question to be asked then we pass an array of questions. 
            if (Array.isArray(question)) {
                // Bellow will be exeuted if it's a matrix problem. 
                if (isMatrixQuestion) {
                    // It will get initial information regaring matrix operation and dimenssions. 
                    const matrixInfo = question.map(q => questionGenerator.getStringInput(q));
                    // If user has selected arithmatic operation then it will execute bellow. 
                    if (matrixInfo[0] === '+' || matrixInfo[0] === '-' || matrixInfo[0] === '*') {
                        const isValidMatrix = validation.checkMatrixSize(matrixInfo[1], matrixInfo[2]);
                        if (isValidMatrix) {

                            const matrix1 = questions(matrixInfo[1]).map(qArr => questionGenerator.getInfo(qArr));
                            const matrix2 = questions(matrixInfo[2]).map(qArr => questionGenerator.getInfo(qArr));
                            console.log(program(matrix1, matrix2, matrixInfo[0]));
                            repeat = questionGenerator.repeatQuestion();
                        } else {
                            console.log('Please enter a valid matrix rows and cols \n');
                            executor(options);
                        }
                    } else {
                        // ELSE for trance and transpose operation. 
                        if (validation(matrixInfo[0])) {
                            const matrix = questions(matrixInfo[0]).map(qArr => questionGenerator.getInfo(qArr));
                            console.log(program(matrix));
                            repeat = questionGenerator.repeatQuestion();
                        } else {
                            console.log('Please enter a valid matrix rows and cols \n');
                            executor(options);
                        }
                    }
                } else {
                    // If it has multiple question to be answered at the start then it will execute bellow. 
                    number = questionGenerator.getInfo(question);
                    const isValidInput = numbers.every((number) => validation(number));
                    if (isValidInput) {
                        // Sometimes we pass a function to get the information or just get it from above questions asked. 
                        numbers = typeof question === 'function' ? questions(number).map(q => questionGenerator.getInfo(q)) : number;
                        console.log(program(numbers));
                        repeat = questionGenerator.repeatQuestion();
                    } else {
                        console.log('Please enter a valid number \n');
                        executor(options);
                    }
                }

            } else {
                // This is if we want to have single string / number input questions. 
                let isValid = false;
                input = isStringQuestion ? questionGenerator.getStringInput(question) : questionGenerator.getSingleNumber(question);
                isValid = validation && validation(input);
                if (isValid) {
                    numbers = typeof questions === 'function' ? questionGenerator.getInfo(questions(input)) : input;
                    console.log(program(numbers));
                    repeat = questionGenerator.repeatQuestion();
                } else {
                    console.log('Please enter a valid input \n');
                    executor(options);
                }
            }
        }

    } while (repeat === 'yes')
}

module.exports = executor;

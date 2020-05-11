const questionGenerator = require('./questionGenerator');
const generateChoices = require('./generateChoices');

function executeWithChoices(options) {
    let repeat;
    const { choice, programs } = options;
    do {
        console.clear();
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
                        executeWithChoices(options);
                    }
                }
            } else {
                // If user selects 0 as choice then program exits. 
                console.log('Program Exited!!');
            }

        }
    } while (repeat === 'y');
}

function executeWithMatrix(options) {
    let repeat;
    do {
        console.clear();
        const { question, programs: { validation, program, questions }, isMatrixQuestion } = options;
        if (isMatrixQuestion) {
            // It will get initial information regaring matrix operation and dimenssions. 
            const matrixInfo = question.map(q => questionGenerator.getStringInput(q));
            // If user has selected arithmatic operation then it will execute bellow. 
            if (matrixInfo[0] === '+' || matrixInfo[0] === '-' || matrixInfo[0] === '*') {
                const isValidMatrix = validation(matrixInfo[1], matrixInfo[2]);
                if (isValidMatrix) {

                    const matrix1 = questions(matrixInfo[1]).map(qArr => questionGenerator.getInfo(qArr));
                    const matrix2 = questions(matrixInfo[2]).map(qArr => questionGenerator.getInfo(qArr));
                    console.log(program(matrix1, matrix2, matrixInfo[0]));
                    repeat = questionGenerator.repeatQuestion();
                } else {
                    console.log('Please enter a valid matrix rows and cols \n');
                    executeWithMatrix(options);
                }
            } else {
                // ELSE for trance and transpose operation. 
                if (validation(matrixInfo[0])) {
                    const matrix = questions(matrixInfo[0]).map(qArr => questionGenerator.getInfo(qArr));
                    console.log(program(matrix));
                    repeat = questionGenerator.repeatQuestion();
                } else {
                    console.log('Please enter a valid matrix rows and cols \n');
                    executeWithMatrix(options);
                }
            }
        }
    } while (repeat === 'y')
}

function executeWithMultipleQuestions(options) {
    let repeat;
    let numbers;
    do {
        console.clear();
        const { question, programs: { validation, program, questions } } = options;
        // If it has multiple question to be answered at the start then it will execute bellow. 
        numbers = questionGenerator.getInfo(question);
        const isValidInput = numbers.every((number) => validation(number));
        if (isValidInput) {
            // Sometimes we pass a function to get the information or just get it from above questions asked. 
            numbers = typeof questions === 'function' ? questions(numbers).map(q => questionGenerator.getInfo(q)) : numbers;
            console.log(program(numbers));
            repeat = questionGenerator.repeatQuestion();
        } else {
            console.log('Please enter a valid number \n');
            executeWithMultipleQuestions(options);
        }
    } while (repeat === 'y');
}

function executeSingleQuestion(options) {
    let repeat;
    do {
        console.clear();
        const { question, programs: { validation, program, questions }, isStringQuestion } = options;
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
            executeSingleQuestion(options);
        }
    } while (repeat === 'y');
}

module.exports = {
    executeWithChoices,
    executeWithMatrix,
    executeWithMultipleQuestions,
    executeSingleQuestion
};

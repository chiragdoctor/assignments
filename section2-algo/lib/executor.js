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
    do {
        console.clear();
        const { choice, programs } = options;
        if (choice) {
            choiceIndex = generateChoices(choice);
            if (choiceIndex > -1) {
                const selectedProgram = programs[choiceIndex];
                const { questions, validation, program } = selectedProgram;
                if (questions) {
                    numbers = questionGenerator.getInfo(questions);
                    let isValidNumber = true;
                    if (validation) {
                        isValidNumber = numbers.every((number) => validation(number));
                    }
                    if (isValidNumber) {
                        console.log(program(numbers));
                        repeat = questionGenerator.repeatQuestion();
                    } else {
                        console.log('Please enter a valid number \n');
                        executor(options);
                    }
                }
            } else {
                console.log('Program Exited!!');
            }

        } else {
            const { question, programs: { validation, program, questions }, isStringQuestion, isMatrixQuestion } = options;
            if (Array.isArray(question)) {
                if (isMatrixQuestion) {
                    const matrixInfo = question.map(q => questionGenerator.getStringInput(q));
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
                    number = questionGenerator.getInfo(question);
                    const isValidInput = numbers.every((number) => validation(number));
                    if (isValidInput) {
                        numbers = typeof question === 'function' ? questions(number).map(q => questionGenerator.getInfo(q)) : number;
                        console.log(program(numbers));
                        repeat = questionGenerator.repeatQuestion();
                    } else {
                        console.log('Please enter a valid number \n');
                        executor(options);
                    }
                }

            } else {
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

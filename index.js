const input=require('readline-sync');

let questions=["1)Who was the first American woman in space?", "2)True or false: 5 kilomater == 5000 meters?", "3)(5+3)/2*10","4)Given the array [8,'Orbit','Trajectory',45], what entry is at index 2?", "5)What is the minimum crew size for the ISS?"
]

let correctAnswers=["Sally Ride","true","40","Trajectory","3"];

let candidateAnswers=[];

for (let i=0; i<questions.length-4; i++) {

  candidateAnswers[0]=input.question(questions[0])


 console.log(`Your answer: ${candidateAnswers[0]};
Correct answer: ${correctAnswers[0]}`);


console.log(" ");

 candidateAnswers[1]=input.question(questions[1])

 console.log(`Your answer: ${candidateAnswers[1]};
Correct answer: ${correctAnswers[1]}`);

console.log(" ");

 candidateAnswers[2]=input.question(questions[2])

 console.log(`Your answer: ${candidateAnswers[2]};
Correct answer: ${correctAnswers[2]}`);

console.log(" ");

 candidateAnswers[3]=input.question(questions[3])

 console.log(`Your answer: ${candidateAnswers[3]};
Correct answer: ${correctAnswers[3]}`);

console.log(" ");

 candidateAnswers[4]=input.question(questions[4])

 console.log(`Your answer: ${candidateAnswers[4]}
Correct answer: ${correctAnswers[4]}`);


}

class Question {
  constructor(text, choices, answer, difficulty){
    this.text = text; 
    this.choices = choices;
    this.answer = answer; 
    this.difficulty = difficulty; 

  }
 shuffleChoices(){
    //this.choices. Math.floor(Math.random())
    for(i=0; i >= this.choices.length; i++){
        const shuffleMethod =  Math.floor(Math.random());

    }
 }
}
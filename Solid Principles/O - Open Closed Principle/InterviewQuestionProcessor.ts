import {
  InterviewQuestion,
  FinanceInterviewQuestions,
  AlgorithmsInterviewQuestions,
  AIInterviewQuestion,
} from './index';

export default class InterviewQuestionProcessor {
  public static process(question: InterviewQuestion) {
    //   if (question instanceof AlgorithmsInterviewQuestions) {
    //     let algorithms: AlgorithmsInterviewQuestions = <
    //       AlgorithmsInterviewQuestions
    //     >question;

    //     algorithms.execute();
    //   } else if (question instanceof AIInterviewQuestion) {
    //     let ai: AIInterviewQuestion = <InterviewQuestion>question;
    //     ai.execute();
    //   } else if (question instanceof FinanceInterviewQuestions) {
    //     let finance: FinanceInterviewQuestions = <FinanceInterviewQuestions>(
    //       question
    //     );
    //     finance.execute();
    //   }
    // }
    // NOTE: WE DON'T NEED TO CHECK IF IT'S AN INTANCE OF SOMETHING BECAUSE WITH AN INTERFACE
    //       WE CAN DEFINE ABSTRACTION AT A VERY TOP FUNDEMENTAL LEVEL

    // this is a typical implementation of the loosely coupled system.
    // this class knows nothing about the question and its type (!!!)
    // THIS IS PURE ABSTRACTION
    question.execute();
  }
}

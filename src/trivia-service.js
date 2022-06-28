export default class TriviaService {
  static getTrivia(numberOfQuestions, category, difficulty) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open('GET', url, true);
      request.send();
    });
  }
}

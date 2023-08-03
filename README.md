# Football Quiz Trivia Web-App
url - https://football-trivia-quiz.vercel.app/

This is a Quiz Trivia web application built with React.js and Material-UI. The app allows users to participate in fun quizzes and test their knowledge on various topics. It provides a user-friendly interface with a clean and responsive design.

## Features

- Multiple-choice questions: Users can answer trivia questions by selecting one of the provided options.
- Random quizzes: The app offers a variety of random quizzes from different categories to keep the user engaged.
- Timer: Each question is associated with a timer, adding an element of excitement and challenge to the quiz.
- Score Tracking: The user's score is displayed during the quiz, and the final score is presented at the end of the quiz.
- Responsive Design: The app is designed to work seamlessly on different devices and screen sizes.

## Installation

To run the Quiz Trivia Web App locally on your machine, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/quiz-trivia-app.git
cd quiz-trivia-app
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The app should now be accessible at `http://localhost:3000` in your web browser.

## Dependencies

The app utilizes the following main dependencies:

- React.js: A JavaScript library for building user interfaces.
- Material-UI: A popular React UI framework for creating modern and responsive UI components.

Other dependencies are listed in the `package.json` file.

## Usage

1. Home Page: The landing page displays a list of available quizzes. Users can select a quiz to start the trivia.

2. Quiz Page: Once a quiz is selected, the user will be taken to the quiz page. Each question is presented along with multiple-choice options. Users must select an answer before the timer runs out.

3. Score Page: After completing all the questions or when the timer runs out, the app will show the user's final score and provide an option to retry the quiz or go back to the home page.

## Customization

If you wish to customize the app or add more quizzes, you can do the following:

1. Add New Quizzes: To add new quizzes, modify the `src/data/quizData.js` file. Follow the existing structure for questions, options, and correct answers.

2. Modify Styles: You can change the appearance of the app by updating the styles in the components or by modifying the Material-UI theme in `src/theme.js`.

## Contribution

Contributions to the Quiz Trivia Web App are welcome! If you find any issues or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- The app was built using React.js and Material-UI, which are excellent frameworks for creating interactive and visually appealing web applications.
- Thanks to all the open-source contributors for providing valuable resources and libraries.

# Movie Browser

![PAGE SCREENSHOT](/src/image/moviebrowser.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## DEMO

[SITE PREVIEW](https://krystian22frontend.github.io/movie-browser/)

## DESCRIPTION

This is a project from Youcode programming bootcamp, still in development.

**Things to do in nearby future:**

- dodać loader przy długim ładowaniu bazy danych filmów
- kolory strzałki pagi
- całe klikalne logo "Movie Browser"
- brakuje loadera przy przełączaniu każdej stron pagi
- movies aktywny przy załadowaniu strony
- nie działa wklejanie strony w query,
- logika pagi powinna opierać się na query params i na jego podstawie ściągać dane z API
- loader przy movie description
- aktywny przycisk podstrony movie / people
- ilość kafelków w movie cast and crew
- debounce czyli nie wysyłać zapytania dla każdej literki
- wyszukiwanie danego filmu w query i w inpucie jeśli wkleimy tylko do query
- jeśli nie ma sekcji to jej nie wyświetlamy movie cast albo crew
- github CoPilot do VSC
- hooki generyczne które się powtarzają
- reużywalne hooki na przyszłość
- usuwanie return z funkcji jeśli nie ma warunku
- usuwanie fragmentu jeśli nie trzeba
- zamiast statów setDate, date, żeby nie pisać wielu stateów, pisać jak najmniej stateów
- 0 w styled components bez "px"
- warto nauczyć się TypeScrypt
- dostaniemy kod do Webstorma
- audytcv@youcode.pl (dostaniemy odpowiedź co zmienić poprawić)
- wysyłać cv na mid lub senior
- dołączyć nieformalny filmik z CV żeby się wyróżnić
- Cv wysyłać na wszystkie oferty front end, inne biblioteki są nieważne można się ich douczyć
- wysyłać cvki poza polske, soildjobs , theprotocol, pracuj.pl/it, grupki na fb, LinkedIn, dodać rekruterów z firm IT do znajomych na LindekIn
- zrobić arkusz do rekrutacji jaki jest aktualny status i śledzić
- audytcv zapytać co wpisać w historię zatrudnienia
- grupa na slacku "ponadprogram" można pytać o jakieś nowe rzeczy lub zadania z rekrutacji

_Technology used in this project includes:_

- HTML 5
- CSS with BEM
- JS
- React
- React Router
- Redux Saga
- Babel
- Webpack
- Axios
- styled components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

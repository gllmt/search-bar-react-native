# Search-bar-react-native
### Technical challenge for Omie.

Build a React application that mimics this search feature : <br/>
when the user inputs keywords, it displays matching products in appropriate order.


## Features

-  An input field and a list of results
- The most adequate products are listed, in the right order.
- Make it runnable "out of the box" : here with [Expo](https://expo.dev/) => [technical-challenge-omie-search-react](https://snack.expo.dev/@gllmt/technical-challenge-omie-search-react)

## Installation
My OS environement is  Mac OS Monterey v12.4.
For Mac OS :
You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.
Follow the steps here : [React native Setting up](https://reactnative.dev/docs/environment-setup)

I use [Node.js](https://nodejs.org/) v16.15.1.

Install the dependencies and devDependencies.

```sh
cd search-bar-react-native
npm i
npx react-native run-ios
```

## Future Features

### Todo : 

  - Find or create word list for 'excludeTerms' more complete.
  - add a debounce in searchBar.
  - keep ItemTerms on cache.


## License

MIT

**Free Software.**
# RN_StarWars

A react native app to play around with the SWAPI. Tech stack: Expo RN &amp; Redux.

Started: 09:00 and finished at 15:00
If I had more time, I would have:

- implemented the logout option
- implemented the login tab on Guest mode
- Refactored the duplicate codes
- Styled it.

Dependecies:

For consistency, prettier code format and mistakes warnings.
npm install --save-dev eslint
npx eslint --init
npm install --save-dev eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-react-hooks
npm I –save typescript
npm install --save-dev prettier eslint-plugin-prettier

Stack navigation
yarn add @react-navigation/native
expo install react-native-screens react-native-safe-area-context
yarn add @react-navigation/stack
expo install react-native-gesture-handler @react-native-masked-view/masked-view

Tab bottom navigation
yarn add @react-navigation/bottom-tabs

Form
yarn add formik

Async local storage
yarn add @react-native-async-storage/async-storage

uuid
yarn add react-native-uuid

Redux
yarn add @reduxjs/toolkit redux redux-thunk react-redux

API
yarn add axios

structure:

Stack
Index(Home, Guest)
TabSatck
Home(Pilots, Favorite, NewPilot, Logout)
Guest(Pilots, Login)
Redux(User, Pilots, Starship)
User:{
email:
id:
}
Pilots:{
name:
gender:
url:
favorite:
starships:
}
Starship:{
as SWAPI
}

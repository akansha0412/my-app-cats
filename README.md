This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## npm install
To install all the depedencies in your local from package.json

and after that, run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### File Structure
- First there is spaceX component which is parent of all. From here we are calling sidebar component which is filters and Grid Component which shows data.
- In spaceX didmount calling service to get data without any filter, for api calling using fetch.
- Then according to applied filters, calling service with required params.
- For now disable input, we can enable it also and call service on change with debounce effect.
_ For now, there is no option to clear our filters, we can provide that option also so that user doesn't have to reloead the page.


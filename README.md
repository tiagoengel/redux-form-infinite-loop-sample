Example of [this](https://github.com/erikras/redux-form/issues/2629) redux form issue.

## Usage

```
yarn
yarn start
```

Open chrome console to see the error.

Comment/Uncomment the lines bellow in the App.js file to test.

```javascript
const mapStateToProps = state => ({
  // This causes the error
  clicks: { enhanced: true, count: state.clicks.count },
  // This works
  // clicks: state.clicks
});
```
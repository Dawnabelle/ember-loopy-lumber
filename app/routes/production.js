import Route from '@ember/routing/route';
import hasEmberVersion from 'ember-test-helpers/has-ember-version';

export default Route.extend({
  model() {
    // return {
    //   "ProductName": "Poderosa",
    //   "DimensionName": "1\" X 4\" X 14'",
    //   "BoardsSum": 20,
    //   "BoardFeetSum": 10000
    // }
    return hasEmberVersion.$.getJSON("/data/production.json");
  }
});

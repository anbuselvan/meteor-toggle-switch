// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-toggle-switch.js.
import { MeteorToggleSwitch as ToggleSwitch } from "meteor/anbuselvan:meteor-toggle-switch";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-toggle-switch - example', function (test) {
  test.equal(ToggleSwitch, "meteor-toggle-switch");
});

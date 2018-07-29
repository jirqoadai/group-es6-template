// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery';
import _ from 'lodash';

const console = window.console;

$(() => {
  // console.log
  const a = _.max(3, 2, 1);
  console.log(a);
  console.log(this);
});

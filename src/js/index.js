// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const $ = window.$;
const _ = window._;
const console = window.console;

$(() => {
  // console.log
  const a = _.max(3, 2, 1);
  console.log(a);
  console.log(this);
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'jquery';
import _ from 'lodash';
import './styles/main.scss';

const console = window.console;

$(() => {
  // console.log
  const a = _.max(3, 2, 1);
  console.log(a);
  console.log(this);
  $('.accordion-header').on('click', (e) => {
    if ($(e.currentTarget).parent().hasClass('active')) {
      $(e.currentTarget).parent().addClass('hide');
      $(e.currentTarget).parent().removeClass('active');
    } else {
      $('.accordion').removeClass('active');
      $(e.currentTarget).parent().addClass('active');
      $(e.currentTarget).parent().removeClass('hide');
    }
  });
});

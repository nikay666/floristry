/*jshint esversion: 6 */ 
/* jshint browser: true */
/* jshint node: true */
'use strict';
import { popupInit } from './js/popup';
import { mobileHeaderMenuInit } from './js/mobileHeaderMenu';
import './scss/style.scss';
import { Gallery } from './js/gallery';
import { ItemsSlider } from './js/slider';

window.addEventListener('DOMContentLoaded', function(){

mobileHeaderMenuInit();
popupInit();
Gallery();
ItemsSlider();

/* -- Mini-gal on Main-page -- */


});

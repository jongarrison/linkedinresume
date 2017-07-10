//First scroll down to load all sections and then paste the following into the Chrome js console

var q = [];
var h = function(selector) { q.push(function() { $(selector) };
var c = function(selector) { q.push(function() { $(selector) }; 
var f = function(subf) { q.push(subf); };
setInterval(function() {q.shift()()); console.log("q length: ", q.length); }, 500);

$('body').css('margin', '-200px 0px 0px 20px');

h('div#ad-slot-3');
h('div#freemium-bg');
h('div#header');
h('div.insights');
h('div.aux-module');
h('div#text-ad-container');
h('div#preview-ctx');
h('div.right-fixed');
h('div#footer');
h('div.katy-button-group');
h('div.treasury-cta');
h('div.recommended-sections-list-container');
h('h3.recommended-sections-headline');
h(".right-rail");
h("#artdeco-modal-outlet");
h("#a11y-menu");
h("#extended-nav");
h(".msg-overlay-list-bubble");
c(".truncate-multiline--button");
h('.pv-wvmp-wvmu-section');
c(".pv-profile-section__see-more-inline");
h(".pv-profile-section__edit-action");
h(".pv-profile-section__header-add-action");

h(".pv-top-card-section__header");
h(".bg-img__visible-content");
h(".truncate-multiline--button span");
h(".bg-img-edit__grid-line");
h("#expanded-footer");
h(".bg-img-edit__grid-line");

c(".pv-profile-section__see-more-inline");
h(".artdeco-container-card-action-bar");
h("svg.artdeco-icon");
f(function() {$("#ge-entry").parent().hide(); });

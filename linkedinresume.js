//First scroll down to load all sections and then paste the following into the Chrome js console


$('.nav-footer__copyright').scrollTop();

var q = [];
var u = [];
var hide = function(selector) {
  q.push(function () {
    $(selector).hide();
  });
  undohide(selector);
};
var click = function(selector) {
  q.push(function() {
    $(selector).click();
  });
};
var undohide = function(selector) {
  u.push(function () {
    $(selector).show();
  });
};
var runfunction = function(subf) { q.push(subf); };
var undo = function() {
  for (var i = 0; i < u.length; i++ ){
    u[i]();
  }
};

$('body').css('margin', '-200px 0px 0px 20px');
$(".pv-top-card-section").css({"margin-top": 110});
$(".pv-top-card-section__photo-wrapper").css({visibility: 'hidden'});

hide('div#ad-slot-3');
hide('div#freemium-bg');
hide('div#header');
hide('div.insights');
hide('div.aux-module');
hide('div#text-ad-container');
hide('div#preview-ctx');
hide('div.right-fixed');
hide('div#footer');
hide('div.katy-button-group');
hide('div.treasury-cta');
hide('div.recommended-sections-list-container');
hide('h3.recommended-sections-headline');
hide(".right-rail");
hide("#artdeco-modal-outlet");
hide("#a11y-menu");
hide("#extended-nav");
hide(".msg-overlay-list-bubble");
click(".truncate-multiline--button");
hide('.pv-wvmp-wvmu-section');
click(".pv-profile-section__see-more-inline");
hide(".pv-profile-section__edit-action");
hide(".pv-profile-section__header-add-action");
hide(".bg-img__visible-content");
hide(".truncate-multiline--button span");
hide(".bg-img-edit__grid-line");
hide("#expanded-footer");
click(".pv-profile-section__see-more-inline");
hide(".artdeco-container-card-action-bar");
hide("svg.artdeco-icon");
click(".pv-skills-section__additional-skills");
hide("[data-control-name='edit_skills_settings']");
hide(".recommendations-inlining ul[role='tablist']");
hide(".pv-profile-section__see-less-inline");
hide("[data-control-name='edit_skills_add']");
hide(".pv-interests-section");
hide(".pv-top-card-section__connections");
hide('.pv-featured-skills-section');


runfunction(function() {
  $("#ge-entry").parent().hide();
});

window.scrollTo(0, 999999);

setTimeout(
  function() {
    setInterval(
      function() {
        if (!q.length) return;
        q.shift()();
        console.log("q length: ", q.length);
      },
      500
    );
  },
  2000
);



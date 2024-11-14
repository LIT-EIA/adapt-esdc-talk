define([
  'core/js/adapt',
  './TalkModel',
  './TalkView',
  './lang/translation'
], function (Adapt, TalkModel, TalkView, Translation) {

  Adapt.once("i18n:ready", function () {
    Translation.loadTranslations(Adapt);
  });

  return Adapt.register("talk", {
    model: TalkModel,
    view: TalkView
  });

});
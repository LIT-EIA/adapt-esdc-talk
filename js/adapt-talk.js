define([
  'core/js/adapt',
  './TalkModel',
  './TalkView'
], function (Adapt, TalkModel, TalkView) {

  return Adapt.register("talk", {
    model: TalkModel,
    view: TalkView
  });

});
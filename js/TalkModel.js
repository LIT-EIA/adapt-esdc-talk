define([
  'core/js/adapt',
  'core/js/models/itemModel',
  'core/js/models/componentModel'
], function (Adapt, ItemModel, ComponentModel) {

  var TalkModel = ComponentModel.extend({

    init: function() {
      this.setUpItems();
    },

    setUpItems: function() {

      const items = this.get('_items') || [];
      const characters = this.get('_characters') || [];
      characters.forEach((character, index) => {
        character._index = index + 1;
      });
      items.forEach((item, index) => {
        item._index = index;
        if (!item._character) return;
        item._character = characters.filter((character) => character._index == item._character)[0];
      });
      this.set('_children', new Backbone.Collection(items, { model: ItemModel }));
    }

  });

  return TalkModel;

});
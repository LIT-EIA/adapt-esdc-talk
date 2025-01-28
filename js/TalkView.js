define([
  'core/js/adapt',
  'core/js/views/componentView'
], function (Adapt, ComponentView) {

  var TalkView = ComponentView.extend({

    events: {
    },

    preRender: function () {
      this.hasObserver = ('IntersectionObserver' in window);
      this.visitedCount = 0;
      this.setupObserver();
      var updatedItems = [];

      if (!this.model.get('_items')) return;
      this.model.get('_items').forEach(function(item) {
        var graphicFlexDirection;
        switch (item['_graphic']['position']) {
          case 'left':
            graphicFlexDirection = "row";
            break;
          case 'right':
            graphicFlexDirection = "row-reverse";
            break;
          case 'bottom':
            graphicFlexDirection = "column-reverse";
            break;
          default:
            graphicFlexDirection = "column"
        }
        item['_graphic']['graphicFlexDirection'] = graphicFlexDirection;

        if (!item['_character'] && ['Narrator', 'Narrateur'].includes(item['_characterName'])) {
          item['_character'] = {
            _isNarrator: true,
            _index: 0
          }
        }

        updatedItems.push(item);
      });
      console.log('updatedItems: ', updatedItems);
      this.model.set('_items', updatedItems);
    },

    postRender: function() {
      const self = this;
      this.$('.talk__chat__wrapper').each(function(index, element) {
        if (self.hasObserver) {
          self.observer.observe(element);
        } else {
          element.classList.add('is-visited');
          self.visitedCount++;
        }
      });
      this.updateVisitedCount();

      this.$('.component__widget').imageready(this.setReadyStatus.bind(this));
      this.setupInviewCompletion('.component__widget');
    },

    setupObserver: function () {
      const self = this;
      if (this.hasObserver) {
        this.observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const chatEntry = entry.target;
              chatEntry.classList.add('is-visited');
              self.visitedCount++;
              self.observer.unobserve(chatEntry);
            }
          });
        }, {
          threshold: 0.25,
          root: null,
          rootMargin: '0px'
        });
      }
    },

    updateVisitedCount: function () {
      this.$('.talk__container-items').attr('aria-setsize', this.visitedCount);
    }

  });

  return TalkView;

});
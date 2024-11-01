define([
  'core/js/views/componentView'
], function (ComponentView) {

  var TalkView = ComponentView.extend({

    events: {
    },

    preRender: function () {
      this.hasObserver = ('IntersectionObserver' in window);
      this.visitedCount = 0;
      this.setupObserver();
    },

    postRender: function() {
      const self = this;
      this.$('.talk__chat').each(function(index, element) {
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
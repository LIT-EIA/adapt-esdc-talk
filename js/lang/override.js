define(function () {

  function loadTranslationFile(Adapt) {
    const globals = Adapt.course.get('_globals')._components['_talk'];
    return {
      "adapt-talk-ariaRegion": globals.ariaRegion
    }
  }

  return { loadTranslationFile }
});

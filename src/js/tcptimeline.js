// global namespace United Codes
var bi = bi || {};

// namespace EventTimeline
bi.Timeline = {
  version: "23.1.0.0",
  opt: {
    debug: {
      enabled: true,
      prefix: "BIETL > ",
      location: "namespace",
    },
  },
  _debugMsg(loc, msg, param1, param2, param3, param4) {
    if (this.opt.debug.enabled)
      apex.debug.trace(
        this.opt.debug.prefix + loc + " > " + msg,
        param1,
        param2,
        param3,
        param4
      ); //trace
  },
  _debugErr(loc, msg, param1, param2, param3, param4) {
    if (this.opt.debug.enabled)
      apex.debug.error(
        this.opt.debug.prefix + loc + " > " + msg,
        param1,
        param2,
        param3,
        param4
      );
  },
  setToggle: function () {
    bi.Timeline._debugMsg(bi.Timeline.opt.debug.location, "setToggle executed");
  },
  init: function () {
    apex.jQuery(apex.gPageContext$).on("apexreadyend", function (e) {
      bi.Timeline._debugMsg(bi.Timeline.opt.debug.location, "init executed");

      var element = document.querySelector(
        ".timelineXXX__event__icon.vt, .timelineXXX__event__icon.hz"
      );
      var toggleStyle = element.classList.value;
      //console.log(toggleStyle + "Benjy");
      console.log(toggleStyle);
      if (toggleStyle === "timelineXXX__event__icon hz") {
        /*  $('link[href*="tcptimeline_vt.css"]').remove();
                $("head").append(
                    '<link rel="stylesheet" type="text/css" href="#PLUGIN_FILES#tcptimeline_hz.css">'
                );*/
        console.log("TIMELINE HORIZONTAL");
        var elements = document.querySelectorAll('[class^="timeline"]');
        // Iterate through each element
        elements.forEach(function (element) {
          // Get the current class name
          var currentClass = element.className;

          // Replace XXX with a new value (e.g., "NewClass")
          var newClass = currentClass.replace(/timelineXXX/g, "timelinehz");

          // Update the class name
          element.className = newClass;
        });
      } else if (toggleStyle === "timelineXXX__event__icon vt") {
        /*  console.log("remove hz css");
                  $('link[href*="tcptimeline_hz.css"]').remove();
                  console.log("append vt css");
                  $("head").append(
                    '<link rel="stylesheet" type="text/css" href="#PLUGIN_FILES#tcptimeline_vt.css">'
                  ); */
        console.log("TIMELINE VERTICAL");
        var elements = document.querySelectorAll('[class^="timeline"]');
        // Iterate through each element
        elements.forEach(function (element) {
          // Get the current class name
          var currentClass = element.className;

          // Replace XXX with a new value (e.g., "NewClass")
          var newClass = currentClass.replace(/timelineXXX/g, "timelinevt");

          // Update the class name
          element.className = newClass;
        });
      }
    });
  },
};

bi.Timeline.init();

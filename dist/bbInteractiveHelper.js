!function(undefined) {
    "use strict";
    var BBInteractiveHelper = {
        triggerComponentOnFocusEvent: function(e) {
            var elmRepresentationInVirtualDOM = b.deref(e);
            if (!elmRepresentationInVirtualDOM) throw Error("Component for given element not found");
            var component = elmRepresentationInVirtualDOM;
            if (!component.component.onFocus) throw Error("Component doesn't have onFocus method");
            component.component.onFocus(component.ctx, {
                target: elmRepresentationInVirtualDOM
            });
        }
    };
    window.BBInteractiveHelper = BBInteractiveHelper;
}();
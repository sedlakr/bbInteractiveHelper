declare var b: typeof import("bobril");

const BBInteractiveHelper = {
	/**
	 * Finds component for given element and triggers onFocus event
	 * onFocus event must be registered on component, otherwise Error is thrown
	 * @param {HTMLElement} e
	 */
	triggerComponentOnFocusEvent(e: HTMLElement): void {
		const elmRepresentationInVirtualDOM = b.deref(e);

		if (!elmRepresentationInVirtualDOM) {
			throw new Error("Component for given element not found");
		}
		const component = elmRepresentationInVirtualDOM;
		if (!component.component.onFocus) {
			throw new Error("Component doesn't have onFocus method");
		}
		component.component.onFocus(component.ctx, {target: elmRepresentationInVirtualDOM});
	}
};


(window as any)["BBInteractiveHelper"] = BBInteractiveHelper;
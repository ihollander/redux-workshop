function setupRender(store) {
  store.subscribe(() => {
    // ✅ Get the current state from the store by calling store.getState()
    const state = store.getState();
    // ✅ Use the state to update the DOM
    document.querySelector("#count").textContent = `Count: ${state.value}`;
  });
}

export default setupRender;

function updateTimestampsToAriaLabel() {
    const elements = document.querySelectorAll(
        "span.timestamp_c19a55.timestampInline_c19a55 > time"
    );
    
    elements.forEach((timeElement) => {
        const ariaLabel = timeElement.getAttribute("aria-label");
        if (ariaLabel && timeElement.textContent !== ariaLabel) {
            timeElement.textContent = ariaLabel;
        }
    });
}

// Run the function immediately and observe for future changes

updateTimestampsToAriaLabel();

const observer = new MutationObserver(() => {
  updateTimestampsToAriaLabel();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
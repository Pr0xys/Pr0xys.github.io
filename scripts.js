function scrollHome() {
    console.log("Scrolling to Home");

    // Get the first element in the document (e.g., header or the first section)
    const firstSection = document.querySelector("header") || document.querySelector("section");

    if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback: Directly scroll to the very top if no header or section exists
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function scrollPageUp() {
    console.log("Scrolling Page Up");

    // Get all sections
    const sections = Array.from(document.querySelectorAll("section, header, footer"));
    const currentScroll = window.scrollY;

    // Find the section currently in the center of the viewport
    const currentSectionIndex = sections.findIndex(
        (section) => section.getBoundingClientRect().top <= window.innerHeight / 2
            && section.getBoundingClientRect().bottom >= window.innerHeight / 2
    );

    // Scroll to the previous section
    if (currentSectionIndex > 0) {
        sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
    } else if (currentScroll > 0) {
        // If the scroll position is above 0 but no section matches, go to the top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.log("Already at the top!");
    }
}

function scrollPageDown() {
    console.log("Scrolling Page Down");

    // Get all sections
    const sections = Array.from(document.querySelectorAll("section, header, footer"));
    const currentScroll = window.scrollY + window.innerHeight;

    // Find the section currently in the center of the viewport
    const currentSectionIndex = sections.findIndex(
        (section) => section.getBoundingClientRect().top <= window.innerHeight / 2
            && section.getBoundingClientRect().bottom >= window.innerHeight / 2
    );

    // Scroll to the next section
    if (currentSectionIndex >= 0 && currentSectionIndex < sections.length - 1) {
        sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Already at the bottom!");
    }
}
// MEMBER B: Implement the search feature.
// TODO 1: Return true when query is empty or only spaces.
// TODO 2: Otherwise return true only when the event's title OR location
//         contains the query (case-insensitive).
// Hint: .trim(), .toLowerCase(), .includes()
window.matchesSearch = function (event, query) {
  // TODO 1: Return true when query is empty or only spaces.
  if (query.trim() === "") {
    return true;
  }

  // TODO 2: Otherwise return true only when the event's title OR location
  //         contains the query (case-insensitive).
  const lowerQuery = query.toLowerCase();
  return event.title.toLowerCase().includes(lowerQuery) || event.location.toLowerCase().includes(lowerQuery);
};  


window.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const categorySelect = document.getElementById("category-select");

  searchInput.addEventListener("input", renderEvents);
  categorySelect.addEventListener("change", renderEvents);
  renderEvents();
})
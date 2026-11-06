// When a visitor clicks "Book a French class" on the Courses page,
// the link is contact.html#french. Here we read the word after the #
// and pre-select it in the "Language you want to learn" dropdown.
const language = window.location.hash.slice(1); // "#french" -> "french"
const select = document.getElementById("service");

if (language && select) {
  const option = select.querySelector(`option[value="${CSS.escape(language)}"]`);
  if (option) {
    select.value = language;
  }
}

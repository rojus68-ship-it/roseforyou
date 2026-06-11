const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {

  const dedication =
    document.getElementById("dedication").value.trim();

  const sender =
    document.getElementById("sender").value.trim();

  const message =
    document.getElementById("message").value.trim();

  const recipient =
    dedication || "Brangiam žmogui";

  const author =
    sender || "Anonimas";

  const letter =
    message ||
    "Kartais nereikia daug žodžių. Užtenka priminti, kad galvojau apie tave.";

  document.getElementById("dedicationText").innerText =
    recipient;

  document.getElementById("letterText").innerText =
    letter;

  document.getElementById("senderText").innerText =
    "Nuo " + author;

  document.getElementById("preview").classList.remove("hidden");

  document.getElementById("preview").scrollIntoView({
    behavior: "smooth"
  });

});

const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
  const dedication = document.getElementById("dedication").value;
  const sender = document.getElementById("sender").value;
  const message = document.getElementById("message").value;

  document.getElementById("dedicationText").innerText =
    dedication || "Brangiam žmogui";

  document.getElementById("letterText").innerText =
    message ||
    "Kartais nereikia daug žodžių. Užtenka priminti, kad galvojau apie tave.";

  document.getElementById("senderText").innerText =
    "— " + (sender || "Anonimas");

  document.getElementById("preview").classList.remove("hidden");

  document.getElementById("preview").scrollIntoView({
    behavior: "smooth"
  });
});

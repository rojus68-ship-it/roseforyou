const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {

  const dedication =
    document.getElementById("dedication").value;

  const sender =
    document.getElementById("sender").value;

  const preview =
    document.getElementById("preview");

  document.getElementById("letterText").innerText =
    "Kartais nereikia daug žodžių. Užtenka priminti, kad galvojau apie tave.";

  document.getElementById("dedicationText").innerText =
    dedication;

  document.getElementById("senderText").innerText =
    "Nuo " + sender;

  preview.classList.remove("hidden");

  preview.scrollIntoView({
    behavior: "smooth"
  });
});

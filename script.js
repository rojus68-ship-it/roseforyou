const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
  const dedication = document.getElementById("dedication").value.trim();
  const sender = document.getElementById("sender").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("dedicationText").innerText =
    dedication || "Brangiam žmogui";

  document.getElementById("letterText").innerText =
    message || "Šiandien pagalvojau apie tave...";

  document.getElementById("senderText").innerText =
    sender ? "Nuo " + sender : "Nuo žmogaus, kuris pagalvojo apie tave";

  document.getElementById("preview").classList.remove("hidden");

  document.getElementById("preview").scrollIntoView({
    behavior: "smooth"
  });
});

const btn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

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

downloadBtn.addEventListener("click", async () => {
  const card = document.querySelector(".preview-card");

  const canvas = await html2canvas(card, {
    backgroundColor: "#ffffff",
    scale: 3
  });

  const link = document.createElement("a");
  link.download = "rose-for-you.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

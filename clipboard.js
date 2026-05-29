const emailBtns = document.querySelectorAll(".btn-copy");

emailBtns.forEach((emailBtn) => {
  emailBtn.addEventListener("click", async () => {
    await navigator.clipboard.writeText("+2348107263975");

    emailBtn.classList.add("is-changing");

    setTimeout(() => {
      emailBtn.textContent = "Copied!";
      emailBtn.classList.remove("is-changing");
    }, 150);

    setTimeout(() => {
      emailBtn.classList.add("is-changing");
      setTimeout(() => {
        emailBtn.textContent = "Copy Phone/Whatsapp number";
        emailBtn.classList.remove("is-changing");
      }, 150);
    }, 2000);
  });
});


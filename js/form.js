window.addEventListener("load", () => {
    if (window.location.hash !== '#gracias') {
      return
    }
    const myModal = new bootstrap.Modal("#modal");
    myModal.show();
});
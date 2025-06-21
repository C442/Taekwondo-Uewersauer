
<script>
  function setLanguage(lang) {
    document.querySelectorAll("[data-de]").forEach(el => {
      el.textContent = el.dataset[lang];
    });
  }
</script>

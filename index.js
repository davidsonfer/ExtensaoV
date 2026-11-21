const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    });

    // Fade-in on scroll
    const faders = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    faders.forEach(f => obs.observe(f));

    // Form
    function enviarContato() {
      const nome = document.getElementById('nome-inp').value.trim();
      const email = document.getElementById('email-inp').value.trim();
      if (!nome || !email) {
        alert('Por favor, preencha seu nome e e-mail.');
        return;
      }
      alert(`Obrigado, ${nome}! 🎉\nEntraremos em contato em breve no e-mail: ${email}`);
      document.getElementById('nome-inp').value = '';
      document.getElementById('email-inp').value = '';
    }
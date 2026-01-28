(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeEl = document.getElementById('nome');
    const emailEl = document.getElementById('email');
    const telefoneEl = document.getElementById('telefone');
    const mensagemEl = document.getElementById('mensagem');

    const nome = nomeEl && 'value' in nomeEl ? nomeEl.value : '';
    const email = emailEl && 'value' in emailEl ? emailEl.value : '';
    const telefone = telefoneEl && 'value' in telefoneEl ? telefoneEl.value : '';
    const mensagem = mensagemEl && 'value' in mensagemEl ? mensagemEl.value : '';

    let textoWhatsApp = `Olá! Meu nome é *${nome}*.\n\n`;
    textoWhatsApp += `📧 E-mail: ${email}\n`;
    if (telefone) {
      textoWhatsApp += `📱 Telefone: ${telefone}\n`;
    }
    textoWhatsApp += `\n💬 Mensagem:\n${mensagem}`;

    const numeroWhatsApp = '5513996999930';
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(urlWhatsApp, '_blank');
  });
})();

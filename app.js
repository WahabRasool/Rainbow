document.addEventListener('mousemove', (e) => {
    document.body.style.setProperty('--x', e.clientX / window.innerWidth - 0.5);
    document.body.style.setProperty('--y', e.clientY / window.innerHeight - 0.5);
  });
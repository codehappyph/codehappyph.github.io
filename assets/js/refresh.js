/* Progressive enhancement: navigation stays visible without JavaScript. */
(() => {
  const button = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-navigation');
  if (!button || !navigation) return;

  document.documentElement.classList.add('js');
  button.hidden = false;
  const setOpen = (open) => {
    button.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
  };
  button.addEventListener('click', () => {
    setOpen(button.getAttribute('aria-expanded') !== 'true');
  });
  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      button.focus();
    }
  });
  window.matchMedia('(max-width: 760px)').addEventListener('change', () => setOpen(false));

  const header = document.querySelector('.site-header');
  const sections = Array.from(navigation.querySelectorAll('a[href^="#"]'))
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter(({ section }) => section);
  const updateNavigation = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 12);
    const offset = (header ? header.getBoundingClientRect().height : 80) + 40;
    let current = null;
    sections.forEach((entry) => {
      if (entry.section.getBoundingClientRect().top <= offset) current = entry;
    });
    sections.forEach((entry) => {
      if (entry === current) entry.link.setAttribute('aria-current', 'location');
      else entry.link.removeAttribute('aria-current');
    });
  };
  let framePending = false;
  const scheduleUpdate = () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(() => {
      updateNavigation();
      framePending = false;
    });
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  updateNavigation();
})();

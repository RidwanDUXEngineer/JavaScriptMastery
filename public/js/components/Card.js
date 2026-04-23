export function Card(content, variant = '') {
  const classes = ['main-card', variant].filter(Boolean).join(' ');

  return `
    <section class="${classes}">
      <div class="card-body">
        ${content}
      </div>
    </section>
  `;
}
export function Header({ name, email }) {
  return `
    <header class="header">
      <div class="user-meta">
        <div class="avatar"></div>

        <div class="user-text">
          <span class="user-name">${name}</span>
          <span class="user-email">${email}</span>
        </div>
      </div>

      <div class="company-logo"></div>
    </header>
  `;
}
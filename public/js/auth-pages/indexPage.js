import { Header } from '../components/Header.js';
import { Card } from '../components/Card.js';
import { getSessionUser } from '../auth.js';

const app = document.getElementById('app');

async function render() {
  const user = await getSessionUser();

  const isAuthenticated = !!user;

  const name = isAuthenticated ? user.name : 'No name';
  const email = isAuthenticated ? user.email : 'No email address';
  const blurred = isAuthenticated ? '' : 'blurred';

  app.innerHTML = `
    ${Header({ name, email })}
    ${Card(`
      <h2>User Details</h2>
      <p style="margin-top:20px;color:#999;">
        ${
          isAuthenticated
            ? 'You are logged in. You can now access your settings.'
            : 'Please login to access your details.'
        }
      </p>

      <div style="margin-top:30px;">
        ${
          isAuthenticated
            ? `<button onclick="window.location.href='/settings'">
                 Go to Settings
               </button>`
            : `<button onclick="window.location.href='/login'">
                 Login
               </button>`
        }
      </div>
    `, blurred)}
  `;
}

render();
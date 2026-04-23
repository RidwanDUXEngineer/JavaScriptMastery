import { Card } from "../components/Card.js";
import { api } from "../api.js";
import { showToast } from "../toast.js";
import { redirectIfAuthenticated } from "../guard.js";

const app = document.getElementById("app");

async function init() {
  await redirectIfAuthenticated();
  render();
}

function render() {
  app.innerHTML = Card(`
    <div class="avatar" style="margin:auto;"></div>
    <h2 style="text-align:center;margin-top:20px;">
      Login to your account
    </h2>

    <form 
      id="loginForm" method="post" autocomplete="off"
      style="margin-top:30px;display:flex;flex-direction:column;gap:20px;">
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  `);

  const form = document.getElementById("loginForm");
  form.addEventListener("submit", handleLogin);
}

async function handleLogin(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  try {
    const result = await api.login({ email, password });
    console.log("login result:", result);

    const userName = result?.user?.name || result?.name || "User";
    showToast("Authenticated as " + userName);

    setTimeout(() => {
      window.location.href = "/settings";
    }, 1200);
  } catch (error) {
    console.error(error);
    showToast(error.message || "Invalid credentials", "error");
  }
}

init();
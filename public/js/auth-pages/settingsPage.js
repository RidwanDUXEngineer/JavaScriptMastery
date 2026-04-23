import { Header } from "../components/Header.js";
import { Card } from "../components/Card.js";
import { api } from "../api.js";
//import { requireAuth } from "../guard.js";
import { logoutUser } from "../auth.js";
import { showToast } from "../toast.js";

const app = document.getElementById("app");

async function init() {
  //await requireAuth();
  await render();
}

async function render() {
  try {
    const user = await api.getUserProfile();

    app.innerHTML = `
      ${Header({ name: user.name, email: user.email })}
      ${Card(`
        <h2>Edit Details</h2>

        <form id="updateForm"
          style="margin-top:30px;display:flex;flex-direction:column;gap:20px;">
          <input
            type="text"
            name="name"
            value="${escapeHtml(user.name)}"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            value="${escapeHtml(user.email)}"
            placeholder="Your email"
            required
          />
          <button type="submit">Change Details</button>
        </form>

        <button
          id="logoutBtn"
          style="margin-top:20px;background:transparent;color:white;border:1px solid #222;">
          Logout
        </button>
      `)}
    `;

    document
      .getElementById("updateForm")
      .addEventListener("submit", handleUpdate);

    document
      .getElementById("logoutBtn")
      .addEventListener("click", handleLogout);

  } catch (error) {
    showToast(error.message || "Failed to load settings", "error");
  }
}

async function handleUpdate(e) {
  e.preventDefault();

  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();

  try {
    const updatedUser = await api.updateUserProfile({ name, email });

    showToast("Details updated successfully");

    app.innerHTML = `
      ${Header({ name: updatedUser.name, email: updatedUser.email })}
      ${Card(`
        <h2>Edit Details</h2>

        <form id="updateForm"
          style="margin-top:30px;display:flex;flex-direction:column;gap:20px;">
          <input
            type="text"
            name="name"
            value="${escapeHtml(updatedUser.name)}"
            placeholder="Your name"
            required
          />
          <input
            type="email"
            name="email"
            value="${escapeHtml(updatedUser.email)}"
            placeholder="Your email"
            required
          />
          <button type="submit">Change Details</button>
        </form>

        <button
          id="logoutBtn"
          style="margin-top:20px;background:transparent;color:white;border:1px solid #222;">
          Logout
        </button>
      `)}
    `;

    document
      .getElementById("updateForm")
      .addEventListener("submit", handleUpdate);

    document
      .getElementById("logoutBtn")
      .addEventListener("click", handleLogout);

  } catch (error) {
    showToast(error.message || "Failed to update details", "error");
  }
}

async function handleLogout() {
  try {
    await logoutUser();
    showToast("Logged out successfully");

    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (error) {
    showToast(error.message || "Logout failed", "error");
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

init();
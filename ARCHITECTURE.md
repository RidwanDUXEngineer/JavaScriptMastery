# 🧠 Architecture Breakdown

## 🏗 Rendering Strategy

This application follows a Multi-Page Application (MPA) architecture.

- EJS renders the base HTML (server-side)
- JavaScript enhances UI (client-side)
- Backend is the source of truth

---

## 🔐 Authentication Model

Uses express-session.

Flow:
1. Login
2. Session created
3. Cookie stored (connect.sid)
4. Server validates session on requests

---

## 🔄 Data Flow

Frontend → API → Controller → Service → Data Layer

Example:
loginPage.js → api.js → /api/auth/login → controller → service → database

---

## 🧩 Frontend Structure

api.js → HTTP requests  
auth.js → session abstraction  
guard.js → route protection  
components → UI reuse  
auth-pages → page logic  

---

## 🔒 Security

- Session-based auth  
- HTTP-only cookies  
- No sensitive URL exposure  

---

## ⚖️ Trade-offs

No DB → simple but not persistent  
No framework → control but manual  
MPA → simpler but less dynamic  

---

## 🔮 Future

- Add database  
- Add bcrypt  
- Add CSRF protection  
- Move to SPA  

---

## 🧠 Summary

Built to demonstrate real full-stack fundamentals without frameworks.

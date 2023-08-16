document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Ganti dengan validasi login yang sesuai
  if (username === "user" && password === "pass") {
    window.location.href = "isi.html";
  } else {
    alert("Username atau password salah.");
  }
});

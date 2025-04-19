// Função para gerar uma senha aleatória
let genButton = document.getElementById("generate");
let password = document.getElementById("password");
let passwordContainer = document.getElementById("passwordContainer");
let copyButton = document.getElementById("copy");

function genPassword(length) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    generatedPassword += chars[randomIndex];
  }
  return generatedPassword;
}

genButton.onclick = () => {
  const length = 12; // Default length for the password
  let result = genPassword(length);
  password.innerText = result;
  passwordContainer.style.display = "block";
};

copyButton.onclick = () => {
  const generatedPassword = password.innerText; // Access the displayed password
  navigator.clipboard
    .writeText(generatedPassword)
    .then(() => {
      alert("Senha copiada para a área de transferência!");
    })
    .catch(() => {
      alert("Falha ao copiar a senha.");
    });
};

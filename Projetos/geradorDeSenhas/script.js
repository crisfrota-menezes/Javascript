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
  const length = 12;
  let result = genPassword(length);
  password.innerText = result;
  passwordContainer.style.display = "block";
};

copyButton.onclick = async () => {
  const generatedPassword = password.innerText;
  try {
    await navigator.clipboard.writeText(generatedPassword);
    alert("Senha copiada para a área de transferência!");
  } catch (err) {
    alert("Falha ao copiar a senha.");
  }
};

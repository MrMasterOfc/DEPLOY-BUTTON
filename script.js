document.getElementById("githubForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = "Checking...";

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((data) => {
      const forkedRepo = data.find(
        (repo) => repo.full_name === "MrMasterOfc/MASTER-MD" && repo.fork
      );
      if (forkedRepo) {
        window.location.href = "https://www.heroku.com/deploy/?template=";
      } else {
        window.location.href = "https://github.com/MrMasterOfc/MASTER-MD/fork";
      }
    })
    .catch((error) => {
      messageDiv.textContent = "Lol Github UserName Doesn't Exist.";
      console.error("Error:", error);
    });
});

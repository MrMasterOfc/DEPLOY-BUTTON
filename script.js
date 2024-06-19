

/*---Created By Mr Sahan Ofc---*/
/*👨‍💻 MASTER MIND 👨‍💻*/



document.getElementById("githubForm").addEventListener("submit", function (_0x3c28ee) {
  _0x3c28ee.preventDefault();
  const _0x629556 = document.getElementById("username").value;
  const _0x2edba9 = document.getElementById("message");
  _0x2edba9.textContent = "Checking...";
  fetch("https://api.github.com/users/" + _0x629556 + "/repos").then(_0x457852 => _0x457852.json()).then(_0x8d844e => {
    const _0x308519 = _0x8d844e.find(_0x7aab5e => _0x7aab5e.full_name === "MrMasterOfc/MASTER-MD" && _0x7aab5e.fork);
    if (_0x308519) {
      window.location.href = "https://www.heroku.com/deploy/?template=";
    } else {
      window.location.href = "https://github.com/MrMasterOfc/MASTER-MD/fork";
    }
  })["catch"](_0x28c4e2 => {
    _0x2edba9.textContent = "Lol Github UserName Doesn't Exist.";
    console.error("Error:", _0x28c4e2);
  });
});

document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();
  let fullname = document.getElementById("FullName").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let discord = document.getElementById("discord").value;
  let isMember = document.getElementById("Yeah").checked;
  let speciality = document.getElementById("study").value;
  let motivation = document.getElementById("desc").value;

  const body = {
    fullname,
    email,
    phone,
    discord,
    isMember,
    speciality,
    motivation,
  };

  console.log(body);
  const msg = document.getElementById("msg");
  msg.innerHTML = "";

  fetch("/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.err) {
        msg.innerHTML = `<p class="error">${data.errors[0].msg}</p>`;
        msg.class = "error";
      } else {
        msg.innerHTML = `<p class="success">${data.msg}</p>`;
        msg.class = "success";
        document.getElementById("form").reset();
      }
    });
};

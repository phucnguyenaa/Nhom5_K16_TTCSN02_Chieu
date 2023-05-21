// import axios from "axios";

// // async function getUser(ten, mk) {
// //   try {
// //     console.log("try to axios");
// //     const response = await axios.get("/login", {
// //       ten: ten,
// //       mk: mk,
// //     });
// //     console.log(response);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }
// const signin = document.querySelector(".signup-submit");
// signin.addEventListener("click", (e) => {
//   console.log("hi");
//   const ten = document.getElementById("email");
//   const mk = document.getElementById("pass");
//   getUser(ten, mk);
// });

//prep
const signin = document.querySelector(".signup-submit");
signin.addEventListener("click", (e) => {
  // e.preventDefault();
  const ten = document.querySelector("#email").value;
  const mk = document.querySelector("#pass").value;
  getUser(ten, mk);
});

async function getUser(ten, mk) {
  try {
    console.log("try to axios");
    const response = await axios.post("http://localhost:3000/login", {
      method: "POST",
      body: {
        ten: ten,
        mk: mk,
      },
    });
    //axious se chay trc dtien vao login control sau do redirect
    //sag page va control tra ve 1 trag page
    console.log(response);
    window.location.href = `/pagelogin?ten=${ten}&mk=${mk}`;
  } catch (error) {
    if (error.response.status == 400) {
      document.getElementsByClassName("extra")[0].textContent =
        "bạn không được để trống";
    }
    if (error.response.status == 401) {
      document.getElementsByClassName("extra")[0].textContent =
        "tài khoản mật khẩu không phù hợp";
    }
    console.log(error.response.status);
  }
}
// Include the axios library using require
// const button = document.querySelector(".signup-submit");

// // Add an event listener to the button
// button.addEventListener("click", function () {
//   // Send an Axios request when the button is clicked
//   axios
//     .get("/login")
//     .then(function (response) {
//       // Handle the response
//       console.log(response);
//     })
//     .catch(function (error) {
//       // Handle any errors that occur
//       console.log(error);
//     });
// });
// //problem eventlistener and axious not belong
// //chay den axios thi dung

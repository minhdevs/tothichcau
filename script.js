const body = document.querySelector("body");
body.innerHTML = `
<div class="card card1">
      <h4 class="card-title">Cậu có iu tớ không????</h4>
      <img src="./images/cat.png" alt="" />
      <h4
        class="card-title"
        style="font-size: 14px; color: #6f6f6f; margin: 6px"
      >
        Tớ đang đợi cậu đó "N".
      </h4>
      <audio src="./iucau.mp3" loop controls></audio>
      <button class="no" style="float: left">Không</button>
      <button class="yes" style="float: right">Có</button>
    </div>
    <div class="card card2">
      <h4 class="card-title">Lý Do Cậu Thích Tớ Là Gì?</h4>
      <input type="text" placeholder="Nhập tên của cậu." />
      <input type="text" placeholder="Lý do cậu thích tớ là gì, Tại sao ????" />
      <button class="submit">Gửi</button>
    </div>
`;

const style = document.querySelector("style");
style.innerHTML = `
* {
        padding: 0;
        margin: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        transition: 0.3s all ease;
        box-sizing: content-box;
      }

      html {
        background: deeppink;
      }

      .card {
        background: white;
        padding: 15px;
        border-radius: 10px;
        width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .card-title {
        text-align: center;
        font-size: 20px;
        color: purple;
      }

      .card img {
        display: block;
        margin: 15px auto;
        border-radius: 8px;
      }

      audio {
        display: block;
        margin: 0 auto;
      }

      button {
        padding: 10px;
        width: 130px;
        border-radius: 8px;
        border: 0;
        margin: 15px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      }

      .no {
        position: absolute;
        background: #6f6f6f;
      }

      .yes {
        background-image: linear-gradient(
          to bottom right,
          purple,
          orangered,
          red
        );
      }

      .card2 {
        display: none;
      }

      .card2 input {
        padding: 8px;
        margin: 5px 0px;
        width: 100%;
        box-sizing: border-box;
        border: 2px solid deeppink;
        border-radius: 6px;
        font-weight: bold;
        color: #6f6f6f;
      }

      .card2 input:focus {
        outline: 0;
      }

      .submit {
        width: 100%;
        box-sizing: border-box;
        margin: 0;
        margin-top: 15px;
        background-image: linear-gradient(
          to bottom right,
          purple,
          orangered,
          red
        );
      }
`;
const no = document.querySelector(".no");
const yes = document.querySelector(".yes");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const submit = document.querySelector(".submit");
const audio = document.querySelector("audio");

audio.play();

no.onmouseover = function (e) {
  let left = Math.floor(Math.random() * 110) + 1;
  let right = Math.floor(Math.random() * 110) + 1;
  this.style.left = left + "%";
  this.style.top = right + "%";
};

yes.onclick = function (e) {
  card1.style.display = "none";
  card2.style.display = "block";
};

submit.onclick = function (e) {
  document.location.replace("https://www.facebook.com/messages/t/sadboy.2808");
};

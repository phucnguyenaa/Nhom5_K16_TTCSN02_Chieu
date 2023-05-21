const x = document.querySelector(".buy");
const y = document.querySelector(".tb");
x.addEventListener("click", () => {
  y.style.display = "block";
});
/animation hieu ug xhien con transition hieu ung khi tac dong/;
const imgs = ["./Picture1.jpg", "./Picture2.jpg", "./Picture3.jpg"];
const b = document.querySelector(".left");
const c = document.querySelector(".right");
let temp = 0;
const d = document.querySelectorAll(".imgh");
console.log(d);
c.addEventListener("click", (e) => {
  if (temp < 2) {
    ++temp;
  } else temp = 0;
  console.log(temp);
  //

  if (temp >= 1) {
    //   d[temp - 1].style.display = "none";
    // }
    // d[temp].style.display = "block";
    // while(temp>=1)
    // {
    //   for(int i=0,i<temp,i++)
    //   {
    //     if(bien>=1)
    //     d[bien].style.display = "none";
    //   }
    //tu duy client gui data server se ktra data 1 luot xem cai nao se dc tich
    //cai nao ko roi gui lai client
    for (const bien in d) {
      if (bien != temp) {
        d[bien].style.display = "none";
      } else {
        d[bien].style.display = "block";
      }
    }
  }
});

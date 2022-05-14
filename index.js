// Html dosyasından form etikentine ulaşma.

let ulDOM = document.querySelector("#list");
let formDOM = document.querySelector("#form");


// Sadece boşluk karakteri girilen veya değer girilmeyen metni algılama.

function noSpace(task) {
  return /^\s*$/.test(task);
}

// Ekle butonu oluşturma ve alana girilen bilgileri listeye aktarma.

formDOM.addEventListener("submit", ekleClick);
function ekleClick(event) {
  event.preventDefault();
  let task = document.querySelector("#task");
  let liDOMbtn = document.createElement("button");
  liDOMbtn.classList.add("list-group-item", "btn");
  liDOMbtn.innerHTML = task.value;
  let liDOMlist = []
  liDOMlist.push(liDOMbtn)

  // Listeden silme butonu oluşturma.

  let closeBTN = document.createElement("button")
  closeBTN.classList.add("btn-close")
  let closeBTNlist = []
  closeBTNlist.push(closeBTN)

  // Değer girilmesi veya sadece boşluk karakteri girilmemesi koşulu. 

  if (!noSpace(task.value)) {
    for (var i = 0; i < liDOMlist.length; i++) {
      for (var t = 0; t < closeBTNlist.length; t++) {
        liDOMlist[i].appendChild(closeBTNlist[t])
      }
    }
    ulDOM.append(liDOMbtn);
    task.value = "";

    closeBTN.addEventListener("click", function () {
      liDOMbtn.remove()
    })

    liDOMbtn.addEventListener("click", checkTASK)

    // Girilen göreve tamamlandı işareti koyma fonksiyonu

    function checkTASK(){
      if(liDOMbtn.style.backgroundColor != "lightgreen"){
        liDOMbtn.style.backgroundColor = "lightgreen"
        liDOMbtn.style.textDecoration = "line-through"
        liDOMbtn.style.textDecorationThickness = "2px"      
      }
      else{
        liDOMbtn.style.backgroundColor = "white"
        liDOMbtn.style.textDecoration = "none"
      }
    }

  }
  else {
    alert("HATA! Alanı boş bırakmayınız veya boş karakter girmeyiniz!")
    task.value = ""
  }
}


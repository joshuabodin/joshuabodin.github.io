document.addEventListener("DOMContentLoaded", function() {
    var buton1 = document.getElementById("buton1");
    var buton2 = document.getElementById("buton2");
    var buton1Text = document.querySelector("#buton1 span");
    var valentineMessage = document.getElementById("valentine-message");
    var valentineImage = document.getElementById("valentine-image");
    var newText = document.getElementById("new-text");
    var newImage = document.getElementById("new-image");
  
    var originalTopMessage = valentineMessage.offsetTop;
    var originalTopImage = valentineImage.offsetTop;
  
    buton2.addEventListener("click", function() {
      var currentWidth = buton1.offsetWidth;
      var currentHeight = buton1.offsetHeight;
  
      // Boyutu 5 piksel artır
      var newWidth = currentWidth * 1.1;
      var newHeight = currentHeight * 1.1;
      buton1.style.width = newWidth + "px";
      buton1.style.height = newHeight + "px";
  
      // Metnin boyutunu da 5 piksel artır
      var currentFontSize = parseInt(window.getComputedStyle(buton1Text).fontSize);
      var newFontSize = currentFontSize + 1;
      buton1Text.style.fontSize = newFontSize + "px";
  
      // Valentin görselini ve mesajını butonun üstünde tut
      valentineMessage.style.transition = "top 0.3s ease"; // Yavaş animasyon
      valentineImage.style.transition = "top 0.3s ease"; // Yavaş animasyon
      valentineMessage.style.top = originalTopMessage - buton1.offsetHeight + "px";
      valentineImage.style.top = originalTopImage - buton1.offsetHeight + "px";
    });
  
    buton1.addEventListener("click", function() {
      // Buton 1'e tıklandığında buton 1 ve buton 2'yi görünmez yap
      buton1.style.visibility = "hidden";
      buton2.style.visibility = "hidden";
      // Valentine message ve image'i görünmez yap
      valentineMessage.style.visibility = "hidden";
      valentineImage.style.visibility = "hidden";
      // Bekleme süresi
      setTimeout(function() {
        // Yayy metni ve yeni görseli görünür hale getir
        if (newText && newImage) {
          newText.style.visibility = "visible";
          // Yeni GIF dosyasının yolunu belirtin
          newImage.src = "https://media.tenor.com/dVMwRYiAGsAAAAAi/kiss.gif";
          newImage.style.visibility = "visible";
        }
      }, 300); // 2 saniyelik bekleme süresi (2000 milisaniye)
    });
  
    // Başlangıçta newText ve newImage'in görünmez olmasını sağla
    if (newText && newImage) {
      newText.style.visibility = "hidden";
      newImage.style.visibility = "hidden";
    }
  });
  
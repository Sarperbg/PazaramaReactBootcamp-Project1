const isCreditCardNumberValid = (cardNumber) => {

    // status adlı bir bool tuttum.
    let status = false;
    //replace all fonksiyonu ile '-' olan ifadeleri kaldırdım.
    cardNumber = cardNumber.toString().replaceAll("-", "");
    try{
      // kartnumarasını stringe çevirip length ile uzunluğunu kontrol ettim.
      // kartnumarasını int e çevirip hepsinin rakam olduğunu kontrol ettim.
      // kartnumarasının 2'ye modunu alıp sayının çift olmasını kontrol ettim.
      if(cardNumber.toString().length == 16 && parseInt(cardNumber).toString().length == 16 && parseInt(cardNumber)%2 == 0){
  
        // kart numarasını for ile dönebilmek için array'e çevirdim.
        let cardNumberArray = String(cardNumber).split("").map((cardNumber)=>{
          return Number(cardNumber)
        })
  
        let total = 0;
        // for ile kartnumarasını gezdim. Toplamlarını aldım.
        // Birbirinden farklı rakam olması durumunda statusu true aldım.
        for(var i = 0; i < cardNumberArray.length; i++ ) {
          total += cardNumberArray[i];
          if(!status){
            status = cardNumberArray[i] == cardNumberArray[0] ? false : true;
          }
        }
        // rakamların toplamının 16'dan küçük olma durumunda status'u false döndürdüm.
        if(total < 16){
          status = false;
        }
      }
      else{
        status = false;
      }
      return status;
    }
    catch{
      return false;
    }
  }
  
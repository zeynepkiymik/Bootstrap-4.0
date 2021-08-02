
  $(document).ready(function(){
    var sayi_1 = 0 ; //BOŞ 
    var islem = '+-*/%'; //boş
    $( "button" ).click(function() {
      var button_val = $( this ).text();//TUŞA BASTIĞIMIZ KARAKTER /TEXT=BUTONUN DEĞERİ
      if( button_val == '+' || button_val == '-'  || button_val == '*' || button_val == '^' )
      {
        //alert("şuan toplama işlmine geçildi")
        //console.log(" = "+$( "#output" ).text());
        sayi_1 = parseFloat( $( "#output" ).text());  //ekrandaki değeri numerik değere çeviriyor
        islem = $(this).text();
        $( "#output" ).text($(this).text()); // + ya da - simgesi geliyor.
        //console.log("hafıza da " + sayi_1);
      }
      else if( button_val == '=')
      {   
        if( islem == '+')
        var sonuc = sayi_1 + parseFloat( $( "#output" ).text());
        
        if( islem == '-')
        var sonuc = sayi_1 - parseFloat( $( "#output" ).text());

        if( islem == '*')
        var sonuc = sayi_1 * parseFloat( $( "#output" ).text());
        
        if( islem == '^')
        var sonuc = Math.pow(sayi_1 , parseFloat($( "#output" ).text())) ;
        


        $( "#output" ).text("= " + sonuc );
        //alert("Hesap makinesinde Sıfırlama yapınız");
      }
      else if( button_val == 'C')
      {
        sayi_1 = 0 ;
        $( "#output" ).text(0);
      }
      else
      { 
        if($( "#output" ).text() == '+' || $( "#output" ).text() == '-'  || $( "#output" ).text() == '*' || $( "#output" ).text() == '^' || $( "#output" ).text() == '/')
        $("#output").text(0); //EKRN TEMZ


        $( "#output" ).append(button_val);
        //console.log("uzunluk = " + $( "#output" ).text().length )
        if( $( "#output" ).text().length > 11 )
        {
            $( "#output" ).css('font-size' , '23px');
 
        }
        else
        {
            $( "#output" ).css('font-size' , '58px');

        }
      //  Burası işlem dışıdır. Ekrana sayıları gönderecektir.

      }

     
    });

  

  });


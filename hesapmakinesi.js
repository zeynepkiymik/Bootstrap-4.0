
  $(document).ready(function(){
    var sayi_1 = 0 ; //BOŞ 
    var islem = '+-*/%'; //boş
    $( "button" ).click(function() {


      var button_val = $( this ).text();//TUŞA BASTIĞIMIZ KARAKTER /TEXT=BUTONUN DEĞERİ
      
      
      
      if( button_val == '+' || button_val == '-'  || button_val == '*' || button_val == '/' || button_val == '^' )
      {
        //alert("şuan toplama işlmine geçildi")
        //console.log(" = "+$( "#output" ).val());
        sayi_1 = parseFloat( $( "#output" ).val());  //ekrandaki değeri numerik değere çeviriyor
        islem = $(this).text();
        $( "#output" ).val($(this).text()); // + ya da - simgesi geliyor.
        //console.log("hafıza da " + sayi_1);
      }
      else if(button_val == '-/+')
      {
         
        $( "#output" ).val( -1 * parseFloat( $( "#output" ).val()));
      }
      else if( button_val == '=')
      {   
        if( islem == '+')
        var sonuc = sayi_1 + parseFloat( $( "#output" ).val());
        
        if( islem == '-')
        var sonuc = sayi_1 - parseFloat( $( "#output" ).val());

        if( islem == '*')
        var sonuc = sayi_1 * parseFloat( $( "#output" ).val());

        if( islem == '/')
        var sonuc = sayi_1 / parseFloat( $( "#output" ).val());
        
        if( islem == '^')
        var sonuc = Math.pow(sayi_1 , parseFloat($( "#output" ).val())) ;
        
     
        

        $( "#output" ).val("= " + sonuc );
        //alert("Hesap makinesinde Sıfırlama yapınız");
      }
      else if( button_val == 'C')
      {
        sayi_1 = 0 ;
        $( "#output" ).val(0);
      }
      else if( button_val == 'sil'){
        var ekran = $("#output").val(); //tüm satırı seçti
        $("#output").val(ekran.substring(0,ekran.length - 1)); //ekranın uzunlugundan 1 çıkarıp gösterir
      }
      else
      { 
        if($( "#output" ).val() == '+' || $( "#output" ).val() == '-'  || $( "#output" ).val() == '*' || $( "#output" ).val() == '/' || $( "#output" ).val() == '^' )
        $("#output").val(0); //EKRN TEMZ

      

        if(  button_val != 'sil' || button_val != '-/+') //sil dışındaki tüm karakterleri getirr
        $( "#output" ).val($( "#output" ).val() + button_val); //veri ekler
        //console.log("uzunluk = " + $( "#output" ).val().length )
        if( $( "#output" ).val().length > 11 )
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


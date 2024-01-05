$(document).ready(function(){
   $("input[type=button]").click(function(){

      var datum = $("input[type=date]").val();
      var counter = 1;

      if(datum!="")
      {
         datum = new Date(datum);
         den = datum.getDate();
         console.log(den);
         datum.setDate(1);
         prvni_den = datum.getDay();
         prvni_den = prvni_den-1;
         pocet_dnu = new Date(datum.getFullYear(), datum.getMonth()+1, 0).getDate();
         console.log(pocet_dnu);
         if(prvni_den<0)
         {
            prvni_den = 6;
         }
         console.log(prvni_den);
         
         for(i=1;i<=6;i++)
         {
            for(j=0;j<=6;j++)
            {
               $("main .calendar table tr:nth("+(i)+") td:nth("+(j)+")").text("");
               $("main .calendar table tr:nth("+(i)+") td:nth("+(j)+")").css({"background-color" : "", "color" : "", "font-weight" : "", "font-size" : ""});
            }

            if(i==1)
            {
               for(j=prvni_den;j<=6;j++)
               {
                  $("main .calendar table tr:nth("+(i)+") td:nth("+(j)+")").text(counter);
                  if(counter == den)
                  {
                     $("main .calendar table tr:nth("+(i)+") td:nth("+(j)+")").css({"background-color" : "white", "color" : "brown", "font-weight" : "900", "font-size" : "25px"});
                  }
                  counter++;
               }
            }
            else
            {
               for(j=0;j<=6 && counter<=pocet_dnu;j++)
               {
                  $("main .calendar table tr:nth("+(i)+") td:nth("+(j)+")").text(counter);
                  if(counter == den)
                  {
                     $("main .calendar table tr:nth("+(i)+") td:nth("+(j)+")").css({"background-color" : "white", "color" : "brown", "font-weight" : "900", "font-size" : "25px"});
                  }
                  counter++;
               }
            }
         }
      }
   })
})
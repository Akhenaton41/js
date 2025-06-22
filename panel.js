function autocomplete2(a,arr,val,inp){	

	var currentFocus;
	
	adVar=false
	val=val.split(" ")
	
	abort = false;
	
	uNo=inp.id.slice(-1)
	
	
	for (jj = 0; jj < arr.length  && !abort; jj++) {
		isim1=arr[jj].split(ayrac)
		if(isim1[0].toLocaleUpperCase('tr-TR')==val[0].toLocaleUpperCase('tr-TR')){abort = true;break;}
		}
	
	if(!abort){return}
	
	yeni=[]

	for (i = 0; i < arr.length; i++) {
		isim2=arr[i].split(ayrac)
		
		cinsiyet=isim1[1]+""+isim2[1]
		
		
		if (isim2[0].substr(0, val[1].length).toLocaleLowerCase('tr-TR').replace(/â/i,"a").replace(/î/i,"i").replace(/û/i,"u") == val[1].toLocaleLowerCase('tr-TR') && cinsiyet!="01" && cinsiyet!="10" && isim1[0]!=isim2[0]) {

			b = document.createElement("DIV");
         
			b.innerHTML = "<strong>" + isim1[0]+" "+isim2[0].substr(0, val[1].length) + "</strong>";
			b.innerHTML += isim2[0].substr(val[1].length);
         
			if(isim1[1]==0){b.innerHTML="<span>&#128104;</span> "+b.innerHTML}
			else if(isim1[1]==1){b.innerHTML="<span>&#128105;</span> "+b.innerHTML}
			else if(isim1[1]==2){b.innerHTML="<span>&#128100;</span> "+b.innerHTML}

			b.innerHTML += "<input type='hidden' value='" + isim1[0]+" "+isim2[0] + "'>";
			b.innerHTML += "<input type='hidden' value='" + isim1[2]+" "+isim2[2] + "'>";
			b.innerHTML += "<input type='hidden' value='" + isim1[1]+isim2[1] + "'>";
			
			b.addEventListener("click", function(e) {
              
              inp.setAttribute("data-isim",this.innerText.slice(2))
              inp.setAttribute("data-cinsiyet",this.getElementsByTagName("input")[2].value )
              
              inp.value = this.getElementsByTagName("input")[1].value; 
              fontKontrol(inp)
              isimEkle(inp)
              closeAllLists();
              
          });
          a.appendChild(b);

			}
		}
	
	inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      
      //alert(e.keyCode)
 

    
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        
        //alert(inp)
        
        //Bul(inp)
        closeAllLists();
        e.preventDefault();
        if (currentFocus > -1) {if (x) x[currentFocus].click();}
        
      }
  });
  
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

function removeActive(x) {
	for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
		}
	}
	
function closeAllLists(elmnt) {
	var x = document.getElementsByClassName("autocomplete-items");
	for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
			x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener("click", function (e){closeAllLists(e.target);});

	
	}










function autocomplete(inp, arr) {
	

	
	var currentFocus;
	
	
	inp.addEventListener("input", function(e) {
		
		//alert(this.id)
	
		uNo=this.id.slice(-1)
		
		var a, b, i, val = this.value;
		
		val=(val.toLocaleLowerCase('tr-TR')).replace(/â/i,"a").replace(/î/i,"i").replace(/û/i,"u")
		
		closeAllLists();
		if (!val) { return false;}
		currentFocus = -1;
		a = document.createElement("DIV");
		a.setAttribute("id", this.id + "autocomplete-list");
		a.setAttribute("class", "autocomplete-items");
		
		id("autocomplete"+uNo).appendChild(a);
		
		if(val.indexOf(" ")>0){autocomplete2(a,arr,val,inp)}
		
      for (i = 0; i < arr.length; i++) {
		
		e$=arr[i].split(ayrac)
		

		
		
        
        //alert(e$[0])
        
	

        if ((e$[0].replace(/â/i,"a").replace(/î/i,"i").replace(/û/i,"u")).substr(0, val.length).toLocaleUpperCase('tr-TR') == val.toLocaleUpperCase('tr-TR')) {
          b = document.createElement("DIV");
         
		 b.innerHTML = "<strong>" + e$[0].substr(0, val.length) + "</strong>";
         b.innerHTML += e$[0].substr(val.length);
         
         if(e$[1]==0){b.innerHTML="<span>&#128104;</span> "+b.innerHTML}
         else if(e$[1]==1){b.innerHTML="<span>&#128105;</span> "+b.innerHTML}
         else if(e$[1]==2){b.innerHTML="<span>&#128100;</span> "+b.innerHTML}
         
         b.innerHTML += "<input style='display:none' type='hidden' value='" + e$[0] + "'>";
         b.innerHTML += "<input style='display:none' type='hidden' value='" + e$[2] + "'>";
         b.innerHTML += "<input type='hidden' value='" + e$[1] + "'>";
          
          b.addEventListener("click", function(e) {
              
              inp.setAttribute("data-isim",this.innerText.slice(2))
              inp.setAttribute("data-cinsiyet",this.getElementsByTagName("input")[2].value )

              
              inp.value = this.getElementsByTagName("input")[1].value; 
              fontKontrol(inp)
             isimEkle(this.getElementsByTagName("input"),"",inp)
              closeAllLists();
              inp.focus();
              
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      
      //alert(e.keyCode)
      
      if(e.keyCode==8){

	metin=event.target.value.substring(event.target.selectionStart, event.target.selectionEnd)

	if(this.value.length==1 || this.value.length==metin.length){
	repair(event.target)	
	closeAllLists();
	disabledKontrol()
	}else{return true}


}
      
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) { //up
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
       
       //alert()
       
       Bul(inp)
        closeAllLists();
        e.preventDefault();
        if (currentFocus > -1) {if (x) x[currentFocus].click();}
        
      }
  


  });
  
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

function removeActive(x) {
	for (var i = 0; i < x.length; i++) {
		x[i].classList.remove("autocomplete-active");
		}
	}
	
function closeAllLists(elmnt) {
	var x = document.getElementsByClassName("autocomplete-items");
	for (var i = 0; i < x.length; i++) {
		if (elmnt != x[i] && elmnt != inp) {
			x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener("click", function (e){closeAllLists(e.target);});
	}

function cift(e){
	e="0"+e
	return e.substring(e.length-2,e.length)
	}

function cinsiyetBul(e){
	if(e.indexOf("0")>-1){return 0}
	if(e.indexOf("1")>-1){return 1}
	}

function daDe(e){
	sesli="aâeýiîoöuûü"
	
	sesliHarf=false
	ek="da"
	
	for(i=e.length-1; i>=0;i--){
		harf=e.charAt(i)
		if(sesli.indexOf(harf)>-1){
			sesliHarf=harf
			break
			}
		}
	
	if (harf=="e" || harf=="i" || harf=="ü" || harf=="î"){ek="de"}
	
	return "<b>"+e+"</b>’"+ek
	}

function disabledKontrol(){
	
	if(arabic.test(id("myInput1").value) && arabic.test(id("myInput2").value)){
		id("buton1").disabled=false;
	}else{
		id("buton1").disabled=true;
		}
	
	bos=true
	for(i=1; i<=5;i++){
		if( (id("myInput"+i).value).length>0 ){bos=false;break}
		}
	
	if(bos){id("buton2").disabled=true;}else{id("buton2").disabled=false;}
	
	}



function id(e){return document.getElementById(e)}

function iksin(e,sex){
	
	sesli="aâeýiîoöuûü"
	
	sesliHarf=false
	sira=-1
	ek="in"
	
	for(i=e.length-1; i>=0;i--){
		harf=e.charAt(i)
		if(sesli.indexOf(harf)>-1){
			sesliHarf=harf
			sira=i+1
			break
			}
		}
	
	if (harf=="a" || harf=="â" || harf=="ý"){ek="ýn"}
	if (harf=="o" || harf=="u" || harf=="û"){ek="un"}
	if (harf=="ö" || harf=="ü"){ek="ün"}
	
	if(sira==e.length){ek="n"+ek}
	
	return ozelad(e,sex)+"’"+ek
	}

function ozelAd(e){
	
	//alert(e)
	
	e=e.split(" ")
	
	for(i=0;i<=e.length-1;i++){
		e[i]=e[i].charAt(0).toLocaleUpperCase('tr-TR') + (e[i].slice(1)).toLocaleLowerCase('tr-TR')
		}
	
	return e.join(" ")
	}

function ozelad(e,ee){
	e=ozelAd(e)
	return "<span class='ozel-ad"+ee+"'>"+e+"</span>"
	//return e
	}

function rastgelePlaceholder(ii){
	
	if(ii==3){
		do{
			isim=isimler[Math.floor(Math.random() * isimler.length)].split(ayrac)
			}while(isim[1]!=0)
		
	}else if(ii==2 || ii==5){
		do{
			isim=isimler[Math.floor(Math.random() * isimler.length)].split(ayrac)
			}while(isim[1]!=1)
	}else{
		isim=isimler[Math.floor(Math.random() * isimler.length)].split(ayrac)
		}	
	
	if(isim[0].indexOf(" ")>-1){isim[0]=isim[0].split(" ")[0]}
	
	return "Örnek: "+isim[0]
	}

function saatGetir(){
	if(id("Saat1")){
		zaman=new Date()
		id("Saat1").innerText=("0"+zaman.getHours()).slice(-2)+":"+("0"+zaman.getMinutes()).slice(-2)+":"+("0"+zaman.getSeconds()).slice(-2)
		}
	
	if(id("Saat2") && havasSaati){
		
		alaturka=havasSaatiGetir()
		id("Saat2").innerText=havasSaatiGetir()
		
		alaturka=alaturka.split(":")
		
		seconds=parseInt(alaturka[2])
		minutes=parseInt(alaturka[1])
		hours=parseInt(alaturka[0])
		
		var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
		
		
		}
	}

	

function titleClass(id1$){
	
	//if(arabic.test(id1$.value)){alert();}
	
	idNo=(id1$.getAttribute("id")).slice(-1)
	
	if(idNo<4){s1=1;s2=2}else{s1=2;s2=1}
	
	id1$=id("title"+s1)
	id2$=id("title"+s2)
	
	if(s1!=eskiS1){
		id1$.classList.remove("Class1")
		id1$.classList.remove("Class2")
		
		id2$.classList.remove("Class1")
		id2$.classList.remove("Class2")		
		
		id1$.classList.add("Class1")
		id2$.classList.add("Class2")
		}		
	
	
	
	eskiS1=s1
	}

function TurkceSiralama(a,b){return a.localeCompare(b);}	
	
function temizle(){	
//id$.form.reset()
	
	for(i=1;i<=5;i++){
		id$=id("myInput"+i)
		//id$.value=id$.defaultValue ;

		repair(id$)

		fontKontrol(id$)
		}
		
	disabledKontrol()
	id("myInput1").focus()
	}

function fontKontrol(e1){
	
	if(!e1.value){return}
	
	e1$=(e1.value).trim()
	

	
	if(arabic.test(e1$)  && e1$.length>0){
		e1.style.fontFamily="'Amiri', serif"
		e1.style.fontSize="24px"

	}else{

		e1.style.fontFamily="arial,sans-serif"
		e1.style.fontSize="16px"
		}
	}

function repair(hedef){
	
	
	
	if(silmeTuru==2){
		
		hedef.value=hedef.defaultValue
		hedef.removeAttribute("value")
		
		hedef.removeAttribute("data-isim")
		hedef.removeAttribute("data-cinsiyet")
		hedef.style.cssText = null
		hedef.removeAttribute("style")
		hedef.value=""
		
		//alert(hedef.outerHTML)
	}else{
	
		id$=hedef.id
		idson=id$.slice(-1)
		ph$=hedef.placeholder
		
		yeniinput=hedef.parentNode

		hedef.remove()

		input=document.createElement("input")
		input.id=id$
		input.setAttribute("placeholder",ph$)
		input.setAttribute("autocomplate","off")
		input.setAttribute("value","")
		input.setAttribute("type","text")
		
		yeniinput.appendChild(input)
		
		input.onfocus=function(){titleClass(this);}
		
		input.onchange=function(){if(!arabic.test(this.value)){Bul(this)};fontKontrol(this);disabledKontrol()}
		if(idson==3){v=orj2}else if(idson==2 || idson== 5){v=orj1}else{v=orj}
		autocomplete(input, v);	
		input.focus()	
		}
	
	
	hedef.focus()
	}


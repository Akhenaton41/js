
var gezegenler=new Array(),esma$=new Array();

function arapcaFormat(text$,sex){
	
	// müenneslik tesi kontrol
	if (sex > 0 && document.getElementById("C2").checked) {
		let text1 = text$.split(" ");
		
		for (let i = 0; i < text1.length; i++) {
			
			// kelime sonundaki normal He (ه)
			if (text1[i].slice(-1).charCodeAt(0) == 1607) {
				// He (ه = U+0647) → Yuvarlak Te (ة = U+0629)
				text1[i] = text1[i].slice(0, text1[i].length - 1) + String.fromCharCode(1577);
			}
		}
		
		text$ = text1.join(" ");
	}

	
	for(i=0; i<text$.length;i++){
		harf$=text$.charAt(i)
		//şedde kontrol
		if(harf$.charCodeAt(0)==1617 && i>0 && id("radio-three").checked){
			harf$=text$.charAt(i-1)
			text$=text$.slice(0,i)+harf$+text$.slice(i+1)
			}
		 
		}
	
	return text$
	}

function Bul(e){
	
	//e=""+e.id.slice(-1)
	
	isim1=( (e.value).trim() ).toLocaleLowerCase('tr-TR')
	isim$=(e.value).trim()
	
	isim1=(isim1.replace(/â/i,"a").replace(/û/i,"u").replace(/î/i,"i")).split(" ")
	
	cinsiyet$=""
	
	for (jj = 0; jj < isim1.length; jj++) {
		
		for (kk = 0; kk < isimler.length; kk++) {
			isim2=isimler[kk].split(ayrac)
			isim2[0]=(isim2[0].trim()).toLocaleLowerCase('tr-TR')
			isim2[0]=isim2[0].replace(/â/i,"a").replace(/û/i,"u").replace(/î/i,"i")
			
			if(isim1[jj]==isim2[0]){
				isim1[jj]=isim2[2]
				cinsiyet$+=isim2[1]
				break
				}
			
			}
		
		
		}
	
	
	//
	bulunamadi=false
	arabic = /[\u0600-\u06FF]/;
	
	for (jj = 0; jj < isim1.length; jj++) {
		
		if(!arabic.test(isim1[jj])){
			//alert(isim1[jj]+" ismi veritabanında kayıtlı değil!")
			bulunamadi=true
			//break;
			}
		}
	
	
	
	if(!bulunamadi){
		isim1=isim1.join(" ")
		isimEkle(isim1,true,e)
		e.setAttribute("data-isim",isim$)
		e.setAttribute("data-cinsiyet",cinsiyet$)
		}
	
	}

function EbcedBul(d, kea){
	e=0

	for(i=0; i<=d.length-1; i++){
		c=d.charAt(i)
		e=e+Ebced(c,kea)
		}
	return e
	}

function Ebced(c,kea){
	
	c=c.charCodeAt(0)
	
	if(!kea){
		if(id("radio-one").checked){
			kea=0
		}else if(id("radio-two").checked){
			kea=1
			}
		}
	
	ee=0,be=0
	

	
	// Arapça Hesap
	
	if(c==65010){ee=65}
	if(c==1575||c==1570||c==1571||c==1569||c==1573||c==1574||c==1728){ee=1;be=111}else{
	if(c==1576||c==1662){ee=2;be=3}else{
	if(c==1580||c==1670){ee=3;be=53}	else{
	if(c==1583){ee=4;be=35}else{
	if(c==1607){ee=5;be=6}else{
	if(c==1608){ee=6;be=6}else{
	if(c==1586){ee=7;be=13}else{
	if(c==1581){ee=8;be=9}else{
	if(c==1591){ee=9;be=10}else{
	if(c==1609||c==1610||c==1740){ee=10;be=11}else{
	if(c==1603||c==1610||c==1711||c==1709){ee=20;be=101}else{
	if(c==1604){ee=30;be=71}else{
	if(c==65275){ee=31;be=182}else{
	if(c==1605){ee=40;be=90}else{
	if(c==1606){ee=50;be=106}else{
	if(c==1587){ee=60;be=120}else{
	if(c==1593){ee=70;be=130}else{
	if(c==1601){ee=80;be=81}else{
	if(c==1589){ee=90;be=95}else{
	if(c==1602){ee=100;be=181}else{
	if(c==1585){ee=200;be=201}else{
	if(c==1588){ee=300;be=360}else{
	if(c==1578||c==1577 ){ee=400;be=401}else{
	if(c==1579){ee=500;be=501}else{
	if(c==1582){ee=600;be=601}else{
	if(c==1584){ee=700;be=701}else{
	if(c==1688){ee=7; be=8}else{
	if(c==1590){ee=800;be=801}else{
	if(c==1592){ee=900;be=901}else{
	if(c==1594){ee=1000;be=1060}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
	
	// Arapça istisnalar
	
	if(c==65010){ee=66;be=259} // "Allah" Lafzý.
	

	

		
		if(kea==0){return ee}
		else if(kea==1){ return be}
	}

function ebcedTablosugetir(e,ee){
	
	a="<br><table class='ebced-tablosu' cellspacing='3' border='1'><tr>"
	aa="<tr>"
	
	for(i=e.length-1; i>=0;i--){
	
		if(e.charAt(i)!=" "){
			a+="<td class='arabic'>"+e.charAt(i)+"</td>"
			aa+="<td>"+Ebced( e.charAt(i),ee )+"</td>"
		}else{
			a+="<td rowspan='2' style='font-family:var(--main-font)'>boşluk</td>"
			}
		}
	
	a+=aa+"</tr>"
	
	
	
	return a+"</tr></table>"
	}
	
function esmaTablosuEkle(d,g){
	table$="<table class='ebced-tablosu karsilastirma-tablosu' border='1' cellspacing='2' cellpadding='2' style='border:1px solid #000; background:#FFF' ><tr>" ;
	table$+="<td class='esma'><b>Esma</b></td><td class='esma'><b>Sayısal Değeri</b></td><td class='esma'><b>İki Sayı Arasındaki Fark</b></td></tr><tr>" ;
	esmaNo=0;
	fark=10000;
	for(j=0;j<=esma.length-1;j++){
		esma$=esma[j].split( "·");
		table$+="<td class='esma'>" +esma$[0]+ "</td>";
		table$+="<td class='esma'>" +esma$[1]+ "</td>";
		f=Math.abs(d-esma$[1]);
		if(f<fark){fark=f;esmaNo=j}
		table$+="<td class='esma'> abs (" +esma$[1]+ "-"+d+ ") = <b>"+f+ "</b></td>";
		table$+="</tr><tr>"
		}
	table$+="</tr></table><br>" ;
	esma$=esma[esmaNo].split( "·");
	table$+="<p>Bu sayıya karşılık gelen esmâ: <span class='ebcedAlani'>" +esma$[0]+ "</span>.</p>";
	table$+="<p>Sayısal değeri: <span class='ebcedAlani'>" +esma$[1]+ "</span>.</p>";
	table$+="<p>İki sayı arasındaki fark: abs (<span class='ebcedAlani'>" +esma$[1]+ "</span> - <span class='ebcedAlani'>"+d+ "</span>) = <b>"+Math.abs(d-esma$[1])+ "</b>.</p>";
	table$+="<p>Gezegen: <span class='ebcedAlani'>" +esma$[2]+ "</span>.</p>";
	table$+="<p>Haftanın günü: <span class='ebcedAlani'>" +esma$[3]+ "</span>.</p>";
	gezegenler[g]=esma$[2];
	return table$
	}

function havasSaatiGetir(){
	aa=""
	
	var d = new Date();
	clock=parseInt(d.getHours())
	dakika=parseInt(d.getMinutes())
	saniye=parseInt(d.getSeconds())
	Dayz=new Date().getDay()
	gun$=gunler[Dayz]
	
	saat1=cift(clock)+":"+cift(dakika)+":"+cift(saniye)
	timeStart = new Date("01/01/2007 " + saat1).getTime()
	
	timeEnd = new Date("01/01/2007 " + havasSaati+":00").getTime()
	
	tt=(timeEnd - timeStart)/1000
	
	suAn = new Date("01/01/2007 "+clock+":"+dakika+":"+saniye).getTime()
	
	
	
	if(tt>-1){
		eS=(86400)-Math.abs(timeEnd-suAn)/1000
	}else{
		eS=Math.abs(tt)
		}
	
	return zamanC(eS);
	}

function isimEkle(e,Default,e3){
	
	//e3.setAttribute("data-isim",e3)
	
	if(Default){
		e1=(e3.value).trim()
		e2=e.trim()
	}else{
		e1=e[0].value.trim()
		e2=e[1].value.trim()
		}
	
	e3.value=e2
	fontKontrol(e3)
	disabledKontrol()
	}

function sehirGetir(){
	xmlhttp = new XMLHttpRequest();
	
	xmlhttp.onload = function() {
		const myObj = JSON.parse(this.responseText);
		//document.getElementById("demo").innerHTML = myObj.name;
		//if(id("sehirIcin")){id("sehirIcin").innerHTML="<b>"+myObj.city+"</b> için"}
		
		id("sehirIcin").innerHTML="şu anda yaşadığınız yer olan <b>"+(myObj.city)+"</b> için"
		
		xmlhttp2 = new XMLHttpRequest()
		
		xmlhttp2.onload = function() {
			// ezan
			const myObj2 = JSON.parse(this.responseText);
			havasSaati=myObj2.data["timings"]["Sunset"]
			
			link1="https://api.aladhan.com/v1/timingsByAddress?address="+(myObj.city)+",%20"+(myObj.country)+"&method=13"
			
			id("rezerveAlan").innerHTML="<span class='fa fa-clock-o'></span> Üstteki yeni saati elde etmek için "+daDe(myObj.city)+" <b>Akşam Ezanı</b> vakti olan <b>"+havasSaati+"</b>’de saatlerimizi sıfırladık yani gece <b>00:00:00</b> yaptık. Aşağıdaki linkten bulunduğunuz kontrol için akşam ezanı (ingilizce sunset) vaktini kontrol edebilirsiniz:<br><br><a href='"+link1+"' target='_blank'>"+link1+"</a>"
			}
		
		xmlhttp2.open("GET", "https://api.aladhan.com/v1/timingsByAddress?address="+(myObj.city)+",%20"+(myObj.country)+"&method=13")
		xmlhttp2.send();
		
		
		//alert(myObj.city)
		};
	
	xmlhttp.open("GET", "https://ipapi.co/json/");
	xmlhttp.send();
	}

function zamanC(e){
	e=parseInt(e)	
	s1=parseInt(e/3600)
	e=e-(s1*3600)
	s2=parseInt(e/60)
	e=e-(s2*60)
	return cift(s1)+":"+cift(s2)+":"+cift(e)
	}

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
	sesli="aâeıiîoöuûü"
	
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
	
	sesli="aâeıiîoöuûü"
	
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
	
	if (harf=="a" || harf=="â" || harf=="ı"){ek="ın"}
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


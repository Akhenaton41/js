
var gezegenler=new Array(),esma$=new Array();

function arapcaFormat(text$,sex){
	
	// müenneslik tesi kontrol
	 if(sex>0){
	 	text1=text$.split(" ")
	 	
	 	for(i=0; i<text1.length;i++){
	 		
	 		if( text1[i].slice(-1).charCodeAt(0)==1607 ){
	 			text1[i]=text1[i].slice(0, text1[i].length-1)+String.fromCharCode(1577)
	 			
	 			//alert(text1[i])
	 			}
	 		text$=text1.join(" ")
	 		
	 		
	 		}
	 	
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
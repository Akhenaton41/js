burclar=new Array();
burclar[1]=new Array("Bal�k","Ko�","Bo�a","�kizler","Yenge�","Aslan","Ba�ak","Terazi","Akrep","Yay","O�lak","Kova");
burclar[0]=new Array("Balik","Koc","Boga","Ikizler","Yengec","Aslan","Basak","Terazi","Akrep","Yay","Oglak","Kova");

var esma=new Array("Allah�66�G�ne��Pazar","er-Rahman�298�G�ne��Pazar","er-Rah�m�258�G�ne��Pazar","el-Melik�90�Utarit��ar�amba","el-Kudd�s�170�M��teri�Per�embe","es-Sel�m�131�G�ne��Pazar","el-M��min�136�Ay�Pazartesi","el-M�heymin�145�M��teri�Per�embe","el-Az�z�94�Merih�Sal�","el-Cebb�r�206�Merih�Sal�","el-M�tekebbir�662�M��teri�Per�embe","el-H�l�k�731�G�ne��Pazar","el-B�ri�213�G�ne��Pazar","el-Musavvir�336�Ay�Pazartesi","el-�aff�r�1281�Z�hre�Cuma","el-Kahh�r�306�Merih�Sal�","el-Vehh�b�14�Z�hre�Cuma","el-Rezzak�308�Z�hre�Cuma","el-Fett�h�489�Utarit��ar�amba","el-Alim�150�M��teri�Per�embe","el-K�biz�903�M��teri�Per�embe","el-B�s�t�72�Z�hre�Cuma","el-H�fid�1481�G�ne��Pazar","er-R�fi�351�G�ne��Pazar","el-Muiz�117�G�ne��Pazar","el-M�zill�770�Merih�Sal�","es-Semi�180�M��teri�Per�embe","el-Bas�r�302�G�ne��Pazar","el-Hakem�68�G�ne��Pazar","el-Adl�104�G�ne��Pazar","el-Latif�129�Z�hre�Cuma","el-Hab�r�812�G�ne��Pazar","el-Halim�88�Z�hal�Cumartesi","el-Az�m�1020�Utarit��ar�amba","el-�af�r�1286�G�ne��Pazar","e�-�ek�r�526�G�ne��Pazar","el-Aliyy�110�G�ne��Pazar","el-Keb�r�232�M��teri�Per�embe","el-H�fiz�998�Z�hal�Cumartesi","el-Muk�d�550�G�ne��Pazar","el-Has�b�80�Z�hre�Cuma","el-Cel�l�73�G�ne��Pazar","el-Ker�m�270�Z�hre�Cuma","er-Rak�b�312�Z�hre�Cuma","el-Muc�b�55�M��teri�Per�embe","el-V�si�137�Ay�Pazartesi","el-Hak�m�78�Z�hre�Cuma","el-Ved�d�20�Ay�Pazartesi","el-Mec�d�57�Z�hre�Cuma","el-B�is�573�G�ne��Pazar","e�-�eh�d�319�M��teri�Per�embe","el-Hakk�108�Z�hre�Cuma","el-Vek�l�66�Z�hre�Cuma","el-Kaviyy�117�Merih�Sal�","el-Met�n�500�Z�hre�Cuma","el-Vel�46�Merih�Sal�","el-Ham�d�62�M��teri�Per�embe","el-Muhs�148�Z�hre�Cuma","el-M�bd�56�M��teri�Per�embe","el-Muid�125�Z�hal�Cumartesi","el-Muhy�68�Z�hre�Cuma","el-M�m�t�490�Merih�Sal�","el-Hayy�18�G�ne��Pazar","el-Kayy�m�156�M��teri�Per�embe","el-V�cid�14�Z�hre�Cuma","el-M�cid�48�Z�hre�Cuma","el-V�hid�19�Merih�Sal�","el-Ehad�13�Merih�Cuma","es-Samed�134�M��teri�Per�embe","el-Kad�r�305�G�ne��Pazar","el-Muktedir�744�Z�hal�Cumartesi","el-Mukaddim�184�Z�hal�Cumartesi","el-Muahhir�846�Z�hal�Cumartesi","el-Evvel�37�G�ne��Pazar","el-Ahir�801�Z�hre�Cuma","ez-Z�hir�1106�Z�h�l�Cumartesi","al-B�t�n�62�Ay�Pazar","el-V�l�47�G�ne��Pazar","el-M�te�li�551�Z�hal�Cumartesi","el-Berr�202�Z�hre�Cuma","et-Tevv�b�409�M��teri�Per�embe","el-M�ntak�m�633�Merih�Sal�","el-Af�vv�156�G�ne��Pazar","er-Ra�f�286�Z�hal�Cumartesi","M�lik�l M�lk�212�Utarit��ar�amba","Z�l Cel�li Vel �kr�m�1098�G�ne��Pazar","el-Muks�d�209�M��teri�Per�embe","el-C�m�114�M��teri�Per�embe","el-�aniyy�1060�G�ne��Pazar","el-Mu�n�1100�Z�hre�Cuma","el-M�n�161�G�ne��Pazar","ed-D�rr�1001�Merih�Sal�","en-N�f�201�Z�hre�Cuma","en-N�r�256�Z�hre�Cuma","el-H�di�20�G�ne��Pazar","el-Bed�86�M��teri�Per�embe","el-B�ki�113�G�ne��Pazar","el-V�ris�707�Z�hre�Cuma","er-Ra��d�514�G�ne��Pazar","es-Sab�r�298�G�ne��Pazar");

var c,gunduz=new Array(),gece=new Array(),gunler=new Array( "Pazar", "Pazartesi", "Sal�", "�ar�amba", "Per�embe", "Cuma", "Cumartesi"),gezegenler=new Array();

gunduz[1]="G�ne��Ay�Merih�Utarit�M��teri�Z�hre�Z�hal" ;
gunduz[2]="Z�hre�Z�hal�G�ne��Ay�Merih�Utarit�M��teri" ;
gunduz[3]="Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay�Merih" ;
gunduz[4]="Ay�Merih�Utarit�M��teri�Z�hre�Z�hal�G�ne�" ;
gunduz[5]="Z�hal�G�ne��Ay�Merih�Utarit�M��teri�Z�hre" ;
gunduz[6]="M��teri�Z�hre�Z�hal�G�ne��Ay�Merih�Utarit" ;
gunduz[7]="Merih�Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay" ;
gunduz[8]="G�ne��Ay�Merih�Utarit�M��teri�Z�hre�Z�hal" ;
gunduz[9]="Z�hre�Z�hal�G�ne��Ay�Merih�Utarit�M��teri" ;
gunduz[10]="Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay�Merih" ;
gunduz[11]="Ay�Merih�Utarit�M��teri�Z�hre�Z�hal�G�ne�" ;
gunduz[12]="Z�hal�G�ne��Ay�Merih�Utarit�M��teri�Z�hre" ;
gece[1]="Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay�Merih" ;
gece[2]="Ay�Merih�Utarit�M��teri�Z�hre�Z�hre�G�ne�" ;
gece[3]="Z�hal�G�ne��Ay�Merih�Utarit�M��teri�Z�hre" ;
gece[4]="M��teri�Z�hre�Z�hal�G�ne��Ay�Merih�Utarit" ;
gece[5]="Merih�Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay" ;
gece[6]="Merih�Ay�Merih�Utarit�M��teri�Z�hre�Z�hal" ;
gece[7]="Merih�Z�hal�G�ne��Ay�Merih�Utarit�M��teri" ;
gece[8]="Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay�Merih" ;
gece[9]="Ay�Merih�Utarit�M��teri�Z�hre�Z�hal�G�ne�" ;
gece[10]="Z�hal�G�ne��Ay�Merih�Utarit�M��teri�Z�hre" ;
gece[11]="M��teri�Z�hre�Z�hal�G�ne��Ay�Merih�Utarit" ;
gece[12]="Merih�Utarit�M��teri�Z�hre�Z�hal�G�ne��Ay" ;
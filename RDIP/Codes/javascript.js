var eng = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
["some students like to study in the night","at night some students like to study"],
["John and Mary went to church","Mary and John went to church"],
["John went to church after eating","after eating John went to church","John after eating went to church"],
["did he go to market","he did go to market"],
["the woman who called my sister sells cosmetics","the woman who sells cosmetics called my sister","my sister who sells cosmetics called the woman","my sister who called the woman sells cosmetics"],
["John goes to the library and studies","John studies and goes to the library"],
["John ate an apple so did she","she ate an apple so did John"],
["the teacher returned the book after she noticed the error","the teacher noticed the error after she returned the book","after the teacher returned the book she noticed the error","after the teacher noticed the error she returned the book","she returned the book after the teacher noticed the error","she noticed the error after the teacher returned the book","after she returned the book the teacher noticed the error","after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday","I told her yesterday that I bought a book","yesterday I told her that I bought a book","I bought a book that I told her yesterday","I bought a book yesterday that I told her","yesterday I bought a book that I told her"]];

var hin = [["राम और श्याम बाजार गयें","राम और श्याम गयें बाजार","बाजार गयें राम और श्याम","गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी","श्याम सोया और राम भी","सोया श्याम और राम भी","सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है","मैंने उसे बताया कि सो रहा है राम","उसे मैंने बताया कि राम सो रहा है","उसे मैंने बताया कि सो रहा है राम","मैंने बताया उसे कि राम सो रहा है","मैंने बताया उसे कि सो रहा है राम","उसे बताया मैंने कि राम सो रहा है","उसे बताया मैंने कि सो रहा है राम","बताया मैंने उसे कि राम सो रहा है","बताया मैंने उसे कि सो रहा है राम","बताया उसे मैंने कि राम सो रहा है","बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया","खाकर राम सोया","राम सोया खाकर","खाकर सोया राम","सोया राम खाकर","सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया","मारकर बिल्लियों को कुत्ता सो गया","बिल्लियों को मारकर सो गया कुत्ता","मारकर बिल्लियों को सो गया कुत्ता","कुत्ता सो गया बिल्लियों को मारकर","कुत्ता सो गया मारकर बिल्लियों को","सो गया कुत्ता बिल्लियों को मारकर","सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है","एक लाल किताब है वहाँ","वहाँ है एक लाल किताब","है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है","एक बड़ी सी किताब है वहाँ","बड़ी सी एक किताब वहाँ है","बड़ी सी एक किताब है वहाँ","वहाँ है एक बड़ी सी किताब","वहाँ है बड़ी सी एक किताब","है वहाँ एक बड़ी सी किताब","है वहाँ बड़ी सी एक किताब"]];
var h1 = document.getElementById('s1');
var des = document.getElementById('d1');
var des2 = document.getElementById('d2');
var sel=document.getElementById('s2');
var sdes=document.getElementById('s3');
var des3 = document.getElementById('d3');
var des4 = document.getElementById('d4');
var senten = document.getElementById('sent');
var refor = document.getElementById('reform');
var correctness = document.getElementById('correct')
var result = document.getElementById('reslt');
var canswers = document.getElementById('crr');
var j,btncount,r;
var finalsent ="";
var clickcnt = 0;
var x;
var answers="";

  function random(jumb){
	var jum = jumb.split(" ");
	var i = jum.length, temp, randomi;
	while(0!==i){
		randomi = Math.floor(Math.random()*i);
		i -= 1;
		temp = jum[i];
		jum[i] = jum[randomi];
		jum[randomi] = temp;
	}
	return jum;
}
function correction(){
	var fs = finalsent.trim();
	var res;
	if(x=='english')
		res = eng[r].includes(fs);
	else if(x == 'hindi')
		res = hin[r].includes(fs);

	if(res==true)
		result.innerHTML = "<center><font color = 'green'>Right Answer!!!</font></center>";
	else
		result.innerHTML = "<center><font color = 'red'>Wrong Answer!!!</font><br><button id='showbtn' onclick='getcorr()'>Get correct sentence</button></center>";

}
function reform(){
	for(i=0;i<=j.length-1;i++){
		document.getElementById('btn'+i).style.display = "";
	}
	finalsent = "";
	senten.innerHTML = finalsent;
	refor.innerHTML = "";
	desc4.innerHTML = "";
	correctness.innerHTML = "";
	clickcnt = 0;
	result.innerHTML = "";
	answers="";
	canswers.innerHTML = "";
}

function formsentence(id,value){
	des4.style.textAlign = "center";
	des4.innerHTML = "<br><font color='darkblue'><b>Formed Sentence</b></font><font color='blue'> <i>(after selecting words):</i></font><br>";
	finalsent += value + " ";
	senten.style.textAlign = 'center';
	senten.innerHTML = finalsent;
	document.getElementById(id).style.display = "none";
		refor.innerHTML = "<center><button id='reforbtn' onclick='reform()'>Re-form the sentence</button></center>"
		clickcnt++;
	if(btncount==clickcnt){
		correctness.innerHTML = "<center><button id='correctbtn' onclick='correction()'>Check the correctness of this sentence</button></center>"
	}
} 


function select() {
x = "";
     x=document.getElementById('lang').value;
    if(x=='sel') {
    answers="";
	canswers.innerHTML = "";
    clickcnt = 0;
		btncount = 0;
    sdes.innerHTML="";
    des3.innerHTML = "";
		des2.innerHTML = "";
		des4.innerHTML = "";
		des4.style.textAlign = "left";
		senten.innerHTML = "";
		refor.innerHTML = ""
		correctness.innerHTML = "";
		result.innerHTML = "";
               }
    if(x == 'english'){
    answers="";
	canswers.innerHTML = "";
    refor.innerHTML = "";
    senten.innerHTML = "";
    correctness.innerHTML = "";
		des4.innerHTML = "";
		finalsent = "";
		result.innerHTML = "";
		sdes.innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>";
		des3.style.color = "blue";
		des3.innerHTML = "<center><i>(select the buttons in proper order)</i></center>"
		 r = Math.floor(Math.random()*9);
		var jumb = eng[r][0];
		j = random(jumb);
		des2.style.textAlign = "center";
		var b ="";
		var bs = "";
		clickcnt = 0;
		btncount = 0;
		for(i=0;i<=j.length-1;i++){
			val = j[i];
						b = "  <button id='btn"+i+"'onclick='formsentence(this.id,this.value)' value='"+val+"'>"+val+"</button>  ";
			bs +=b;
			btncount++;
		}
		des2.innerHTML = bs.trim();
	}
	if(x == 'hindi'){
	answers="";
	canswers.innerHTML = "";
	refor.innerHTML = "";
	senten.innerHTML = "";
	correctness.innerHTML = "";
		des4.innerHTML = "";
		finalsent = "";
		result.innerHTML = "";
		sdes.innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>";
		des3.style.color = "blue";
		des3.innerHTML = "<center><i>(select the buttons in proper order)</i></center>"
		 r = Math.floor(Math.random()*6);
		var jumb = hin[r][0];
		j = random(jumb);
		des2.style.textAlign = "center";
		var b ="";
		var bs = "";
		btncount = 0;
		clickcnt = 0;
		for(i=0;i<=j.length-1;i++){
			val = j[i];	
			b = "  <button id='btn"+i+"'onclick='formsentence(this.id,this.value)' value='"+val+"'>"+val+"</button>  ";		
						bs +=b;
						btncount++;
		}
		des2.innerHTML = bs.trim();
	}
}
         function experiment(){
	h1.innerHTML = "Experiment";
	sel.innerHTML = "<select id='lang' onchange = 'select()'><option value='select'>---Select Language---</option><option value='english'>English</option><option value='hindi'>Hindi</option></select>";
	sdes.innerHTML = "";
	des3.innerHTML = "";
	des.innerHTML = "";
	des2.innerHTML = "";
	des4.innerHTML = "";
	des4.style.textAlign = "left";
	senten.innerHTML = "";
	refor.innerHTML = "";
	correctness.innerHTML = "";
	result.innerHTML = "";
	answers="";
	canswers.innerHTML = "";
     }

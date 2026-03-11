function analyzeEmail(){

let text=document.getElementById("emailText").value.toLowerCase();

let phishingWords=[
"verify your account",
"click here",
"urgent",
"update password",
"bank details",
"lottery",
"winner",
"suspended",
"confirm identity"
];

let score=0;

phishingWords.forEach(word=>{
if(text.includes(word)){
score+=15;
}
});

let result=document.getElementById("result");

if(score>=60){
result.innerHTML="⚠ High Risk: Phishing Email Detected";
result.style.color="red";
}

else if(score>=30){
result.innerHTML="⚠ Suspicious Email Detected";
result.style.color="orange";
}

else{
result.innerHTML="✔ Email Looks Safe";
result.style.color="lightgreen";
}

}

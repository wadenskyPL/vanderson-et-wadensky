let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');

//Arc de cercle vert
ctx.beginPath();
ctx.lineWidth = '5';
ctx.strokeStyle = '#4C8';
ctx.arc(50,50,35,0.8*Math.PI, 2*Math.PI);
ctx.closePath();
ctx.stroke();

//Cercle complet violet
//ctx.beginPath();
//ctx.lineWidth = '0.5';
//ctx.fillStyle = '#A4A';
//ctx.arc(150,85,40,0,2*Math.PI);
//ctx.fill();

//Arc de cercle bleu
//ctx.beginPath();
//ctx.lineWidth = '5';
//ctx.strokeStyle = '#48C';
//ctx.arc(250,50,35,0.2*Math.PI, Math.PI, true);
//ctx.closePath();
//ctx.stroke();
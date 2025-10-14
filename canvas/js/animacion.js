function rebote(){
    // referencia al canvas
    const canvas = document.getElementById('pelota');
    //lapiz
    const ctx = canvas.getContext('2d'); 

    let coordX = 300;
    let coordY = 100;
    const radius = 25;
    let vy = 0; // velocidad inicial en Y
    const gravedad = 0.3;
    const perdida = 0.94;  // perdida de energia al rebotar.

    //posicion del piso - radio de la pelota. 
    const posPiso = canvas.height - radius;  

    //dibujaPelota(ctx, 300, coordX, radius);


    function animar() {
        //se borra todo lo anterior.
        ctx.clearRect(0,0, canvas.width, canvas.height);

        vy += gravedad;
        coordY += vy;
        coordX +=1;

        if (coordY > posPiso ){
            coordY = posPiso;
            vy  *= -perdida; //rebote hacia arriba
        }

        dibujaPelota(ctx, coordY, coordX, radius);

        requestAnimationFrame(animar);
    }

    animar();
}


function dibujaPelota(ctx,  coordY, coordX = 300, radius = 25){

    ctx.beginPath();

    const gradiente = ctx.createRadialGradient(
        300 - radius/3,
        coordY - radius/3,
        10, 
        300, 
        coordY,
        radius      
    );
    gradiente.addColorStop(0, '#9fcd');     // 9fcd = 99ffccdd
    gradiente.addColorStop(1, '#43fd');

    ctx.fillStyle = gradiente;

    //       posX ,  posY,   radio, Angulo inicial , ang final  
    ctx.arc(coordX, coordY, radius,  0 ,            2*Math.PI);
    ctx.fill();

}





function dibujarLineas() {
    //referencia al canvas
    const canvas = document.getElementById('lineas');

    //lapiz
    const ctx = canvas.getContext('2d'); 

    // Configurar el lapiz: ancho, color 
    ctx.lineWidth = 2;
    ctx.strokeStyle= 'rgb(255, 0,0)';

    for(let i=0; i<10; i++){
        ctx.beginPath();
        ctx.moveTo(10 +i*10,10);
        ctx.lineTo(20 + i*10,i*10+20);
        ctx.stroke();
    }

    let cx = 200;
    let cy = 150;
    let dist = 100;

    /**
     *    R / pi = S /180
     * 
     *    R = S / 180 * pi
     */

    for(let i=0; i<360; i+=30){

        ctx.lineWidth = i/30;
        ctx.strokeStyle= `rgb(255, ${i/2}, ${i/2})`;

        ctx.beginPath();
        ctx.moveTo(cx, cy);

        let posx = dist * Math.cos( i /180 * Math.PI );
        let posy = dist * Math.sin( i /180 * Math.PI );

        ctx.lineTo( cx +posx, cy + posy  );
        ctx.stroke();

    }
}
//dibujarLineas();

rebote();

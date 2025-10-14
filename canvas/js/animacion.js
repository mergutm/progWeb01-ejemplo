


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

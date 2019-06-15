class Elevate {

    private pisoNumero: Number; private elevacion: Number; private estado: boolean;


    constructor()
    {
        this.pisoNumero=1; this.elevacion=7; this.estado=true;
    }

    getpisoNumero(pisoNumero)
    {
        return this.pisoNumero;
    }

    getelevacion(elevacion)
    {
        return this.elevacion;
    }

    getestado(estado)
    {
        return this.estado;
    }

    abrirPuerta(getestado)
    {
        if(getestado==false)
        {
            getestado==true;
        }
    }

    cerrarPuerta(getestado)
    {
        if(getestado == true)
        {
            getestado == false;
        } 
    }
    destino:number
    subir(getpisoNumero, getelevacion, destino)
    {
        if(getpisoNumero = getelevacion)
        {
            console.log("Estas en el ultimo piso");
        }
        else if(destino > getpisoNumero)
        {
            do
            {
                getpisoNumero+=1
                
                console.log(getpisoNumero);
                
            }while(destino > getpisoNumero);
        }
    }

    bajar(getpisoNumero, getelevacion,destino)
    {
        if(getpisoNumero = getelevacion)
        { 
            console.log("Estas en el ultimo piso");
        }
        else if(destino < getpisoNumero)
        {    
        do
        {
            getpisoNumero-=1
            
            console.log(getpisoNumero);
            
        }while(destino < getpisoNumero);
        }
    }

    irA(destino,getpisoNumero)
    {
        if(destino < getpisoNumero)
        {
        do
        {
            getpisoNumero-=1
            
            console.log(getpisoNumero);
            
        }while(destino < getpisoNumero);}

        else if(destino>getpisoNumero)
        {
           do
           {
                getpisoNumero+=1
               
                console.log(getpisoNumero);
            
            }while(destino > getpisoNumero);
        }
    }
}

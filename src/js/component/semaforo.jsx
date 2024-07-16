import React, {useState} from "react";

export const Semaforo = () => {
    const [color, setColor] = useState ('red');

    
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="container-fluid text-center bg-dark w-25 d-flex flex-column justify-content-between align-items-center"style={{ height: '500px' }}>
                <div onClick={() => setColor('red')} className={`bg-danger text-danger h-25 w-50 rounded-circle mt-4 ${color === "red"? "glow":""}`}>
                    rojo
                </div>

                <div onClick={() => setColor('yellow') } className={`bg-warning text-warning h-25 w-50 rounded-circle ${color === "yellow"? "glow":""}`}>
                    amarillo
                </div>

                <div onClick={() => setColor('green') } className={`bg-success text-success h-25 w-50 rounded-circle mb-4 ${color === "green"? "glow":""}`}>
                    verde
                </div>
            </div>
        </div>

    )
}

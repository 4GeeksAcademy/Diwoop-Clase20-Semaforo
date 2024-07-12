import React, {useState} from "react";

export const Semaforo = () => {
    const [color, setColor] = useState ('');
    const [activarColor, setActivarColor] = useState('')

    const setRojo = () => setColor('red')
    const setAmarillo = () => setColor('yellow')
    const setVerde = () => setColor('green')
    console.log(color);

    handleOnChange = () => {
        
    }
    
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="container-fluid text-center bg-dark w-25 d-flex flex-column justify-content-between align-items-center"style={{ height: '500px' }}>
                <div onClick={() => handleOnChange} className="bg-danger text-danger h-25 w-50 rounded-circle mt-4">
                    rojo
                </div>

                <div onClick={() => handleOnChange} className="bg-warning text-warning h-25 w-50 rounded-circle">
                    amarillo
                </div>

                <div onClick={() => handleOnChange} className="bg-success text-success h-25 w-50 rounded-circle mb-4">
                    verde
                </div>
            </div>
        </div>

    )
}

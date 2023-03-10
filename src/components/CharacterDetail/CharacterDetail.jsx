import React from "react";

// Importar las actions como Object Modules, sino los test no funcionaran!

// Fijarse en los test que SI o SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen (lease tambien lo de react-redux).
// No realizar un destructuring de ellos, sino que utilicen de la siguiente forma 'React.useState' y 'React.useEffect',
// Si no lo hacen asi los test no van a correr.
// TIP: Aqui seria un buen momento para utilizar el hook useSelector.

const CharacterDetail = (props) => {
    return (
        <div>
        </div>
    );
};


export default CharacterDetail;

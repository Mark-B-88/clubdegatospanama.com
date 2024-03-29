import React from "react";
import "../styles/Questions.scss";

const QuestionsComponent = () => {
    return (
        <section className="questions" id="questions">
            <div className="row">
                <div className="col">
                    <div className="questions__text">
                        <h1>Preguntas frecuentes</h1>
                        <div className="question__underline"></div>
                        <h3>¿Cobramos por adopciones? Vendemos gatos?</h3>
                        <p>
                            No vendemos gatos. La recuperación de un gatito sin hogar genera gastos, por lo que se solicita una donación simbólica de $15. Este se destina a los costos de una esterilización si el adoptante desea vacunar al gatito debe aportar $10 que es el costo de la vacuna.
                        </p>
                        <h3>¿Le pagan por lo que hace?</h3>
                        <p>
                            Por supuesto no. En la mayoría de los casos tenemos que pagar muchos gastos nosotros mismos y luego pedimos ayuda. No recibimos ayuda de ninguna entidad gubernamental. Nuestros seguidores nos apoyan con donaciones en forma de comida o dinero en efectivo. Tenemos muchos gastos, que incluyen transporte, alimentación, esterilizaciones, emergencias veterinarias, artículos de limpieza, medicinas, leche para bebés, etc. Por eso intentamos hacer un sorteo para cubrir gastos o pedimos la ayuda de nuestros seguidores.
                        </p>
                        <h3>¿Se esterilizan los machos o solo las hembras?</h3>
                        <p>
                            Esterilizamos a ambos sexos por igual para asegurarnos de que la tasa de gatitos en las calles se mantenga al mínimo y para protegerlos de enfermedades.
                        </p>
                        <h3>¿Dónde puedo llevar un gato que encontré?</h3>
                        <p>
                            Desafortunadamente, no hay ningún lugar donde puedas llevarlos. Recomendamos ayudarlos si puede, hasta que puedan encontrar un hogar. Aunque puedes llevarlos a un veterinario, no hay muchos grupos en Panamá que rescaten gatitos. Esta es parte de la razón por la que comenzamos este grupo.
                        </p>
                        <h3>¿Por qué se les marca la oreja cuando se esterilizan?</h3>
                        <p>
                            Para saber que han sido esterilizados.
                        </p>
                        <h3>¿Los gatitos están esterilizados?</h3>
                        <p>
                            Sí, todos nuestros gatitos que están en adopción están esterilizados y desparasitados. La vacuna depende de si tenemos un patrocinador que puede pagarla o el adoptante.
                        </p>
                        <h3>¿Qué hago en caso de una emergencia médica?</h3>
                        <p>
                            A la hora de adoptar un gatito debes tener en cuenta las responsabilidades que esto genera, en definitiva, debes tener un veterinario cerca o el número de teléfono de uno que esté a tu alcance.
                        </p>
                        <h3>¿Cuánto tiempo hasta que reciba a mi gatito?</h3>
                        <p>
                            Una vez que tenga sus suministros principales, arena, caja de arena, comida, paté, etc. y el gatito esté esterilizado, lo llevamos a su casa.
                        </p>
                        <h3>¿Me pueden &apos;guardar&lsquo; el gatito un mes?</h3>
                        <p>
                            No, las adopciones son a corto plazo, no &apos;guardamos ni reservamos&lsquo; gatitos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuestionsComponent;
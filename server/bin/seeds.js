const mongoose = require('mongoose')
require("dotenv").config()
mongoose.connect(`${process.env.DB}`)
const Training = require("../models/Training.model");


let training = [{
  learn: "walk",
  title: "Andar con correa",
  url: "https://www.youtube.com/embed/wjBg5Nlx1HM",
  text: {
    description: "Es es esencial enseñarle a pasear con correa. El adiestramiento debe comenzar en cuanto el perro llegue a casa, no importa qué edad tenga. De hecho, en algunos países el uso de correas es obligatorio por ley.",
    points: ["Comience por ponerle el collar y la correa mientras come, dejando que la correa cuelgue libremente. De esta forma, el perro asociará la correa con algo agradable (comida) y se acostumbrará a llevar el collar colocado en el cuello.", "Después de dos o tres días, agarre la correa con la mano y siga al perro por la casa unos minutos, después de que haya comido. Repita este proceso durante periodos cada vez más largos, hasta que el perro se acostumbre a la correa y a verle andando a su lado.", "Después, salga al jardín y deje que se pasee libremente con la correa sujeta al collar. Agarre la correa de vez en cuando y sígale.  Ofrézcale una golosina mientras le enseña la correa.", "Si prefiere que el perro camine a su izquierda, sujete la correa con la mano derecha y sostenga una golosina con la mano izquierda. Mientras camina, pronuncie varias veces la frase 'Al lado'. Felicítele cuando haga bien las cosas.", "Si su perro empieza a tirar de la correa, haga un giro completo y camine en otra dirección; la correa tirará de su cabeza hacia un lado y tendrá que darse prisa para alcanzarle. Repita este ejercicio hasta que el perro aprenda que si quiere recibir sus felicitaciones tendrá que caminar a su lado."],
    elements: "Arnés. Este collar especial, sujeto a la correa, ejerce un control suave sobre el animal. Está formado por un tirante alrededor de la boca y otro alrededor del cuello. No ejerce presión sobre la boca y funciona transfiriendo el movimiento hacia delante a un giro lateral de cabeza. Resulta especialmente eficaz con perros muy energéticos o difíciles de controlar.",
    chip: "Asegúrese de que la correa no es demasiado larga. El Dr. Hunthausen recomienda entre 1,20 y 1,80 metros."
  },
  level: 2
}, {
  learn: "quiet",
  title: "Quieto",
  url: "https://www.youtube.com/watch?v=JRl1FhIBeKc",
  text: {
    description: "Entrenar a tu perro para que se quede quieto es una orden muy útil. Permite que tu perro muestre buenos modales cuando la gente viene de visita y en general, siempre que quieras que tu perro se quede quieto.",
    points: ["Para empezar, pídale a su perro que se siente unas cuantas veces para que esté en el estado mental correcto.", "Coloque algunas golosinas en un bolsillo, o esconda las golosinas en su mano. Dígale a su perro que se siente, y cuando su perro se siente, aléjese unos pasos del perro mientras usted dice la palabra «STAY» una y otra vez. Sólo tome unos pasos de distancia; si su perro no se mueve, diga «Ok» para hacerle saber que puede levantarse, entonces rápidamente dé una recompensa. Si su perro comienza a seguirle, simplemente diga «no», vuelva a llevar al perro a la zona de sentado y vuelva a intentarlo.", "Repita el paso dos veces al día hasta que su perro empiece a asociar «STAY» con no moverse mientras camina. Empiece dando unos pocos pasos más a la vez. Hágale saber a su perro que puede levantarse diciendo «OK» y rápidamente haga un reconocimiento de premio y muchos elogios cuando su perro se quede inmóvil.", "Aumente gradualmente la distancia con respecto a su perro mientras le dice continuamente la palabra «STAY» y aumente el tiempo en que su perro también se encuentra en una posición de «STAY». Si su perro rompe la orden de permanencia, simplemente diga «no», lleve al perro de vuelta a la zona de «sentarse» y comience de nuevo.", "Realice la lección de ‘STAY’ varias veces al día, todos los días. Una vez que su perro haya dominado la posición de «STAY» en casa, y durante largas distancias y más tiempo, practique la lección en otras áreas que tengan más distracciones, como su patio o el parque. Siga recompensando a su perro con abundantes felicitaciones a medida que las lecciones avancen y, poco a poco, elimine las recompensas."],
    elements: "Consigue una variedad de golosinas pequeñas. Durante el entrenamiento, le darás muchas golosinas a tu perro; por ello, debes elegir golosinas muy pequeñas. También puedes darle alimentos saludables para humanos que sean buenos para perros, como pedazos de manzana, zanahoria, vainitas o pollo.[3] Si el perro con el que estás trabajando tiene sobrepeso, puedes conseguir una golosina baja en calorías o una dietética, o incluso dale porciones individuales de alimento dietético para perros.",
    chip: "Si tu perro tiene dificultades para quedarse quieto deberás probarlo desde el tumbado."
  },
  level: 3,
}, {
  learn: "sit",
  title: "Sentado",
  url: "https://www.youtube.com/watch?v=DPNz6reMVXY",
  text: {
    description: "Enseñarle a tu perro a sentarse siguiendo una orden es uno de los comportamientos más simples que puedes enseñarle y suele ser la primera orden en el entrenamiento básico de obediencia. Sentarse puede ser un comportamiento útil para muchas situaciones, pero el proceso de entrenamiento también es el inicio del establecimiento de los roles de la relación entre tú y tu perro. Cuando tu perro haya aprendido a sentarse siguiendo una orden, tendrás su atención, lo que hará que el entrenamiento futuro sea mucho más fácil. Algunos métodos suelen funcionar mejor en cachorros, mientras que otros son más adecuados para los perros más viejos y menos enérgicos.",
    points: ["Tómalo con calma. Los perros, en especial los cachorros, prestan atención por un tiempo limitado y se distraen con facilidad. Ten esto en cuenta durante el proceso de entrenamiento y recuerda que al principio tendrás que tomártelo con calma. Dale descansos a tu perro para lograr que se concentre totalmente durante las sesiones de entrenamiento.", "Elige un ambiente apropiado. El ambiente de entrenamiento debe ser un área en la que el perro se sienta cómodo y que esté libre de distracciones", "Evita el entrenamiento al aire libre, si es posible.Las sesiones de entrenamiento al aire libre ofrecen un ambiente mucho menos controlado y muchas más distracciones.El entrenamiento al aire libre también limita tu capacidad de confinar al perro y, por consiguiente, de mantenerlo concentrado.", "Interpreta el estado de ánimo de tu perro.Si tu perro empieza la sesión de entrenamiento de forma correcta(prestándote atención, respondiendo a tus órdenes y participando en el entrenamiento), pero luego empieza a distraerse, toma un descanso.Tu perro podría estar abrumándose.Podrías tener que buscar un ambiente que lo distraiga menos o reducir en un inicio el tiempo de tus sesiones de entrenamiento(por ejemplo, 5 minutos en lugar de 10)." ],
    elements: "Consigue una variedad de golosinas pequeñas. Durante el entrenamiento, le darás muchas golosinas a tu perro; por ello, debes elegir golosinas muy pequeñas. También puedes darle alimentos saludables para humanos que sean buenos para perros, como pedazos de manzana, zanahoria, vainitas o pollo.[3] Si el perro con el que estás trabajando tiene sobrepeso, puedes conseguir una golosina baja en calorías o una dietética, o incluso dale porciones individuales de alimento dietético para perros.",
    chip: "Para hacer que tu perro se siente, sujeta un bocadillo en tu mano y luego pásalo por encima de su cabeza. Permite que el perro siga al bocadillo con su nariz hasta que su cabeza vaya tan atrás que incline la espalda hacia abajo para tratar de alcanzarlo logrando que su trasero toque el suelo."
  },
  level: 1
}, {
  learn: "tumb",
  title: "Tumbado",
  url: "https://www.youtube.com/watch?v=hHKtUp9-xbc",
  text: {
    description: "Junto a sentarse, conseguir que se tumbe es otra de las órdenes básicas para perros más fáciles de conseguir. Además, es un proceso lógico, ya que le podemos decir 'quieto', después 'sienta' y posteriormente 'échate' o 'tumba'. El perro lo asociará rápidamente y en un futuro lo hará de manera casi automática.",
    points: ["Ponte delante de tu perro y dile 'sienta'.", "Hazte con una golosina y, desde el sentado, baja tu mano hasta el suelo hasta que el perro se tumbe.", "Repite hasta que lo comprenda y añade una señal física y una señal verbal.", "Cuando se tumbe, dale el premio y dile '¡buen chico!', además de acariciarlo para reforzar esa actitud."],
    elements: "Consigue una variedad de golosinas pequeñas. Durante el entrenamiento, le darás muchas golosinas a tu perro; por ello, debes elegir golosinas muy pequeñas. También puedes darle alimentos saludables para humanos que sean buenos para perros, como pedazos de manzana, zanahoria, vainitas o pollo.[3] Si el perro con el que estás trabajando tiene sobrepeso, puedes conseguir una golosina baja en calorías o una dietética, o incluso dale porciones individuales de alimento dietético para perros.",
    chip: "Si utilizas el truco de esconder el premio en tu mano, poco a poco deberás retirarlo para que aprenda a tumbarse incluso sin golosina."
  },
  level: 2
}]

Training.insertMany(
    training
  )
  .then(() => mongoose.connection.close())
  .catch(err => console.log(err))
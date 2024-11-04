
// Funciones para mostrar y cerrar descripciones de personajes
function verDescripcion(personaje) {
    document.getElementById(`descripcion-${personaje}`).style.display = 'flex';
}

function cerrarDescripcion(personaje) {
    document.getElementById(`descripcion-${personaje}`).style.display = 'none';
}

// Código para la navegación de episodios

const episodios = [
    {
        titulo: "Episodio 1",
        imagen: "img/episodio1.jpg",
        resumen: "En el primer episodio de True Beauty, Lim Ju-kyung, una adolescente con baja autoestima, sufre acoso constante en la escuela debido a su apariencia física. Cansada de los insultos y el rechazo, Ju-kyung llega a pensar en quitarse la vida, pero se detiene y decide buscar una nueva forma de enfrentar la situación. Descubre el maquillaje y, a través de tutoriales, aprende a transformarse. Cuando se muda a una nueva escuela, su apariencia renovada la convierte en una de las chicas más populares, aunque vive con el temor de que alguien descubra su verdadero rostro. En su nuevo entorno, conoce a Lee Su Ho, un chico atractivo y misterioso que parece intuir que Ju-kyung oculta algo importante."
    },
    {
        titulo: "Episodio 2",
        imagen: "episodio2.jpg",
        resumen: "En el segundo episodio de True Beauty, Lim Ju- kyung comienza a adaptarse a su nueva escuela y experimenta cómo es ser popular gracias a su habilidad con el maquillaje.A pesar de ser amable y dulce, vive en constante temor de que alguien descubra su verdadero rostro sin maquillaje, lo que la hace sentir insegura y ansiosa. Su relación con Lee Su Ho empieza a tomar forma cuando él la protege en una situación incómoda, mostrando un lado protector y más cálido.Sin embargo, su ansiedad aumenta cuando se cruza con algunos compañeros de su antigua escuela, quienes podrían revelar su identidad y el pasado de acoso que sufrió.Ju - kyung enfrenta una mezcla de emociones mientras intenta encontrar su lugar en este nuevo entorno, donde su imagen y secretos se vuelven su mayor carga."
    },
    {
        titulo: "Episodio 3",
        imagen: "episodio3.jpg",
        resumen: "En el episodio 3 de True Beauty, Lim Ju-kyung intenta ajustarse a su vida escolar bajo su nueva apariencia. Sin embargo, continúa temerosa de que su verdadero yo sea descubierto y desarrolla una relación de amistad y tensión con Lee Su-ho, quien parece percibir su inseguridad y la ayuda en momentos críticos. Ju-kyung también se encuentra con Han Seo-jun, un estudiante rebelde y popular con quien tiene varios roces. La mezcla de amistad, rivalidad y posibles secretos entre los personajes hace que Ju-kyung enfrente sus propios conflictos internos mientras navega por su nueva vida en la escuela."
    },
    {
        titulo: "Episodio 4",
        imagen: "episodio4.jpg",
        resumen: "En el episodio 4 de True Beauty, la historia sigue profundizando en la vida de Ju-kyung, quien enfrenta conflictos entre su vida en la escuela y su identidad sin maquillaje. En este capítulo, Su-ho, el chico popular que ha comenzado a mostrar interés por Ju-kyung, descubre accidentalmente su apariencia sin maquillaje, lo cual preocupa a Ju-kyung, ya que teme ser juzgada y rechazada. Mientras tanto, Seojun, otro estudiante rebelde y atractivo, se introduce más en la vida de Ju- kyung, lo que inicia una rivalidad entre él y Su - ho.A lo largo del episodio, Ju - kyung empieza a desarrollar una amistad incómoda pero cercana con ambos chicos, y esto genera algunas tensiones.Además, Ju - kyung se esfuerza por mantener en secreto su transformación diaria, enfrentando problemas típicos de su edad, como la autoestima y el deseo de ser aceptada por quien es realmente. El episodio termina con un tenso triángulo amoroso en el horizonte, ya que ambos chicos parecen tener interés en ella, cada uno a su manera, lo cual añade complejidad a la trama y prepara el terreno para futuros conflictos."
    },
    {
        titulo: "Episodio 5",
        imagen: "episodio5.jpg",
        resumen: "En el episodio 5, Ju-kyung sigue lidiando con el miedo a que sus compañeros descubran su verdadera apariencia sin maquillaje. Su-ho, quien ya ha visto su rostro real, le da su apoyo en lugar de juzgarla, lo que genera una conexión más profunda entre ellos. Su amabilidad y comprensión comienzan a despertar en Ju-kyung sentimientos más fuertes hacia él. Mientras tanto, el conflicto entre Su- ho y Seojun sigue creciendo, ya que ambos muestran interés en Ju - kyung, aunque de maneras diferentes.Seojun, a pesar de su carácter rebelde, también comienza a acercarse a Ju - kyung y a mostrarle un lado más amable.La situación se complica cuando Ju - kyung y sus amigas deciden visitar un spa, lo que pone en riesgo el secreto de Ju - kyung debido a la posibilidad de que se le borre el maquillaje. El episodio termina en un momento tenso, ya que Ju - kyung teme que sus amigas descubran su apariencia real, y esto añade presión y ansiedad a su vida.La rivalidad amorosa y los secretos pendientes de revelación construyen un clima de expectativa para el próximo episodio."
    },
    {
        titulo: "Episodio 6",
        imagen: "episodio6.jpg",
        resumen: "En el episodio 6, Ju-kyung enfrenta las consecuencias de su visita al spa, y aunque logra mantener su secreto temporalmente, la experiencia le genera mucha presión emocional. Su-ho continúa brindándole apoyo, y su relación se vuelve más cercana, aunque ambos tienen dificultades para expresar abiertamente sus sentimientos. Seojun también está cada vez más atento a Ju-kyung, generando una competencia tácita entre él y Su-ho. En la escuela, Ju- kyung es víctima de bullying, lo cual Su - ho presencia y lo impulsa a defenderla, mostrando su lado protector.Este acto hace que Ju - kyung se sienta agradecida y más atraída hacia él, mientras el conflicto entre ambos chicos se intensifica. La trama en este episodio también explora el pasado de Su - ho y Seojun, revelando una historia compartida que explica su tensión actual.Esta revelación profundiza el triángulo amoroso, añadiendo una capa de drama y explicando las razones detrás de la fricción entre ellos. Al final del episodio, Ju - kyung se da cuenta de que debe enfrentar sus inseguridades y aprender a aceptar su apariencia real.Aunque aún no se siente lista para hacerlo, empieza a darse cuenta de que la aceptación y el apoyo de otros, especialmente de Su - ho, podrían ayudarla en este camino."
    },
    {
        titulo: "Episodio 7",
        imagen: "episodio7.jpg",
        resumen: "En el episodio 7, Ju-kyung sigue lidiando con sus sentimientos hacia Su-ho, pero el miedo a que descubra todos sus secretos sigue afectándola. Mientras tanto, Su-ho empieza a demostrar abiertamente su interés en Ju-kyung, protegiéndola en varias situaciones, lo cual despierta rumores en la escuela sobre una posible relación entre ellos. Ju-kyung está confundida, ya que no sabe si Su-ho está realmente interesado en ella o si solo la ve como una amiga. Por otro lado, Seojun también muestra interés en Ju- kyung, y su relación se vuelve más amistosa, lo que genera momentos incómodos y competitivos entre él y Su - ho.Se revela más sobre la amistad pasada de Su - ho y Seojun, quienes solían ser cercanos antes de distanciarse debido a un evento traumático.Esto explica la tensión y rivalidad entre ambos, que ahora se ven enfrentados no solo por su historia compartida, sino también por sus sentimientos hacia Ju - kyung. El episodio termina con un tenso enfrentamiento entre Su - ho y Seojun, en el que ambos dejan claro su interés en Ju - kyung, aunque ella sigue sintiéndose insegura sobre sus propios sentimientos.Este episodio aumenta la intensidad del triángulo amoroso y hace que Ju - kyung se cuestione sus relaciones con ambos chicos."
    },
    {
        titulo: "Episodio 8",
        imagen: "episodio8.jpg",
        resumen: "En el episodio 8, el triángulo amoroso se intensifica aún más cuando Su-ho y Ju-kyung tienen un momento especial en el que él le confiesa sus sentimientos. Ju-kyung, sorprendida, siente felicidad pero también incertidumbre, ya que teme que su relación con Su-ho cambie si él descubre su verdadera apariencia sin maquillaje. Su miedo a ser juzgada y rechazada sigue siendo una barrera importante. Mientras tanto, Seojun continúa tratando de acercarse a Ju- kyung, mostrándole un lado protector y amable.Esta relación crea más confusión en Ju - kyung, quien empieza a ver en él a alguien confiable, aunque no está segura de sus sentimientos.En un momento tenso, los tres se encuentran en la misma situación, lo que provoca una escena incómoda y genera rumores en la escuela sobre un posible triángulo amoroso. Hacia el final del episodio, Ju - kyung enfrenta una situación en la que su secreto está a punto de ser revelado frente a varios compañeros, incluyendo a Su - ho.Esto la deja en un estado de pánico, pero finalmente logra superar la situación con ayuda de sus amigos, aunque el miedo sigue latente.Este episodio se centra en la evolución de sus sentimientos y en cómo enfrenta las dificultades de vivir una vida oculta. Además, deja claro que deberá enfrentar sus inseguridades tarde o temprano."
    },
    {
        titulo: "Episodio 9",
        imagen: "episodio9.jpg",
        resumen: "En el episodio 9, Ju-kyung y Su-ho comienzan a salir en secreto, lo cual trae momentos tanto dulces como tensos, ya que Ju-kyung sigue sintiendo ansiedad por la posibilidad de que sus compañeros descubran su relación y su apariencia real sin maquillaje. Su-ho intenta animarla y darle confianza, mostrándose como un novio cariñoso y protector. Este nuevo romance le da a Ju-kyung más razones para sentirse feliz, pero también intensifica su miedo a que su secreto sea expuesto. Por otro lado, Seojun comienza a sospechar de la cercanía entre Ju- kyung y Su - ho, aunque sigue sin conocer la verdad completa.Este descubrimiento lo incomoda, ya que él también ha desarrollado sentimientos genuinos hacia Ju - kyung.Al mismo tiempo, la tensión entre él y Su - ho sigue aumentando, y los recuerdos de su amistad pasada resurgen, mostrando cómo un incidente doloroso afectó su relación y sus vidas. Mientras tanto, Ju - kyung enfrenta situaciones de acoso escolar, y aunque intenta mantener la calma, Su - ho interviene para defenderla, generando más rumores en la escuela sobre su relación.El episodio cierra con un momento de vulnerabilidad entre Ju - kyung y Su - ho, en el que ella comienza a considerar la posibilidad de aceptar su apariencia real, aunque todavía no se siente lista para hacerlo completamente."
    },
    {
        titulo: "Episodio 10",
        imagen: "episodio10.jpg",
        resumen: "En el episodio 10, la relación entre Ju-kyung y Su-ho se vuelve cada vez más pública, lo cual la llena de ansiedad. La presión aumenta cuando Ju-kyung se ve en una situación en la que su maquillaje comienza a fallar frente a algunos de sus compañeros, y está a punto de ser descubierta. Sin embargo, Su-ho aparece en el último momento para ayudarla, demostrándole su apoyo incondicional y reforzando la confianza que ella tiene en él. Seojun, por otro lado, comienza a acercarse aún más a Ju- kyung, provocando que ella se sienta confundida.Aunque está en una relación con Su - ho, la amabilidad y apoyo de Seojun la hacen dudar, especialmente porque él sigue sin conocer la verdad sobre su apariencia.Esto crea momentos incómodos y tensa aún más la relación entre Seojun y Su - ho. El episodio también explora más sobre el pasado de Su - ho y Seojun, revelando detalles adicionales sobre el evento que rompió su amistad y afectó sus vidas.Esto añade una dimensión emocional a sus interacciones y muestra que ambos todavía tienen heridas sin sanar. Al final del episodio, Ju - kyung se da cuenta de que no puede esconder su verdadera identidad para siempre y se plantea la posibilidad de enfrentar sus miedos.La situación parece acercarse a un punto de inflexión, ya que ella tendrá que decidir entre seguir ocultándose o encontrar la valentía para mostrarse tal cual es, especialmente con el apoyo de aquellos que realmente la aceptan."
    },
    {
        titulo: "Episodio 11",
        imagen: "episodio11.jpg",
        resumen: "En el episodio 11, Ju-kyung empieza a reflexionar más seriamente sobre la posibilidad de mostrarse sin maquillaje y enfrentar sus miedos. Aunque su relación con Su-ho le da más seguridad, sigue preocupada por cómo reaccionarán los demás, especialmente sus compañeros de clase. Su-ho, por su parte, continúa siendo su principal apoyo emocional, alentándola a aceptarse tal como es. Mientras tanto, Seojun se da cuenta de que sus sentimientos hacia Ju- kyung son más profundos de lo que pensaba.Esto lo lleva a confrontar a Su - ho de manera directa, revelando finalmente su interés romántico por Ju - kyung.La tensión entre los dos llega a un punto máximo, lo cual causa un malentendido entre Ju - kyung y Su - ho.Este malentendido hace que Ju - kyung se sienta insegura y piense que su relación con Su - ho podría estar en peligro. Además, Ju - kyung tiene que enfrentar a sus antiguos acosadores escolares, quienes amenazan con revelar su aspecto sin maquillaje.Esta situación le causa una gran angustia y la hace cuestionarse si realmente podrá algún día mostrarse sin temor.El episodio termina con un momento dramático en el que Ju - kyung está a punto de ser desenmascarada frente a varias personas, dejándonos con un suspenso sobre cómo lidiará con esta situación."
    },
    {
        titulo: "Episodio 12",
        imagen: "episodio12.jpg",
        resumen: "En el episodio 12, el conflicto alcanza un punto álgido cuando Ju-kyung se ve forzada a enfrentarse a sus temores. Su secreto queda finalmente expuesto ante algunos de sus compañeros, lo que inicialmente le causa una gran angustia y un sentimiento de humillación. Sin embargo, tanto Su-ho como Seojun la apoyan, dejando en claro que la aprecian por quién es realmente, y no por su apariencia. Este momento es transformador para Ju- kyung, quien finalmente comienza a aceptar su verdadero yo y a ganar confianza en sí misma.Su - ho permanece a su lado, demostrando una lealtad y un cariño profundos, lo cual refuerza su relación y le da fuerzas a Ju - kyung para enfrentar los comentarios negativos. Seojun, aunque sabe que sus sentimientos no serán correspondidos, continúa siendo un buen amigo para Ju - kyung, apoyándola y mostrando una madurez emocional que empieza a sanar la tensión con Su - ho.Esto también permite que ambos chicos comiencen a resolver su relación pasada, que había sido rota por viejas heridas y malentendidos. Al final del episodio, Ju - kyung experimenta una sensación de alivio y libertad al no tener que esconderse más.Aunque todavía teme el juicio de algunas personas, sabe que cuenta con el apoyo de quienes realmente la quieren.Esto marca un punto de crecimiento personal importante para Ju - kyung, que se siente más segura y lista para enfrentar nuevos desafíos."
    },
    {
        titulo: "Episodio 13",
        imagen: "episodio13.jpg",
        resumen: "En el episodio 13, Ju-kyung continúa enfrentando las consecuencias de haber revelado su verdadero aspecto. Aunque ha ganado más confianza en sí misma, aún tiene momentos de inseguridad debido a las reacciones de algunos compañeros de clase. Sin embargo, gracias al apoyo constante de Su-ho y sus verdaderos amigos, comienza a sentirse más cómoda y a aceptar su apariencia sin maquillaje. Mientras tanto, la relación entre Su- ho y Seojun mejora lentamente.Aunque todavía existe una tensión entre ellos, ambos están aprendiendo a dejar atrás el dolor de su pasado compartido, especialmente ahora que su prioridad es el bienestar de Ju - kyung.Seojun, aunque ha aceptado que sus sentimientos no serán correspondidos, sigue siendo un amigo leal para ella y se muestra dispuesto a protegerla de cualquier situación difícil. En este episodio también se revela más sobre la tragedia que había afectado a Su - ho y Seojun en el pasado, y ambos finalmente encuentran un momento de reconciliación.Al comprender que no pueden cambiar el pasado, deciden apoyarse mutuamente para seguir adelante.Esta resolución marca un avance en la historia de los dos chicos y en su madurez personal. El episodio concluye con un momento romántico entre Ju - kyung y Su - ho, que finalmente pueden disfrutar de su relación sin tantas preocupaciones y juicios de los demás.Sin embargo, un nuevo problema parece avecinarse, dejando en suspenso la estabilidad que Ju - kyung ha logrado construir."
    },
    {
        titulo: "Episodio 14",
        imagen: "episodio14.jpg",
        resumen: "En el episodio 14, la felicidad de Ju-kyung y Su-ho se ve amenazada cuando Su-ho recibe noticias que lo obligan a tomar una decisión difícil. Su padre, que es una figura influyente en su vida, enfrenta problemas serios, y Su-ho se ve forzado a considerar la posibilidad de mudarse al extranjero para estar con él. Esto crea un conflicto emocional en Su-ho, ya que no quiere dejar a Ju-kyung, pero también siente la responsabilidad de ayudar a su familia. La noticia afecta profundamente a Ju- kyung, quien teme perder a Su - ho justo cuando ha encontrado estabilidad y felicidad.Esta situación los lleva a valorar cada momento juntos, y ambos luchan con la idea de una posible separación.Aunque intentan mantenerse optimistas, el dolor de la distancia inminente es difícil de ignorar. Por otro lado, Seojun continúa apoyando a Ju - kyung, demostrando su amistad genuina y su cariño por ella.Aunque aún tiene sentimientos románticos, está decidido a ser una figura positiva en su vida, lo cual ayuda a Ju - kyung a enfrentar esta etapa de incertidumbre. El episodio termina en un tono emotivo y agridulce, con Su - ho preparándose para partir.Su despedida con Ju - kyung está llena de promesas de volver y mantener el amor que sienten, aunque ambos saben que enfrentarán desafíos difíciles en el futuro.Este episodio marca un momento clave en sus vidas, ya que ambos tendrán que encontrar fuerzas para seguir adelante a pesar de la distancia."
    },
    {
        titulo: "Episodio 15",
        imagen: "episodio15.jpg",
        resumen: "En el episodio 15, Ju-kyung intenta adaptarse a la ausencia de Su-ho, quien ha partido al extranjero para atender los problemas familiares de su padre. Aunque su separación ha sido dolorosa, Ju-kyung decide centrarse en su propio crecimiento y en aprender a ser feliz y segura de sí misma, incluso sin su apoyo. Ella continúa con sus estudios y comienza a explorar más sus intereses, especialmente en el maquillaje, con el objetivo de crear un futuro para sí misma. Por otro lado, Seojun sigue siendo un pilar importante para Ju- kyung y su amistad se vuelve más sólida.Aunque sus sentimientos románticos persisten, él respeta el espacio de Ju - kyung y decide enfocarse en su propio sueño de convertirse en cantante.Este camino le permite crecer personalmente, y empieza a ganar popularidad en la industria de la música, dando un giro positivo a su vida. Con el paso del tiempo, Ju - kyung y Seojun empiezan a salir en algunas citas casuales, pero su relación sigue siendo principalmente de amistad.Ju - kyung todavía guarda un lugar especial en su corazón para Su - ho, y aunque no sabe cuándo regresará, sigue teniendo la esperanza de reencontrarse con él algún día. El episodio termina cuando Su - ho decide regresar a Corea, justo cuando Ju - kyung y Seojun están en un momento de cercanía.La llegada de Su - ho genera expectativas y prepara el terreno para el desenlace de sus relaciones."
    },
    {
        titulo: "Episodio 16",
        imagen: "episodio16.jpg",
        resumen: "En el episodio final, el episodio 16, Su-ho regresa a Corea y se reencuentra con Ju-kyung. Su regreso causa emociones mixtas, ya que ambos deben enfrentar el tiempo que han pasado separados y las experiencias que vivieron por su cuenta. A pesar de la distancia, sus sentimientos siguen intactos, y ambos se dan cuenta de que todavía se aman profundamente. Su- ho y Seojun también tienen un momento de reconciliación final, en el cual muestran un respeto mutuo y aceptan sus caminos separados.Seojun, quien ha hecho progresos en su carrera musical, decide continuar persiguiendo su sueño de ser cantante, dejando atrás cualquier resentimiento y enfocándose en su propio futuro. Ju - kyung y Su - ho deciden retomar su relación, esta vez con mayor madurez y entendimiento.Ju - kyung, quien ahora es mucho más segura de sí misma y ha aprendido a aceptarse tal cual es, puede disfrutar de su relación sin esconderse ni depender emocionalmente de Su - ho.Ambos están listos para apoyarse mutuamente mientras persiguen sus sueños individuales. La serie termina en un tono positivo y esperanzador, mostrando a Ju - kyung, Su - ho y Seojun avanzando en sus vidas, cada uno habiendo aprendido importantes lecciones sobre la autoestima, la aceptación y el amor verdadero."
    }

    // Agrega más episodios según sea necesario
];

let episodioActual = 0;

function cambiarEpisodio(direccion) {
    episodioActual += direccion;

    if (episodioActual < 0) {
        episodioActual = episodios.length - 1;
    } else if (episodioActual >= episodios.length) {
        episodioActual = 0;
    }

    const episodio = episodios[episodioActual];
    document.getElementById("tituloEpisodio").textContent = episodio.titulo;
    document.getElementById("imagenEpisodio").src = episodio.imagen;
    document.getElementById("resumenEpisodio").textContent = episodio.resumen;
}


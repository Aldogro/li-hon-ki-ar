import empty from './assets/webp/img-placeholder.webp';
import sifuFace from './assets/jpeg/sifu-face.jpeg';
import joseFace from './assets/jpeg/jose-face.jpeg';

const hungGar = {
    activityId: 'hung-gar',
    name: 'Hung Gar',
    logo: empty,
};
const wingChun = {
    activityId: 'wing-chun',
    name: 'Wing Chun',
    logo: empty,
};
const sanda = {
    activityId: 'sanda',
    name: 'Sanda',
    logo: empty,
}
const funcional = {
    activityId: 'funcional',
    name: 'Funcional',
    logo: empty,
}

export const activities = [
    hungGar,
    wingChun,
    sanda,
    funcional,
];

const kwoonCentral = {
    filialId: 'kwoon-central',
    name: 'Kwoon Central',
    city: 'Rosario',
    address: 'Laprida 2907 - Rosario - Santa Fe',
    addressLink: 'https://maps.app.goo.gl/WAuqRqqVbcR9MvRFA',
    activities: 'Hung Gar - Wing Chun - Sanda - Funcional',
    director: 'Sifu Fabián González',
    instructorId: 'sifu-fabian-gonzalez',
};
const filialLaPlata = {
    filialId: 'filial-la-plata',
    name: 'Filial La Plata, Bs. As.',
    city: 'La Plata',
    address: 'Club S y D San Martín, Calle 119 entre 530 y 531 Tolosa',
    addressLink: 'https://maps.app.goo.gl/o4X1RapUCv5rTGTU6',
    activities: 'Hung Gar',
    director: 'Instructor Ignacio Bruvera',
    instructorId: 'instructor-ignacio-bruvera',
};
const filialComarcaAndina = {
    filialId: 'filial-comarca-andina',
    name: 'Filial Comarca Andina - El Hoyo',
    city: 'El Hoyo',
    address: 'Corfo El Hoyo - Chubut',
    addressLink: 'https://maps.app.goo.gl/UHhPPsScdT2NYgvdA',
    activities: 'Hung Gar - Chi Kung - Defensa Personal',
    director: 'Profesor Nahuel Campanari',
    instructorId: 'prof-nahuel-campanari',
};
const filialRosarioZonaSur = {
    filialId: 'filial-rosario-zona-sur',
    name: 'Filial Rosario (Zona Sur)',
    city: 'Rosario',
    address: 'España 4588 esquina Coulin (Espacio Iluminarte)',
    addressLink: 'https://maps.app.goo.gl/LnCNpjvtTTTSVqQWA',
    activities: 'Hung Gar',
    director: 'Instructor José Luis Cristaldo Bustamante',
    instructorId: 'instructor-jose-luis-cb',
};

export const filiales = [
    kwoonCentral,
    filialLaPlata,
    filialComarcaAndina,
    filialRosarioZonaSur,
];

export const instructores = [
    {
        instructorId: 'sifu-fabian-gonzalez',
        name: 'Sifu Fabián Luis González',
        yearsOfPractice: 40,
        bio: `
            Único epresentante del <b>Gran Maestro Li Hon Ki</b> en Argentina.
            <br><br>
            <i>Más 40 años de práctica ininterrumpida.</i>
            <br><br>
            <h3>Sifu Fabian Luis González</h3>
            <p>
                Aproximadamente en el año 1976, a la edad de 9 años, despierta en Fabian la semilla y el interés
                por el mundo de las Artes Marciales. Todo comenzó en el núcleo de un grupo de “amiguitos del barrio”
                donde uno de ellos, dos años mayor, aprendía Kung Fu, motivo por el cual era idolatrado por el
                resto del grupo. Sin embargo, parte de su conocimiento era volcado a sus amigos haciéndolos practicar
                las posturas básicas de Kung Fu y técnicas de animales, entre las cuales Fabian recuerda técnicas de
                Leopardo, Grulla y Serpiente. Por otro lado, en aquella época era muy popular la serie televisiva
                “Kung Fu”, protagonizada por David Carradine, la cual despertó en muchas personas el interés por el
                Kung Fu. Fabian Gonzáles no sería la excepción.
            </p>
            <p>
                El Kung Fu se estaba gestando desde un juego, como un entretenimiento de niños, donde ellos mismos llegaron
                a organizar dentro de su grupo pequeños torneos y competencias. Sin embargo, con el tiempo este grupo de
                amigos paso a ser una banda auto denominados “La banda del Dragón”, donde para formar parte de ella se debía
                de sortear exitosamente una serie de desafíos, miedos, obstáculos y pruebas, impuestas por el grupo.
            </p>
            <p>
                Allá por el 1983, con la Argentina iniciando su periodo de Democracia, Fabian se encontraba cursando sus
                estudios secundarios, cuando una tarde de regreso a su casa y a escasas cuadras de ella, encuentra un letreo
                que decía: “Se enseña Kung Fu - Puño del Águila”. Por lo cual Fabian le comenta de este lugar a un amigo y
                juntos fueron a averiguar de que se trataba.
            </p>
            <p>
                Fabian y su amigo observaron con atención toda una clase, donde había tres practicantes de pelo largo, espaldas
                anchas y condición robusta. Al finalizar la clase Fabian conversa con el Maestro a cargo, cuyo nombre era
                Héctor Lenti, a quien le expresa su interés en aprender Kung Fu. Al poco tiempo, Fabian ya era Sidai de esos
                robustos compañeros que él muy atentamente observó aquel día. De esta manera, inicia sus primeros pasos
                formales en el aprendizaje del Kung Fu, bajo la tutela del Maestro Héctor Lenti, en la disciplina
                Puño del Águila, pero no siendo este un estilo tradicional.
            </p>
            <p>
                El lugar de entrenamiento, Kwoon, se encontraba en el Club de barrio Hilarión, donde años más tarde y sin saberlo
                Fabian desarrollaría gran parte de su trayectoria como Maestro de diferentes disciplinas de Kung Fu.
            </p>
            <p>
                En 1985, Héctor Lenti viaja a San Pablo, Brasil, donde aprende el estilo Tradicional Garra de Águila en manos
                del Maestro Li Wing Kay, convirtiéndose así en un representante oficial de este estilo en Argentina.
            </p>
            <p>
                Tiempo después, en abril de 1985, Fabian debe comenzar el Servicio Militar en la Prefectura Naval Argentina,
                en Rosario. Esto trajo consigo el cumplir guardias prácticamente todos los días, por lo que tenía muy poco
                tiempo libre. La práctica del Kung Fu se vio algo discontinuada, no obstante, con mucha voluntad en sus días
                libres en lugar de descansar no dudaba de asistir a las clases de su Maestro.
            </p>
            <p>
                En 1986 la escuela de Kung Fu “Garra de Águila” se muda a la zona céntrica de la ciudad. Fabian ya habiendo
                terminado el Servicio Militar, puedo entrenar con mayor regularidad e intensidad. Tiempo después, decide
                iniciar sus estudios universitarios en la carrera de Comunicación Social. Intento que solo duró unos
                6 meses, dado que su fuerte interés por las Artes Marciales pesaba más que sus estudios, por lo que hizo
                a un lado los libros y se concentró en aquello que tanto lo movilizaba, el Kung Fu.
            </p>
            <p>
                Para el año 1987, Fabian ya se encontraba dando clases de Kung Fu Garra de Águila en el Club Italiano,
                en la zona Norte de Rosario. Año más tarde, también dio clases en el Club Rosario Central, enseñando
                tanto a niños como a adultos, mientras en simultaneo mantenía su aprendizaje en la escuela Garra de Águila,
                asimismo participaba en torneos, exhibiciones y colaboraba en los exámenes. Fabian sentía un
                gran compromiso y respeto por el Kung Fu, siempre estuvo entre los primeros en pagar la cuota del mes,
                tomando esto como una demostración de su compromiso personal hacia su Maestro y escuela.
            </p>
            <p>
                En cuanto a su vida personal, Fabian se ganaba la vida realizando distintos trabajos y changas, lo que le
                generaba el sustento necesario vivir.
            </p>
            <p>
                Fue en el año 1988, cuando el Maestro invita a Fabian y a otros alumnos a viajar a Brasil, San Pablo, para
                entrenar en la sede central durante un mes. Fabian no deja pasar esa gran oportunidad, donde sus padres le
                fueron de gran ayuda para costear parte del gasto de pasajes y estadía. En palabras de Fabian, ese viaje
                significo una experiencia maravillosa, no solo porque se encontraba entrenando allí junto a su Maestro,
                sino también junto a algunos de sus hermanos de práctica, con quienes habían podido viajar.
            </p>
            <p>
                Fabian recuerda ya en el primer día estar participando en una exhibición y en un torneo, y luego
                finalmente haber sido presentados ante el Maestro Li Wing Kay. También conoce y entrena junto a grandes
                profesores y luchadores, quienes habían competido en China en la modalidad de Sanshou y Formas. Entre
                ellos menciona a Marcelo Giudici, James Venturin, Silvano Lecio, quienes resultaron ser campeones
                en China, dentro de sus categorías.
            </p>
            <p>
                En esa época, en Brasil, había una función de circo llamada “El Show de Jaspion” referenciado a la
                famosa serie televisiva japonesa “Kyojū Tokusō Jasupion” donde a Brasil llegaría bajo el nombre de
                “Fantástico Jaspion”, siendo una serie de modalidad similar a los Power Rangers. En dicho show de
                circo participaba el Maestro Li Wing Kay junto con su hermano, el Maestro Li Hon Ki, más alumnos de
                “Garra de Águila” y “Hung Gar” respectivamente, donde disfrazados interpretaban los personajes de la
                serie. El Maestro Lenti junto a sus alumnos fueron invitados a presenciar dicha función de circo.
                Finalizada esta, el grupo de argentinos es presentado ante el Maestro Li Hon Ki y sus los alumnos
                de Hung Gar. Fue aquí entonces que Fabian conoce al Maestro Li Hon Ki, sin saber que dos años más
                tardes el sería su Gran Maestro.
            </p>
            <p>
                Habiendo regresado de San Pablo, junto con la comunidad China en Rosario participan en la 4ta
                edición del “Festival de Colectividades”, donde realizaron una exhibición de Kung Fu en el
                escenario principal. Dicha participación fue de alguna manera un puntapié a muchas exhibiciones
                que se realizarían después, utilizadas como difusión para el Kung Fu, pero en otras ocasiones
                como una herramienta solidaria para ayudar. Por ejemplo, menciona Fabian: –“Realizamos una
                exhibición “a la gorra” en peatonal Córdoba con el fin de recolectar dinero para la compra de
                una silla de rueda. También hemos realizado exhibiciones en hogar de huérfanos y hasta hemos
                sido invitados en programas de televisión como “De 12 a 14” y “El show de AJ”. En una oportunidad,
                presentamos un muy lindo espectáculo en el reconocido evento “Gym on Stage” llevado a cabo en
                el teatro El Circulo. El “Gym on Stage” (hoy ya de carácter internacional) es una gran competencia
                artística que incluye diciplinas como danza, acrobacia, fitness, aeróbica deportiva, entre otras.
                Recuero también que fuimos invitados a participar durante un evento de Danza contemporánea
                desarrollado en el Patio de la Madera, organizado por la Bienal de Danza Contemporánea”–.
                Esa época fue caracterizada por una gran participación en exhibiciones y eventos coloridos,
                donde la difusión del estilo en la ciudad fue importante, llegando a un público en general muy amplio.
            </p>
            <p>
                Tiempo después, en el año 1989 se genera un punto de inflexión, donde todo cambió, y el cuerpo
                de profesores decide tomar un nuevo rumbo en las artes marciales chinas.
            </p>
            <p>
                El tiempo posterior fue difícil para Fabian, donde se sentía a la deriva sin saber que hacer
                y como ocupar su tiempo libre. Conociendo que en Rosario había otro Maestro de Kung Fu Tradicional
                y de formas modernas de Wushu, decidieron ir a entrenar con él, a finales de 1989. Pero aquí Fabian
                no se sintió a gusto por distintas cuestiones, por lo que solo entrenó por el corto periodo de
                cuatro meses. Paralelo a todo esto, en ese año había venido de Brasil un profesor de Capoeira,
                llamado Laxon, por lo que también habían estado tomando clases de Capoeira.
            </p>
            <p>
                Para enero de 1990, el grupo fue invitado a tomar clases de Capoeira en San Pablo, Brasil,
                donde le ofrecieron hospedaje en la Universidad de San Pablo, en el sector de educación física.
                Así fue como un grupo de 7 amigos viajaron para entrenar y aprovechar la oportunidad para
                analizar el panorama del Kung Fu, en dicho país. A continuación, todo estaba a punto de cambiar.
                Fabian González así lo narra:
            </p>
            <p>
                –“Cuando llegamos a la terminal de ómnibus de San Pablo, en un puesto de diarios y revistas
                hallamos una revista en la cual se mencionaban a todos los Maestros pioneros del Kung Fu en
                ese país. A partir de allí, comenzamos a visitar una a una cada academia que figuraba en la
                revista. Finalmente nos decidimos por el estilo Hung Gar del Maestro Li Hon Ki, donde pudimos
                ver muchas cualidades positivas, tanto del Maestro, del estilo, como de su escuela, cosa que
                no habíamos logrado ver en otras academias”–. Fue a partir de aquí que el Kung Fu de Fabian
                González comienza un nuevo camino.
            </p>
            <p>
                El primer encuentro con el maestro Li Hon Ki se realiza en su casa, cerca del barrio chino de
                San Pablo. En ese encuentro les mostraron unos videos de demostraciones de técnicas y
                exhibiciones con acrobacias, saltos, aplicaciones, defensa personal, etc., pero el maestro
                no se asombró, solo los llevó a la planta baja con un par de focos y les comenzó a enseñar
                desplazamientos con puños rectos y combinaciones sobre los focos. Al finalizar les explica
                que solo uno debería mantener contacto directo con él, motivo por el cual realizan una votación
                resultando Fabian González ser el elegido. –“A lo largo de todos estos años, jamás me consideré
                superior a mis compañeros por haber sido yo quien recibiera los conocimientos directamente de
                Li Hon Ki, a pesar del poder que otorga la representación de un estilo en mi país”–.
            </p>
            <p>
                En 1992, Fabian contrae matrimonio y comienzo a trabajar como empleado en una
                Entidad Bancaria. Al año siguiente, en 1993 realiza un nuevo viaje a San Pablo, en avión
                directo desde Rosario, para despedir a su Maestro Li Hon Ki ya que él se iba a vivir a EE.UU.,
                donde sin saberlo aprendería la línea Applied Wing Chun del reconocido Maestro Duncan Leung.
            </p>
            <p>
                En esta oportunidad, la experiencia fue muy distinta, –“Sentí que el Maestro se abrió en
                cuanto a confianza y enseñanza, entrenábamos en su academia que se estaba desmantelando y
                dormíamos sobre el piso de madera. En los entrenamientos tuvimos contacto con profesores
                avanzados y experimentamos la dureza y el poder del Hung Gar. También recuerdo que el maestro
                me obsequió sus cuchillos mariposas, que fueron hechos por él mismo en su juventud”–.
            </p>
            <p>
                De vuelta en Argentina y ya finalizando su contrato de alquiler, Fabian muda su Kwoon
                al Club Hilarión, donde ya existía una escuela de Hung Gar de un hermano de práctica,
                pero él enseñando en otros turnos.
            </p>
            <p>
                Mientras tanto, el contacto con su Maestro Li Hon Ki se mantenía mediante cartas.
                En una oportunidad Li le comenta a Fabian su intención de volver en algún momento
                a Brasil, donde estaba su familia y afectos, ya que en EE.UU. no se hallaba del todo cómodo.
            </p>
            <p>
                A mediados del '94, un domingo por la noche Fabian recibe un llamado telefónico de su
                Maestro, en el cual le anuncia que en unos meses (noviembre) iba a viajar a la Argentina.
                Así es que Fabian comienza con todos los preparativos para su visita, así como también la
                organización de cursos de Wing Chun, Tai chi y Defensa Personal, que el Maestro Li dictaría
                para el público en general. Durante esa semana de estadía, Li seguiría transmitiendo su
                conocimiento de Hung Gar a Fabian y compañeros.
            </p>
            <p>
                En una oportunidad, el Maestro le pregunta a Fabian si conocía algún profesor de Kung Fu
                interesado en aprender Wing Chun y enseñarlo en Argentina. Fabian conocía profesores,
                pero a quienes no veía con el suficiente compromiso o interés en enseñar un estilo
                tradicional, así que lo consensua con sus compañeros para ser ellos quienes aprendieran
                el estilo y lo difundieran en el país. Así fue como en una charla privada con su Maestro,
                en el hotel donde se hospedaba, le realiza la propuesta, a lo que Li le responde:
                –"Fabian, todo lo que yo sé, usted lo sabrá"–. Palabras que colmaron completamente
                de alegría a Fabian.
            </p>
            <p>
                Dado que la gama de estilos que se enseñaban en la escuela se estaba ampliando, en
                1995 el grupo de profesores deciden cambiar el nombre de la escuela a “Asociación de
                Artes Marciales Tradicionales Chinas Argentina” en la cual se enseñaba los estilos de
                Hung Gar, Wing Chun y Tai Chi Chuan de la familia Wu.
            </p>
            <p>
                El 1996 resultó ser un año muy duro para Fabian. La Federación Argentina de Wu Shu
                Kung Fu (FAWK) invita a la Asociación a participar de un torneo Panamericano en
                Buenos Aires, el cual era clasificatorio para el Mundial de Wu Shu Kung Fu. Fabian
                junto con otros profes y alumnos participan en dicho torneo, pero con la desgracia
                de que Fabian en un combate luego de un cruce y lance con su oponente ambos caen
                fuera del cuadrilátero, mientras que Fabian no detecta que su protector tibial se
                había girado, sufriendo luego una fractura expuesta de tibia al recibir un low kick
                de su oponente, justo en el momento que él estaba pateando al frente. Su oponente
                sufrió una fractura de tobillo. Ambos fueron derivados a un hospital para su atención.
            </p>
            <p>
                Fabian se encontraba muy preocupado por todo lo que ello conllevaría, no solo la
                lesión en sí, sino por el grupo de sus alumnos, mayores y menores, que habían
                viajado con él en colectivo; pero a la vez tranquilo por el hecho que sabía que
                los otros profesores cuidarían de ellos.
            </p>
            <p>
                Al día siguiente su padre y su esposa viajan a Bs. As., contratan una ambulancia
                para su traslado a Rosario. Pero cuando la ambulancia llega aun no le daban el alta,
                por lo que Fabian, con la ayuda de su esposa y un enfermero, “se retira a escondidas
                del hospital” viajando a Rosario, directo al Sanatorio Americano.
            </p>
            <p>
                A finales de ese año Li Hon Ki visita nuevamente la Argentina, continuando con la
                enseñanza de su Kung Fu, en esta oportunidad Fabian recuperándose de la lesión.
                En 1999 Li Hon Ki nuevamente visita el país, mientras que en el 2000 Fabian es
                invitado a Brasil a una reunión con todos los alumnos del Maestro Li, dado que
                migraban el estilo de Hung Gar al linaje de la familia Lan Jo, donde Li Hon Ki
                fue pionero en introducir este poderoso estilo en Sudamérica. Durante este viaje,
                Fabian practicaba Wing Chun por la mañana junto a Eddie Freire, mientras que por
                la tarde Hung Gar con Li.
            </p>
            <p>
                En 2001, 2003, 2006 y 2010 Li Hon Ki viaja a la Argentina continuando su enseñanza
                y difusión del Kung Fu. En el último viaje, año 2010, Li viaja acompañado de su
                esposa Adriana, año en que Fabian termina de completar el estilo Hung Gar de la
                familia Lam Jo. Por otro lado, Fabian recalca que el Maestro Li siempre fue algo
                reacio en la transmisión de conocimiento de Wing Chun, en el sentido que enseñaba
                a cuenta gotas, técnica a técnica, y hasta que el conjunto de técnicas básicas no
                era bien aprendido y comprendido, no pasaba a técnicas más avanzadas.
            </p>
            <p>
                En el periodo de 1998 a 2010, la Asociación de Artes Marciales Tradicionales Chinas
                Argentina poco a poco fue perdiendo fuerza, siendo que algunos profesores fueron
                dejando el grupo, por cuestiones personales o por la falta de una Maestro tradicional
                que los guie. Sin embargo, Fabian seguía con empeño tratando de sostener vivo el
                espíritu de la Asociación. En el año 2012 finalmente la Asociación llega a su fin,
                por lo cual Sifu Fabian sigue su propio camino y nombra a su escuela
                “Instituto Li Hon Ki”. En dicho año Fabian también apuesta a trasladar el Wing Chun
                a la zona centro de Rosario, donde logra sumar una gran cantidad de alumnos, de lo
                cuales un grupo muy leal lo acompaña hasta hoy día. Fabian tenía intenciones de que
                en ese año el Maestro Li viaje a Argentina, pero dado que no se encontraba bien de
                salud acuerdan posponer la visita para el año siguiente. Sin embargo, Sifu Fabian
                viajó a Bauru, Brasil, a un curso de Wing Chun dictado por su Sihing Hudson William,
                el cual duró 3 días de completas jornadas de muy duro entrenamiento. Este viaje Fabian
                lo realiza solicitando la previa autorización de su Maestro Li, y con la esperanza de
                poder verlo allí, pero la salud de su maestro no lo permitiría.
            </p>
            <p>
                De regreso de Brasil, Fabian y sus alumnos son invitados a realizar una exhibición
                en un evento holístico muy importante en el salón del Hotel Howard Johnson. Allí
                se mostraron las disciplinas de Wing Chun y Hung Gar. El contacto surgió dado que
                Sifu Fabian publicaba notas y artículos en la revista Do, lo que lo hizo muy conocido
                en el ambiente marcial y holístico.
            </p>
            <p>
                En el año 2016 la salud del Maestro Li Hon Ki desmejora debiendo ser internado. Sifu
                Fabian viaja a Porto Alegre por tres días para poder estar junto a su Maestro. Fue un
                momento muy duro para él ya que Li estaba muy delicado, pero lo reconforta haber podido
                agradecerle personalmente por todo el conocimiento transmitido. A los 10 días que Fabian
                regresa a la Argentina, recibe la lamentable noticia que su Maestro Li había fallecido.
            </p>
            <p>
                Luego de este triste acontecimiento, comienza un debate en Brasil por quien seria el
                sucesor del estilo, ya que el Maestro Li no nombró a un representante oficial. No obstante
                Fabian continua para adelante, enseñando los estilos de Hung Gar y Wing Chun, siempre
                apoyado por sus alumnos, en quienes el siempre sintió el contante motor para seguir
                y no bajar los brazos.
            </p>
            <p>
                Hoy día Sifu Fabian continua en contacto con alumnos de Li Hon Ki en Brasil,
                sin detener su aprendizaje de Wing Chun.
            </p>
        `,
        photo: sifuFace,
        places: [kwoonCentral],
        activities: [hungGar, wingChun],
    },
    {
        instructorId: 'prof-maxi-gomez',
        name: 'Profesor Maximiliano Gómez',
        yearsOfPractice: 30,
        bio: '',
        photo: empty,
        places: [kwoonCentral],
        activities: [sanda],
    },
    {
        instructorId: 'prof-walter-mansilla',
        name: 'Profesor Walter Mansilla',
        yearsOfPractice: 20,
        bio: '',
        photo: empty,
        places: [kwoonCentral],
        activities: [hungGar],
    },
    {
        instructorId: 'prof-nahuel-campanari',
        name: 'Profesor Nahuel Campanari',
        yearsOfPractice: 20,
        bio: '',
        photo: empty,
        places: [filialComarcaAndina],
        activities: [hungGar],
    },
    {
        instructorId: 'instructor-jose-luis-cb',
        name: 'Instructor José Luis Cristaldo Bustamante',
        yearsOfPractice: 10,
        bio: `
            Acerca de mí: 
            <p>Comencé a practicar el estilo Hung Kuen el 12 de Noviembre de 2014, procurando un arte marcial que me posibilitara estar en forma, e inspirado por las películas de la serie "Érase una vez en China" de Jet Li y demás de Shaw Brothers.</p>
            <p>Con nueve años ya de práctica, llevo cuatro impartiendo clases en el turno Niños en el Kwoon Central y un año en turno mixto (niños y adultos) en turno nocturno a mi cargo en Iluminarte.</p>
            <p>Por otra parte, participé en torneos desde 2017, obteniendo en tal año el Primer puesto tanto en formas de manos (Gung Ji Foo Hoo Kuen) como de armas (Kunlun Gim) en el torneo Garra de Águila, reiterando la participación en 2022, obteniendo asimismo idénticos puestos en formas de manos (Foo Hook Seung Yin Kuen) cuanto en forma de armas (Kunlun Gim), y participando a su vez en 2023 en los Juegos CREAR en categoría mayores de 41 años, con forma de manos Lau Xing Kuen y forma de armas Kunlun Gim.
            <p>Cabe señalar que en el ámbito profesional me desempeño como abogado egresado de la Universidad Nacional de Rosario desde Agosto de 2015 en las áreas civil, comercial y laboral.</p>
            <p>Doy clases de Hung Gar para niños los días martes y jueves de 18:00hs a 19:00hs en el <a href="/filiales/kwoon-central">Kwoon Central</a>.</p>
        `,
        photo: joseFace,
        places: [kwoonCentral, filialRosarioZonaSur],
        activities: [hungGar],
    },
    {
        instructorId: 'instructor-ignacio-bruvera',
        name: 'Instructor Ignacio Bruvera',
        yearsOfPractice: 10,
        bio: '',
        photo: empty,
        places: [filialLaPlata],
        activities: [hungGar],
    },
];

export const centralKwoonSchedule = [
    {
        day: 'Lunes',
        timeIn: '08:00',
        timeOut: '09:00',
        name: 'Funcional (Paula)',
        type: 'funcional',
    },
    {
        day: 'Miércoles',
        timeIn: '08:00',
        timeOut: '09:00',
        name: 'Funcional (Paula)',
        type: 'funcional',
    },
    {
        day: 'Viernes',
        timeIn: '08:00',
        timeOut: '09:00',
        name: 'Funcional (Paula)',
        type: 'funcional',
    },

    {
        day: 'Lunes',
        timeIn: '09:30',
        timeOut: '10:30',
        name: 'Wing Chun (Manuel)',
        type: 'wing-chun',
    },
    {
        day: 'Viernes',
        timeIn: '09:30',
        timeOut: '10:30',
        name: 'Wing Chun (Manuel)',
        type: 'wing-chun',
    },
    {
        day: 'Lunes',
        timeIn: '10:30',
        timeOut: '11:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Miércoles',
        timeIn: '10:30',
        timeOut: '11:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Viernes',
        timeIn: '10:30',
        timeOut: '11:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Martes',
        timeIn: '15:00',
        timeOut: '16:00',
        name: 'Wing Chun (Tadeo)',
        type: 'wing-chun',
    },
    {
        day: 'Jueves',
        timeIn: '15:00',
        timeOut: '16:00',
        name: 'Wing Chun (Tadeo)',
        type: 'wing-chun',
    },
    {
        day: 'Lunes',
        timeIn: '16:30',
        timeOut: '17:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Miércoles',
        timeIn: '16:30',
        timeOut: '17:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Viernes',
        timeIn: '16:30',
        timeOut: '17:30',
        name: 'Hung Gar (José)',
        type: 'hung-gar',
    },
    {
        day: 'Lunes',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Wing Chun',
        type: 'wing-chun',
    },
    {
        day: 'Miércoles',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Wing Chun',
        type: 'wing-chun',
    },
    {
        day: 'Sábado',
        timeIn: '10:30',
        timeOut: '12:00',
        name: 'Wing Chun',
        type: 'wing-chun',
    },
    {
        day: 'Lunes',
        timeIn: '17:45',
        timeOut: '19:00',
        name: 'Sanda',
        type: 'sanda',
    },
    {
        day: 'Miércoles',
        timeIn: '17:45',
        timeOut: '19:00',
        name: 'Sanda',
        type: 'sanda',
    },
    {
        day: 'Viernes',
        timeIn: '17:45',
        timeOut: '19:00',
        name: 'Sanda',
        type: 'sanda',
    },
    {
        day: 'Martes',
        timeIn: '18:00',
        timeOut: '19:00',
        name: 'Hung Gar Niños',
        type: 'hung-gar',
    },
    {
        day: 'Jueves',
        timeIn: '18:00',
        timeOut: '19:00',
        name: 'Hung Gar Niños',
        type: 'hung-gar',
    },
    {
        day: 'Martes',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Hung Gar',
        type: 'hung-gar',
    },
    {
        day: 'Jueves',
        timeIn: '19:00',
        timeOut: '20:30',
        name: 'Hung Gar',
        type: 'hung-gar',
    },
];

export const filialSurSchedule = [
    {
        day: 'Lunes',
        timeIn: '20:30',
        timeOut: '21:30',
        name: 'Hung Gar Adultos / Niños',
        type: 'hung-gar',
    },
    {
        day: 'Miércoles',
        timeIn: '20:30',
        timeOut: '21:30',
        name: 'Hung Gar Adultos / Niños',
        type: 'hung-gar',
    },
    {
        day: 'Viernes',
        timeIn: '20:30',
        timeOut: '21:30',
        name: 'Hung Gar Adultos / Niños',
        type: 'hung-gar',
    },
];

export const filialComarcaAndinaSchedule = [];

export const filialLaPlataSchedule = [];

export const schedules = {
    'kwoon-central': centralKwoonSchedule,
    'filial-la-plata': filialLaPlataSchedule,
    'filial-comarca-andina': filialComarcaAndinaSchedule,
    'filial-rosario-zona-sur': filialSurSchedule,
}
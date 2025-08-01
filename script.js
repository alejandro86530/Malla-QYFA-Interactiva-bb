document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DATOS DE LA CARRERA ---
    // Aquí definimos todas las asignaturas, sus semestres, y lo más importante,
    // sus requisitos. Cada 'id' debe ser único.
    const ramosData = [
        // Semestre 1
        { id: 'matematica', nombre: 'Matemática', semestre: 1, requisitos: [] },
        { id: 'intro-cs-farmaceuticas', nombre: 'Introducción a las Ciencias Farmaceuticas', semestre: 1, requisitos: [] },
        { id: 'psicologia-general', nombre: 'Psicologia General', semestre: 1, requisitos: [] },
        { id: 'quimica-general', nombre: 'Química General', semestre: 1, requisitos: [] },
        { id: 'lab-quimica-general', nombre: 'Laboratorio de Quimica General', semestre: 1, requisitos: [] },
        { id: 'biologia-celular', nombre: 'Biologia Celular', semestre: 1, requisitos: [] },

        // Semestre 2
        { id: 'anatomia-humana', nombre: 'Anatomía Humana', semestre: 2, requisitos: [] },
        { id: 'estadistica', nombre: 'Estadística', semestre: 2, requisitos: ['matematica'] },
        { id: 'intro-fisica', nombre: 'Introducción a la Física', semestre: 2, requisitos: ['matematica'] },
        { id: 'quimica-organica', nombre: 'Química Orgánica', semestre: 2, requisitos: ['quimica-general', 'lab-quimica-general'] },
        { id: 'lab-quimica-organica', nombre: 'Laboratorio de Química Orgánica', semestre: 2, requisitos: ['quimica-general', 'lab-quimica-general'] },
        { id: 'quimica-inorganica', nombre: 'Química Inorgánica', semestre: 2, requisitos: ['quimica-general', 'lab-quimica-general'] },
        { id: 'lab-quimica-inorganica', nombre: 'Laboratorio de Química Inorgánica', semestre: 2, requisitos: ['quimica-general', 'lab-quimica-general'] },

        // Semestre 3
        { id: 'calculo', nombre: 'Calculo', semestre: 3, requisitos: ['matematica'] },
        { id: 'fisiologia-humana', nombre: 'Fisiologia Humana', semestre: 3, requisitos: ['biologia-celular', 'anatomia-humana'] },
        { id: 'quimica-analitica', nombre: 'Quimica Analitica Cuanti-Cualitativa', semestre: 3, requisitos: ['quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'lab-quimica-analitica', nombre: 'Laboratorio de Quimica Analitica Cuanti-Cualitativa', semestre: 3, requisitos: ['quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'quimica-organica-avanzada', nombre: 'Quimica Organica Avanzada', semestre: 3, requisitos: ['quimica-organica', 'lab-quimica-organica'] },
        { id: 'lab-quimica-organica-avanzada', nombre: 'Laboratorio de Quimica Organica Avanzada', semestre: 3, requisitos: ['quimica-organica', 'lab-quimica-organica'] },
        { id: 'epidemiologia', nombre: 'Epidemiologia y Salud Pública', semestre: 3, requisitos: ['estadistica'] },
        { id: 'formacion-integral-1', nombre: 'Formación Integral', semestre: 3, requisitos: [] },
        
        // Semestre 4
        { id: 'fisiopatologia', nombre: 'Fisiopatología', semestre: 4, requisitos: ['fisiologia-humana'] },
        { id: 'fisicoquimica', nombre: 'Fisicoquímica', semestre: 4, requisitos: ['intro-fisica', 'calculo', 'quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'lab-fisicoquimica', nombre: 'Laboratorio de Fisicoquímica', semestre: 4, requisitos: ['intro-fisica', 'calculo', 'quimica-inorganica', 'lab-quimica-inorganica'] },
        { id: 'analisis-instrumental', nombre: 'Analisis Químico Instrumental', semestre: 4, requisitos: ['quimica-analitica', 'lab-quimica-analitica'] },
        { id: 'lab-analisis-instrumental', nombre: 'Laboratorio de Analisis Químico Instrumental', semestre: 4, requisitos: ['quimica-analitica', 'lab-quimica-analitica'] },
        { id: 'farmacognosia', nombre: 'Farmacognosia y Fitoterapia', semestre: 4, requisitos: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
        { id: 'microbiologia-general', nombre: 'Microbiología General', semestre: 4, requisitos: ['biologia-celular', 'quimica-organica', 'lab-quimica-organica'] },
        { id: 'formacion-integral-2', nombre: 'Formación Integral 2', semestre: 4, requisitos: [] },

        // Semestre 5
        { id: 'farmacologia-1', nombre: 'Farmacología 1', semestre: 5, requisitos: ['fisiopatologia', 'microbiologia-general'] },
        { id: 'bioquimica-general', nombre: 'Bioquímica General', semestre: 5, requisitos: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
        { id: 'lab-bioquimica-general', nombre: 'Laboratorio de Bioquímica General', semestre: 5, requisitos: ['biologia-celular', 'quimica-organica-avanzada', 'lab-quimica-organica-avanzada'] },
        { id: 'tecnologia-farmaceutica-1', nombre: 'Tecnologia Farmaceutica 1', semestre: 5, requisitos: ['fisicoquimica', 'lab-fisicoquimica', 'analisis-instrumental', 'lab-analisis-instrumental'] },
        { id: 'farmacoquimica-1', nombre: 'Farmaco química 1', semestre: 5, requisitos: ['farmacognosia', 'fisiopatologia', 'analisis-instrumental', 'lab-analisis-instrumental'] },
        { id: 'analisis-evidencia-1', nombre: 'Analisis de la Evidencia Cientifica 1', semestre: 5, requisitos: ['farmacognosia', 'fisiopatologia'] },
        { id: 'formacion-integral-3', nombre: 'Formación Integral 3', semestre: 5, requisitos: [] },

        // Semestre 6
        { id: 'farmacologia-2', nombre: 'Farmacología 2', semestre: 6, requisitos: ['farmacologia-1'] },
        { id: 'tecnologia-farmaceutica-2', nombre: 'Tecnologia Farmaceutica 2', semestre: 6, requisitos: ['tecnologia-farmaceutica-1'] },
        { id: 'farmacoquimica-2', nombre: 'Farmacoquímica 2', semestre: 6, requisitos: ['farmacoquimica-1'] },
        { id: 'analisis-evidencia-2', nombre: 'Analisis de la Evidencia Cientifica 2', semestre: 6, requisitos: ['analisis-evidencia-1'] },
        { id: 'bioquimica-clinica', nombre: 'Bioquímica Clínica', semestre: 6, requisitos: ['microbiologia-general', 'bioquimica-general', 'lab-bioquimica-general'] },
        
        // Semestre Verano
        { id: 'practica-primaria', nombre: 'Práctica Atención Primaria', semestre: 'Verano 1', requisitos: ['farmacologia-2', 'farmacognosia', 'analisis-evidencia-2'] },
        
        // Semestre 7
        { id: 'farmacocinetica-clinica', nombre: 'Farmacocinetica Clínica', semestre: 7, requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
        { id: 'nutricion-clinica', nombre: 'Nutrición Clinica', semestre: 7, requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
        { id: 'tecnologia-cosmetica', nombre: 'Tecnologia Cosmética', semestre: 7, requisitos: ['tecnologia-farmaceutica-2'] },
        { id: 'toxicologia', nombre: 'Toxicología', semestre: 7, requisitos: ['farmacologia-2', 'bioquimica-clinica'] },
        { id: 'farmacia-clinica-1', nombre: 'Farmacia Clínica 1', semestre: 7, requisitos: ['farmacologia-2', 'bioquimica-clinica'] },

        // Semestre 8
        { id: 'farmacia-asistencial', nombre: 'Farmacia Asistencial', semestre: 8, requisitos: ['farmacologia-2', 'analisis-evidencia-2'] },
        { id: 'bioequivalencia', nombre: 'Bioequivalencia', semestre: 8, requisitos: ['farmacocinetica-clinica', 'tecnologia-cosmetica'] },
        { id: 'control-calidad', nombre: 'Control de Calidad y Procesos', semestre: 8, requisitos: ['tecnologia-cosmetica'] },
        { id: 'admin-gestion', nombre: 'Administración y Gestión Farmaceutica', semestre: 8, requisitos: ['practica-primaria'] },
        { id: 'farmacia-clinica-2', nombre: 'Farmacia Clínica 2', semestre: 8, requisitos: ['nutricion-clinica', 'farmacia-clinica-1'] },
        
        // Hito Licenciatura
        { id: 'licenciatura', nombre: 'Obtención Licenciatura en Ciencias Farmacéuticas', semestre: 8, esHito: true, requisitos: [/* Se llenará dinámicamente */] },

        // Semestre Verano 2
        { id: 'practica-comunitaria', nombre: 'Práctica Farmacia Comunitaria', semestre: 'Verano 2', requisitos: ['farmacoquimica-2', 'admin-gestion', 'toxicologia'] },
        
        // Semestre 9
        { id: 'internado-asistencial', nombre: 'Internado en Farmacia Asistencial', semestre: 9, requisitos: ['licenciatura'] },
        { id: 'aseguramiento-calidad', nombre: 'Aseguramiento y Gestión de Calidad', semestre: 9, requisitos: ['control-calidad'] },
        { id: 'farmacovigilancia', nombre: 'Farmacovigilancia y Atención Farmacéutica', semestre: 9, requisitos: ['toxicologia', 'farmacia-clinica-2'] },
        { id: 'legislacion-farmaceutica', nombre: 'Legislación Farmacéutica y Bioética', semestre: 9, requisitos: ['practica-comunitaria'] },
        { id: 'seminario-titulo-1', nombre: 'Seminario de Título', semestre: 9, requisitos: ['licenciatura'] },

        // Semestre 10
        { id: 'internado-final', nombre: 'Internado: Farmacía Clínica o Industria', semestre: 10, requisitos: ['licenciatura'] },
        { id: 'seminario-titulo-2', nombre: 'Seminario de Título', semestre: 10, requisitos: ['licenciatura'] },

        // Hito Final
        { id: 'titulo-profesional', nombre: 'Obtención Título Profesional de Química Farmacéutica', semestre: 10, esHito: true, requisitos: [/* Se llenará dinámicamente */] },
    ];
    
    // --- Llenado dinámico de requisitos para hitos ---
    const hitoLicenciatura = ramosData.find(r => r.id === 'licenciatura');
    hitoLicenciatura.requisitos = ramosData
        .filter(r => r.semestre <= 8 && !r.esHito)
        .map(r => r.id);

    const hitoTitulo = ramosData.find(r => r.id === 'titulo-profesional');
    hitoTitulo.requisitos = ramosData
        .filter(r => r.id !== 'titulo-profesional')
        .map(r => r.id);


    const mallaContainer = document.getElementById('malla-curricular');
    const notificacionContainer = document.getElementById('notificacion-container');
    const aprobadosStorageKey = 'ramosAprobadosQF';
    const mensajesExito = ["¡Felicidades!", "¡Eres seca!", "¡Un paso más cerca!", "¡Sigue así!", "¡Cada día te superas más!", "¡Ya falta poquito!", "¡Excelente trabajo!"];

    // --- 2. RENDERIZACIÓN DE LA MALLA ---
    // Crea las columnas de semestres y los ramos dentro de ellas.
    function crearMalla() {
        // Obtenemos una lista única de semestres en orden.
        const semestres = [...new Set(ramosData.map(r => r.semestre))];
        
        semestres.forEach(numSemestre => {
            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre';
            
            const semestreTitulo = document.createElement('h2');
            semestreTitulo.textContent = `Semestre ${numSemestre}`;
            if (String(numSemestre).includes('Verano')) {
                semestreTitulo.textContent = numSemestre.replace(' 1', '').replace(' 2', ' ');
            }
            semestreDiv.appendChild(semestreTitulo);

            const listaRamos = document.createElement('ul');
            
            // Filtramos los ramos que pertenecen a este semestre
            ramosData
                .filter(ramo => ramo.semestre === numSemestre)
                .forEach(ramo => {
                    const ramoLi = document.createElement('li');
                    ramoLi.className = 'ramo';
                    if (ramo.esHito) {
                        ramoLi.classList.add('hito');
                    }
                    ramoLi.textContent = ramo.nombre;
                    ramoLi.dataset.id = ramo.id; // Usamos data-id para identificar el ramo
                    listaRamos.appendChild(ramoLi);
                });
            
            semestreDiv.appendChild(listaRamos);
            mallaContainer.appendChild(semestreDiv);
        });
    }

    // --- 3. LÓGICA DE ESTADO (APROBADO/BLOQUEADO) ---

    // Maneja el click en un ramo
    function handleRamoClick(e) {
        if (!e.target.classList.contains('ramo')) return;

        const ramoLi = e.target;
        const ramoId = ramoLi.dataset.id;
        const ramoData = ramosData.find(r => r.id === ramoId);
        const estaAprobado = ramoLi.classList.contains('aprobado');

        // Si ya está aprobado, permitimos "des-aprobarlo"
        if (estaAprobado) {
            ramoLi.classList.remove('aprobado');
            mostrarNotificacion(`${ramoData.nombre} marcado como pendiente.`, 'error');
        } else {
            // Verificar requisitos antes de aprobar
            const requisitosFaltantes = verificarRequisitos(ramoData);

            if (requisitosFaltantes.length > 0) {
                const nombresRamosFaltantes = requisitosFaltantes
                    .map(id => ramosData.find(r => r.id === id).nombre)
                    .join(', ');
                mostrarNotificacion(`Requisitos pendientes para ${ramoData.nombre}: ${nombresRamosFaltantes}`, 'error');
                return;
            }

            ramoLi.classList.add('aprobado');
            const mensajeAleatorio = mensajesExito[Math.floor(Math.random() * mensajesExito.length)];
            mostrarNotificacion(`${ramoData.nombre} aprobado. ${mensajeAleatorio}`, 'exito');
        }

        // Después de cualquier cambio, actualizamos el estado visual de todos los ramos y guardamos
        actualizarEstadoVisualRamos();
        guardarEstado();
    }
    
    // Verifica si todos los requisitos de un ramo están cumplidos
    function verificarRequisitos(ramo) {
        const aprobados = obtenerAprobados();
        return ramo.requisitos.filter(reqId => !aprobados.includes(reqId));
    }

    // Actualiza la clase 'bloqueado' en todos los ramos según los aprobados actuales
    function actualizarEstadoVisualRamos() {
        const aprobados = obtenerAprobados();
        document.querySelectorAll('.ramo').forEach(ramoLi => {
            if (ramoLi.classList.contains('aprobado')) {
                ramoLi.classList.remove('bloqueado');
                return;
            }

            const ramoId = ramoLi.dataset.id;
            const ramoData = ramosData.find(r => r.id === ramoId);
            const requisitosFaltantes = verificarRequisitos(ramoData);
            
            if (requisitosFaltantes.length > 0) {
                ramoLi.classList.add('bloqueado');
            } else {
                ramoLi.classList.remove('bloqueado');
            }
        });
    }

    // --- 4. PERSISTENCIA DE DATOS (LocalStorage) ---

    function guardarEstado() {
        const aprobados = obtenerAprobados();
        localStorage.setItem(aprobadosStorageKey, JSON.stringify(aprobados));
    }

    function cargarEstado() {
        const aprobados = JSON.parse(localStorage.getItem(aprobadosStorageKey)) || [];
        aprobados.forEach(ramoId => {
            const ramoLi = document.querySelector(`.ramo[data-id="${ramoId}"]`);
            if (ramoLi) {
                ramoLi.classList.add('aprobado');
            }
        });
    }

    // Devuelve un array con los IDs de todos los ramos aprobados
    function obtenerAprobados() {
        const aprobados = [];
        document.querySelectorAll('.ramo.aprobado').forEach(ramoLi => {
            aprobados.push(ramoLi.dataset.id);
        });
        return aprobados;
    }

    // --- 5. NOTIFICACIONES ---
    function mostrarNotificacion(mensaje, tipo = 'exito') {
        const notificacion = document.createElement('div');
        notificacion.className = `notificacion ${tipo}`;
        notificacion.textContent = mensaje;
        notificacionContainer.appendChild(notificacion);

        // La notificación se elimina sola después de 5 segundos
        setTimeout(() => {
            notificacion.style.animation = 'none'; // Previene re-animación
            notificacion.remove();
        }, 5000);
    }

    // --- 6. INICIALIZACIÓN ---
    crearMalla();
    cargarEstado();
    actualizarEstadoVisualRamos();
    mallaContainer.addEventListener('click', handleRamoClick);
});

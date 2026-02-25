# huhugerman-mvp-notes

> **"México = laboratorio para el error. Alemania = puede ser la exclusión."**

**Estado:** CONCEPTO ARCHIVADO · Pre-implementación · Artefacto de diseño  
**Propósito:** Documentación del contrato MVP y PRD del método huhuGERMAN como PWA  
**Período:** 2024 · Antes de la implementación en portal web

---

## Por qué existe este repositorio

Este repositorio no contiene una aplicación terminada. Contiene la **documentación de diseño que precedió a la implementación**: el contrato MVP, el PRD y la descomposición del sistema. 

Su valor no es el código — es mostrar que un sistema bien definido empieza por saber exactamente qué no va a hacer.

Este es el momento en que el método huhuGERMAN pasó de ser una práctica pedagógica documentada en papel a ser un sistema con contratos formales.

---

## El método HUHU: de la pedagogía al sistema

El método huhuGERMAN introduce contenido documental auténtico alemán (Y-Kollektiv, funk/ARD) desde el nivel A1 — desafiando el consenso del campo que recomienda posponer materiales auténticos hasta el nivel post-A2.

La hipótesis central: los estudiantes pueden desarrollar **comprensión global** de contenido auténtico antes de tener **comprensión selectiva**. Lo que bloquea no es el nivel, es la ausencia de andamiaje metacognitivo.

El método estructura cada sesión en cuatro pilares:

```
H — Hochdeutsch      : 2-4 frases clave del registro formal
U — Umgangssprache   : 1-2 variantes del habla cotidiana real
H — Halt!            : Pausa para normalización del error + insight cultural
U — Übung            : Un ejercicio interactivo (determinístico, no IA)
```

Este repositorio fue el primer intento de convertir esos cuatro pilares en un sistema de software.

---

## El contrato MVP: lo que nunca se negoció

La decisión más importante del diseño no fue técnica — fue la lista de lo que **no entraría** en V1:

**Explícitamente fuera de alcance:**
- Gamificación (streaks, puntos, badges, presión)
- Evaluación punitiva de cualquier tipo
- Input de audio / reconocimiento de voz
- Dashboards de profesor
- Funciones sociales o uploads de comunidad
- Calendario de lecciones
- Notificaciones

**Por qué importa esta lista:** En EdTech, la presión del mercado empuja hacia la gamificación. Cada feature de presión (streak, penalización por días perdidos) contradice la hipótesis pedagógica central del método: que la baja fricción y la normalización del error producen mayor retención que la presión externa.

Un PRD que sabe qué no va a hacer es más maduro que uno que lista todo lo que podría hacer.

---

## Invariantes técnicas (no negociables)

```typescript
// mvp-contract.md — Principios técnicos

const MVPInvariants = {
  deterministicFeedback: 
    "Every exercise must have a clear right/wrong answer. No AI-generated feedback.",
  
  offlineFirst: 
    "All core content and functionality must work without internet connection.",
  
  microFormat: 
    "Activities must be completable in under 5 minutes.",
  
  noAudioInput: 
    "No speech recognition or recording in V1.",
  
  nativeTTS: 
    "Audio via Web Speech API. Accept that offline voices may sound robotic. " +
    "Calculated trade-off for offline reliability."
};
```

**Nota sobre feedback determinístico:** En la versión posterior del portal (ver `cse-student-portal-german-edu`), se integró IA para feedback de escritura libre. Pero esa integración vino después, con el dominio pedagógico como control. El MVP no incluía IA precisamente para no introducir ambigüedad antes de tener el dominio formalizado.

---

## Los tipos del sistema: el modelo de datos del método

```typescript
// models/types.ts — El corazón tipado del método HUHU

interface Lesson {
  id: string;           // "lesson-01-greeting"
  title: string;
  order: number;        // Secuencia determinística
  
  // Los 4 pilares tipados como contratos
  hochdeutsch: HochdeutschSection;
  umgangssprache: UmgangsspracheSection;
  halt: HaltSection;
  uebung: ExerciseSection;  // MultipleChoice | FillInBlank
}
```

El tipo `ExerciseSection` usa **union discriminada** — no hay ejercicios ambiguos. Cada tipo de ejercicio tiene su contrato completo, incluyendo el array de respuestas correctas (para permitir variantes ortográficas aceptables).

Esto es DDD aplicado al modelo pedagógico antes de que el proyecto supiera que estaba aplicando DDD.

---

## La descomposición del sistema

El documento `system-decomposition.md` definió 8 módulos con responsabilidades explícitas:

| Módulo | Responsabilidad | Lo que NO hace |
|--------|----------------|----------------|
| Auth Module | Identidad vía Firebase | Autenticación custom |
| Data Service | Carga de lecciones + progreso | Caching custom (usa Firebase SDK) |
| Progress Manager | "¿Cuál es la siguiente lección?" | Nada más |
| Navigation Controller | Routing + guards | Lógica de negocio |
| Lesson Renderer | JSON → UI HUHU | Evaluación de ejercicios |
| Exercise Evaluator | Validación determinística | Side effects |
| TTS Service | Wrapper de Web Speech API | Voices online |
| Taro Display Controller | Mostrar/ocultar mascota | Diálogo con el estudiante |

La columna "Lo que NO hace" es tan importante como la de responsabilidad. Módulos sin límites explícitos se convierten en God Objects.

---

## Por qué este MVP no se implementó como PWA

El concepto original era una PWA con Firebase. La implementación real evolucionó hacia un portal web Astro + Supabase. Las razones:

1. El contexto real de los estudiantes (UAM, entrega asíncrona de actividades escritas) requería feedback de IA en texto libre — no ejercicios determinísticos
2. La necesidad de persistencia de submissions para auditoría académica
3. La integración con Google Forms existente (etapa intermedia)

El MVP como PWA habría sido correcto para el producto consumer (aprendizaje autónomo). El portal web fue correcto para el contexto universitario con evaluación formativa.

**La lección:** Un contrato MVP bien escrito también sirve cuando decides no implementarlo exactamente así, porque te obliga a articular por qué estás desviándote.

---

## Conexión con el método huhuGERMAN (investigación académica)

Este repositorio conecta con una trayectoria de investigación que comenzó en 2015 con la primera aplicación de estrategias metacognitivas de Vandergrift en CELE-UNAM, documentada en tesis de Licenciatura en Letras Alemanas (UNAM, 2015).

El método huhuGERMAN (documentado desde 2017 en *Revista Digital Universitaria UNAM*, Vol. 18 No. 5) constituye la intervención pedagógica en producción. Este repositorio es el artefacto técnico que inicia su implementación como sistema.

Target de publicación académica: *Die Unterrichtspraxis/Teaching German* (2026) → *Language Teaching Research* → *System* (Elsevier, Q1).

---

## Repositorios relacionados

→ **[feature/dynamic-lessons](https://github.com/yassergandhi/huhugerman)** — Implementación con dominio pedagógico  
→ **[cse-student-portal-german-edu](https://github.com/yassergandhi/cse-student-portal-german-edu)** — Portal estudiantil  
→ **[huhugerman.com](https://huhugerman.com)** — Plataforma en producción

---

## Sobre el autor

Yasser Gandhi Hernández Esquivel — Learning Systems Architect · AI-Driven Instructional Designer · German Language Expert C1. 15 años enseñando alemán en CELEX-UAM Azcapotzalco y FCPyS UNAM. Investigación de campo en Universität Hamburg (2019).

→ [yassergandhi.dev](https://yassergandhi.dev) · [LinkedIn](https://linkedin.com/in/yassergandhi)

---

*Licencia: Uso educativo. Todos los derechos reservados.*

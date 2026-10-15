---
tema: Angular
asignatura: PMDM
tags: [angular, componentes, data-binding]
---

# Angular: introducción, componentes y data binding

## 1. Comandos básicos de Angular CLI

| Comando | Qué hace |
|---|---|
| `ng new hola-mundo` | Crea un proyecto nuevo con toda la estructura inicial |
| `ng serve` | Arranca el servidor de desarrollo (por defecto en `http://localhost:4200`) |
| `ng serve -o` | Igual, pero además **abre el navegador** automáticamente (`-o` = `--open`) |
| `ng generate component car` | Genera un componente |
| `ng g c car` | Lo mismo, abreviado (`g` = generate, `c` = component) |
| `ng g c components/car-list --skip-tests` | Lo crea dentro de la carpeta `components/` y **sin** el fichero de tests (`.spec.ts`) |

> [!tip] Profundiza
> `ng g c` crea una carpeta con 3 ficheros (4 si no usas `--skip-tests`):
> - `car-list.ts` → la clase (lógica)
> - `car-list.html` → la plantilla (vista)
> - `car-list.css` → los estilos, solo afectan a ese componente
> - `car-list.spec.ts` → los tests unitarios

---

## 2. Dependencias y repositorio

- **`node_modules/`** contiene todas las librerías que usa el proyecto (Angular incluido).
- `rm -rf node_modules` borra esa carpeta. El proyecto **deja de funcionar** porque le faltan las librerías.
- `npm install`, ejecutado en la **raíz del proyecto**, las vuelve a descargar. Lee la lista de dependencias del **`package.json`**, y las versiones exactas del `package-lock.json`.
- Los ficheros compilados (`dist/`) y `node_modules/` **no se suben al repositorio**. Ya vienen excluidos en el `.gitignore` que genera `ng new`.

> [!tip] Profundiza
> No se suben porque pesan mucho y se pueden regenerar en cualquier momento: `npm install` para las dependencias y `ng build` para el compilado. Al repo solo va el código fuente y el `package.json`, que es la "receta".

---

## 3. Arranque de la aplicación

- **`main.ts`** es el punto de entrada: es lo primero que se ejecuta. Arranca la app con `bootstrapApplication(App, appConfig)`.
- **`App`** es el **componente raíz** (el inicial), formado por `app.ts` + `app.html` + `app.css`.

> [!warning] Corrección
> En el apunte ponía "app.html es el componente inicial". El componente inicial es **`App`**. `app.html` es solo su **plantilla**: un componente es la clase `.ts` más su HTML y su CSS.

Jerarquía del ejemplo de clase:

```
App  →  CarList  →  CarItem
(raíz)  (carga la lista)  (pinta un coche)
```

---

## 4. Componentes

- Un componente es una **unidad de la interfaz** que se encarga de una parte concreta: una barra de herramientas, una lista, una tarjeta...
- Se pueden **reutilizar**: el mismo componente se usa tantas veces como quieras.
- Se pueden **anidar**: un componente puede contener otros dentro de su HTML.

### Anatomía de un componente

```ts
import { Component, signal } from '@angular/core';
import { Toolbar } from './components/toolbar/toolbar';
import { CarItem } from './components/car-item/car-item';

@Component({
  imports: [Toolbar, CarItem],   // componentes que uso en MI html
  selector: 'app-root',          // nombre de la etiqueta
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hello-world');
}
```

- **`selector`**: el nombre con el que uso el componente en el HTML. Con `selector: 'app-car-list'` lo pinto con `<app-car-list></app-car-list>`.
- **`imports`**: **hay que importar los componentes que voy a usar en la plantilla**. Si no, Angular no reconoce la etiqueta y da error.

> [!tip] Profundiza
> - Si importas un componente y **no** lo usas en el HTML, Angular avisa con el warning `NG8113: X is not used within the template`. No rompe nada, pero conviene quitarlo.
> - `signal('hello-world')` crea un valor reactivo. En la plantilla se lee **llamándolo como función**: `{{ title() }}`.

### Módulos

- Antes, Angular agrupaba los componentes en **módulos** (`NgModule`): una "aglutinación" de componentes.

> [!warning] Matiz
> Es correcto como concepto, pero en el Angular actual los componentes son **standalone** por defecto y **ya no se usan módulos**. Cada componente declara lo que necesita en su propio `imports`, como en el ejemplo de arriba. Te los encontrarás en proyectos antiguos.

---

## 5. Interfaces y datos

Una interfaz define la **forma** que tiene que tener un objeto (qué campos y de qué tipo). Va en su propio fichero, por ejemplo `interfaces/car.interface.ts`:

```ts
export interface Car {
  name: string;
  flag: string;
  area: number;
  population: number;
}
```

En el componente se crea la lista **fuera de la clase** y luego se asigna a una propiedad:

```ts
const CARS: Car[] = [
  { name: 'Russia', flag: 'f/f3/Flag_of_Russia.svg', area: 17075200, population: 146989754 },
  { name: 'Canada', flag: 'c/cf/Flag_of_Canada.svg', area: 9976140, population: 36624199 },
];

export class CarList {
  carList = CARS;
}
```

> [!warning] Errores en lo de clase (ojo al copiarlo)
> - A la interfaz le faltaba **`export`**. Sin él no se puede importar desde otro fichero.
> - La interfaz tenía `brand`, `model` y `urlP`, pero los datos usan `name`, `flag` y `area`. **Los campos tienen que coincidir** o TypeScript da error.
> - `const` **no se puede escribir dentro de una clase**. Va fuera (arriba del todo) o se pone como propiedad sin `const`.

---

## 6. Data binding (enlace de datos)

**Data binding** (o template binding) es cómo se comunican la **clase** (`.ts`) y la **plantilla** (`.html`).

| Tipo | Sintaxis | Dirección | Ejemplo |
|---|---|---|---|
| Interpolación | `{{ }}` | clase → vista | `{{ title }}` |
| Property binding | `[ ]` | clase → vista | `[class]="titleColor"` |
| Event binding | `( )` | vista → clase | `(click)="changeColorTitle()"` |

> [!warning] Corrección
> En el apunte ponía "propiedades con paréntesis, elementos con corchetes". Es **al revés**:
> - **Corchetes `[ ]` → propiedades**: meten un valor de la clase en una propiedad del HTML.
> - **Paréntesis `( )` → eventos**: cuando pasa algo en el HTML, llaman a un método de la clase.

### Interpolación (sintaxis moustache)

```html
<h1>{{ title }} {{ 5 + 6 }}</h1>
```
Muestra el valor de una propiedad. También **evalúa expresiones**: `{{ 5 + 6 }}` pinta `11`.

### Property binding

```html
<h1 [class]="titleColor">{{ title }}</h1>
```
Con corchetes, lo de dentro de las comillas **no es texto**: es una propiedad de la clase. Aquí la clase CSS del `h1` es lo que valga `titleColor`.

### Event binding

```html
<button (click)="changeColorTitle()">Change color title</button>
```
Hay que **definir el método** en la clase y llamarlo desde el evento. Con `(click)` solo, sin método, no hace nada.

```ts
export class CarList {
  title = 'CAR LIST ...';
  titleColor = 'title-danger';

  changeColorTitle() {
    if (this.titleColor === 'title-danger') {
      this.titleColor = 'title-success';
    } else {
      this.titleColor = 'title-danger';
    }
  }
}
```

> [!tip] Profundiza
> - En clase se usó `==`. En TypeScript usa siempre **`===`**: compara también el tipo y evita sorpresas.
> - Al cambiar `titleColor`, Angular **actualiza la vista solo**. Esa es la gracia del binding: tocas el dato y el HTML se repinta sin que tú hagas nada.
> - Truco para no liarte: `[( )]` (llamado "banana in a box") es el **two-way binding**, que combina ambas direcciones. Se verá más adelante con formularios.
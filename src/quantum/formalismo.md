---
title: 'Qubit, mathematical formalism'
imgUrl: '/post-images/qiskit.png'
youtubeId: ''
publishedAt: '2024-07-29'
summary: 'Quantic bit definition'
---

<!-- Software requirements for Third School of Quantum Computing. -->
<!-- You can see the oficcial page at https://computo-cuantico.unam.mx/ -->

## Quantic bit

Es un sistema físico con tamaño y ubicación en el espacio.
Se rige por las leyes de la física cuántica.

Poseé la cualidad que le permite estar en un estado o en ambos al mismo tiempo.

<!-- The quadratic equation $ax^2+bx+c=0$ has roots -->

Estado con cero:

```math
|0 \rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}
```

Estado con uno:

```math
|1 \rangle = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
```

Estado de superposición:

```math
|\psi \rangle = C_0 \begin{bmatrix} 1 \\ 0 \end{bmatrix}
+ C_1 \begin{bmatrix} 0 \\ 1 \end{bmatrix}
= \begin{bmatrix} C_0 \\ C_1 \end{bmatrix}
```

## Postulados de la mecánica cuántica

Toda la informacón del qubit esta contenida en un objeto matemático llamado "Vector de estado",
denotado por $|\psi \rangle$:

```math
|\psi \rangle  = \begin{bmatrix} C_0 \\ C_1 \end{bmatrix}
\begin{matrix} |0 \rangle \\ |1 \rangle \end{matrix}
\Leftarrow
\begin{matrix} vector \\ columna \end{matrix}
```

Donde $C_0$ y $C_1$ pertenecen a los números complejos:

```math
C_0, C_1 \in \mathbb{C}
```

<!--   L = \frac{1}{2} \rho v^2 S C_L -->
<!-- \begin{matrix} -->
<!-- 1 & 2 & 3\\ -->
<!-- a & b & c -->
<!-- \end{matrix} -->

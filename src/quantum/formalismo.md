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

- Es un sistema físico con tamaño y ubicación en el espacio.
- Se rige por las leyes de la física cuántica.
- Poseé la cualidad que le permite estar en un estado o en ambos al mismo tiempo.

<!-- The quadratic equation $ax^2+bx+c=0$ has roots -->

Para representar los qubits de manera cuántica se utiliza la ** notación de Dirac**, también conocida como notación **bra-ket**,
ya que nos permite escribir los vectores de forma corta.
La **base computacional** esta formada por los estados $| 0 \rangle$ y $| 1 \rangle$,
en notación de Dirac, y se pueden leer como "**ket 0**" y "**ket 1**" respectivamente.
Además, estos estados son ortogonales entre sí.

Hay que tener en cuenta que cada elemento de la **base computacional** representa un vector de estado:

```math
\begin{matrix}
\ket{0} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, &
\ket{1} = \begin{bmatrix} 0 \\ 1 \end{bmatrix}
\end{matrix}
```

Entonces, vamos a definir a un qubit como la superposición de los estados base, es decir,
podemos expresar un qubit como la **combinación líneal** de $|0 \rangle$ y $|1 \rangle$:

```math
\ket{\psi} =
\underbrace{C_0 \begin{bmatrix} 1 \\ 0 \end{bmatrix}
+ C_1 \begin{bmatrix} 0 \\ 1 \end{bmatrix}}_{\text{Estado de superposición}}
= \begin{bmatrix} C_0 \\ C_1 \end{bmatrix}
```

## Postulados de la mecánica cuántica

### Estado del sistema

Toda la informacón del qubit esta contenida en un objeto matemático llamado **Vector de estado**,
denotado por **$|\psi \rangle$**:

```math
\ket{\psi}  =
\underbrace{\begin{bmatrix} C_0 \\ C_1 \end{bmatrix}
\begin{matrix} \ket{0} \\ \ket{1} \end{matrix}}_{\text{vector columna}}
\longleftarrow
\text{Vector de estado}
```

Los **coeficientes** que acompañan a los estados $|0 \rangle$ y $|1 \rangle$ del qubit pertenecen a los números complejos:

```math
\Set{ \begin{bmatrix} C_0 \\ C_1 \end{bmatrix} | C_0, C_1 \in \mathbb{C}}
```

Usamos $C_0$ para obtener la **probabilidad** de medir 0 en el qubit cuando se encuentra en el estado $| \psi \rangle$:

```math
|C_0|² = C_0^* C_0 = Pr(0)
```

Usamos $C_1$ para obtener la **probabilidad** de medir 1 en el qubit cuando se encuentra en el estado $| \psi \rangle$:

```math
|C_1|² = C_1^* C_1 = Pr(1)
```

### Proceso de medición

En los sistemas cúanticos, las mediciones son probabilísticas:

```math
|\psi \rangle \textbf{---}\textbf{---}
\begin{matrix} \nearrow ~ \\ \searrow ~ \end{matrix}
\begin{matrix}
0~\text{con probabilidad}~Pr(0)\longleftrightarrow Pr(z=+1) \\
~ \\
1~\text{con probabilidad}~Pr(1)\longleftrightarrow Pr(z=-1)
\end{matrix}
```

La suma de las probabilidades debe dar 1. Por lo tanto:

```math
|C_0|² + |C_1|² = 1 \longleftarrow \textbf{condición de normalización}
```

Esto es equivalente a:

```math
\langle \psi | \psi \rangle = 1 \Longleftrightarrow
\underbrace{\begin{bmatrix} C_0^* & C_1^* \end{bmatrix}}_{\langle \psi |}
\underbrace{\begin{bmatrix} C_0 \\ C_1 \end{bmatrix}}_{| \psi \rangle} =
|C_0|² + |C_1|² = 1
```

<!-- No pude usar underbrace, al parecer todos los comandos under no funcionan -->
<!-- \overbrace{\begin{bmatrix} C_0^* & C_1^* \end{bmatrix}}^{\langle \psi |} -->

<!-- <span style="color:blue">some _This is Blue italic._ text</span> -->

<!--   L = \frac{1}{2} \rho v^2 S C_L -->
<!-- \begin{matrix} -->
<!-- 1 & 2 & 3\\ -->
<!-- a & b & c -->
<!-- \end{matrix} -->

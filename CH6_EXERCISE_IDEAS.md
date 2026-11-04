# Chapter 6 exercise ideas

Brainstorm recorded September 27, 2026. These are proposed exercises, not additions to the book yet. Prompts and answer sketches need a final mathematical/editorial pass before publication. Function identities below are understood where their expressions and derivatives are defined.

## First set: signatures, reconstruction, and limits of dimensional analysis

### 1. The missing clock

A temperature record T takes time in seconds and returns temperature in degrees Celsius. Can T + T′ have a consistent signature? Can T + τT′ have one? What units must the constant τ carry? Interpret T(t) + τT′(t).

**Sketch:** τ has units of time. The expression is the tangent-line estimate of temperature τ seconds later. This connects dimensional repair to an already familiar geometric idea. When writing the final exercise, distinguish temperature from temperature differences if needed for the Celsius interpretation.

### 2. Which way does the conversion factor go?

A function f accepts length in feet and returns price in dollars. Construct g accepting length in meters and returning the same price. Use c = 3.28084… feet per meter. Express g′ using f′. Should the conversion factor multiply or divide the derivative?

**Sketch:** g(x) = f(cx), g′(x) = c f′(cx). Dollars per foot becomes dollars per meter. Units settle both the factor's placement and where f′ is evaluated.

### 3. A curve with no clock showing

A particle has coordinates x:[s]→[m] and y:[s]→[m]. Its path is drawn in the xy-plane without time on either axis. Which of y′, y′/x′, x′/y′, and x′y′ could give its slope? Which candidates can units eliminate? Use a straight-line motion to distinguish the survivors.

**Sketch:** Both ratios are dimensionless. Taking x(t) = 2t and y(t) = 3t selects y′/x′. Use nonzero coordinate velocities for this comparison. Units narrow the field without uniquely identifying the answer.

### 4. Two descriptions of the same speed

A particle's position is x:[s]→[m]. Its velocity is also known as a function of position, V:[m]→[m/s], with x′ = V∘x. Express its acceleration using V, V′, and x. Check the signature.

**Sketch:** x″ = (V′∘x)x′ = (V′∘x)(V∘x). V′ has units 1/s although its input is position. Differentiating a velocity does not automatically give acceleration: the independent variable matters.

### 5. Can you recover the signatures?

Both f∘g and fg′ are dimensionally well formed, and g outputs a length. What can you deduce about the input units of f and g, and the output units of g′? Must the two displayed expressions have the same signature?

**Sketch:** Composition forces f to accept lengths. Multiplication requires g′, hence g, to have the same input units as f. Thus g takes lengths to lengths and g′ has dimensionless output. Both expressions have the same signature. Two different operations supply complementary constraints.

### 6. Guess the second derivative of a composition

Let g:[A]→[B] and f:[B]→[C]. Seek a formula for (f∘g)″, restricting the search to sums of terms of the forms

\[
(f''\circ g)(g')^p,\qquad (f'\circ g)g''(g')^q,
\]

where p and q are nonnegative integers. Determine the exponents by units, treating A, B, C as independent dimensions. Check the resulting guess using the product and chain rules.

**Sketch:** p = 2 and q = 0. The formula is (f″∘g)(g′)² + (f′∘g)g″. Units determine the exponents within the specified candidate forms; they do not determine the coefficients or prove the identity. Best as an extension.

### 7. The coefficient that units cannot find

Someone proposes (f²)′ = kff′ for a constant k. What do units tell you about k? Find k using one simple function. Does that establish the formula for all differentiable f?

**Sketch:** k is dimensionless. Choosing f(x) = x forces k = 2. It determines the only possible universal constant, not the universal identity; the product rule proves that. Separates checking dimensions, determining a candidate, and proving it.

### 8. Remove the units—and then put them back

Choose a positive reference time T and length L for a particle with position x(t). Define X(u) = x(Tu)/L. What is X's signature? Express X′ using x′, then recover the physical velocity x′(t) from X′.

**Sketch:** X:[1]→[1], X′(u) = (T/L)x′(Tu), and x′(t) = (L/T)X′(t/T). Gives the dimensionless-plane epilogue an application: dimensionless quantities can retain physical meaning.

**Possible placement:** 1, 2, 5 early; 3 and 7 near the limits of dimensional checking; 4, 6, 8 later. Do not make the main exposition depend on 6.

## Second set: true/false claims, transformations, and operators

### 9. True or false: squaring and differentiating are interchangeable

Define operators D(f) = f′ and S(f) = f². A student writes D∘S = S∘D because both sides square and differentiate. Translate each side into function notation. Can units distinguish them? Find a function on which they disagree.

**Sketch:** Outputs are (f²)′ and (f′)², with signatures [A]→[B²/A] and [A]→[B²/A²]. For f(x) = x, the outputs are 2x and 1. Introduces composition of operators through a concrete disagreement. “Commuting operators” can be named afterward.

### 10. Find an operator that commutes with differentiation

Define T_a(f)(x) = f(x+a). Does D∘T_a = T_a∘D? Explain with graphs and formulas. What units must a have? Then try R_c(f)(x) = f(cx), with c dimensionless. Does the same relation hold?

**Sketch:** Translation commutes with differentiation and a has the input units. Rescaling instead gives D(R_c(f)) = c R_c(D(f)). Moving a graph sideways preserves slopes; squeezing it horizontally changes them. Pair with 9.

### 11. True or false: the zero function has no units

Let f:[s]→[m] and g:[s]→[kg]. Both f−f and g−g return zero everywhere. Assess:

- They are the same numerical function.
- They have the same signature.
- Since the values agree, either may replace the other in any dimensionally consistent expression.

**Sketch:** The first is true on the same domain; the others need not be true under the chapter's fixed unit interpretation. Goes beyond the existing “zero pounds” observation to ask what a signature adds to a numerical function.

### 12. One transformation, two kinds of output

For two positions x₁ and x₂ in meters, define c = (x₁+x₂)/2 and d = x₂−x₁. Interpret the new coordinates and recover the old ones. Then replace d by r = x₂/x₁. Is the transformation still reversible everywhere it is defined?

**Sketch:** x₁ = c−d/2, x₂ = c+d/2. For the second map, when r≠−1 one has x₁ = 2c/(1+r), x₂ = 2cr/(1+r). But every (a,−a), a≠0, maps to (0,−1). Unit consistency does not guarantee preservation of information. No partial derivatives required.

### 13. Can you rotate a position–velocity diagram?

A diagram plots position x horizontally and velocity v vertically. Someone proposes the 45° rotation u = (x+v)/√2, w = (v−x)/√2. What goes wrong dimensionally? Repair it with a constant τ having units of time. Do different τ give the same transformation?

**Sketch:** Rotate (x,τv) instead: u = (x+τv)/√2, w = (τv−x)/√2. Both outputs have length units. Different τ give different transformations; the original rotation instruction needs a relative scale between the axes. This exposes an assumption in graphical manipulations.

### 14. A two-variable transformation that secretly contains differentiation

A particle supplies (x(t),v(t)), where v = x′. Change position by X = F(x). Complete (x,v)↦(F(x),?) so the second output is the new velocity. If Y = G(X) follows, does transforming twice agree with transforming once using G∘F?

**Sketch:** The map is (x,v)↦(F(x),F′(x)v). Twice gives (G(F(x)),G′(F(x))F′(x)v), agreeing with the map induced by G∘F. The chain rule says that coordinate changes carry velocities along consistently. A particularly promising extension.

### 15. An operator that forgets the units

For differentiable functions that do not vanish on the interval considered, define L(f) = f′/f. If f:[A]→[B], find the signature of L(f) and identify which units disappeared. Investigate L(cf), L(fg), and L(f/g), for nonzero constant c and compatible functions.

**Sketch:** The signature is [A]→[1/A]. L(cf) = L(f), L(fg) = L(f)+L(g), L(f/g) = L(f)−L(g). It measures relative rate of change and turns multiplication into addition. Use “relative rate of change” if logarithms have not appeared; postpone “logarithmic derivative.”

### 16. What should the reverse of a binary operator be?

Addition takes (f,g) and returns f+g. A student proposes subtraction as its inverse. Is subtraction enough to recover the pair? What additional information would suffice? Compare (f,g)↦f+g with (f,g)↦(f+g,f−g).

**Sketch:** Addition discards information. From u = f+g and v = f−g recover f = (u+v)/2 and g = (u−v)/2. Keeping either original addend along with the sum would also suffice. Combines binary operators and two-output transformations; “undo addition by subtraction” requires knowing what to subtract.

**Priorities:** 13, 14, 16 offer less familiar perspectives. 9–10 make the operator discussion useful. No equally strong standalone naming exercise emerged: asking what to call order-independent operators could conclude 9–10, after the mathematical work.

## Exposition ideas motivating these exercises

- Distinguish following units forward, recovering constraints backward, and assembling an expression with a target signature.
- Establish signatures once and then use them as working notation.
- Use the sum rule as the fully worked model check: compatible operations and matching final signatures. Later checks should apply the method without restarting its explanation.
- Let the chain rule introduce construction rather than checking. Preserve the failed product f′g′ and the composition that repairs its input units.
- Early exercise solutions can be explicit; later ones should explain their new step rather than repeat the whole method.
- Choose useful representations for each step; avoid translating through prose, signatures, pictures, and evaluated formulas when nothing new is gained.
- Preserve the explicit introduction to two-input operators: it is new to this book's students.
- Existing editorial constraints: retain the clockwise/SVG excursion, separate binary/unary sections and separate cosine examples; keep differentiability qualifications near the rules they qualify.

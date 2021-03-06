import bracing from "./macros/bracing";
import derivative from "./macros/derivative";
import dirac from "./macros/dirac";
import matrix from "./macros/matrix";
import text from "./macros/text";

const macros =  {
    ...bracing,
    ...derivative,
    ...dirac,
    ...matrix,
    ...text,
};

export default macros;
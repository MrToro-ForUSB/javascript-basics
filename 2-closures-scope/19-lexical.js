// Ámbito lexico
// El ámbito lexico es una regla que permite asegurar que una variable no puede ser accedida
// por fuera de su ámbito.

const variableGlobal = 0;

function myFunction() {
  const number = 1;
  console.log(variableGlobal);

  function parent() {
    const inner = 2;
    console.log(number, variableGlobal);

    function child() {
      console.log(inner, number, variableGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();
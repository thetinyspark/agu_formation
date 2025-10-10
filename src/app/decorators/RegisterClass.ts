// on décrit un type Constructable générique
// qui répond à la structure suivante:
// - on peut l'instancier avec new
// - on peut avoir un nombre de paramètres illimités
// ça retourne un objet d'un type précis ( du type générique )
type Constructable<T> = new (...args: any[]) => T;

// on va stocker nos classes associées à des metadata ici
const allClazz: any[] = [];
const methods:any[] = [];

// la fonction RegisterClass permet
export function RegisterClass<T>(data: any) {
  return function (target: Constructable<T>) {
    // de stocker la classe contenue dans target et
    // de l'associer aux metadata contenues dans data
    allClazz.push({
      target,
      data,
    });
  };
}

// décorateur de fonction/méthode
export function LogMethodCall(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {

// on récupère la référence à la fonction
  const func = descriptor.value;

  // on change la reference en reconstruisant 
  // une fonction qui log l'appel à cette dernière
  // Puis qui l'éxécute
  descriptor.value = function (...args: any[]) {
    console.log(`Appel de ${propertyKey} avec`, args);
    return func.apply(this, args);
  };
}

// décorateur de fonction/méthode
export function TestMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
// on récupère la référence à la fonction
  const func = descriptor.value;
  methods.push(func.bind(target));
}

// cette fonction retourne tout ce qui est stocké
export function getRegisteredClasses() {
  return allClazz;
}

export function testAllMethods(){
    methods.forEach( 
        (func:Function)=>{
            console.log( func.apply(null) );
        }
    )
}

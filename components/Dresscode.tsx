import React from "react";

function Dresscode() {
  return (
    <div className="w-full md:w-3/4 xl:w-3/4 font-light text-base md:text-xl xl:text-xl px-6 xl:px-0 my-6 py-8 xl:py-12 space-y-12 border-t-2 border-zelena">
      <h2 className="text-center uppercase  m-4 text-[2rem] xl:text-[5rem] font-svarge">
        dresscode
      </h2>
      <p>
        Věříme v krásné slunečné počasí, takže tomu je nutné přizpůsobit i váš
        outfit. Pánové mohou nechat saka doma a pohodlně si užít den v košili a
        kalhotách. Dámy si určitě poradí a najdou ve svém šatníku stylové šaty.
        Svatební barvy máme, ale ty necháme pro výzdobu. 
      </p>
      <p className="text-center">Milé dámy, bílá patří nevěstě!</p>
    </div>
  );
}

export default Dresscode;

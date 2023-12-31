import Image from "next/image";
import React from "react";

const Divider = () => {
  return (
    <div className="justify-end hidden w-full py-1 my-6 md:flex h-28 ">
      <Image
        src="/images/marcadagua.png"
        alt="backgound"
        width={180}
        height={80}
      />
    </div>
  );
};

export default Divider;

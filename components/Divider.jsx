import Image from "next/image";
import React from "react";

const Divider = () => {
  return (
    <div className="flex justify-end w-full h-20 py-1 my-12 ">
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

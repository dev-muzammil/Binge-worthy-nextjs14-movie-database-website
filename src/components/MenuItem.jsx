import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className="hover:text-emerald-600 hover:underline">
      <Icon className="text-2xl sm:hidden"/>
      <p className="uppercase hidden sm:inline text-xm font-semibold" >{title}</p>
    </Link>
  );
};

export default MenuItem;

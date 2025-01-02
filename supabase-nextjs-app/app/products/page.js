import React from 'react'
import MobileCard from "../_components/MobileCard";
import { getProducts } from "../_lib/data-service";
export default async function page(){

const cabins = await getProducts();

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
      Upgrade to the Latest Tech – Shop Our Best-Selling Smartphones!
      </h1>
      
      <p className="text-primary-200 text-lg mb-10">
      Looking for the latest smartphones at unbeatable prices? Our wide selection of phones features the newest models, all packed with cutting-edge technology. Whether you’re upgrading or buying your first smartphone, we’ve got something for everyone.
      </p>

      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <MobileCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </div>
  )
}

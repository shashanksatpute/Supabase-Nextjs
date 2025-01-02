import { UsersIcon,PhoneIcon,DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function MobileCard({ cabin }) {
  const { id, name,price,description } = cabin;

  return (
    <div className="flex border-primary-800 border">
      {/* <Image
        src="https://fburwlvgdqykibiwbone.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt={`Cabin ${name}`}
        className="flex-1 border-r border-primary-800"
        width={300}
        height={200}
      /> */}

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-3">
            {name}
          </h3>

          <div className="flex gap-3 items-center mb-2">
            <DevicePhoneMobileIcon className="h-5 w-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              <span className="font-bold">{description}</span>
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            
            <span className="text-primary-200">{price} $</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & Order &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileCard;

import { Button, Card, CardFooter } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineLightBulb, HiStar } from "react-icons/hi";

const PopularCard = async () => {
    
    
    const res = await fetch('https://assignment-08-eight.vercel.app/data.json');
  const popularProducts = await res.json();
  console.log("siam", popularProducts);

    return (
        <div className="container mx-auto px-6 space-y-20 py-16">
      
      {/* 1. Popular Products Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {popularProducts.slice(0 , 3).map((product) => (
            <Card shadow="sm" key={product.id} >
              
                <Image
                  shadow="sm"
                  radius="lg"
                        
                          height={200}
                          width={200}
                  alt={product.name}
                  className="w-full object-cover h-[240px] rounded-2xl"
                  src={product.image}
                />
              
              <CardFooter className="flex flex-col items-start gap-2">
                <div className="flex justify-between w-full">
                  <b className="text-lg">{product.name}</b>
                  <p className="text-orange-500 font-bold">${product.price}</p>
                </div>
                <div className="flex items-center text-yellow-500 gap-1">
                  <HiStar /> <span className="text-gray-600 text-sm">{product.rating}</span>
                      </div>
                      <Link href={`/all-products/${product.id}`} className="w-full">
                <Button fullWidth color="primary" variant="secondary" size="sm">
                  View Details
                </Button>
                      
                      </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* 2. Summer Care Tips Section */}
      <section className="bg-blue-50 p-10 rounded-3xl">
        <h2 className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-3">
          <HiOutlineLightBulb className="text-yellow-500" /> Summer Care Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-blue-400">
            <h3 className="font-bold mb-2">Stay Hydrated</h3>
            <p className="text-sm text-gray-600">Drink at least 8-10 glasses of water daily to keep your skin fresh.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-orange-400">
            <h3 className="font-bold mb-2">Sun Protection</h3>
            <p className="text-sm text-gray-600">Always apply SPF 50+ sunscreen 15 minutes before stepping out.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-400">
            <h3 className="font-bold mb-2">Wear Cotton</h3>
            <p className="text-sm text-gray-600">Choose light-colored cotton fabrics to let your skin breathe.</p>
          </div>
        </div>
      </section>

      {/* 3. Top Brands Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Top Brands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['SunShade', 'GlowGuard', 'AquaFlow', 'SummerVibe'].map((brand) => (
            <Card key={brand} className="flex items-center justify-center p-8 bg-gray-50 border-none shadow-none hover:bg-gray-100 transition">
              <span className="text-xl font-black text-gray-400 uppercase italic tracking-tighter">{brand}</span>
            </Card>
          ))}
        </div>
      </section>

    </div>
    );
};

export default PopularCard;
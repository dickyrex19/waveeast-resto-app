import MenuItems from "./MenuItems";

export default function MenuSection() {
  return (
    <>
      <h1 className="mt-8 sm:text-5xl text-4xl font-bold">Our Top Menu</h1>
      <p className="mt-5 font-serif">
        Some of our best-seller menus our customers love! Premium dishes are
        served by the best and certified chefs in town.
      </p>
      <a
        href="#"
        className="mt-6 px-8 py-3 border-2 font-serif hover:bg-white hover:text-gray-500"
      >
        View More
      </a>
      <div className="mt-8 flex flex-wrap justify-center md:justify-start mb-10">
        <MenuItems
          menuImage="salmonPlate.png"
          menuTitle="Salmon Salad"
          menuDesc="This Greek salmon salad is seared salmon fillets, all tossed in a garlic and herb dressing."
          price="$ 30"
        />
        <MenuItems
          menuImage="chickenPlate.png"
          menuTitle="Chicken Salad"
          menuDesc="This Greek chicken salad is seared chicken fillets, all tossed in a garlic and herb dressing."
          price="$ 23"
        />
        <MenuItems
          menuImage="salmonPlate.png"
          menuTitle="Salmon Salad"
          menuDesc="This Greek salmon salad is seared salmon fillets, all tossed in a garlic and herb dressing."
          price="$ 20"
        />
      </div>
    </>
  );
}

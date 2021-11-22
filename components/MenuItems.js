export default function MenuItems({ menuImage, menuTitle, menuDesc, price }) {
  return (
    <div className="lg:w-4/12 md:w-6/12 w-full px-4">
      <img src={`/images/${menuImage}`} alt="" className="w-full p-8" />
      <h2 className="font-serif font-bold text-xl">{menuTitle}</h2>
      <p className="mt-4 text-white/60 font-sans">{menuDesc}</p>
      <h3 className="mt-4 font-mono text-3xl">{price}</h3>
    </div>
  );
}

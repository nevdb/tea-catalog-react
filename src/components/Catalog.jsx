export default function Catalog({ children }) {
  return (
    <section className="w-2/3 my-4 mx-auto">
      <h2 className="text-xl text-amber-950 uppercase  my-8">
        Special Tea For Everyone
      </h2>

      <ul className="list-none m-0 p-0 grid lg:grid-cols-3  gap-8">
        {children}
      </ul>
    </section>
  );
}

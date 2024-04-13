import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-6">
      <h1 className="text-4xl font-bold">Design System</h1>
      <ol className="flex list-decimal flex-col">
        <li>
          <Link
            href="/design-system/colors"
            className="font-bold text-primary-accent"
          >
            Colors
          </Link>
        </li>
        <li>
          <Link
            href="/design-system/typography"
            className="font-bold text-primary-accent"
          >
            Typography
          </Link>
        </li>
      </ol>
    </section>
  );
};

export default Home;

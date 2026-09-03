export default function ProfileStats() {
  const stats = [
    {
      label: "Posts",
      value: "98",
    },
    {
      label: "Followers",
      value: "2.4K",
    },
    {
      label: "Following",
      value: "426",
    },
    {
      label: "Communities",
      value: "18",
    },
  ];

  return (
    <section
      className="
        grid
        grid-cols-2
        gap-4
        lg:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <h2 className="text-3xl font-bold text-blue-600">{stat.value}</h2>

          <p className="mt-2 text-slate-500">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}

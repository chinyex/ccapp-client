export default function AuthPreview() {
  return (
    <div className="w-full max-w-lg space-y-6 text-white">
      <div>
        <h2 className="text-4xl font-bold">
          Welcome to CCApp 🚀
        </h2>

        <p className="mt-4 text-lg text-blue-100">
          Connect with friends, discover communities,
          and share what matters most.
        </p>
      </div>

      {/* Fake Post */}
      <div className="rounded-3xl bg-white/10 p-6 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl">
            😊
          </div>

          <div>
            <h3 className="font-semibold">Sarah Johnson</h3>

            <p className="text-sm text-blue-100">
              2 minutes ago
            </p>
          </div>
        </div>

        <p className="mt-6 leading-7">
          🎉 Just finished building my portfolio with CCApp.
          Loving this community already!
        </p>

        <div className="mt-6 flex gap-6 text-sm text-blue-100">
          <span>❤️ 248 Likes</span>
          <span>💬 36 Comments</span>
        </div>
      </div>

      {/* Notification */}
      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
        🔔 John liked your latest post.
      </div>

      {/* Friends */}
      <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md">
        👥 Ada, David and 12 others are online.
      </div>
    </div>
  );
}
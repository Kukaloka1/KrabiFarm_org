export default function SiteBackground(){
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[42rem] w-[42rem] rounded-full
                        bg-gradient-to-tr from-emerald-400/25 via-sky-400/20 to-blue-500/25 blur-3xl" />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(75%_50%_at_50%_0%,rgba(255,255,255,0.8),rgba(255,255,255,0))] 
                      dark:bg-[radial-gradient(75%_50%_at_50%_0%,rgba(24,24,27,0.85),rgba(24,24,27,0))]" />
    </>
  );
}

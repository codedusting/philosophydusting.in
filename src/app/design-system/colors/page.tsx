const Colors = () => {
  return (
    <section className="flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Neutral</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-50 text-sm">
            neutral-50
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-100 text-sm">
            neutral-100
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-200 text-sm">
            neutral-200
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-300 text-sm">
            neutral-300
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-400 text-sm">
            neutral-400
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-500 text-sm">
            neutral-500
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-600 text-sm text-shades-white">
            neutral-600
          </div>
          <div className="flex h-16  w-32 items-center justify-center bg-neutral-700 text-sm text-shades-white">
            neutral-700
          </div>
          <div className="flex h-16  w-32 items-center justify-center bg-neutral-800 text-sm text-shades-white">
            neutral-800
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-900 text-sm text-shades-white">
            neutral-900
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-neutral-950 text-sm text-shades-white">
            neutral-950
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Primary</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-primary-color text-sm text-shades-white">
            primary-color
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-primary-accent text-sm text-shades-white">
            primary-accent
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Secondary</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-secondary-light text-sm">
            secondary-light
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-secondary-dark text-sm text-shades-white">
            secondary-dark
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Success</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-success-100 text-sm">
            success-100
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-success-300 text-sm text-shades-white">
            success-300
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-success-500 text-sm text-shades-white">
            success-500
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-success-700 text-sm text-shades-white">
            success-700
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-success-900 text-sm text-shades-white">
            success-900
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Error</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-error-100 text-sm">
            error-100
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-error-300 text-sm text-shades-white">
            error-300
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-error-500 text-sm text-shades-white">
            error-500
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-error-700 text-sm text-shades-white">
            error-700
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-error-900 text-sm text-shades-white">
            error-900
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Warning</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-warning-100 text-sm">
            warning-100
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-warning-300 text-sm text-shades-white">
            warning-300
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-warning-500 text-sm text-shades-white">
            warning-500
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-warning-700 text-sm text-shades-white">
            warning-700
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-warning-900 text-sm text-shades-white">
            warning-900
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold">Shades</h2>
        <section className="flex flex-row items-start justify-start gap-4">
          <div className="flex h-16 w-32 items-center justify-center bg-shades-white text-sm">
            shades-white
          </div>
          <div className="flex h-16 w-32 items-center justify-center bg-shades-black text-sm text-shades-white">
            shades-black
          </div>
        </section>
      </section>
    </section>
  );
};

export default Colors;

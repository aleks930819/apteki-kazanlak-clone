
const WorkTimeWrapper = ({ heading, children }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <h2
        className="
        text-xl font-semibold
        "
      >
        {heading}
      </h2>
      <div className="flex w-full items-center justify-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default WorkTimeWrapper;

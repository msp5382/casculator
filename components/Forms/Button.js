export default ({ className, text, ...props }) => {
  return (
    <div
      {...props}
      className={
        "bg-base mt-3 text-white cursor-pointer rounded-lg pt-2 pb-2 w-24 text-center " +
        className
      }
    >
      {text}
    </div>
  );
};

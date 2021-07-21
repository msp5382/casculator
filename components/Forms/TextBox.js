export default ({ placeholder, ...props }) => {
  return (
    <>
      <input
        type="text"
        className="w-full p-2 rounded text-sm"
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

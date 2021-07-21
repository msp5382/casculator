export default (props) => {
  return (
    <>
      <input
        {...props}
        type="text"
        className="w-full p-2 rounded text-sm"
        placeholder="Search..."
      />
      <div className="text-xl -ml-8 w-12 flex-col flex justify-center ">
        <ion-icon name="search-outline"></ion-icon>
      </div>
    </>
  );
};

import internal from "stream";

type Prop = {
  label: string,
  width?: string,
  type?: string,
  max?: string,
  min?: string,
  maxLenght?: number,
}

const InputField = ({ label, width = 'w-1/4', type, max, min, maxLenght, ...props }: Prop) => {

  return (<div className={`${width} relative border-2 rounded-2xl mr-2 ml-2 focus-within:border-base-bg`
  }>
    <input
      max={max}
      min={min}
      maxLength={maxLenght}
      type={type}
      // don't delete placeholder !!!!!
      placeholder={" "}
      className="block p-2 text-lg appearance-none focus:outline-none bg-transparent w-full"
      {...props}
    />
    <label
      className="absolute bg-thin-white text-gray-400 pt-2.5 pl-2 top-0 -z-1 origin-0 duration-300"
    >
      {label}
    </label>
  </div >);
}
export default InputField;
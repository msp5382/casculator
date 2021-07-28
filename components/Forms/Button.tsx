import { MouseEventHandler } from "react";

type Props = {
  text: string,
  className?: string,
  onClick?: MouseEventHandler<HTMLDivElement>,
}

export default ({ className, text, onClick, ...props }: Props) => {
  return (
    <div
      {...props}
      onClick={onClick}
      className={
        "bg-base mt-3 text-white cursor-pointer rounded-lg pt-2 pb-2 w-24 text-center " +
        className
      }
    >
      {text}
    </div>
  );
};

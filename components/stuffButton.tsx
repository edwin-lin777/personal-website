interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const StuffButton: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        " text-black hover:cursor-pointer bg-blue-500 hover:bg-blue-200 rounded-mb ${className}"
      }
    >
      {text}
    </button>
  );
};
export default StuffButton;

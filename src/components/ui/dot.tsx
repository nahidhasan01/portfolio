type DotProps = {
  size?: number;
  color?: string;
  className?: string;
};

const Dot: React.FC<DotProps> = ({ className }) => {
  return <span className={`inline-block rounded-full size-2 ${className}`} />;
};

export default Dot;

function CardEmpty(props) {
  const { children, isRadius, isShadow, className  } = props;

  return (
    <div
      className={`bg-white ${isRadius && "rounded-[10px]"} ${
        isShadow && "shadow hover:shadow-2xl"
      } ${className && className} border p-5`}
    >
      {children}
    </div>
  );
}

export default CardEmpty;

export default (props) => {
  let { className, children } = props;

  if (!children) throw new Error("TopBar requires children");

  if (!className) className = "bg-[yellow] text-black text-center px-2 py-1";

  return <div className={className}>{children}</div>;
};

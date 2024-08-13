export const AnimateBtn = ({ children, classList }) => {
  return (
    <div
      className={
        "group relative flex h-auto w-auto cursor-pointer items-center overflow-hidden " +
        classList
      }
    >
      <span className="block px-6 py-1.5 leading-[100%] transition-transform duration-300 ease-in-out group-hover:-translate-y-[130%]">
        {children}
      </span>
      <span className="absolute left-0 translate-y-[140%] px-6 py-1.5 transition-transform duration-300 ease-in-out group-hover:translate-y-[0]">
        {children}
      </span>
    </div>
  )
}

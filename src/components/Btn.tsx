
function Btn({children,style}:{ children:React.ReactNode,style?:string}) {
    return (
      <button className={style?"btn w-fit": `btn bg-transparent hover:text-white duration-300 hover:bg-[rgb(96,165,250)] text-[rgb(96,165,250)] border-[2px] border-[rgb(96,165,250)]`}>
    {children}
  </button>
  )
}

export default Btn

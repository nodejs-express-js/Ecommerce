import { useState,useEffect } from 'react';
import Styles from './BuyerPagination.module.css'

type children={
    currentPage:number,
    setCurrentPage:React.Dispatch<React.SetStateAction<number>>
}

const BuyerPagination = ({currentPage,setCurrentPage}:children) => {
    const [numberofPages,setNumberOfPages] =useState(0);
  const [pagearray,setPageArray]=useState<number[]>([0,0,0])

    const setArrayTillLargestNumber=(largest:number)=>{
        const temp:number[]=[]
        for(let i=1;i<=largest;i++){
          temp.push(i)
        }
        setPageArray(temp) 
    }
  const fetchNumberOfPages=async()=>{
    const response=await fetch(import.meta.env.VITE_API_BASE_URL+import.meta.env.VITE_NON_LOGIN_NO_OF_PAGES)
    const data=await response.json();
    if(response.ok){
        data.numberOfPages=10
      setNumberOfPages(data.numberOfPages);
      if(data.numberOfPages<3){
        setArrayTillLargestNumber(data.numberOfPages)
      }
      else{
        setPageArray([1,2,3]) 
      }
    }
    else{
      setNumberOfPages(0)
    }
  }
  const print=()=>{
    console.log(pagearray,pagearray.length)
  }

  const prev=()=>{
    if(currentPage>1){
      setCurrentPage(currentPage-1)
    }
  }
  const updatepage=(page:number)=>{
    setCurrentPage(page)
  }
  const next=()=>{
    if(currentPage<numberofPages){
      setCurrentPage(currentPage+1)
    }
  }

  useEffect(() => {
      fetchNumberOfPages()
      setCurrentPage(1)
    },[])

  useEffect(()=>{
        if(currentPage<0 || currentPage>numberofPages){
        setPageArray([0,0,0]);
        setNumberOfPages(0)
         }
        else if(currentPage==1 || currentPage== 2){
            if(numberofPages<3){
                setArrayTillLargestNumber(numberofPages)
            }
            else{
                setPageArray([1,2,3]) 
            }
            return;
        }
        else if(currentPage==numberofPages-1 || currentPage==numberofPages){
            setPageArray([numberofPages-2,numberofPages-1,numberofPages])
            return;
        }
        else{
            setPageArray([currentPage-1,currentPage,currentPage+1])

        }
  },[currentPage,numberofPages])

  return (
    <>
        {numberofPages===0 ? 
      <div>
        Something Went wrong with server
      </div> 
      :
      <div>
        <div className={Styles.pagination}>
          <button onClick={prev} className={Styles.lessThan}>prev</button>
          {pagearray.length!==0 && pagearray.map((page,index)=>{
            return <button key={index} className={currentPage===page ? `${Styles.pages} ${Styles.selectedpage}` :  `${Styles.pages}` } onClick={()=>{updatepage(page)}} >{page}</button>
          })}
          <button onClick={next} className={Styles.greaterThan}>next</button>
        </div>
        <button onClick={print}>print</button>

      </div>
      }
    </>
  )
}

export default BuyerPagination
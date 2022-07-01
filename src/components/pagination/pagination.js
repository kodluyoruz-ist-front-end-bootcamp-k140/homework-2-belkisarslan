import { useEffect, useState } from "react"


const Pagination = ({pages, setCurrentPage}) => {
    const numOfPages = [];

  for(let i=1; i<=pages; i++){
    numOfPages.push(i);
}

const [currentButton, setCurrentButton] = useState(1);

useEffect(() => {
    setCurrentPage(currentButton)
},[currentButton, setCurrentPage])
    return (
        <nav aria-label="...">
            <ul className="pagination pagination-lg">
               {
                numOfPages.map((page, index) => {
                    return(
                        <li key={index} className={`${currentButton === page ? "page-item active" : "page-item"}`}><a className="page-link" href="#!"
                        onClick={()=> setCurrentButton(page)}
                        >{page}</a></li>
                    )
                })
               }
            </ul>
        </nav>
    )
}

export default Pagination
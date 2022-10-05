import React  from "react"


const Lst = ({ dolist , setdolist }) => {

    

    const onbtnclick = (e) => {
      
        setdolist(dolist.filter((value,index) => {return index !== parseInt(e.target.id);}))
    
    }


    const renderedList = dolist.map((item, index) => {
        return (
            <div key={index} id={index} className='item'><span>{item}</span> <button id={index} className='dlt' onClick={onbtnclick}>&#128465;</button></div>
        )
    })
    return (
        <React.Fragment>
            {renderedList}
        </React.Fragment>
    )
}

export default Lst;
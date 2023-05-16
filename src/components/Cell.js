const Cell =({id,cell,go,setCells,setGo,cells,winMsg})=> {
console.log(cell,id)


const handleCellChange=(className)=>{
    //inserting classname in cells array
   const nextCells =cells.map((item,index)=>{

        if(index === id){
         return className
        }else {
            return item
        }
    });
setCells(nextCells)
}
const handlClick =(e)=>{
console.log(e.target,e.target.firstChild);
// debugger
const taken = e.target?.firstChild?.classList.contains("circle") ||
e.target?.firstChild?.classList.contains("cross")

if(!taken){
    if(go ==='circle' ){

        e.target?.firstChild?.classList.add("circle")
         setGo("cross")
        handleCellChange("cross");
        
    }
    if(go ==='cross' ){

        e.target?.firstChild?.classList.add("cross")
         setGo("circle")
        handleCellChange("circle")
        
        
    }
}
}



    return(
        <div className="square"  id={id+15} onClick={!winMsg? handlClick: null}>
        
        <div className={cell} id={id}></div>
        </div>
    )
}

export default Cell
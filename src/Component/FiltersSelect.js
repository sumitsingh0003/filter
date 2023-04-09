import React,{useEffect, useState} from "react";
import axios from 'axios';

const FiltersSelect = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/posts', {
      method : 'GET'
    }).then(resp =>{
      const datasd = resp.data;
      setApiData(datasd);
    }).catch((errr)=>{
      console.log(errr);
    })
  }, []);



  const [pageData, setPageData] = useState([]);
  
  const [state, setstate] = useState();

  const [checking, setChecking] = useState(false);

  const hndlechanged = (e, data) =>{
    const {checked}= e.target;
    if (checked === false){
      const splicedData=pageData;
      splicedData.splice(data, 1)
      setPageData(splicedData)
    }
    else{
      const newData=pageData;
      newData.push(data)
      setPageData(newData)
    }

    setstate(
      pageData.map((val)=>{
        return val.id
      })

    )
  }

  const inptChnge = (e) =>{
    const {name, value} = e.target;


  }

  const checkAll = e =>{
    setChecking(!checking);
    setPageData(pageData.map(vals => vals.id))
    if(checking){
     return setPageData([])
    }
  }

 const submtData = () =>{
  console.log("PAGEE", pageData)
 }
 
  return (
    <>
      <div className="container">
        <div className="input_bx">
          <input 
            type="text" 
            name="id" 
            placeholder="Select Page" 
            value={pageData.length===0 ? '' : 'All Pages ' + state } 
            onChange={inptChnge} 
          />
        </div>

        <div className="listig">
          <ul>
          <li><label><p>All Pages {pageData.length===0 ? '' : state}</p><input type="checkbox" onClick={checkAll} isChecked={checking}/></label></li>

            {apiData.map((val, i) => {
              return (
                <li key={i}>
                  <label >
                    <p>{val.name}</p>
                    <input
                      id={val.id}
                      type="checkbox"
                      onChange={(e)=>hndlechanged(e, val)}
                     />
                  </label>
                </li>
              );
            })}
          </ul>
          <button onClick={submtData}>Submit</button>

         
        </div>
      </div>
    </>
  );
};

export default FiltersSelect;

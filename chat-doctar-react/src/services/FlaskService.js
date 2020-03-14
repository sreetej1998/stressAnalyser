export const vadarService= (sentence)=>{
     const vadarReport=fetch(`http://localhost:5000/score/${sentence}`,{
        method:'GET',
        headers:{
          "content-type":'application/json',
          "accept":'application/json'
        },
    })
    .then(resp=>resp.json())
    return vadarReport;
}
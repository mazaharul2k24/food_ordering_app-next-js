
const Distric=async ()=>{
    const disTricapi=await fetch("https://bdapis.com/api/v1.1/districts");
    return disTricapi.json();

}

export  {Distric};
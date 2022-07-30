const getData = async (URL) => {
  try {
    const data = await fetch(URL);
    if(data.status !== 404) {
      return await data.json();
    } 
    alert("City not valid")
    return null;
    
  } catch (error) {
    console.log(error)
  }
}

const formatDate = (date) => {
  return new Date(Date.parse(date)).toDateString();
}

export { getData, formatDate };
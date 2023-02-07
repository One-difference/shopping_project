export const settoken=(token)=>{
    localStorage.setItem('TOKEN',token)
}

export const gettoken=()=>{
  return  localStorage.getItem('TOKEN')
}

export const cleartoken=()=>{
    return  localStorage.removeItem('TOKEN')
  }
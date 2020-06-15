
export const state = (lang) => ({
    current:'En'
  })

export const mutations  = {
    setAr(state){
        // state.current = arabic;
        localStorage.setItem('lang','ar');
        // state.current = arabic
        
        
     
        
        
    },
    setEn(state){
        // state.current = "En"
        // state.current = english;
        localStorage.setItem('lang','en');
    }
}


export const state = (lang) => ({
    current:'En',
    arabic:false
  })

export const mutations  = {
    setAr(state){
        // state.current = arabic;
        localStorage.setItem('lang','ar');
        // state.current = arabic
        state.arabic = true
        
        
     
        
        
    },
    setEn(state){
        // state.current = "En"
        // state.current = english;
        localStorage.setItem('lang','en');
        state.arabic = false
    }
}

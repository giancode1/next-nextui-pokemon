
export const Flotante = () => {
    return(
        
        <div style={{ backgroundColor: '#33D9FA', borderRadius: '50%', position: 'fixed', bottom: '20px', right: '20px', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' ,zIndex: '1000' }}
          onClick={ ()=> window.scrollTo({top: 0, behavior: "smooth"})}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 384 512" strokeWidth="1.5" fill='white' style={{ }}><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" /></svg>
        </div>
    )
}


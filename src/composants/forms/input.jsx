/**
 * 
 * @param {string} type 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {string} label
 * @param {(s:string) => void} onChange
 * @returns 
 */
export function Input({type, placeholder, label, onChange}){
    
    return <div className="col">
        <label htmlFor={placeholder} className="mt-3"><strong>{label}</strong></label>
        <input 
            type={type} 
            placeholder={placeholder}
            className="mt-2 form-control"
            id={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
        </div>
    
}
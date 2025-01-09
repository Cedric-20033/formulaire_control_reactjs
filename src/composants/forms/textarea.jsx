/**
 * 
 * @param {string} placeholder 
 * @param {string} label
 * @param {(s:string) => void} onChange 
 * @param {string} value 
 * @returns 
 */
export function Textarea({placeholder, label, onChange, value}){

    return <div className="col">
        <label htmlFor={placeholder} className="mt-3"><strong>{label}</strong></label>
        <textarea 
            placeholder={placeholder}
            className="mt-2 form-control"
            id={placeholder}
            onChange={(e) => onChange(e.target.value)}
            value = {value}
        />
        </div>
}
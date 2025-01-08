/**
 * 
 * @param {string} placeholder 
 * @param {string} value 
 * @param {string} label
 * @param {(s:string) => void} onChange
 * @param {{string}} option
 * @returns 
 */
export function Select({placeholder, value, label, option}){
    
    const options = []
    for(let op of option){
        options.push(<option value={op} key={op}>{op}</option>)
    }

    return <div className="col">
        <label htmlFor={placeholder} className="mt-3"><strong>{label}</strong></label>
        <select 
            value={value}
            className="mt-2 form-control"
            id={placeholder}
        > 
         {options}
        </select>
        </div>
    
}
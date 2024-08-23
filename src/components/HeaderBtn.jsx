export const HeaderBtn=({label,link=""})=>{
    return (
        <a href={link} className={`rounded-full px-7 py-2 max-lg:px-3  hover:shadow-3xl bg-gradient-to-r from-blue-500 to-orange-500`}>
        {label}
    </a>
    )
}
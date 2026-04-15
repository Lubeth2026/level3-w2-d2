export default function Footer({company}){
    const currentYear = new Date().getFullYear()
    return(
        <>
        <footer>
            <p>Copyright {company} &copy; {currentYear}</p>
        </footer>
        </>
    )
}

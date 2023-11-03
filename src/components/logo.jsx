function Logo({active}) {
    return(
        <h1 className={`logo ${active?'active':''}`} >Vikas Raskolbas</h1>
    )
}

export default Logo;
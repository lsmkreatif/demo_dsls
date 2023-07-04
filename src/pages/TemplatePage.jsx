export default function TemplatePage(props) {

    const { children } = props

    return (
        <div className="ex-container">
        <div className="ex-dflex">
            <img className="ex-logo" src={process.env.PUBLIC_URL + "/ls-logo.png"} alt="ex-log" />
            <span className="bts-bodyMd">Luarsekolah BTS</span>
        </div>
        <p>
            <span className="bts-heading4xl">{props.title}</span>
        </p>

        {children}
        
    </div>
    );
    
}
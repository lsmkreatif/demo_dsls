export default function TemplatePage(props) {

    const { children } = props

    return (
        <div class="ex-container">
        <div class="ex-dflex">
            <img className="ex-logo" src={process.env.PUBLIC_URL + "/ls-logo.png"} alt="ex-log" />
            <span class="bts-bodyMd">Luarsekolah BTS</span>
        </div>
        <p>
            <span class="bts-heading4xl">{props.title}</span>
        </p>

        {children}
        
    </div>
    );
    
}
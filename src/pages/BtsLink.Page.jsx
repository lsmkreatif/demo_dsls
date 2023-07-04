import TemplatePage from "./TemplatePage";

export default function BtsLinkPage() {


    return (
        <TemplatePage title='Link'>
            <p className="bts-bodyMd">
                Link is used to take user to the external specific page or URL.
            </p>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <span className="bts-bodySm-semibold">bts-link-default</span>
                    </div>
                    <div className="col-8">
                        <a href="#" className="bts-space-4 bts-link-default">This is Link Default</a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <span className="bts-bodySm-semibold">bts-link-neutral</span>
                    </div>
                    <div className="col-8">
                        <a href="#" className="bts-space-4 bts-link-neutral">This is Link Neutral</a>
                    </div>
                </div>
            </div>

        </TemplatePage>
    );
}
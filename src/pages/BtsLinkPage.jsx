import TemplatePage from "./TemplatePage";

export default function BtsLinkPage() {
    return (
        <TemplatePage title="Link">
            <p className="bts-bodyMd">
                Link is used to take user to the external specific page or URL.
            </p>
            <table className="table">
                <tbody>
                    <tr>
                        <td>
                            <span className="bts-bodySm-semibold">bts-link-default</span>
                        </td>
                        <td>
                            <a href="#" className="bts-space-4 bts-link-default">
                                This is Link Default
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="bts-bodySm-semibold">bts-link-neutral</span>
                        </td>
                        <td>
                            <a href="#" className="bts-space-4 bts-link-neutral">
                                This is Link Neutral
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </TemplatePage>
    );
}

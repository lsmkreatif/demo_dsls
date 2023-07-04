import TemplatePage from "./TemplatePage";

export default function BtsInlineMessage() {
    return (
        <TemplatePage title="Inline Message">
            <p className="bts-bodyMd">
                Inline message is used to inform user when important message or
                information is available.
            </p>
            <table className="table">
                <tbody>
                    <tr>
                        <td> 
                            <span className="bts-bodySm-semibold">
                                bts-inline-message-warning
                            </span>
                        </td>
                        <td>
                            <i className="bts-inline-message-warning">Message goes here</i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="bts-bodySm-semibold">
                                bts-inline-message-success
                            </span>
                        </td>
                        <td>
                            <i className="bts-inline-message-success">Message goes here</i>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="bts-bodySm-semibold">
                                bts-inline-message-error
                            </span>
                        </td>
                        <td>
                            <i className="bts-inline-message-error">Message goes here</i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </TemplatePage>
    );
}

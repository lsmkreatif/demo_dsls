import TemplatePage from "./TemplatePage";

export default function BtsTypographyPage() {

    return (
        <TemplatePage title="Typography">
            <p className="bts-bodyMd">
                Typography is a key part in building UI Design. It helps to organize
                content and create hierarchy to inform users. <br />Design token:
                <span className="bts-txt-critical">[--bts-variant-*state, if any*]</span>
                <br /><br /><span className="bts-txt-critical">
                    Example: --bts-heading4xl || --bts-bodyLg-medium </span >
            </p>
            <table className="table">
                <thead>
                    <th width="400px">Variant</th>
                    <th width="150px">size</th>
                    <th width="150px">line-height</th>
                    <th>weight</th>
                    <th>typeface</th>
                </thead>
                <tbody>
                    <tr>
                        <td><span className="bts-heading4xl">heading4xl</span></td>
                        <td><span className="bts-bodyMd">40px</span></td>
                        <td><span className="bts-bodyMd">48px</span></td>
                        <td><span className="bts-bodyMd-semibold">bold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-heading3xl">heading3xl</span></td>
                        <td><span className="bts-bodyMd">32px</span></td>
                        <td><span className="bts-bodyMd">40px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-heading2xl">heading2xl</span></td>
                        <td><span className="bts-bodyMd">28px</span></td>
                        <td><span className="bts-bodyMd">32px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-headingXl">headingXl</span></td>
                        <td><span className="bts-bodyMd">24px</span></td>
                        <td><span className="bts-bodyMd">28px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-headingLg">headingLg</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd">24px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-headingMd">headingMd</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd">24px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-headingSm">headingSm</span></td>
                        <td><span className="bts-bodyMd">14px</span></td>
                        <td><span className="bts-bodyMd">24px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-headingXs">headingXs</span></td>
                        <td><span className="bts-bodyMd">12px</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyLg">bodyLg</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd">reguler</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">bodyMd</span></td>
                        <td><span className="bts-bodyMd">14px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd">reguler</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodySm">bodySm</span></td>
                        <td><span className="bts-bodyMd">12px</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd">reguler</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                </tbody>
            </table>

            <br /><br />

            <table className="table">
                <thead>
                    <th colspan="5">Style Variation</th>
                </thead>
                <tbody>
                    <tr>
                        <td width="400px">
                            <span className="bts-bodyLg-medium">bodyLg-medium</span>
                        </td>
                        <td width="150px"><span className="bts-bodyMd">16px</span></td>
                        <td width="150px"><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd-medium">medium</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyLg-semibold">bodyLg-semibold</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyLg-underline">bodyLg-underline</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd">reguler</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd-medium">bodyMd-medium</span></td>
                        <td><span className="bts-bodyMd">14px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd-medium">medium</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd-semibold">bodyMd-semibold</span></td>
                        <td><span className="bts-bodyMd">14px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd-underline">bodyMd-underline</span></td>
                        <td><span className="bts-bodyMd">14px</span></td>
                        <td><span className="bts-bodyMd">20px</span></td>
                        <td><span className="bts-bodyMd">reguler</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodySm-medium">bodySm-medium</span></td>
                        <td><span className="bts-bodyMd">12px</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd-medium">medium</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodySm-semibold">bodySm-semibold</span></td>
                        <td><span className="bts-bodyMd">12px</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd-semibold">semibold</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodySm-underline">bodySm-underline</span></td>
                        <td><span className="bts-bodyMd">12px</span></td>
                        <td><span className="bts-bodyMd">16px</span></td>
                        <td><span className="bts-bodyMd">reguler</span></td>
                        <td><span className="bts-bodyMd">Poppins</span></td>
                    </tr>
                </tbody>
            </table>
        </TemplatePage>
    );

}
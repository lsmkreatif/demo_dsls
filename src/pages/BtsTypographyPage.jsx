export default function BtsTypographyPage() {

    return (
        <div class="ex-container">
            <div class="ex-dflex">
                <img class="ex-logo" src="./assets/ls-logo.png" alt="ex-log" />
                <span class="bts-bodyMd">Luarsekolah BTS</span>
            </div>
            <p>
                <span class="bts-heading4xl">Typography</span>
            </p>
            <p class="bts-bodyMd">
                Typography is a key part in building UI Design. It helps to organize
                content and create hierarchy to inform users. <br />Design token:
                <span class="bts-txt-critical">[--bts-variant-*state, if any*]</span>
                <br /><br /><span class="bts-txt-critical">
                    Example: --bts-heading4xl || --bts-bodyLg-medium </span >
            </p>

            <table class="table">
                <thead>
                    <th width="400px">Variant</th>
                    <th width="150px">size</th>
                    <th width="150px">line-height</th>
                    <th>weight</th>
                    <th>typeface</th>
                </thead>
                <tbody>
                    <tr>
                        <td><span class="bts-heading4xl">heading4xl</span></td>
                        <td><span class="bts-bodyMd">40px</span></td>
                        <td><span class="bts-bodyMd">48px</span></td>
                        <td><span class="bts-bodyMd-semibold">bold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-heading3xl">heading3xl</span></td>
                        <td><span class="bts-bodyMd">32px</span></td>
                        <td><span class="bts-bodyMd">40px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-heading2xl">heading2xl</span></td>
                        <td><span class="bts-bodyMd">28px</span></td>
                        <td><span class="bts-bodyMd">32px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-headingXl">headingXl</span></td>
                        <td><span class="bts-bodyMd">24px</span></td>
                        <td><span class="bts-bodyMd">28px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-headingLg">headingLg</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd">24px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-headingMd">headingMd</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd">24px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-headingSm">headingSm</span></td>
                        <td><span class="bts-bodyMd">14px</span></td>
                        <td><span class="bts-bodyMd">24px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-headingXs">headingXs</span></td>
                        <td><span class="bts-bodyMd">12px</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyLg">bodyLg</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd">reguler</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyMd">bodyMd</span></td>
                        <td><span class="bts-bodyMd">14px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd">reguler</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodySm">bodySm</span></td>
                        <td><span class="bts-bodyMd">12px</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd">reguler</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                </tbody>
            </table>

            <br /><br />

            <table class="table">
                <thead>
                    <th colspan="5">Style Variation</th>
                </thead>
                <tbody>
                    <tr>
                        <td width="400px">
                            <span class="bts-bodyLg-medium">bodyLg-medium</span>
                        </td>
                        <td width="150px"><span class="bts-bodyMd">16px</span></td>
                        <td width="150px"><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd-medium">medium</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyLg-semibold">bodyLg-semibold</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyLg-underline">bodyLg-underline</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd">reguler</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyMd-medium">bodyMd-medium</span></td>
                        <td><span class="bts-bodyMd">14px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd-medium">medium</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyMd-semibold">bodyMd-semibold</span></td>
                        <td><span class="bts-bodyMd">14px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodyMd-underline">bodyMd-underline</span></td>
                        <td><span class="bts-bodyMd">14px</span></td>
                        <td><span class="bts-bodyMd">20px</span></td>
                        <td><span class="bts-bodyMd">reguler</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodySm-medium">bodySm-medium</span></td>
                        <td><span class="bts-bodyMd">12px</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd-medium">medium</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodySm-semibold">bodySm-semibold</span></td>
                        <td><span class="bts-bodyMd">12px</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd-semibold">semibold</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                    <tr>
                        <td><span class="bts-bodySm-underline">bodySm-underline</span></td>
                        <td><span class="bts-bodyMd">12px</span></td>
                        <td><span class="bts-bodyMd">16px</span></td>
                        <td><span class="bts-bodyMd">reguler</span></td>
                        <td><span class="bts-bodyMd">Poppins</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}
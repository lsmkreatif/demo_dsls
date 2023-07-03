export default function BtsButtonPage() {
    return (
        <div className="ex-container">
            <div className="ex-dflex">
                <img className="ex-logo" src="./assets/ls-logo.png" alt="ex-log" />
                <span className="bts-bodyMd">Luarsekolah BTS</span>
            </div>
            <p>
                <span className="bts-heading4xl">Buttons</span>
            </p>
            <p className="bts-bodyMd">
                Buttons are used for primarily actions, such as “Add to Cart”, “Sign
                Up”, etc. <br />Design tokens :
                <span className="bts-txt-critical">
                    [--bts-button-family-variant-state]
                </span>
                <br /><br /><span className="bts-txt-critical">
                    Example : --bts-button-primary
                </span>
            </p>
            <hr />
            <h3 className="bts-headingXl">Basic Button</h3>
            <hr />
            <table className="table">
                {/* <!-- COLUM COUNT = 6 --> */}
                <thead>
                    <th>Variant</th>
                    <th>Default</th>
                    <th>Hovered</th>
                    <th>Pressed</th>
                    <th>Focused</th>
                    <th>Disabled</th>
                </thead>

                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Slim</span></td>
                        <td>
                            <div className="bts-button-basic" size="slim">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-basic" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-basic" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Slim + Disclosure</span></td>
                        <td>
                            <div className="bts-button-basic" size="slim" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" disclosure="true" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" disclosure="true" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" disclosure="true" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" disclosure="true" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Disclosure</span></td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Disclosure</span></td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="large">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" disclosure="true" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Slim + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="slim" >
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" bts-data-icon="home" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" bts-data-icon="home" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" bts-data-icon="home" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" size="slim" bts-data-icon="home" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="large">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-basic" bts-data-icon="home" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Primary Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Slim</span></td>
                        <td>
                            <div className="bts-button-primary" size="slim">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-primary" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-primary" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Slim + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="slim">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" bts-data-icon="bookmarks" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" bts-data-icon="bookmarks" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" bts-data-icon="bookmarks" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" size="slim" bts-data-icon="bookmarks" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="large">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-primary" bts-data-icon="bookmarks" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Critical Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Slim</span></td>
                        <td>
                            <div className="bts-button-critical" size="slim">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-critical" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-critical" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Slim + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="slim">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" bts-data-icon="delete" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" bts-data-icon="delete" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" bts-data-icon="delete" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" size="slim" bts-data-icon="delete" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="large">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-critical" bts-data-icon="delete" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Outline Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Slim</span></td>
                        <td>
                            <div className="bts-button-outline" size="slim">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-outline" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-outline" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Slim + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="slim" >
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" bts-data-icon="bookmark_add" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" bts-data-icon="bookmark_add" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" bts-data-icon="bookmark_add" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" size="slim" bts-data-icon="bookmark_add" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="large">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline" bts-data-icon="bookmark_add" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Outline Critical Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Slim</span></td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-outline-critical" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-outline-critical" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Slim + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="slim">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" bts-data-icon="delete" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" bts-data-icon="delete" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" bts-data-icon="delete" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" size="slim" bts-data-icon="delete" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="medium">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="large">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-outline-critical" bts-data-icon="delete" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Plain Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-plain" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-plain" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Disclosure</span></td>
                        <td>
                            <div className="bts-button-plain" size="medium" disclosure="true">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="hovered" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="pressed" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="focused" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="disabled" disclosure="true">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Dislosure</span></td>
                        <td>
                            <div className="bts-button-plain" size="large" disclosure="true">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="hovered" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="pressed" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="focused" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="disabled" disclosure="true">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-plain" size="medium" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="hovered" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="pressed" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="focused" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="medium" state="disabled" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-plain" size="large" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="hovered" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="pressed" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="focused" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain" size="large" state="disabled" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Plain Neutral Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Disclosure</span></td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" disclosure="true">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="hovered" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="pressed" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="focused" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="disabled" disclosure="true">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Dislosure</span></td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" disclosure="true">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="hovered" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="pressed" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="focused" disclosure="true">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="disabled" disclosure="true">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="hovered" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="pressed" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="focused" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="medium" state="disabled" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="hovered" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="pressed" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="focused" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-neutral" size="large" state="disabled" bts-data-icon="edit_note">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 className="bts-headingXl">Plain Critical Button</h3>
            <hr />
            <table className="table">
                <tbody>
                    <tr>
                        <td><span className="bts-bodyMd">Medium</span></td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large</span></td>
                        <td>
                            <div className="bts-button-plain-critical" size="large">Button</div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="hovered">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="pressed">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="focused">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="disabled">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Medium + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="hovered" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="pressed" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="focused" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="medium" state="disabled" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td><span className="bts-bodyMd">Large + Prefix Icon</span></td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="hovered" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="pressed" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="focused" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                        <td>
                            <div className="bts-button-plain-critical" size="large" state="disabled" bts-data-icon="delete">
                                Button
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}
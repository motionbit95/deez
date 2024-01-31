import React from 'react';

const downloads = () => {
    return (
        <div id="uploadfloor" className="uploadfloor">
        <div id="uploadscale" className="uploadscale">
            <div id="stepbar" className="stepbar">
                <div>upload files</div>
                <div>Add details</div>
                <div>Add tags</div>
            </div>
            <div>
                <div id="d1" className="d1">Upload files</div>
                <hr/>
            </div>
            <div id="dndbox" className="dndbox">
                <div className="dlicon">아이콘</div>
                <div className="dnd1">Drag&drop SVG or PNG files</div>
                <div className="dnd2">Or drag and drop a ZIP file for larger packs. The expected review time is 4 to 7 days.</div>
            </div>
            
            <div id="cboxs" className="cboxs">
                <div className="cbox">
                    <div className="cicon">가상이미지</div>
                    <div className="ctextbox">
                        <div className="ctext">Contributor's handbook</div>    
                        <div className="d2">good place to start before uploading, but also to get tip and tricks.</div>
                    </div>
                </div>
                <div className="cbox">
                    <div className="cicon">가상이미지</div>
                    <div className="ctextbox">
                        <div className="ctext">Improve your approval ratio</div>
                        <div className="d2">see the handbook</div>
                    </div>
                </div>
                <div className="cbox">
                    <div className="cicon">가상이미지</div>
                    <div className="ctextbox">
                        <div className="ctext">Join Discord</div>
                        <div className="d2">Got qusetions for the Deez team or other contributors, then join the brand new Deez team Discord server.</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default downloads;
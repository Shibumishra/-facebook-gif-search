import React, { useState } from 'react';
import { AiOutlineGif } from 'react-icons/ai';
import { RiLiveLine } from 'react-icons/ri';
import GifComponent from './Gif';


function Index(props) {
    const [gif, setGif] = useState(false);
    const [gifs, setGifs] = useState('');

    const onSearchGif = () => {
        setGif(!gif)
    }

    return (
        <div className="mainDiv">
            <div className="title">
                <a href="#">
                    <i className="fa fa-pencil" aria-hidden="true" />
                    Create a Post
                </a>
                <a href="#">
                    <i className="fa fa-file-image-o" aria-hidden="true" />
                    Photo/Video Album
                </a>
                <a href='#'>
                    <i><RiLiveLine /></i>
                    Live Video
                </a>
                <p>
                    <i className="fa fa-times" aria-hidden="true" />
                </p>
            </div>
            <div id="body">
                <div className="imtcontainer">
                    <div className="img">
                        <img src="http://themarketmogul.com/wp-content/uploads/avatars/3321/cb72c2d6008ea815d74b7f27d1131a26-bpfull-180x180.jpg" />
                    </div>
                    <div className="textarea">
                        <textarea
                            onkeyup="InputAdjust(this)"
                            placeholder="what's on you mind?"
                            defaultValue=""
                        />
                        <video
                            autoPlay
                            loop
                            key={gifs}
                            src={gifs}
                            style={{ maxWidth: '200px', padding: '10px 5px' }}
                        />
                    </div>
                </div>
                <div className="line">
                    <a href="#">
                        <i className="fa fa-smile-o" />
                    </a>
                </div>
                <div>
                    <div className="icons">
                        <div className="photos">
                            <a href="#">
                                <i className="fa fa-picture-o" />
                                Photo/Video
                            </a>
                        </div>
                        <div className="feeling">
                            <a href="#">
                                <i className="fa fa-smile-o" />
                                Felling/Activity
                            </a>
                        </div>
                        <div className="more">
                            <a href="">
                                <span />
                                <span />
                                <span />
                            </a>
                        </div>
                        <div className="checkin">
                            <a href="#">
                                <i
                                    style={{ color: "#f42a67" }}
                                    className="fa fa-map-marker"
                                    aria-hidden="true"
                                />
                                Check in
                            </a>
                        </div>
                        <div className="tagfriend">
                            <a href="#">
                                <i
                                    style={{ color: "#90c0d5" }}
                                    className="fa fa-user-plus"
                                    aria-hidden="true"
                                />
                                Tag Friend
                            </a>
                        </div>
                        <div className="live">
                            <a href="#">
                                <i
                                    style={{ color: "#fa3e3e" }}
                                    className="fa fa-video-camera"
                                    aria-hidden="true"
                                />
                                Live Video
                            </a>
                        </div>
                        <div className="gif">
                            <a onClick={onSearchGif}>
                                <i style={{
                                    background: '#878791',
                                    borderRadius: '24%',
                                    color: '#fff',
                                    fontSize: '25px',
                                    padding: '5px'
                                }}><AiOutlineGif /></i>
                                <span>Gif</span>
                            </a>
                            {gif ? <GifComponent setGifs={setGifs} /> : ""}
                        </div>
                        <div className="footer">
                            <a href="#">
                                <i className="fa fa-Locks" aria-hidden="true" />
                                Only Me
                                <i className="fa fa-caret-down" />
                            </a>
                            <a href="">Post</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;
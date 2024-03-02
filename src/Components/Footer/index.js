import React from "react";
import './style.css'
const Footer = () => {
    return(
        <React.Fragment>
            <div>
                <aside className="aside">
                    <div className="container-md py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="feedback">Send Your Feedback</h3>
                            </div>
                            <div className="col-md-6">
                                <form action="#" method="get">
                                    <label for="email" className="form-label">Email</label>
                                    <input id="email" type="email" name="email" value={null} placeholder="email..." className="form-control fw-bold"/>
                                    <br/>
                                    <textarea id="Feedback" cols={66} rows={8} placeholder="Feedback" className="form-control fw-bold"/>
                                    <br/>
                                    <button className="btn btn-dark fw-bold" name="" value="">Send Feedback</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </React.Fragment>
    )
}
export default Footer;
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Upnext(props){
const navigate = useNavigate();

return(
<section className="upnext">
<div className="container">
<div className="row">
<div className="col-12">

<div className="b1">
    <div className="b2">
        <p>Up Next</p>
        <h2>{props.data[0].text}</h2>
    </div>
    <div className="b2">
        <button className="btn4" onClick={() => navigate(props.data[0].link)}><i className="fa fa-arrow-right"></i></button>
    </div>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
);
}
export default Upnext;
import React from 'react';


function Breadcrumbs(props) {
    return (
        <>
             <div className="page-title-box">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="page-title">
              <h4>{props.headingTop}</h4>
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item"><a href="javascript: void(0);">{props.heading}</a></li>
                <li className="breadcrumb-item active">{props.tittle}</li>
              </ol>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="float-end d-none d-sm-block"></div>
          </div>
        </div>
      </div>
    </div>

        </>
    );
}

export default Breadcrumbs;
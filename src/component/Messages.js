import React,{useState} from 'react';


function Header() {
	
	return (
		<>
 <div className="container-fluid">
                <div className="page-content-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">

                                    <h4 className="header-title">Messages</h4>

                                    <div id="datatable-buttons_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6">
                                                <div className="dt-buttons btn-group flex-wrap">
                                                    <button className="btn btn-secondary buttons-copy buttons-html5" type="button">
                                                        <span>Copy</span></button> <button className="btn btn-secondary buttons-excel buttons-html5" type="button">
                                                        <span>Excel</span></button> <button className="btn btn-secondary buttons-pdf buttons-html5" type="button">
                                                        <span>PDF</span></button> <div className="btn-group">
                                                        <button className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" >
                                                            <span>Column visibility</span></button></div> </div></div>
                                            <div className="col-sm-12 col-md-6"><div id="datatable-buttons_filter" className="dataTables_filter">
                                                <label>Search:
                                                    <input type="search" className="form-control form-control-sm" placeholder="" />
                                                </label>
                                            </div></div></div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline collapsed" >
                                                    <thead>
                                                        <tr>
                                                        <th className="sorting_asc">NO.</th>
                                                        <th className="sorting">STATUS</th>
                                                        <th className="sorting">DATE</th>
                                                        <th className="sorting">TIME</th>
                                                        <th className="sorting">CATEGORY</th>
                                                        <th className="sorting">SENDER'S NAME</th>
                                                        <th className="sorting">SENDER'S SOLO RATING</th>
                                                        <th className="sorting">SENDER'S TOURN RATING</th>
                                                        <th className="sorting">REPORT AGAINST</th>
                                                        </tr>
                                                    </thead>

                                                    <tbody>


                                                        <tr className="odd">
                                                            <td className="sorting_1 dtr-control">1.</td>
                                                            <td>Read</td>
                                                            <td>22/10/2022</td>
                                                            <td>10:00</td>
                                                            <td>Support</td>
                                                            <td>Avinash</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                            <td>-</td>
                                                         
                                                          
                                                        </tr></tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-5">
                                                <div className="dataTables_info" id="datatable-buttons_info">
                                                    Showing 1 to 1 of 1 entries</div>
                                            </div>
                                            <div className="col-sm-12 col-md-7">
                                                <div className="dataTables_paginate paging_simple_numbers" id="datatable-buttons_paginate">
                                                    <ul className="pagination">
                                                        <li className="paginate_button page-item previous disabled" id="datatable-buttons_previous">
                                                            <a href="#" aria-controls="datatable-buttons" className="page-link">
                                                                Previous</a></li><li className="paginate_button page-item active">
                                                            <a href="#" aria-controls="datatable-buttons" className="page-link">1</a></li>
                                                        <li className="paginate_button page-item next disabled" id="datatable-buttons_next">
                                                            <a href="#" aria-controls="datatable-buttons" className="page-link">Next</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
}

export default Header;
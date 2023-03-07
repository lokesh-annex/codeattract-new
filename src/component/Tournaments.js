import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

function Tournaments() {

    return (
        <>
            <div id="layout-wrapper">
                <Header />
                <div className="main-content">
                    <div className="page-content">
                        <Breadcrumbs headingTop="TOURNAMENT DB" heading="Admin" tittle="Tournament DB" />
                        <div className="container-fluid">
                            <div className="page-content-wrapper">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <h4 className="header-title">Live and Past Tournaments</h4>

                                                <div id="datatable-buttons_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="dt-buttons btn-group flex-wrap">
                                                                <button className="btn btn-secondary buttons-copy buttons-html5" type="button">
                                                                    <span>Copy</span></button>
                                                                <button className="btn btn-secondary buttons-excel buttons-html5" type="button">
                                                                    <span>Excel</span></button>
                                                                <button className="btn btn-secondary buttons-pdf buttons-html5" type="button">
                                                                    <span>PDF</span>
                                                                </button> <div className="btn-group">
                                                                    <button className="btn btn-secondary buttons-collection dropdown-toggle buttons-colvis" >
                                                                        <span>Column visibility</span></button></div> </div></div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div id="datatable-buttons_filter" className="dataTables_filter">
                                                                <label>Search:
                                                                    <input type="search" className="form-control form-control-sm" placeholder="" />
                                                                </label>
                                                            </div></div></div>
                                                    <div className="row">
                                                        <div className="col-sm-12">
                                                            <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline collapsed" >
                                                                <thead>
                                                                    <tr role="row">
                                                                        <th className="sorting_asc">STATUS</th>
                                                                        <th className="sorting">ID</th>
                                                                        <th className="sorting">RATING GROUP</th>
                                                                        <th className="sorting">ENTRY FEE</th>
                                                                        <th className="sorting">MAX PLAYERS</th>
                                                                        <th className="sorting">CURRENT PLAYERS</th>
                                                                        <th className="sorting">START DATE</th>
                                                                        <th className="sorting">START TIME</th>
                                                                        <th className="sorting">TOTAL REVENUE</th>
                                                                    </tr>
                                                                </thead>

                                                                <tbody>


                                                                    <tr className="odd">
                                                                        <td className="sorting_1 dtr-control">LIVE</td>
                                                                        <td>ABC123</td>
                                                                        <td>2500+</td>

                                                                        <td>$1000</td>
                                                                        <td>32</td>
                                                                        <td>32</td>
                                                                        <td>30/11/2022</td>
                                                                        <td>20:00</td>
                                                                        <td>$32000</td>

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
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tournaments;
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';

function Uploads() {

    return (
        <>
            <div id="layout-wrapper">
                <Header />
                <div className="main-content">
                    <div className="page-content">
                        <Breadcrumbs headingTop="UPLOADS" heading="Admin" tittle="Inventory" />
                        <div className="container-fluid">
                            <div className="page-content-wrapper">
                                <div className="row">
                                    <div className="col-12 mb-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="client">Category:</label>
                                                            <select name="client" id="client" className="form-control select2 w-100 select2-hidden-accessible" data-placeholder="Choose Client..." tabindex="-1" aria-hidden="true" data-select2-id="client">
                                                                <option value="" data-select2-id="12">Select</option>
                                                                <option value="1">In-game Items</option>
                                                                <option value="2">Out-game Items</option>
                                                                <option value="3">Diet Plans</option>
                                                                <option value="3">Articles</option>
                                                                <option value="3">Videos</option>
                                                                <option value="3">Tips</option>
                                                                <option value="3">Puzzles</option>
                                                                <option value="3">Announcement</option>
                                                            </select>

                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Product Name</label>
                                                            <input type="text" name="name" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Product SKU</label>
                                                            <input type="text" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Product Image</label>
                                                            <input type="file" name="old_other_img1" className="refresh-img2" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Product Document</label>
                                                            <input type="file" name="old_other_img1" className="refresh-img2" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Upload Text</label>
                                                            <input type="text" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Upload Url</label>
                                                            <input type="url" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Sell Price</label>
                                                            <input type="text" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Commission</label>
                                                            <input type="text" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="">Discount</label>
                                                            <input type="text" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-6 col-md-6 col-12 mb-3">
                                                            <label for="">Product Description</label>
                                                            <input type="text" name="sku" value="" required="required" className="form-control" />
                                                        </div>
                                                        <div className="form-group col-lg-3 col-md-4 col-12 mb-3">
                                                            <label for="button"></label>
                                                            <input type="submit" value="Save" className="form-control btn btn-success mt-2" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <h4 className="header-title">Upload Inventory</h4>

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
                                                                        <th className="sorting_asc">PRODUCT NAME</th>
                                                                        <th className="sorting">PRODUCT NUMBER</th>
                                                                        <th className="sorting">CATEGORY</th>
                                                                        <th className="sorting">THUMBNAIL</th>
                                                                        <th className="sorting">AMOUNT SOLD</th>
                                                                        <th className="sorting">REVENUE</th>
                                                                        <th className="sorting">PROFIT</th>
                                                                        <th className="sorting">ACTION</th>

                                                                    </tr>
                                                                </thead>

                                                                <tbody>


                                                                    <tr className="odd">
                                                                        <td className="sorting_1 dtr-control">Character</td>
                                                                        <td>P123</td>
                                                                        <td>In-game Items</td>

                                                                        <td>N/A</td>
                                                                        <td>10</td>
                                                                        <td>1000</td>
                                                                        <td>1000</td>
                                                                        <td>
                                                                            <div className="btn-group" role="group">
                                                                                <button id="btnGroupVerticalDrop1" type="button" className="btn btn-light dropdown-toggle">
                                                                                    Action <i className="mdi mdi-chevron-down"></i>
                                                                                </button>
                                                                                <div className="dropdown-menu">
                                                                                    <a className="dropdown-item" href="#">Edit</a>
                                                                                    <a className="dropdown-item" href="#">Delete</a>
                                                                                    <a className="dropdown-item" href="#">Launch</a>
                                                                                    <a className="dropdown-item" href="#">Remove</a>
                                                                                </div>
                                                                            </div>
                                                                        </td>

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

export default Uploads;
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
function Dashboard() {
    return (
        <>
            <div id="layout-wrapper">
                <Header />
                <div className="main-content">
                    <div className="page-content">
                        <Breadcrumbs headingTop="Dashboard" heading="Admin"  tittle="Dashboard"/>
                        <div class="container-fluid">
                            <div class="page-content-wrapper">
                                <div class="row">
                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-body" >
                                                <h4 class="header-title mb-4">Chart 1</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-body" >
                                                <h4 class="header-title mb-4">Chart 1</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="header-title mb-4">Chart 1</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-body" >
                                                <h4 class="header-title mb-4">Chart 1</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-body" >
                                                <h4 class="header-title mb-4">Chart 1</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-xl-4">
                                        <div class="card">
                                            <div class="card-body">
                                                <h4 class="header-title mb-4">Chart 1</h4>
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

export default Dashboard;
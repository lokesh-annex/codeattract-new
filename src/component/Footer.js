import React from 'react';


function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <script>
                                document.write(new Date().getFullYear());
                            </script>2023
                            © Chess.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">Crafted with <i className="mdi mdi-heart text-danger"></i> by Poize Games</div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;
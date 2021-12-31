import React from 'react'

const PaginationPage = () => {
    return (
        <div className="body-bot align-items-center">
            <nav aria-label="Page navigation example ">
                <ul className="pagination ">
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </Link>
                    </li>
                    <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default PaginationPage

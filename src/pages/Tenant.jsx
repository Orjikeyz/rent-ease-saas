
import { useState } from 'react'
import "../assets/tenant.css"
import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'
import AddTenant from '../components/AddTenant'
import useModal from '../hooks/useModal' //hooks


const Tenant = () => {
    const { modalPanel: addTenantPanel, modalOverviewStatus: tenantModalOverviewStatus, toggleModal: addTenantBtn} = useModal()

    // Tenant data
    const [tenants, setTenants] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john@gmail.com',
            property: 'Green Estate',
            unit: 'Block A - 02',
            status: 'Active',
            uniqueId: 'TEN-001'
        },
        {
            id: 2,
            name: 'Sarah Johnson',
            email: 'sarah@gmail.com',
            property: 'Sunrise Apartments',
            unit: 'Flat B - 04',
            status: 'Pending',
            uniqueId: 'TEN-002'
        },
        {
            id: 3,
            name: 'Michael Smith',
            email: 'michael@gmail.com',
            property: 'Green Estate',
            unit: 'Block C - 01',
            status: 'Active',
            uniqueId: 'TEN-003'
        },
        {
            id: 4,
            name: 'Emily Brown',
            email: 'emily@gmail.com',
            property: 'Royal Gardens',
            unit: 'Flat A - 05',
            status: 'Pending',
            uniqueId: 'TEN-004'
        }
    ])

    // Search and filter states
    const [search, setSearch] = useState('')
    const [statusFilter, setStatusFilter] = useState('All')
    const [sortConfig, setSortConfig] = useState({
        key: 'name',
        direction: 'asc'
    })

    // Pagination states
    const [currentPage, setCurrentPage] = useState(1)
    const [tenantsPerPage] = useState(5)

    // Filter tenants
    const filteredTenants = tenants
        .filter(tenant => {
            const searchValue = search.toLowerCase()

            return (
                tenant.name.toLowerCase().includes(searchValue) ||
                tenant.email.toLowerCase().includes(searchValue) ||
                tenant.property.toLowerCase().includes(searchValue) ||
                tenant.unit.toLowerCase().includes(searchValue) ||
                tenant.uniqueId.toLowerCase().includes(searchValue)
            )
        })
        .filter(tenant => {
            return statusFilter === 'All' || tenant.status === statusFilter
        })
        .sort((a, b) => {
            const valueA = a[sortConfig.key].toLowerCase()
            const valueB = b[sortConfig.key].toLowerCase()

            return sortConfig.direction === 'asc'
                ? valueA.localeCompare(valueB)
                : valueB.localeCompare(valueA)
        })

    // Pagination calculations
    const totalPages = Math.ceil(filteredTenants.length / tenantsPerPage)

    const indexOfLastTenant = currentPage * tenantsPerPage
    const indexOfFirstTenant = indexOfLastTenant - tenantsPerPage

    const currentTenants = filteredTenants.slice(
        indexOfFirstTenant,
        indexOfLastTenant
    )

    // Change page
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    // Sort table
    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc'
                ? 'desc'
                : 'asc'
        }))
    }

    // Tenant actions
    const handleView = (tenant) => {
        console.log('View tenant:', tenant)
    }

    const handleEdit = (tenant) => {
        console.log('Edit tenant:', tenant)
    }

    const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this tenant?')

        if (confirmDelete) {
            setTenants(prev => prev.filter(tenant => tenant.id !== id))

            // Return to previous page if current page becomes empty
            if (currentTenants.length === 1 && currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
        }
    }

    return (
        <>
            {<NavBar />}
            {<AddTenant onTenantModal={addTenantPanel} closeTenantPanel={addTenantBtn} />}

            <div className='fixed-width'>
                <div className={`modal-overview ${tenantModalOverviewStatus}`} onClick={addTenantBtn}></div>

                {<PageIntro
                    title='RESIDENT DIRECTORY'
                    heading='Tenants'
                    description='Unique IDs, contact details, and activation status in one place. Create tenant'
                    button='Create Tenant'
                    onAddProperty={addTenantBtn}
                />}

                <div className="tenant-container">

                    {/* Tenant table controls */}
                    <div className="tenant-table-controls">

                        <div className="tenant-search">
                            <input
                                type="text"
                                placeholder="Search tenant, property, unit or ID..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                    setCurrentPage(1)
                                }}
                            />
                        </div>

                        <div className="tenant-filter">
                            <select
                                value={statusFilter}
                                onChange={(e) => {
                                    setStatusFilter(e.target.value)
                                    setCurrentPage(1)
                                }}
                            >
                                <option value="All">All Status</option>
                                <option value="Active">Active</option>
                                <option value="Pending">Pending</option>
                            </select>
                        </div>

                    </div>

                    {/* Tenant table */}
                    <div className="tenant-table-wrapper">
                        <table className="tenant-table">

                            <thead>
                                <tr>
                                    <th onClick={() => handleSort('name')}>
                                        Tenant ↕
                                    </th>

                                    <th onClick={() => handleSort('property')}>
                                        Property / Unit ↕
                                    </th>

                                    <th onClick={() => handleSort('status')}>
                                        Activation ↕
                                    </th>

                                    <th onClick={() => handleSort('uniqueId')}>
                                        Unique ID ↕
                                    </th>

                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {currentTenants.length > 0 ? (
                                    currentTenants.map(tenant => (
                                        <tr key={tenant.id}>

                                            <td>
                                                <div className="tenant-info">
                                                    <div className="tenant-avatar" style={{textTransform: "uppercase", fontWeight: "500"}}>
                                                        {tenant.name.split(' ').map(name => name.charAt(0)).join('')}
                                                    </div>

                                                    <div>
                                                        <h4>{tenant.name}</h4>
                                                        <span>{tenant.email}</span>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="tenant-property">
                                                    <strong>{tenant.property}</strong>
                                                    <span>{tenant.unit}</span>
                                                </div>
                                            </td>

                                            <td>
                                                <span className={`tenant-status ${tenant.status.toLowerCase()}`}>
                                                    {tenant.status}
                                                </span>
                                            </td>

                                            <td>
                                                {tenant.uniqueId}
                                            </td>

                                            <td>
                                                <div className="tenant-actions">
                                                    <button onClick={() => handleView(tenant)}>
                                                        View
                                                    </button>

                                                    <button onClick={() => handleEdit(tenant)}>
                                                        Edit
                                                    </button>

                                                    <button onClick={() => handleDelete(tenant.id)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">
                                            No tenants found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>

                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="tenant-table-footer">

                        <div className="tenant-count">
                            Showing {filteredTenants.length === 0 ? 0 : indexOfFirstTenant + 1} - {Math.min(indexOfLastTenant, filteredTenants.length)} of {filteredTenants.length} tenants
                        </div>

                        <div className="tenant-pagination">

                            <button
                                className="pagination-btn"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                Previous
                            </button>

                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={`pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            <button
                                className="pagination-btn"
                                disabled={currentPage === totalPages || totalPages === 0}
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next
                            </button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Tenant

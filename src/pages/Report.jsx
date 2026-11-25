
import { useState } from 'react'
import "../assets/report.css"
import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'

const Report = () => {

    const [period, setPeriod] = useState('This Month')

    // DEMO DATA - Replace with API data later
    const summary = [
        {
            title: 'Total Properties',
            value: '24',
            description: 'Properties registered',
            icon: '⌂'
        },
        {
            title: 'Total Tenants',
            value: '186',
            description: 'Across all properties',
            icon: '♙'
        },
        {
            title: 'Monthly Revenue',
            value: '₦8.45M',
            description: 'Rent collected this month',
            icon: '₦',
            revenue: true
        },
        {
            title: 'Outstanding Payments',
            value: '₦1.25M',
            description: 'Payments yet to be received',
            icon: '◷',
            revenue: true
        }
    ]

    const occupancy = {
        occupied: 186,
        vacant: 34,
        total: 220
    }

    const occupancyRate = Math.round(
        (occupancy.occupied / occupancy.total) * 100
    )

    const tenantActivation = {
        active: 156,
        pending: 22,
        inactive: 8
    }

    const activationTotal =
        tenantActivation.active +
        tenantActivation.pending +
        tenantActivation.inactive

    const activationRate = Math.round(
        (tenantActivation.active / activationTotal) * 100
    )

    const properties = [
        {
            name: 'Greenfield Estate',
            location: 'Lekki, Lagos',
            units: 65,
            occupied: 58,
            revenue: '₦2.8M',
            status: 'Good'
        },
        {
            name: 'Royal Gardens',
            location: 'Ikeja, Lagos',
            units: 48,
            occupied: 42,
            revenue: '₦2.1M',
            status: 'Good'
        },
        {
            name: 'Sunrise Apartments',
            location: 'Ajah, Lagos',
            units: 52,
            occupied: 39,
            revenue: '₦1.6M',
            status: 'Average'
        },
        {
            name: 'City View Estate',
            location: 'Yaba, Lagos',
            units: 55,
            occupied: 47,
            revenue: '₦1.95M',
            status: 'Good'
        }
    ]

    const statistics = [
        {
            title: 'New Tenants',
            description: 'Recently registered',
            value: '18'
        },
        {
            title: 'Pending Activation',
            description: 'Awaiting account activation',
            value: '22'
        },
        {
            title: 'Expired Agreements',
            description: 'Tenancy agreements expired',
            value: '06'
        },
        {
            title: 'Vacant Apartments',
            description: 'Available units for rent',
            value: '34'
        },
        {
            title: 'Overdue Payments',
            description: 'Tenants with outstanding rent',
            value: '15'
        }
    ]

    const activities = [
        {
            title: 'New tenant registered',
            description: 'John Michael registered at Greenfield Estate.',
            time: '10 minutes ago',
            icon: '♙'
        },
        {
            title: 'Rent payment received',
            description: '₦250,000 payment received from a tenant.',
            time: '35 minutes ago',
            icon: '₦'
        },
        {
            title: 'Tenancy agreement expired',
            description: 'A tenancy agreement requires renewal.',
            time: '2 hours ago',
            icon: '◷',
            pending: true
        },
        {
            title: 'New property added',
            description: 'A new property was added to the system.',
            time: 'Yesterday',
            icon: '⌂'
        }
    ]

    const handleExport = () => {
        const rows = [
            ['Property', 'Location', 'Units', 'Occupied', 'Revenue'],
            ...properties.map(property => [
                property.name,
                property.location,
                property.units,
                property.occupied,
                property.revenue
            ])
        ]

        const csv = rows
            .map(row => row.map(value =>
                `"${String(value).replace(/"/g, '""')}"`
            ).join(','))
            .join('\n')

        const blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        })

        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')

        link.href = url
        link.download = 'property-report.csv'
        link.click()

        URL.revokeObjectURL(url)
    }

    return (
        <>
            <NavBar />

            <div className="fixed-width">

                <PageIntro
                    title="Reports & Analytics"
                    heading="Property performance overview"
                    description="Monitor occupancy, tenant activities, revenue and overall property performance."
                    button="Export Report"
                    onAddProperty={handleExport}
                />

                <div className="report-container">

                    {/* REPORT HEADER */}

                    <div className="report-heading">

                        <div>
                            <h3>Overview</h3>
                            <p>
                                Here's what's happening across your properties.
                            </p>
                        </div>

                        <div className="report-date">
                            <span>Reporting period</span>

                            <select
                                value={period}
                                onChange={(e) => setPeriod(e.target.value)}
                            >
                                <option>This Month</option>
                                <option>This Week</option>
                                <option>Today</option>
                                <option>This Year</option>
                            </select>
                        </div>

                    </div>


                    {/* SUMMARY CARDS */}

                    <div className="report-summary">

                        {summary.map((item, index) => (
                            <div className="report-card" key={index}>

                                <div className="report-card-top">
                                    <span>{item.title}</span>

                                    <div className="report-icon">
                                        {item.icon}
                                    </div>
                                </div>

                                <h2 className={item.revenue ? 'revenue-value' : ''}>
                                    {item.value}
                                </h2>

                                <p>{item.description}</p>

                            </div>
                        ))}

                    </div>


                    {/* ANALYSIS SECTION */}

                    <div className="report-analysis">

                        {/* OCCUPANCY */}

                        <div className="report-panel">

                            <div className="report-panel-heading">
                                <div>
                                    <h3>Occupancy Analysis</h3>
                                    <p>Property occupancy overview</p>
                                </div>
                            </div>

                            <div className="occupancy-number">
                                <h2>{occupancyRate}%</h2>
                                <span>Overall occupancy rate</span>
                            </div>

                            <div className="occupancy-bar">
                                <div
                                    className="occupancy-filled"
                                    style={{ width: `${occupancyRate}%` }}
                                />
                            </div>

                            <div className="occupancy-details">

                                <div>
                                    <span className="legend-dot occupied-dot" />
                                    Occupied
                                    <strong>{occupancy.occupied}</strong>
                                </div>

                                <div>
                                    <span className="legend-dot vacant-dot" />
                                    Vacant
                                    <strong>{occupancy.vacant}</strong>
                                </div>

                                <div>
                                    <span className="legend-dot total-dot" />
                                    Total
                                    <strong>{occupancy.total}</strong>
                                </div>

                            </div>

                        </div>


                        {/* TENANT ACTIVATION */}

                        <div className="report-panel">

                            <div className="report-panel-heading">
                                <div>
                                    <h3>Tenant Activation</h3>
                                    <p>Account activation overview</p>
                                </div>
                            </div>

                            <div className="activation-overview">

                                <div className="activation-chart">

                                    <div
                                        className="activation-circle"
                                        style={{
                                            background: `conic-gradient(
                                                var(--active-color) 0% ${activationRate}%,
                                                var(--pending-color) ${activationRate}% 100%
                                            )`
                                        }}
                                    >

                                        <div className="activation-circle-inner">
                                            <h2>{activationRate}%</h2>
                                            <span>Active</span>
                                        </div>

                                    </div>

                                </div>

                                <div className="activation-details">

                                    <div>
                                        <span className="legend-dot occupied-dot" />

                                        <div>
                                            <strong>
                                                {tenantActivation.active} Active
                                            </strong>
                                            <p>Activated accounts</p>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="legend-dot vacant-dot" />

                                        <div>
                                            <strong>
                                                {tenantActivation.pending} Pending
                                            </strong>
                                            <p>Awaiting activation</p>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="legend-dot total-dot" />

                                        <div>
                                            <strong>
                                                {tenantActivation.inactive} Inactive
                                            </strong>
                                            <p>Inactive accounts</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* PROPERTY PERFORMANCE */}

                    <div className="report-panel property-performance">

                        <div className="report-panel-heading">

                            <div>
                                <h3>Property Performance</h3>
                                <p>Compare occupancy and revenue across properties.</p>
                            </div>

                        </div>

                        <div className="report-table-wrapper">

                            <table className="report-table">

                                <thead>
                                    <tr>
                                        <th>PROPERTY</th>
                                        <th>TOTAL UNITS</th>
                                        <th>OCCUPIED</th>
                                        <th>OCCUPANCY</th>
                                        <th>REVENUE</th>
                                        <th>PERFORMANCE</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {properties.map((property, index) => {

                                        const rate = Math.round(
                                            (property.occupied / property.units) * 100
                                        )

                                        return (
                                            <tr key={index}>

                                                <td>
                                                    <strong>{property.name}</strong>
                                                    <br />
                                                    <small>{property.location}</small>
                                                </td>

                                                <td>{property.units}</td>

                                                <td>{property.occupied}</td>

                                                <td>
                                                    <div className="property-occupancy">

                                                        <div className="property-progress">
                                                            <div style={{ width: `${rate}%` }} />
                                                        </div>

                                                        <span>{rate}%</span>

                                                    </div>
                                                </td>

                                                <td>
                                                    <strong>{property.revenue}</strong>
                                                </td>

                                                <td>
                                                    <span className={`tenant-status ${
                                                        property.status === 'Good'
                                                            ? 'active'
                                                            : 'pending'
                                                    }`}>
                                                        {property.status}
                                                    </span>
                                                </td>

                                            </tr>
                                        )
                                    })}

                                </tbody>

                            </table>

                        </div>

                    </div>


                    {/* BOTTOM SECTION */}

                    <div className="report-bottom">


                        {/* TENANT STATISTICS */}

                        <div className="report-panel">

                            <div className="report-panel-heading">
                                <div>
                                    <h3>Tenant Statistics</h3>
                                    <p>Important tenant records and activities.</p>
                                </div>
                            </div>

                            <div className="tenant-statistics">

                                {statistics.map((item, index) => (
                                    <div className="tenant-stat-row" key={index}>

                                        <div>
                                            <strong>{item.value}</strong>
                                            <span>{item.title}</span>
                                            <span>{item.description}</span>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>


                        {/* RECENT ACTIVITIES */}

                        <div className="report-panel">

                            <div className="report-panel-heading">
                                <div>
                                    <h3>Recent Activities</h3>
                                    <p>Latest activities across your properties.</p>
                                </div>
                            </div>

                            <div className="activity-list">

                                {activities.map((activity, index) => (
                                    <div className="activity-item" key={index}>

                                        <div className={`activity-icon ${
                                            activity.pending ? 'pending' : ''
                                        }`}>
                                            {activity.icon}
                                        </div>

                                        <div className="activity-content">

                                            <strong>{activity.title}</strong>

                                            <p>{activity.description}</p>

                                            <span>{activity.time}</span>

                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Report

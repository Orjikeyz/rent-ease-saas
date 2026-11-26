
import { useState } from 'react'
import "../assets/settings.css"

import NavBar from '../components/NavBar'
import PageIntro from '../components/PageIntro'

const Settings = () => {
    const [activeTab, setActiveTab] = useState('General')

    const [general, setGeneral] = useState({
        systemName: 'Property Manager',
        email: 'admin@example.com',
        phone: '+234 800 000 0000',
        currency: 'NGN',
        timezone: 'Africa/Lagos'
    })

    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    const updateGeneral = (field, value) => {
        setGeneral(prev => ({ ...prev, [field]: value }))
    }

    const updatePassword = (field, value) => {
        setPassword(prev => ({ ...prev, [field]: value }))
    }

    const handleSaveGeneral = async (e) => {
        e.preventDefault()

        // Connect your general settings API here.
        console.log(general)
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()

        if (password.newPassword !== password.confirmPassword) {
            alert('Passwords do not match.')
            return
        }

        if (password.newPassword.length < 8) {
            alert('Password must be at least 8 characters.')
            return
        }

        // Connect your password change API here.
        console.log('Change password request')

    }

    const menuItems = [
        {
            title: 'General',
            description: 'System preferences',
            icon: '⚙'
        },
        {
            title: 'Security',
            description: 'Password and account security',
            icon: '◈'
        }
    ]

    return (
        <>
            <NavBar />

            <div className="fixed-width">

                <PageIntro
                    title="System Configuration"
                    heading="Settings"
                    description="Manage your system preferences and account security."
                />

                <div className="settings-container">

                    <div className="settings-layout">

                        {/* SIDEBAR */}
                        <aside className="settings-sidebar">

                            <div className="settings-sidebar-heading">
                                <h3>Preferences</h3>
                                <p>Manage your settings</p>
                            </div>

                            <div className="settings-menu">
                                {menuItems.map(item => (
                                    <button
                                        type="button"
                                        key={item.title}
                                        className={`settings-menu-item ${
                                            activeTab === item.title ? 'active' : ''
                                        }`}
                                        onClick={() => setActiveTab(item.title)}
                                    >
                                        <span className="settings-menu-icon">
                                            {item.icon}
                                        </span>

                                        <div>
                                            <strong>{item.title}</strong>
                                            <span>{item.description}</span>
                                        </div>

                                        <span className="settings-menu-arrow">›</span>
                                    </button>
                                ))}
                            </div>

                        </aside>


                        {/* CONTENT */}
                        <main className="settings-content">

                            <div className="settings-content-body">

                                {activeTab === 'General' && (
                                    <>
                                        <div className="settings-section-heading">
                                            <h3>General Settings</h3>
                                            <p>
                                                Manage your system information and regional preferences.
                                            </p>
                                        </div>

                                        <form onSubmit={handleSaveGeneral}>

                                            <div className="settings-form">

                                                <div className="settings-field">
                                                    <label>System Name</label>
                                                    <input
                                                        value={general.systemName}
                                                        onChange={e => updateGeneral('systemName', e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="settings-field">
                                                    <label>Administrator Email</label>
                                                    <input
                                                        type="email"
                                                        value={general.email}
                                                        onChange={e => updateGeneral('email', e.target.value)}
                                                        required
                                                    />
                                                </div>

                                                <div className="settings-field">
                                                    <label>Contact Phone</label>
                                                    <input
                                                        type="tel"
                                                        value={general.phone}
                                                        onChange={e => updateGeneral('phone', e.target.value)}
                                                    />
                                                </div>

                                                <div className="settings-field">
                                                    <label>Default Currency</label>
                                                    <select
                                                        value={general.currency}
                                                        onChange={e => updateGeneral('currency', e.target.value)}
                                                    >
                                                        <option value="NGN">Nigerian Naira (₦)</option>
                                                        <option value="USD">US Dollar ($)</option>
                                                        <option value="GBP">British Pound (£)</option>
                                                        <option value="EUR">Euro (€)</option>
                                                    </select>
                                                </div>

                                                <div className="settings-field">
                                                    <label>Timezone</label>
                                                    <select
                                                        value={general.timezone}
                                                        onChange={e => updateGeneral('timezone', e.target.value)}
                                                    >
                                                        <option value="Africa/Lagos">Africa/Lagos</option>
                                                        <option value="Europe/London">Europe/London</option>
                                                        <option value="Europe/Amsterdam">Europe/Amsterdam</option>
                                                        <option value="America/New_York">America/New_York</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="settings-form-footer">
                                                <button type="submit">
                                                    Save Changes
                                                </button>
                                            </div>

                                        </form>
                                    </>
                                )}

                                {activeTab === 'Security' && (
                                    <>
                                        <div className="settings-section-heading">
                                            <h3>Change Password</h3>
                                            <p>
                                                Update your administrator password to keep your account secure.
                                            </p>
                                        </div>

                                        <form onSubmit={handleChangePassword}>

                                            <div className="settings-password-form">

                                                <div className="settings-field">
                                                    <label>Current Password</label>
                                                    <input
                                                        type="password"
                                                        value={password.currentPassword}
                                                        onChange={e => updatePassword('currentPassword', e.target.value)}
                                                        placeholder="Enter current password"
                                                        autoComplete="current-password"
                                                        required
                                                    />
                                                </div>

                                                <div className="settings-field">
                                                    <label>New Password</label>
                                                    <input
                                                        type="password"
                                                        value={password.newPassword}
                                                        onChange={e => updatePassword('newPassword', e.target.value)}
                                                        placeholder="Enter new password"
                                                        minLength={8}
                                                        autoComplete="new-password"
                                                        required
                                                    />
                                                </div>

                                                <div className="settings-field">
                                                    <label>Confirm New Password</label>
                                                    <input
                                                        type="password"
                                                        value={password.confirmPassword}
                                                        onChange={e => updatePassword('confirmPassword', e.target.value)}
                                                        placeholder="Confirm new password"
                                                        minLength={8}
                                                        autoComplete="new-password"
                                                        required
                                                    />
                                                </div>

                                            </div>

                                            <div className="settings-form-footer">
                                                <button type="submit">
                                                    Update Password
                                                </button>
                                            </div>

                                        </form>
                                    </>
                                )}

                            </div>

                        </main>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Settings

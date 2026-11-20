import { useState } from 'react'

const usePropertyModal = () => {
    const [showPropertyModal, setShowPropertyModal] = useState(false)

    const addPropertyPanel = showPropertyModal ? 'activeModalPanel' : ''
    const modalOverviewStatus = showPropertyModal ? 'activeModalOverview' : ''

    const addPropertyBtn = () => {
        setShowPropertyModal(prev => !prev)
    }

    return {
        addPropertyPanel,
        modalOverviewStatus,
        addPropertyBtn
    }
}

export default usePropertyModal
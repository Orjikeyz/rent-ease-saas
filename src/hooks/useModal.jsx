import { useState } from 'react'

const useModal = () => {
    const [showModal, setShowModal] = useState(false)

    const modalPanel = showModal ? 'activeModalPanel' : ''
    const modalOverviewStatus = showModal ? 'activeModalOverview' : ''

    const toggleModal = () => {
        setShowModal(prev => !prev)
    }

    return {
        modalPanel,
        modalOverviewStatus,
        toggleModal
    }
}

export default useModal